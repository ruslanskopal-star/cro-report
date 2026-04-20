// Debug endpoint — detekce Vercel OIDC tokenu (env var NEBO x-vercel-oidc-token header)
import { requireSession } from '../../../lib/auth.js'
import { getVercelOidcToken } from '@vercel/functions/oidc'

export const runtime = 'nodejs'

export async function GET(req) {
  const session = await requireSession(req)
  if (!session.ok) {
    return new Response(JSON.stringify({ error: 'Neautorizovany pristup' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  let tokenSource = 'none'
  let tokenLength = 0
  try {
    const token = await getVercelOidcToken()
    if (token) {
      tokenSource = process.env.VERCEL_OIDC_TOKEN ? 'env' : 'header'
      tokenLength = token.length
    }
  } catch (e) {
    tokenSource = 'error:' + e.message
  }

  return new Response(JSON.stringify({
    hasEnvToken: !!process.env.VERCEL_OIDC_TOKEN,
    hasHeaderToken: !!req.headers.get('x-vercel-oidc-token'),
    tokenSource,
    tokenLength,
    hasSheetId: !!process.env.GOOGLE_SHEET_ID,
    env: process.env.VERCEL_ENV || 'unknown',
  }, null, 2), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
  })
}
