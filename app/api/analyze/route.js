import { NextResponse } from "next/server";

const KNOWLEDGE_BASE = `
Jsi expert na CRO (Conversion Rate Optimization) pro e-shopy podle metodologie EshopBooster. 
Při analýze vždy kontroluj tyto klíčové oblasti a doporučení:

HP (Hlavní stránka):
- Absence lišty USP - musí být na HP i napříč celým e-shopem (detail, kategorie)
- USP musí být proklikávatelné na statické stránky
- Chybí viditelný kontakt v hlavičce (tel + email + obličej + zelené/červené kolečko dostupnosti)
- Logo - doplnit dovětek názvu pro jasnou specializaci
- Recenze na HP co nejvýše, zlaté hvězdičky, ověřené recenze
- Hello bar - výrazná barva, správný kontrast
- Rychlý rozcestník kategorií - pořadí podle prodejů
- Políčko vyhledávání - viditelné na desktopu i mobilu
- Patička - kontakty, loga Heuréky, platebních metod
- Bannery musí mít CTA tlačítko a splňovat squint test
- Max 2 slidery na HP
- Info menu -roduktů podle prodejů, skladem produkty první
- Filtry rozbalené a seřazené podle důležitosti
- Zobrazení termínu dodání u produktů
- Štítky "lidovka", "zlatá střední cesta", "pro náročné"
- Hodnocení hvězdičky jen u produktů kde jsou, zlaté barvy
- Text kategorie využít pro kredibilitu + rozcestník

Detail produktu:
- Reference přímo pod název produktu
- Informace kdy zboží dorazí (dnes/zítra/pozítří)
- Infografika v galerii u TOP produktů
- Klíčové ll/cross-sell nabídky
- Univerzální informace o firmě (recyklovat napříč e-shopem)
- Ukázka "proč nakoupit zrovna u vás"
- Box "nevíte si rady" s kontaktem

Košík:
- Políčko slevového kódu minimalizovat/skrýt
- Apple Pay / Google Pay přidat
- Termín dodání i v košíku
- Upsell při přidání do košíku
- Možnost platby QR kódem

Mobilní verze:
- Hamburger menu vpravo
- Vyhledávání viditelně
- Správné rozbalení kategorií

Obecně:
- Velikost písma min 13px, ideálně 16px
- Správný kontrast barev (WCAG standard)
- Page Speed - optimalizace obrázků pod 100kb
- Kamenná prodejna - prezentovat na webu všude
`;

export async function POST(req) {
  const { clientName } = await req.json();
: "Chybi jmeno" }, { status: 400 });
  try {
    const Anthropic = (await import("@anthropic-ai/sdk")).default;
    const { Resend } = await import("resend");
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const message = await anthropic.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `${KNOWLEDGE_BASE}

Klient: "${clientName}"

Na základě výše uvedené metodologie EshopBooster vytvoř detailní CRO analýzu pro e-shop "${cl}".

Strukturuj analýzu takto:

1. KRITICKÉ PROBLÉMY (řešit ihned) 🔴
2. VYSOKÁ PRIORITA (řešit do měsíce) 🟠  
3. STŘEDNÍ PRIORITA (řešit do 3 měsíců) 🟡
4. QUICK WINS (snadné změny s velkým dopadem) ⚡

Pro každé doporučení uveď:
- Co přesně chybí nebo je špatně
- Jak to opravit konkrétn
Zaměř se na: HP, kategorie, detail produktu, košík, mobilní verzi, důvěryhodnost a USP.
Celkem 15-20 konkrétních doporučení.`
      }]
    });
    
    const analysis = message.content[0].type === "text" ? message.content[0].text : "";
    
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ruslan.skopal@eshopbooster.cz",
      subject: "CRO Analyza EshopBooster - " + clientName,
      html: `
        <div style="font-family: Arial, sans-width: 800px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
            CRO Analyza: ${clientName}
          </h1>
          <p style="color: #666; font-size: 14px;">Generovano automaticky podle metodologie EshopBooster</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">
${analysis}
          </div>
        </div>
      `
    });
    
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
