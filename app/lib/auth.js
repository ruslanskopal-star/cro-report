import { createHmac } from 'crypto'

const TOKEN_MAX_AGE = 24 * 60 * 60 * 1000 // 24h

export function createSessionToken() {
  const secret = (process.env.TOTP_SECRET || '').trim()
  const timestamp = Date.now().toString()
  const signature = createHmac('sha256', secret).update(timestamp).digest('hex')
  return timestamp + '.' + signature
}

export function verifySessionToken(token) {
  if (!token) return false
  const secret = (process.env.TOTP_SECRET || '').trim()
  if (!secret) return false

  const parts = token.split('.')
  if (parts.length !== 2) return false

  const [timestamp, signature] = parts
  const age = Date.now() - parseInt(timestamp)
  if (isNaN(age) || age > TOKEN_MAX_AGE || age < 0) return false

  const expected = createHmac('sha256', secret).update(timestamp).digest('hex')
  return signature === expected
}

// Rate limiter — in-memory, per IP
const attempts = new Map()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 min

export function checkRateLimit(ip) {
  const now = Date.now()
  const record = attempts.get(ip)

  if (!record || now - record.start > WINDOW_MS) {
    attempts.set(ip, { count: 1, start: now })
    return true
  }

  if (record.count >= MAX_ATTEMPTS) return false
  record.count++
  return true
}

// Cleanup stale entries every 10 min
setInterval(() => {
  const now = Date.now()
  for (const [ip, record] of attempts) {
    if (now - record.start > WINDOW_MS) attempts.delete(ip)
  }
}, 10 * 60 * 1000)
