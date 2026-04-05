// route_v6_edge_v12.js
// Zmeny oproti v11:
// 1. Skore je kategorie-relativni (instrukce v promptu)
// 2. Vymyslena cisla musi byt oznacena jako (PRIKLAD)
// 3. DUVERYHODNOSTNI MATICE je povinna sekce
// 4. Quick Wins musi byt specificke pro dany e-shop
// 5. Schema.org structured data v KB
// 6. BNPL platby v KB
// 7. Max 6 stran A4 / hutny vystup
// 8. Zadne anglicismy, spravna cestina
// 9. CELKOVY POTENCIAL jako povinna sekce
// 10+. Specificke znalosti pro kategorii (kosmetika, moda, elektronika, nabytek)
// + Podpora dvou rezimu: top10 (kratka verze) a full (plna verze)

export const runtime = 'edge'

const KRIS_KNOWLEDGE_BASE = `
# KRIS ZNALOSTNI BAZE v8

## GOOGLE SKORE KVALITY VSTUPNI STRANKY
- Hodnota 1-99, neni verejne dostupna, jina pro hlavni domenu a dilci URL
- Ovlivnuje: pozice ve vyhledavani, cenu prokliku v reklame, zobrazeni v AI Overview
- Co Google hodnoti: unikatni obsah, citelnost, medialni obsah, touch zony, interni prolinkovani, duveryhodnost
- AI obsah penalizace: od 01/2026 vice nez 60 % AI nebo generickeho obsahu = postih
- Vlastni autenticky obsah ma vzdy prednost pred AI generovanym

## DUVERYHODNOSTNI MATICE (ERA AI od 09/2025)
- Google zavadel algoritmus hodnotici: Autenticita, Transparentnost, Vlastni obsah
- Prvky s nejvyssim dopadem (serazene):
  1. Autenticky vlastni obsah (ne AI balast, ne kopie od dodavatele)
  2. Osobni kontakt s fotografii (jmeno, mobilni cislo, cas dostupnosti)
  3. Signature prvky znacky (unikatni vizualni prvky charakteristicke pro brand)
  4. Vlastni fotografie a videa (ne stockove)
  5. Authority rank (lide v projektu viditelni, jejich profily)
  6. Pribeh znacky a stranka O nas (autenticky, ne genericky)
  7. Recenze s hodnocenim (min. 50, optimum 4,2-4,7 hvezdicky)
  8. Certifikace, platebni metody, moznosti dopravy
  9. Unikatni textace (ne genericke kopie od dodavatele)
  10. FAQ s schema markup

## SCHEMA.ORG STRUCTURED DATA
- Product schema na detailu produktu: name, price, availability, rating, description
- FAQ schema na strankach s casto kladenymi dotazy = zobrazeni v Google rich snippetech a AI Overview
- Organization schema na homepage a strance O nas: name, url, logo, contactPoint, sameAs (soc. site)
- BreadcrumbList schema na vsech strankach = lepsi navigace ve vyhledavani
- LocalBusiness schema pokud mate kamennou prodejnu
- Bez structured data prichazite o rich snippety a viditelnost v AI Overview

## BNPL A PLATEBNI METODY
- BNPL (Buy Now Pay Later): Splitty, Twisto, Alma, Klarna = zvysuje prumerne objednavky o 15-30 %
- BNPL je zvlaste ucinne u produktu nad 1 000 Kc
- Apple Pay a Google Pay na mobilu dramaticky snizuji friction v checkoutu
- Zobrazeni log platebních metod v paticce = trust signal pro nezname e-shopy
- PayPal jako moznost: buduje duveru u prvoniho zakaznika ktery vam jeste neveri

## MICROSOFT CLARITY – JAK CIST DATA PRO CRO ANALYZU
- Bezplatny nastroj, instalace do 30 minut pres Google Tag Manager
- Click heatmapy: kde uzivatele klikaji na neaktivni prvky (dead clicks)
- Scroll heatmapy: kde uzivatele prestali scrollovat
- Rage clicks: klik 3x rychle = signal frustrace. Top 3 stranky s nejvyssi miru rage clicks = nejvyssi priority
- Session recordings: filtrovat "navstivil kosik ale nenakoupil"
- Konverzni trychtyr nastavit: Homepage, Kategorie, Produkt, Kosik, Objednavka, Dekujeme
- Scroll depth pod 30 % = vazny problem s prvni obrazovkou

## DESIGN A PRISTUPNOST
- Pismo nikdy mensi nez 13px (Google postih). Hlavni obsah: 15-17px
- Kontrastni pomer textu: minimalne 4,5:1. Nastroj: color.review
- iPhone: pole vyhledavani minimalne 16px jinak automaticke priblizeni rozbije layout
- Touch zony: 7x7 mm s 2mm rozestupy (EU zakon od cervna 2025)
- Seda barva pro aktivni prvky = chyba, evokuje neaktivni stav
- Konverzni barva: nejvyraznejsi v designu, pouzivana POUZE pro konverzni prvky
- Medialni obsah na strance (foto, video, gif) = body nahoru od Google

## HEADER
- Telefonni cislo: mobilni cislo funguje lepe nez pevna linka (lide vi ze volaji zdarma)
- Uvest dny a casy pro volani, idealne fotografie clena tymu vedle cisla
- Vyhledavani: pokud vede ke konverzi, musi byt IHNED viditelne (ne jen ikona lupy)
- Naseptavac vyhledavani: zakaznici kteri vyhledavaji konvertuji 2-3x lepe
- Stav "nic nenalezeno": nikdy prazdny, nabidni alternativu nebo kontakt
- Menu na mobilu: ikona 3 linek I TEXT "MENU", nikdy seda barva
- Hamburguer menu na desktopu = chyba, skryva navigaci

## HOMEPAGE
- Staticke hero s JEDNOU nabidkou a JEDNOU vyzvou k akci > slider
- Slider: kazdy banner musi mit jednoznacnou nabidku a TLACITKO
- USP lista: na KAZDE vstupni strance (homepage, kategorie, produkt, kontakt)
- Nejvetsi zajem navstevniku: doprava zdarma a rychlost doruceni
- Pop-up: nikdy pri prvni navsteve na mobilu (postih Google + zahlceni)

## KATEGORIE
- Popis kategorie: max 3-5 vet, ne dlouhy SEO text ktery posouva produkty dolu
- Filtrace s vizualnimi prvky (barevne ctverecky, ikony) = rychlejsi vyber
- Pojmy ve filtraci: ikona "i" s tooltipem pro slozite pojmy
- Razeni: Nejprodavanejsi, Nejlevnejsi, Nejdrazsi, Nejnovejsi (odebrat "Abecedne")
- Vypis: velka fotografie, hodnoceni zlatou barvou s poctem, barevna skladovost

## DETAIL PRODUKTU
- Velka fotografie ma primy vliv na konverzi (75 % zakazniku = fotky klicove)
- Min 3-5 fotek: zepredु, zezadu, detail, idealne na modelce nebo v prostredi
- Video zvysuje konverze az o 80 % u slozitejsich produktu
- NIKDY zalozky pro deleni obsahu (Google ignoruje skryty obsah, navstevnici zalozky nepouzivaji)
- Misto zalozek: rozcestnik na strance + fixni lista pri scrollovani (foto, cena, skladovost, CTA)
- Zobrazit datum doruceni u kazde moznosti dopravy (ne jen "1-2 dny")

## OBJEDNAVKOVY PROCES
- Upsell v kosiku: 3-5 levnych produktu (do 200 Kc) relevantních k objednavce
- Slevovy kod: schovat za checkbox, otevrene pole laka k odchodu na agregatory
- Checkout od kroku 2: bez menu, bez vyhledavani, jen logo a telefon
- Paticka v checkoutu: jen Obchodni podminky, Ochrana udaju, Kontakt
- Datum doruceni u kazde moznosti dopravy (resi to jen polovina e-shopu)
- KRITICKA CHYBA: neptejte se na dorucovaci adresu pri osobnim odberu
- Registraci navrhujte az na dekovaci strance
- BNPL: pokud mate produkty nad 1 000 Kc, zvazte implementaci

## FOOTER
- Logicke cleneni: Zakaznicka podpora, O nas, Poradime vam
- Copyright: zobrazit roky fungování (napr. "2012-2026") ne jen aktualni rok
- Loga platebních metod a dopravcu = trust signal
- Osobni kontakt: fotografie, jmeno, mobilni cislo, cas dostupnosti

## OSTATNI STRANKY
- Kontakt: sekce FAQ s odpovedi na nejcastejsi dotazy (snizuje pocet hovoru)
- O nas: autenticky pribeh, vlastni fotografie, konkretni cisla, hodnoty
- Slevovy kod: vlastni stranka "[znacka]/slevovy-kod" (nezprolinkovana, jen SEO)

## RECENZE A SOCIALNI DUKAZ
- 92 % zakazniku cte recenze pred nakupem
- Optimum: 4,2-4,7 hvezdicky, min 50 recenzi, zlatou barvou s poctem
- Recenze s fotkami konvertuji 2x lepe nez textove
- Automaticky email 7 dni po doruceni s vyzkou k recenzi

## MOBILNI VERZE
- Vice nez 60 % navstevniku prichazi z mobilu, jen 30 % tam nakoupi
- Kazda sekunda navic pri nacitani = 7 % pokles konverzi
- Sticky CTA nebo kosik vyrazne zvysuje mobilni konverze

## EMAILOVY MARKETING
- Opusteny kosik: serie 3 emailu (1h, 24h, 72h) = prumerna konverze 5-15 %
- Personalizace predmetu = open rate o 26 % vyssi

## DARK PATTERNS
- Skryte poplatky v poslednim kroku = nejcastejsi duvod opusteni kosiku
- Predvybrane souhlasy s newsletterem jsou v EU ilegalni

## SPECIFICKE ZNALOSTI DLE KATEGORIE E-SHOPU

### KOSMETIKA A DROGERIE
- Klicove pro konverzi: slozeni produktu, typ pleti/vlasu, vhodnost pro citlivou plet
- Popis produktu musi obsahovat: pro koho je produkt, hlavni prinos, jak pouzivat, s cim kombinovat
- "Pro koho se hodi" a "Pro koho se nehodi" dramaticky snizuje vraceni zbozi
- Vizualni ikony vlastnosti: Vegan, Bez parabenů, Pro suchou plet, Dermatologicky testovano
- Swatche barev u make-upu: vizualni vyber odstinu primo ve vypisu i na detailu
- FAQ na produktu: Jak dlouho vydrzi, Lze kombinovat s X, Vhodny pro tehotne, Jak skladovat
- Vzorky jako upsell v kosiku: snizuji barieru k prvnimu nakupu
- Schema.org: Product s ingredienci a varovanimi pro kosmetiku
- Sezonnnost: jaro (cistici rutiny), leto (SPF, after-sun), podzim (hydratace), zima (vyziva)

### MODA A OBLECENI
- Fotografie jsou primarni konverzni nastroj: min 4 fotky (zepredु, zezadu, detail, na modelce)
- Velikostni tabulka na kazdem produktu = snizuje vraceni o 20-30 %
- "Jak vybrat velikost" jako FAQ nebo pruvodce u kazde kategorie
- Look-book a styling inspirace: zvysuje prumerne hodnoty objednavky (cross-sell)
- Hover efekt: druha fotografie (pohled zezadu nebo jinak oblecena modelka)
- Dostupnost velikosti: jasne vizualni odliseni (dostupna vs. nedostupna varianta)
- Filtrace: barva (vizualni ctverecky), velikost, material, styl, prilezitost
- Vraceni a reklamace: u mody klicove zobrazit prominentne (snizuje obavy z koupeni)
- Recenze s fotkami zakazniku (obleceni na ruznych postavach) = klicovy trust signal

### ELEKTRONIKA A TECHNIKA
- Technicke parametry: povinne, prehledne ve tabulce, ne jen v textu
- Srovnani variant (tabulka): pomaha pri rozhodovani mezi modely
- Zaruky a servis: prominentne zobrazene, klic pro draze produkty
- Kompatibilita: jasne uvest s jakymi zarizeni produkt funguje
- Video recenze a unboxing: zvysuji konverze u slozitejsich produktu
- BNPL: u produktu nad 2 000 Kc je BNPL silny konverzni nastroj
- Srovnavace cen (Heureka, Zbozi): byt viditelny, mit aktualni feed
- Technicka podpora: chat nebo telefon dostupne primo na produktove strance

### NABYTEK A INTERIERY
- 3D vizualizace nebo AR (augmented reality) = silny diferenciator
- Rozmery: vzdy jasne, idealne s vizualizaci jak produkt vypadá v mistnosti
- Dodaci lhuta: u nabytku klicove (tyden vs. 8 tydnu je zasadni rozdil)
- Materialy a udrzba: detailni popis, fotografie detailu materialu
- Konfigurator: vyber barvy, materialu, rozmeru primo na strance
- Recenze s fotkami zakazniku (nabytek v jejich domacnosti) = nejcennejsi trust signal
- Doprava a montaz: jasne ceny a moznosti, idealne kalkulacka
- Showroom nebo vzorkovna: pokud existuje, prominentne zobrazit
`

async function fetchPageMeta(url) {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CROBot/1.0)',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'cs,en;q=0.9',
      },
    })
    clearTimeout(timeout)
    if (!response.ok) return null
    const html = await response.text()

    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : null
    const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)
    const description = descMatch ? descMatch[1].trim().replace(/\s+/g, ' ') : null
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i)
    const h1 = h1Match ? h1Match[1].trim().replace(/\s+/g, ' ') : null
    const ogTitleMatch = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:title["']/i)
    const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : null
    const ogDescMatch = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:description["']/i)
    const ogDesc = ogDescMatch ? ogDescMatch[1].trim() : null
    const h2Count = (html.match(/<h2[^>]*>/gi) || []).length
    const hasSchema = /application\/ld\+json/i.test(html)
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : null

    return { title: title || ogTitle, description: description || ogDesc, h1, h2Count, hasSchema, canonical }
  } catch {
    return null
  }
}

export async function POST(req) {
  try {
    const { clientUrl, withClarity, reportMode } = await req.json()

    if (!clientUrl) {
      return new Response(JSON.stringify({ error: 'Chybi URL klienta' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API klic neni nastaven' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }

    const pageMeta = await fetchPageMeta(clientUrl)

    let metaContext = ''
    if (pageMeta) {
      metaContext = `\nREALNA DATA ZE STRANKY (pouzij v analyze):\n`
      if (pageMeta.title) metaContext += `- Title: "${pageMeta.title}"\n`
      if (pageMeta.description) metaContext += `- Meta description: "${pageMeta.description}"\n`
      if (pageMeta.h1) metaContext += `- H1: "${pageMeta.h1}"\n`
      if (pageMeta.h2Count !== undefined) metaContext += `- Pocet H2: ${pageMeta.h2Count}\n`
      if (pageMeta.hasSchema !== undefined) metaContext += `- Schema.org: ${pageMeta.hasSchema ? 'ANO' : 'NE - chybi structured data'\n`
      if (pageMeta.canonical) metaContext += `- Canonical: ${pageMeta.canonical}\n`
      metaContext += `Komentuj: je title SEO-optimalizovany? Meta description motivuje ke kliknuti? H1 obsahuje hlavni keyword? Schema.org nasazena?\n`
    } else {
      metaContext = `\nMeta data se nepodarilo nacist. Analyzu postav na zaklade URL a kategorie produktu.\n`
    }

    const clarityInstruction = withClarity
      ? `Klient MA Clarity. U kazde kriticke a vysoke priority uved jak ji overit v Clarity.`
      : `Klient NEMA Clarity. Clarity uved jako Quick Win #1 s navodem na instalaci.`

    const now = new Date()
    const dateStr = now.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })

    const isTop10 = reportMode === 'top10'

    const structureInstruction = isTop10 ? `
REZIM: TOP 10 AKCNI PLAN (kratka verze)
Vygeneruj POUZE toto:

SKORE E-SHOPU
[Cislo 0-100]
[Jeden odstavec 2-3 vety komentar]

TOP 10 AKCNICH KROKU
Serazeno od nejvetsiho dopadu. Kazda polozka PRESNE takto:
1. [Nazev akce - konkretni, max 8 slov]
   Proc: [1 veta - dopad na konverze]
   Jak: [2-3 konkretni kroky]
   Dopad: [% nebo Kc odhad]

CELKOVY POTENCIAL
[1-2 vety: odhadovany rust konverzi pri implementaci vsech 10 kroku]

Celkova delka: maximalne 1 strana A4. Zadne dalsi sekce.
` : `
REZIM: PLNA ANALYZA
POVINNÁ STRUKTURA (pouzivej presne tato klicova slova):

SKORE E-SHOPU
[Cislo 0-100 - DULEZITE: Skore musi byt relativni vuci kategorii e-shopu. Modni boutique s 200 produkty a drogerie s 5000 SKU maji jinou laťku. Zohledni velikost, kategorii a konkurenci.]
Oblast 1/10 format pro kazkou z 8 oblasti
[2-3 vety komentar]

CO DELA DOBRE
1-3 konkretni silne stranky s "Proc to funguje:"

KRITICKE PRIORITY
Max 4 polozky. Format:
1. [Presny nazev problemu]
   Proc to boli: [dopad v % nebo Kc]
   Jak opravit: [max 5 konkretni kroky]
   Odhadovany dopad: [cislo]
   ${withClarity ? 'Jak overit v Clarity: [presna instrukce]' : ''}

VYSOKA PRIORITA
Max 4 polozky. Format:
1. [Doporuceni]
   Dopad: [odhad]
   Jak na to: [max 4 kroky]

STREDNI PRIORITA
Max 4 polozky, kratce.

QUICK WINS (do 1 tydne)
Max 6 polozek. KAZDA MUSI BYT SPECIFICKA PRO TENTO E-SHOP - ne genericka doporuceni ktera by platila pro jakykoli e-shop.

DUVERYHODNOSTNI MATICE
Tabulka ve formatu:
Prvek | Aktualni stav | Priorita
Pro kazdy z 10 klicovych prvku duveryhodnosti ze znalostni baze.

ROADMAP IMPLEMENTACE
Tyden 1: [specificke ukoly]
Tyden 2-4: [specificke ukoly]
Mesic 2-3: [specificke ukoly]

CELKOVY POTENCIAL
[Odhadovany rust konverzi, snizeni ceny za proklik, zlepseni Google skore - vse v % nebo Kc]

Celkova delka: MAXIMALNE 6 stran A4. Kazde doporuceni max 5 kroku.
`

    const systemPrompt = `Jsi KRIS – Knowledge-based Report Intelligence System, expert CRO analytik e-shopu metodologie ESHOP BOOSTER.

Znalostni baze:
${KRIS_KNOWLEDGE_BASE}

${metaContext}

${clarityInstruction}

Dnesni datum: ${dateStr}.

ABSOLUTNI PRAVIDLA:

PRAVIDLO 1 – NO DASH: Nikdy nepouzivej pomlcku jako oddelovac (–, —). Jedina vyjimka: pomlcka uvnitr slova (e-shop). Pouzivej dvojtecku nebo novy radek.

PRAVIDLO 2 – ZADNE VYMYSLENE FAKTY: Nikdy neuvadej konkretni cisla (roky fungovani, pocty produktu, ceny dopravy zdarma, jmena lidi), ktera neznas z URL nebo meta dat. Pokud chces uvest priklad, oznac ho jako (PRIKLAD: overit skutecnou hodnotu). Nikdy neuvadej "Davona funguje od 2010" nebo "doprava zdarma od 1499 Kc" jako fakt.

PRAVIDLO 3 – ZADNE ANGLICISMY: Pis spravnou cestinou. Misto "checkout" pis "objednavkovy proces", misto "landing page" pis "vstupni stranka", misto "bounce rate" pis "mira okamziteho odchodu", misto "upsell" pis "doplnkova nabidka". Vyjimky jen pro nazvy nastroju (Clarity, Luigi's Box).

PRAVIDLO 4 – SPECIFICKA DOPORUCENI: Kazde doporuceni musi byt specificke pro TENTO e-shop a jeho kategorii. Nic co by platilo pro jakykoli e-shop (napr. "nainstalujte Clarity" v Kriticke priorite kdyz klient Clarity nema). Clarity patri do Quick Wins jako nastroj, ne jako kriticky problem e-shopu.

PRAVIDLO 5 – KATEGORIE-RELATIVNI SKORE: Skore 0-100 musi reflektovat ocekavani v dane kategorii a velikosti e-shopu. Velky etablovany e-shop s basicnim webem a maly boutique e-shop nemohou dostat stejne skore kdyz maji stejna zakladni reseni.

PRAVIDLO 6 – NO VERSION FOOTER: Na konci NIKDY nepridavej nazev systemu, verzi ani zkratky.

${structureInstruction}`

    const userMessage = `Priprav KRIS CRO analyzu pro e-shop: ${clientUrl}

Identifikuj kategorii produktu a pouzij specificke znalosti pro tuto kategorii z databaze. Bud maximalne konkretni pro TENTO e-shop.`

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 8000,
        stream: true,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    })

    if (!anthropicResponse.ok) {
      const err = await anthropicResponse.text()
      return new Response(JSON.stringify({ error: 'Chyba API: ' + err }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }

    const { readable, writable } = new TransformStream()
    const writer = writable.getWriter()
    const encoder = new TextEncoder()

    ;(async () => {
      const reader = anthropicResponse.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const data = line.slice(6).trim()
            if (data === '[DONE]') continue
            try {
              const parsed = JSON.parse(data)
              if (parsed.type === 'content_block_delta' && parsed.delta?.type === 'text_delta') {
                await writer.write(encoder.encode(`data: ${JSON.stringify({ chunk: parsed.delta.text })}\n\n`))
              }
            } catch {}
          }
        }
        await writer.write(encoder.encode('data: [DONE]\n\n'))
      } catch (err) {
        await writer.write(encoder.encode(`data: ${JSON.stringify({ error: err.message })}\n\n`))
      } finally {
        await writer.close()
      }
    })()

    return new Response(readable, {
      headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message || 'Neznama chyba' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
