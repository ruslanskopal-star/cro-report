'use client'
import { useState, useEffect, useRef } from 'react'

const LOADING_PHASES = [
  '🔍 Analyzuji první dojem a důvěryhodnost...',
  '🛍️ Procházím produktové stránky a fotografie...',
  '🧭 Kontroluji navigaci, kategorie a mega menu...',
  '🛒 Vyhodnocuji košík a checkout proces...',
  '⭐ Hledám problémy s trust signály a recenzemi...',
  '📱 Kontroluji mobilní verzi a dostupnost...',
  '💰 Analyzuji cenotvorbu, AOV a multibuy...',
  '✍️ Hodnotím copywriting a mikrotexty...',
  '🔎 Prohledávám znalostní bázi KRIS v6...',
  '🧠 Identifikuji Feature Factory pasti...',
  '🎯 Hledám zombie funkce ke smazání...',
  '📊 Generuji prioritizovaná doporučení...',
  '⚡ Připravuji Quick Wins pro tento týden...',
  '🐻 KRIS medvěd dokončuje analýzu...',
  '🚀 Finalizuji CRO akční plán...',
]

function Logo() {
  return (
    <div className="no-print" style={{display:'inline-block',background:'#111',padding:'10px 22px',borderRadius:'8px',marginBottom:'20px',lineHeight:'1.2'}}>
      <div style={{display:'flex',alignItems:'center',gap:'0'}}>
        <span style={{fontSize:'22px',fontWeight:'900',color:'white',fontFamily:'Arial Black, Arial'}}>ESH</span>
        <span style={{fontSize:'22px',fontWeight:'900',color:'#FF6B00',fontFamily:'Arial Black, Arial'}}>O</span>
        <span style={{fontSize:'22px',fontWeight:'900',color:'white',fontFamily:'Arial Black, Arial'}}>P</span>
      </div>
      <div style={{fontSize:'13px',fontWeight:'900',color:'#FF6B00',letterSpacing:'3px',fontFamily:'Arial Black, Arial',marginTop:'2px'}}>BOOSTER</div>
    </div>
  )
}

function LoadingAnimation({ seconds, phase }) {
  return (
    <div style={{textAlign:'center',padding:'28px 0 8px 0'}}>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.12); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        @keyframes spin-arc {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fade-phase {
          0% { opacity: 0; transform: translateY(6px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
      `}</style>

      <div style={{position:'relative',display:'inline-block',marginBottom:'20px'}}>
        <div style={{
          position:'absolute', top:'-10px', left:'-10px', right:'-10px', bottom:'-10px',
          borderRadius:'50%',
          background:'radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0) 70%)',
          animation:'pulse-ring 2s ease-in-out infinite',
        }} />
        <svg width="90" height="90" style={{animation:'spin-arc 1.4s linear infinite',display:'block'}}>
          <circle cx="45" cy="45" r="38" fill="none" stroke="#2a2a2a" strokeWidth="4"/>
          <circle cx="45" cy="45" r="38" fill="none" stroke="#FF6B00" strokeWidth="4"
            strokeDasharray="60 180" strokeLinecap="round"/>
        </svg>
        <div style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%, -50%)',
          textAlign:'center', lineHeight:'1',
        }}>
          <div style={{fontSize:'22px',fontWeight:'900',color:'#FF6B00',fontFamily:'Arial Black, Arial'}}>
            {seconds}
          </div>
          <div style={{fontSize:'9px',color:'#666',fontFamily:'Arial, sans-serif',fontWeight:'700',letterSpacing:'1px',marginTop:'1px'}}>
            SEK
          </div>
        </div>
      </div>

      <div style={{
        minHeight:'24px',
        color:'#aaa',
        fontSize:'13px',
        fontFamily:'Arial, sans-serif',
        fontWeight:'600',
        letterSpacing:'0.3px',
        animation:'fade-phase 8s ease-in-out infinite',
      }}>
        {phase}
      </div>
      <div style={{marginTop:'10px',color:'#444',fontSize:'11px',fontFamily:'Arial, sans-serif'}}>
        Analýza trvá cca 60–120 sekund
      </div>
    </div>
  )
}

function AnalysisLine({ line }) {
  const isKriticke = line.includes('KRITICKE') || line.includes('KRITICK')
  const isVysoka = line.includes('VYSOKA')
  const isStredni = line.includes('STREDNI')
  const isQuick = line.includes('QUICK')
  const isFeature = line.includes('FEATURE FACTORY')
  const isH1 = line.startsWith('# ')
  const isH2 = line.startsWith('## ')
  const isH3 = line.startsWith('### ')
  const isNum = /^\d+\./.test(line)
  const isBullet = line.startsWith('- ')
  const isEmpty = line.trim() === ''
  const isTableRow = line.startsWith('|')
  const isHr = line.startsWith('---')

  const displayLine = isH1 ? line.slice(2) : isH2 ? line.slice(3) : isH3 ? line.slice(4) : line

  if (isHr) return <div style={{borderTop:'1px solid #2a2a2a',margin:'16px 0'}} />
  if (isTableRow) return (
    <div style={{color:'#888',fontSize:'13px',fontFamily:'monospace',padding:'2px 0',borderBottom:'1px solid #1f1f1f'}}>
      {displayLine}
    </div>
  )

  const style =
    isKriticke
      ? {color:'#ff4444',fontWeight:'700',fontSize:'17px',marginTop:'28px',marginBottom:'10px',borderLeft:'4px solid #ff4444',paddingLeft:'12px'}
    : isVysoka
      ? {color:'#FF6B00',fontWeight:'700',fontSize:'17px',marginTop:'28px',marginBottom:'10px',borderLeft:'4px solid #FF6B00',paddingLeft:'12px'}
    : isStredni
      ? {color:'#ffcc00',fontWeight:'700',fontSize:'17px',marginTop:'28px',marginBottom:'10px',borderLeft:'4px solid #ffcc00',paddingLeft:'12px'}
    : isQuick
      ? {color:'#00ccff',fontWeight:'700',fontSize:'17px',marginTop:'28px',marginBottom:'10px',borderLeft:'4px solid #00ccff',paddingLeft:'12px'}
    : isFeature
      ? {color:'#cc88ff',fontWeight:'700',fontSize:'17px',marginTop:'28px',marginBottom:'10px',borderLeft:'4px solid #cc88ff',paddingLeft:'12px'}
    : isH1
      ? {color:'white',fontWeight:'900',fontSize:'22px',marginTop:'28px',marginBottom:'10px'}
    : isH2
      ? {color:'#FF6B00',fontWeight:'700',fontSize:'15px',marginTop:'20px',marginBottom:'6px',textTransform:'uppercase',letterSpacing:'1px'}
    : isH3
      ? {color:'#ddd',fontWeight:'700',fontSize:'15px',marginTop:'16px',marginBottom:'6px'}
    : isNum
      ? {color:'#ddd',marginTop:'12px',paddingLeft:'8px',fontFamily:'Arial, sans-serif'}
    : isBullet
      ? {color:'#aaa',paddingLeft:'20px',marginTop:'4px',fontSize:'14px',fontFamily:'Arial, sans-serif'}
    : isEmpty
      ? {height:'4px'}
    : {color:'#ccc',marginTop:'6px',fontSize:'15px',fontFamily:'Arial, sans-serif'}

  return <div style={style}>{displayLine || ' '}</div>
}

export default function Home() {
  const [clientName, setClientName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [analysis, setAnalysis] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [withClarity, setWithClarity] = useState(true)
  const [seconds, setSeconds] = useState(0)
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [completedIn, setCompletedIn] = useState(null)

  const timerRef = useRef(null)
  const phaseTimeoutRef = useRef(null)
  const bufferRef = useRef('')
  const secondsRef = useRef(0)

  // Timer
  useEffect(() => {
    if (loading) {
      secondsRef.current = 0
      setSeconds(0)
      timerRef.current = setInterval(() => {
        secondsRef.current += 1
        setSeconds(secondsRef.current)
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [loading])

  // Random phase timing 6–12s
  useEffect(() => {
    if (!loading) {
      clearTimeout(phaseTimeoutRef.current)
      return
    }
    function scheduleNextPhase() {
      const delay = (6 + Math.random() * 6) * 1000
      phaseTimeoutRef.current = setTimeout(() => {
        setPhaseIndex(i => (i + 1) % LOADING_PHASES.length)
        scheduleNextPhase()
      }, delay)
    }
    setPhaseIndex(0)
    scheduleNextPhase()
    return () => clearTimeout(phaseTimeoutRef.current)
  }, [loading])

  async function handleAnalyze() {
    if (!clientName) return
    setLoading(true)
    setError('')
    setAnalysis('')
    setCompletedIn(null)
    bufferRef.current = ''
    setDisplayName(clientName)

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientName, withClarity }),
      })

      if (!res.ok) {
        setError('Chyba serveru: ' + res.status)
        setLoading(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (!data) continue
          if (data === '[DONE]') {
            // Show full analysis at once
            const elapsed = secondsRef.current
            setAnalysis(bufferRef.current)
            setCompletedIn(elapsed)
            setLoading(false)
            setClientName('')
            return
          }
          try {
            const parsed = JSON.parse(data)
            if (parsed.error) {
              setError('Chyba: ' + parsed.error)
              setLoading(false)
              return
            }
            if (parsed.text) {
              bufferRef.current += parsed.text
            }
          } catch {
            // skip
          }
        }
      }
    } catch (e) {
      setError('Chyba spojení: ' + e.message)
    }

    setLoading(false)
  }

  function handleDownloadPDF() {
    window.print()
  }

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-family: Arial, sans-serif; }
          .print-area { background: white !important; border: none !important; padding: 0 !important; }
          .print-section-kriticke { color: #cc0000 !important; border-left: 4px solid #cc0000 !important; }
          .print-section-vysoka { color: #cc5500 !important; border-left: 4px solid #cc5500 !important; }
          .print-section-stredni { color: #886600 !important; border-left: 4px solid #886600 !important; }
          .print-section-quick { color: #006699 !important; border-left: 4px solid #006699 !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div style={{minHeight:'100vh',background:'#111',fontFamily:'Arial Black, Arial, sans-serif',padding:'20px'}}>
        <div style={{maxWidth:'800px',margin:'0 auto',paddingTop:'40px'}}>

          {/* Header - no-print */}
          <div className="no-print" style={{textAlign:'center',marginBottom:'40px'}}>
            <Logo />
            <h1 style={{fontSize:'32px',fontWeight:'900',color:'white',margin:'0 0 6px 0',textTransform:'uppercase'}}>CRO Analyza</h1>
            <h2 style={{fontSize:'16px',fontWeight:'700',color:'#FF6B00',margin:'0',textTransform:'uppercase',letterSpacing:'3px'}}>Tržbě a marži Zdar!</h2>
          </div>

          {/* Form - no-print */}
          <div className="no-print" style={{background:'#1a1a1a',border:'2px solid #FF6B00',borderRadius:'16px',padding:'32px',marginBottom:'32px'}}>
            <p style={{color:'#888',fontSize:'14px',marginTop:'0',marginBottom:'20px',textAlign:'center',fontFamily:'Arial, sans-serif'}}>
              Zadej jmeno klienta a AI vygeneruje CRO analyzu podle metodologie ESHOP BOOSTER
            </p>

            <div style={{display:'flex',gap:'12px',marginBottom:'16px'}}>
              <input
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="napr. Profi-DJ, Fanda-NHL.cz..."
                onKeyDown={e => e.key === 'Enter' && !loading && handleAnalyze()}
                disabled={loading}
                style={{flex:1,padding:'14px 18px',fontSize:'16px',background:'#111',border:'2px solid #333',borderRadius:'8px',color:'white',fontFamily:'Arial, sans-serif',outline:'none',opacity:loading?0.6:1}}
                onFocus={e => e.target.style.borderColor='#FF6B00'}
                onBlur={e => e.target.style.borderColor='#333'}
              />
              <button
                onClick={handleAnalyze}
                disabled={loading || !clientName}
                style={{padding:'14px 28px',fontSize:'15px',fontWeight:'900',textTransform:'uppercase',background:loading||!clientName?'#333':'#FF6B00',color:loading||!clientName?'#666':'white',border:'none',borderRadius:'8px',cursor:loading||!clientName?'not-allowed':'pointer',whiteSpace:'nowrap',transition:'background 0.2s'}}
              >
                {loading ? 'Analyzuji...' : 'Spustit'}
              </button>
            </div>

            <div
              onClick={() => !loading && setWithClarity(v => !v)}
              style={{display:'flex',alignItems:'center',gap:'10px',cursor:loading?'not-allowed':'pointer',userSelect:'none',padding:'10px 14px',borderRadius:'8px',background: withClarity ? '#0d1f0d' : '#1a1a1a',border:`1px solid ${withClarity ? '#2a6b2a' : '#333'}`,transition:'all 0.2s',opacity:loading?0.7:1}}
            >
              <div style={{width:'18px',height:'18px',borderRadius:'4px',border:`2px solid ${withClarity ? '#4CAF50' : '#555'}`,background: withClarity ? '#4CAF50' : 'transparent',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transition:'all 0.2s'}}>
                {withClarity && (
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                    <path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div>
                <div style={{color: withClarity ? '#4CAF50' : '#666',fontSize:'13px',fontWeight:'700',fontFamily:'Arial, sans-serif',letterSpacing:'0.5px'}}>
                  {withClarity ? '✓ Mám přístup do Microsoft Clarity' : 'Nemám přístup do Microsoft Clarity'}
                </div>
                <div style={{color:'#555',fontSize:'11px',fontFamily:'Arial, sans-serif',marginTop:'2px'}}>
                  {withClarity ? 'Analýza zahrne heatmapy, nahrávky a chování uživatelů' : 'Analýza bude postavena na best practices bez dat z Clarity'}
                </div>
              </div>
            </div>

            {error && (
              <div style={{marginTop:'16px',padding:'14px',background:'#2a0a0a',border:'2px solid #aa0000',borderRadius:'8px',color:'#ff4444',fontSize:'14px',fontFamily:'Arial, sans-serif'}}>
                {error}
              </div>
            )}

            {loading && <LoadingAnimation seconds={seconds} phase={LOADING_PHASES[phaseIndex]} />}
          </div>

          {/* Analysis result */}
          {analysis && (
            <div className="print-area" style={{background:'#1a1a1a',border:'2px solid #333',borderRadius:'16px',padding:'32px'}}>

              {/* Report header */}
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'24px',paddingBottom:'16px',borderBottom:'2px solid #333'}}>
                <div>
                  <div style={{color:'#FF6B00',fontSize:'12px',fontWeight:'700',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'4px',fontFamily:'Arial, sans-serif'}}>CRO Analýza</div>
                  <div style={{color:'white',fontSize:'24px',fontWeight:'900'}}>{displayName}</div>
                  {completedIn && (
                    <div style={{color:'#555',fontSize:'12px',fontFamily:'Arial, sans-serif',marginTop:'4px'}}>
                      ⏱ Vygenerováno za {completedIn} sekund
                    </div>
                  )}
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'8px',alignItems:'flex-end'}}>
                  <div className="no-print" style={{background:'#FF6B00',borderRadius:'8px',padding:'8px 16px',fontSize:'12px',fontWeight:'700',color:'white',textTransform:'uppercase'}}>KRIS v6</div>
                  <button
                    className="no-print"
                    onClick={handleDownloadPDF}
                    style={{background:'#1f1f1f',border:'1px solid #444',borderRadius:'8px',padding:'8px 16px',fontSize:'12px',fontWeight:'700',color:'#ccc',cursor:'pointer',textTransform:'uppercase',letterSpacing:'1px',fontFamily:'Arial, sans-serif'}}
                  >
                    ↓ Stáhnout PDF
                  </button>
                </div>
              </div>

              {/* Analysis content */}
              <div style={{fontFamily:'Arial, sans-serif',lineHeight:'1.7'}}>
                {analysis.split('\n').map((line, i) => (
                  <AnalysisLine key={i} line={line} />
                ))}
              </div>

              {/* Footer - no-print */}
              <div className="no-print" style={{marginTop:'32px',paddingTop:'16px',borderTop:'1px solid #222',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{color:'#333',fontSize:'12px',fontFamily:'Arial, sans-serif'}}>
                  ESHOP BOOSTER 2026 – KRIS v6
                </div>
                <button
                  onClick={handleDownloadPDF}
                  style={{background:'#FF6B00',border:'none',borderRadius:'8px',padding:'10px 20px',fontSize:'13px',fontWeight:'700',color:'white',cursor:'pointer',textTransform:'uppercase',letterSpacing:'1px',fontFamily:'Arial, sans-serif'}}
                >
                  ↓ Stáhnout PDF
                </button>
              </div>
            </div>
          )}

          <p className="no-print" style={{textAlign:'center',color:'#333',fontSize:'12px',marginTop:'24px',fontFamily:'Arial, sans-serif'}}>
            ESHOP BOOSTER 2026 – KRIS v6 – Ruslan Skopal
          </p>
        </div>
      </div>
    </>
  )
}
