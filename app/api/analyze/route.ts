import Anthropic from '@anthropic-ai/sdk'
import { Resend } from 'resend'
import { NextRequest, Neonse } from 'next/server'
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: NextRequest) {
  const { clientName } = await req.json()
  if (!clientName) return NextResponse.json({ error: 'Chybí jméno klienta' }, { status: 400 })
  try {
    const message = await anthropic.messages.create({ model: 'claude-opus-4-5', max_tokens: 2000, messages: [{ role: 'user', content: `Jsi CRO expert. Klient: "${clientName}". Napiš 15 konkrétních doporučení pro zlepšení konverzí. Formát: Priorita | Oblast | Doporučení | Dopad` }] })
    const analysis = message.content[0].type === 'text' ? message.content[0].text : ''
    await resend.emails.send({ from: 'onboarding@resend.dev', to: 'ruslan.skopal@eshopbooster.cz', subject: `Clarity analýza — ${clientName}`, html: clientName}</h1><pre style="white-space:pre-wrap">${analysis}</pre>` })
    return NextResponse.json({ success: true })
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Chyba' }, { status: 500 })
  }
}
