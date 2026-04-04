'use client'
import { useState } from 'react'
export default function Home() {
  const [client, setClient] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const handleSubmit = async () => {
    if (!client.trim()) return
    setLoading(true); setStatus('')
    try {
      const res = await fetch('/api/analyze', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientName: client }) })
      const data = await res.json()
      setStatus(data.success ? '✅ Analýza odesláa ruslan.skopal@eshopbooster.cz' : '❌ ' + data.error)
    } catch { setStatus('❌ Chyba') }
    setLoading(false)
  }
  return (
    <main style={{ maxWidth:500, margin:'100px auto', fontly:'sans-serif', padding:'0 20px' }}>
      <h1>🔍 Clarity Reporter</h1>
      <p style={{ color:'#666' }}>Zadej jméno klienta a spustí se analýza</p>
      <input value={client} onChange={e=>setClient(e.targeue)} placeholder="např. Profi-DJ" onKeyDown={e=>e.key==='Enter'&&handleSubmit()} style={{ width:'100%', padding:12, fontSize:16, border:'2px solid #ddd', borderRadius:8, marginBottom:16, boxSizing:'border-box' }} />
      <button onClick={handleSubmit} disabled={loading} style={{ width:'100%', padding:14, fontSize:16, background:loading?'#999':'#0070f3', color:'#fff', border:'none', borderRadius:8, cursor:'pointer' }}>
        {loading ? '⏳ Analyzuji...' : '🚀 Spustit analýzu'}
      </button>
      {status && <p style={{ marginTop:24, padding:16, background:'#f0f9ff', borderRadius:8 }}>{status}</p>}
    </main>
  )
}
