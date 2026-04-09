// API pro ukládání a čtení CRO reportů (Vercel Blob storage)
import { put, list } from '@vercel/blob'

export const runtime = 'nodejs'

// POST — uloží nový report
export async function POST(req) {
  try {
    const { url, analysis, mode, score, withClarity, seconds } = await req.json()
    if (!url || !analysis) {
      return new Response(JSON.stringify({ error: 'Chybí url nebo analysis' }), { status: 400 })
    }

    const hostname = url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
    const id = Date.now()
    const filename = `reports/${hostname}/${id}.json`

    const data = {
      id,
      url,
      hostname,
      analysis,
      mode: mode || 'full',
      score: score || null,
      withClarity: withClarity || false,
      seconds: seconds || null,
      date: new Date().toISOString(),
    }

    const blob = await put(filename, JSON.stringify(data), {
      access: 'public',
      contentType: 'application/json',
    })

    return new Response(JSON.stringify({ ok: true, id, blobUrl: blob.url }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    console.error('Report save error:', e.message)
    return new Response(JSON.stringify({ error: e.message }), { status: 500 })
  }
}

// GET — seznam reportů (volitelně ?hostname=eppi.cz)
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const hostname = searchParams.get('hostname')
    const prefix = hostname ? `reports/${hostname}/` : 'reports/'

    const { blobs } = await list({ prefix })

    // Načti obsah každého blobu (max 50 posledních)
    const sorted = blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)).slice(0, 50)

    const reports = await Promise.all(
      sorted.map(async (blob) => {
        try {
          const res = await fetch(blob.url)
          return await res.json()
        } catch {
          return null
        }
      })
    )

    return new Response(JSON.stringify(reports.filter(Boolean)), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    console.error('Report list error:', e.message)
    return new Response(JSON.stringify({ error: e.message }), { status: 500 })
  }
}
