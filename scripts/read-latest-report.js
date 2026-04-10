#!/usr/bin/env node
// Nacte posledni report z Vercel Blob storage pro dany hostname.
// Pouziti: node scripts/read-latest-report.js <hostname> [--full]
// Priklady:
//   node scripts/read-latest-report.js denatura.cz
//   node scripts/read-latest-report.js denatura.cz --full

import { list, get } from '@vercel/blob'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Nacti .env.local pokud existuje
try {
  const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
  for (const line of envFile.split('\n')) {
    const m = line.match(/^([A-Z_]+)="?([^"]*)"?$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2]
  }
} catch {}

const hostname = process.argv[2]
const full = process.argv.includes('--full')

if (!hostname) {
  console.error('Pouziti: node scripts/read-latest-report.js <hostname> [--full]')
  process.exit(1)
}

const cleanHostname = hostname.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')

try {
  const { blobs } = await list({ prefix: `reports/${cleanHostname}/` })
  if (blobs.length === 0) {
    console.error(`Zadne reporty pro ${cleanHostname}`)
    process.exit(1)
  }

  const sorted = blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))
  const latest = sorted[0]

  const blobData = await get(latest.url, { access: 'private' })
  if (!blobData || !blobData.stream) {
    console.error('Report se nepodarilo stahnout')
    process.exit(1)
  }

  const res = new Response(blobData.stream)
  const text = await res.text()
  const report = JSON.parse(text)

  console.log(`=== ${report.url} ===`)
  console.log(`Datum: ${report.date}`)
  console.log(`Trvani: ${report.seconds}s`)
  console.log(`Clarity detekovana: ${report.hasClarity ?? report.withClarity ?? '?'}`)
  console.log(`Screenshoty: ${report.screenshots?.length || 0}`)
  console.log(`Session ID: ${report.sessionId || 'N/A'}`)
  console.log(`\n--- ANALYZA ---\n`)

  if (full) {
    console.log(report.analysis)
  } else {
    // Zobraz jen prvnich 3000 znaku + napovedu
    const preview = report.analysis.slice(0, 3000)
    console.log(preview)
    if (report.analysis.length > 3000) {
      console.log(`\n... [zkraceno, pouzij --full pro cely text, celkova delka: ${report.analysis.length} znaku]`)
    }
  }
} catch (e) {
  console.error('Chyba:', e.message)
  process.exit(1)
}
