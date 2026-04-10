// API endpoint pro upload jednoho screenshotu do Blob storage
// Kazdy screenshot jde samostatnym requestem aby se obeslo 4.5MB body limit /api/analyze
import { put, del } from '@vercel/blob'
import { createHmac } from 'crypto'
import { verifySessionToken } from '../../lib/auth.js'

// Debug wrapper — rekne nam presne kde verify selhal
function debugVerify(token) {
  if (!token) return 'no-token'
  const secret = (process.env.TOTP_SECRET || '').trim()
  if (!secret) return 'no-secret'
  const parts = String(token).split('.')
  if (parts.length !== 2) return `bad-format-parts=${parts.length}`
  const [timestamp, signature] = parts
  const age = Date.now() - parseInt(timestamp)
  if (isNaN(age)) return 'nan-age'
  if (age < 0) return `negative-age=${age}`
  if (age > 24 * 60 * 60 * 1000) return `too-old=${Math.round(age/3600000)}h`
  const expected = createHmac('sha256', secret).update(timestamp).digest('hex')
  if (signature.length !== expected.length) return `siglen-mismatch got=${signature.length} exp=${expected.length}`
  if (signature !== expected) return 'signature-mismatch'
  return 'ok'
}

export const runtime = 'nodejs'
export const maxDuration = 30

const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024 // 5MB per screenshot

export async function POST(req) {
  try {
    const body = await req.json()
    const { authToken, sessionId, slotId, base64 } = body

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

    // DEBUG: presna priciina selhani verify
    const verifyResult = debugVerify(authToken)
    if (verifyResult !== 'ok') {
      console.warn(`[UPLOAD-SCREENSHOT] UNAUTHORIZED ip=${ip} reason=${verifyResult}`)
      return new Response(JSON.stringify({
        error: `Neautorizovany pristup (${verifyResult})`,
      }), { status: 401, headers: { 'Content-Type': 'application/json' } })
    }

    if (!sessionId || !slotId || !base64 || typeof base64 !== 'string') {
      return new Response(JSON.stringify({ error: 'Chybi data' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    if (!/^[a-zA-Z0-9]{8,64}$/.test(sessionId) || !/^[a-zA-Z0-9]{1,30}$/.test(slotId)) {
      return new Response(JSON.stringify({ error: 'Neplatne ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const buffer = Buffer.from(base64, 'base64')
    if (buffer.length > MAX_SCREENSHOT_BYTES) {
      return new Response(JSON.stringify({ error: 'Screenshot prilis velky (max 5MB)' }), { status: 413, headers: { 'Content-Type': 'application/json' } })
    }

    const filename = `screenshots/${sessionId}/${slotId}.jpg`
    await put(filename, buffer, { access: 'private', contentType: 'image/jpeg', allowOverwrite: true })

    console.log(`[UPLOAD-SCREENSHOT] OK ip=${ip} session=${sessionId} slot=${slotId} size=${buffer.length}`)
    return new Response(JSON.stringify({ ok: true, slotId }), { headers: { 'Content-Type': 'application/json' } })
  } catch (e) {
    console.error('[UPLOAD-SCREENSHOT] Error:', e.message, e.stack)
    return new Response(JSON.stringify({ error: 'Chyba pri nahravani: ' + (e.message || 'unknown') }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}

// DELETE — smaze screenshot (kdyz uzivatel odebere slot)
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url)
    const authToken = searchParams.get('token')
    const sessionId = searchParams.get('sessionId')
    const slotId = searchParams.get('slotId')

    if (!verifySessionToken(authToken)) {
      return new Response(JSON.stringify({ error: 'Neautorizovany pristup' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
    }
    if (!sessionId || !slotId || !/^[a-zA-Z0-9]{8,64}$/.test(sessionId) || !/^[a-zA-Z0-9]{1,30}$/.test(slotId)) {
      return new Response(JSON.stringify({ error: 'Neplatne ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    // Blob pathname → relativni cesta
    const filename = `screenshots/${sessionId}/${slotId}.jpg`
    try { await del(filename) } catch {}

    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } })
  } catch (e) {
    console.error('[UPLOAD-SCREENSHOT] Delete error:', e.message)
    return new Response(JSON.stringify({ error: 'Chyba pri mazani' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
