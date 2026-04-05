import { NextResponse } from 'next/server'

// ============================================================
// KRIS - Knowledge-based Report Intelligence System
// Engine postavený na metodologii ESHOP BOOSTER
// + znalostní báze z blogu Ondřeje Ilinčeva (ilincev.com)
// Verze 2.0 – rozšířená znalostní báze (220 článků)
// ============================================================

const KRIS_KNOWLEDGE_BASE = `
# KRIS ZNALOSTNÍ BÁZE v2 – ESHOP BOOSTER + ILINČEV METODOLOGIE

## PRVNÍ DOJEM A DŮVĚRYHODNOST
- Návštěvník si udělá první dojem za 0,1 sekundy – vizuální kvalita webu přímo ovlivňuje vnímanou důvěryhodnost
- Halo efekt: krásný web = lepší produkt v mysli zákazníka, i když to není pravda
- Nejdůležitější trust signály: recenze, fotky reálných zákazníků, certifikáty, média ve kterých se e-shop objevil
- "Above the fold" musí okamžitě komunikovat: co prodáváte, proč u vás, a výzvu k akci
- Slider na homepage je mrtvý – zobrazuje jen první slide. Místo slideru: statický hero banner s jednou silnou nabídkou
- Animace a efekty zpomalují načítání a odvádějí pozornost od konverze
- Social proof "above the fold": počet zákazníků, hodnocení, loga médií/partnerů

## SLOGAN A POSITIONING
- 90 % sloganů jsou prázdné fráze: "Vaše spokojenost je naší prioritou", "Kvalita, které věříte"
- Dobrý slogan říká CO děláte pro KOHO a PROČ je to jiné – ne jak se cítíte jako firma
- Test: zakryjte logo a dejte slogan konkurenci – pokud pasuje, slogan nic neříká
- Místo sloganu testujte konkrétní value proposition: "Doručíme do 24h nebo vrátíme peníze"
- Příklad: Fondee – místo "Investujte chytře" → "Akciové portfolio za 15 minut, bez poplatků za výběr"
- 3 otázky pro dobrý slogan: Pro koho? Co přesně? Proč zrovna my?

## KONKURENČNÍ VÝHODA A DIFERENCIACE
- Většina firem tvrdí totéž: kvalita, servis, cena – to není diferenciace
- Skutečná diferenciace: specializace na niku, rychlost, komunita, udržitelnost, garance
- Konkurovat pouze cenou je sebevražda – vždy přijde někdo levnější (Čína, Amazon)
- Brand funguje jako placebo – stejný produkt s lepším brandem zákazníci vnímají jako kvalitnější
- Najděte "unfair advantage" – co konkurence nemůže snadno zkopírovat
- "O nás" stránka je 3.–5. nejnavštěvovanější – příběh zakladatele zvyšuje konverze a loajalitu
- Specializace vždy vítězí nad generalisty v mysli zákazníka

## PRODUKTOVÉ STRÁNKY A FOTOGRAFIE
- 75 % zákazníků považuje fotky za klíčové při rozhodování o koupi (Weebly)
- 58 % zákazníků chce vidět produkt ze všech stran – minimum jsou 3–5 fotek
- Každý 5. zákazník vrátí produkt, protože fotka neodpovídala realitě
- Lifestyle fotky (produkt v kontextu použití) výrazně zvyšují konverze u oblečení, doplňků, nábytku
- Zoom funkce na produktových fotkách je nutnost
- Video produktu zvyšuje konverze až o 80 % u komplexnějších produktů
- Popis produktu: zákazníci nečtou, skenují. Bullet pointy > odstavce. Nejdůležitější info první.
- Dostupnost skladem musí být jasně viditelná (zelená = skladem, červená = vyprodáno)
- U dočasně vyprodaných produktů: dejte možnost upozornění na naskladnění – neztrácejte zákazníka
- Trvale vyprodané produkty: přesměrujte na alternativy, nesmazávejte stránku (SEO hodnota)
- Fotky na bílém pozadí vs. lifestyle: testujte dle kategorie – elektronika = bílé, móda = lifestyle

## NAVIGACE A KATEGORIE
- Hamburger menu na desktopu je chyba – skrývá navigaci a snižuje konverze
- Mega menu funguje lépe než dropdown pro e-shopy s více kategoriemi
- Drobečková navigace (breadcrumbs) je povinnost – zákazník musí vědět kde je a jak se vrátit
- Vyhledávání na e-shopu: zákazníci, kteří vyhledávají, konvertují 2–3× lépe než ti co brouzdají
- Kategorie: méně je více – příliš mnoho kategorií mate. Testujte card sorting s reálnými zákazníky
- Filtry v kategoriích: klíčové pro velké katalogy. Nejdůležitější filtry vždy nahoře, viditelné
- Interní vyhledávání: sledujte co zákazníci hledají = zlatý důl pro merchandising a sortiment

## CHECKOUT A OBJEDNÁVKOVÝ PROCES (analýza 200 e-shopů)
- Dopravci: Zásilkovna vede (9 500 výdejních míst), Česká pošta klesá kvalitou. Doporučení: 3 dopravci na adresu + 2 na výdejny
- Sjednoťte výdejní místa různých dopravců do jedné položky s výběrem z mapy (dělá to jen 10 % e-shopů)
- Ceny dopravy: průměr 96 Kč na adresu, 70 Kč výdejní místo. Doporučení: 99 Kč / 69 Kč (psychologické ceny)
- Datum doručení: zobrazujte u každé dopravy – dělá to jen polovina e-shopů! Zákazníci to chtějí vědět
- Doprava zdarma od určité hranice: nabízí 75 % e-shopů, medián je 1 500 Kč
- Vzorec pro výpočet hranice dopravy zdarma: AOV + (cena dopravy / marže). Příklad: 1 250 + (69 / 0,3) = 1 480 Kč
- Doprava zdarma na vše zvyšuje vratkovost u impulzivních nákupů (oblečení, dekorace) – pozor!
- Amazon zvýšil obrat o 12,4 % díky dopravě zdarma – ale funguje hlavně u funkčních produktů
- Platba: nabízejte kartu, dobírku, bankovní převod, Apple/Google Pay (60 % e-shopů ho má)
- U dobírky uveďte "lze platit hotově i kartou" – 70 % e-shopů tuto info nemá
- KRITICKÁ CHYBA: Neptejte se na doručovací adresu, když si zákazník vybral osobní odběr! Dělá to 54 % e-shopů
- Pamatujte si vyplněné údaje – 56 % e-shopů si to nepamatuje = frustrující UX
- Přihlášení: dejte možnost přihlásit se v kroku adresy (třetina e-shopů to nenabízí)
- Registraci navrhujte až na děkovací stránce (stačí se zeptat na heslo) – dělá to jen 15 % e-shopů
- Obchodní podmínky: místo checkboxu použijte oznámení "Kliknutím na Koupit souhlasíte s OP" – polovina e-shopů to nemá
- Minimalizujte počet polí ve formuláři – každé extra pole snižuje konverze
- Autofill/autocomplete správně ozáhlte HTML atributy, vyhněte se externím našeptávačům adresy (kolizní)

## PRŮMĚRNÁ HODNOTA OBJEDNÁVKY (AOV)
- Zvyšovat AOV lze přes: upsell/cross-sell, balíčky, množstevní slevy, doplňkové služby
- Upsell = nabídněte lepší verzi produktu. Cross-sell = nabídněte doplněk (k botám – ponožky)
- Balíčky fungují nejlépe u opakovaně kupovaných produktů (kosmetika, doplňky stravy)
- Množstevní slevy: "3 za cenu 2" funguje lépe než "33% sleva" psychologicky
- POZOR: Agresivní slevy zvyšují AOV, ale snižují marži. Sledujte průměrnou marži na objednávku, ne jen AOV
- Doporučení produktů "zákazníci, kteří koupili X, také koupili Y" – algoritmus musí být relevantní
- Hranici dopravy zdarma nastavte mírně nad průměrnou AOV – zákazník si přiloží produkt

## RECENZE A SOCIÁLNÍ DŮKAZ
- Recenze jsou nejsilnější trust signál – 92 % zákazníků čte recenze před nákupem
- Negativní recenze nejsou problém – perfektní hodnocení 5.0 je podezřelé. Optimum je 4,2–4,7
- Umístění recenzí: na produktové stránce pod popisem, ale i na homepage a v košíku
- Recenze s fotkami od zákazníků konvertují 2× lépe než textové
- Odpovídejte na negativní recenze veřejně – ukazuje to zákaznický servis
- Počet recenzí je důležitý – pod 10 recenzí zákazníci nedůvěřují. 50+ je solidní
- Heureka, Google Shopping: hodnocení se zobrazuje ve výsledcích vyhledávání = CTR boost
- Recenze žádejte e-mailem 7–14 dní po doručení = nejvyšší response rate

## SLEVY A CENOTVORBA (EU regulace 2023)
- Nová EU regulace: musíte zobrazovat nejnižší cenu za posledních 30 dní jako referenční
- Škrtnutá cena musí být skutečná předchozí cena, ne uměle navýšená
- "Flash slevy" a falešná urgence (odpočítávání) jsou právně rizikové
- Psychologické ceny: 999 Kč funguje lépe než 1 000 Kč, ale 997 Kč je lepší než 995 Kč
- Zaokrouhlené ceny (100, 500, 1000 Kč) signalizují luxus a prémiovost
- Zobrazujte úsporu v korunách (Ušetříte 350 Kč) i v procentech – záleží na kategorii
- Kotevní cena (anchoring): nejdražší varianta vlevo mění vnímání ostatních cen
- Příliš velká sleva snižuje vnímanou kvalitu produktu
- Freemium model: bezplatná verze jako akviziční nástroj, konverze na placené = klíčová metrika

## PŘEDPLATNÉ A SUBSCRIPTION MODELY
- Roční předplatné vydělá 2× více než měsíční při správném nastavení ceny a komunikace
- Klíč: jasná hodnota ročního vs. měsíčního – úspora musí být okamžitě zřejmá
- Únava z předplatného – zákazníci mají předplatných příliš mnoho, musíte být viditelně hodnotní
- Povinnost mít snadno dostupné "tlačítko pro zrušení" (zákon, etika i long-term retence)
- Nejlepší moment pro nabídku ročního: ihned po registraci a při 1. obnově měsíčního

## PŘÍSTUPNOST WEBU (Accessibility)
- Od června 2025 povinná přístupnost pro e-shopy a služby nad určitou velikost (EU zákon)
- Přístupný web konvertuje lépe i pro běžné uživatele – jasná struktura, kontrasty, čitelnost
- Základy: alt texty u obrázků, správné nadpisové úrovně (H1–H6), focus stavy pro klávesnici
- Kontrastní poměr textu: minimálně 4,5:1 pro normální text, 3:1 pro velký text
- Formuláře: labely musí být viditelné – ne jen placeholder, který zmizí při psaní
- Screen reader friendly navigace = lepší SEO a lepší UX pro všechny uživatele

## CHECKBOXY A PRÁVNÍ UX
- Příliš mnoho souhlasů frustruje uživatele a snižuje konverze
- GDPR vyžaduje informovaný souhlas, ale ne nutně checkbox pro každou maličkost
- Předvybrané souhlasy (s newsletterem, pojištěním) jsou v EU ilegální – dark pattern
- Souhlas s OP a zpracováním dat: kombinujte do jednoho jasného oznámení při objednávce
- Princip: méně souhlasů = vyšší konverze + právní dostatečnost

## DESIGN JE MANIPULACE – PSYCHOLOGIE
- Každé UX rozhodnutí ovlivňuje chování uživatele – design nikdy není neutrální
- Nudge theory: malé podněty vedou k žádoucímu chování (výchozí nastavení, pořadí možností)
- Barvy: červená = urgence/sleva, zelená = bezpečí/potvrdit, modrá = důvěra
- Vizuální hierarchie: největší = nejdůležitější. Zákazníkovo oko sleduje design, ne obsah
- F-pattern a Z-pattern čtení: nejdůležitější info do levého horního rohu a podél horizontálních tahů
- Bílý prostor (whitespace) zvyšuje vnímání kvality a čitelnost
- Gestalt principy: blízkost, podobnost, kontinuita – zákazník doplňuje vzory automaticky
- Endowment effect: co vlastníme, ceníme více – proto fungují "30 dní na vrácení zdarma"
- FOMO (Fear of Missing Out): omezená dostupnost zvyšuje hodnotu v mysli zákazníka
- Racionalizace po nákupu: zákazníci hledají potvrzení správnosti rozhodnutí – follow-up pomáhá

## DARK PATTERNS – ČEHO SE VYVAROVAT
- Skryté poplatky přidané v posledním kroku objednávky = nejčastější důvod opuštění košíku
- Předvybrané souhlasy s newsletterem nebo pojištěním jsou neetické a v EU ilegální
- Falešná urgence ("Zbývají jen 3 kusy!" při 300 skladem) poškozuje brand
- Obtížné zrušení předplatného nebo objednávky = negativní recenze a chargebacks
- Confirmshaming ("Ne, nechci ušetřit peníze") zákazníci poznají a odsoudí
- "Roach motel": snadno se přihlásit, obtížně odhlásit – regulatorní riziko (EU DSA)
- Skryté předplatné při "bezplatném vyzkoušení" = vysoký churn a negativní PR
- Kurvítka (planned obsolescence): záměrně navržené zboží k brzkému rozbití – poškozuje brand i planetu

## COPYWRITING A MIKROTEXTY
- Mikrotexty (texty na tlačítkách, popisky polí, error hlášky) mají obrovský dopad na konverze
- Tlačítko "Koupit" konvertuje lépe než "Objednat" nebo "Přidat do košíku"
- Error hlášky: buďte konkrétní a přátelští – "Zadejte prosím e-mail ve formátu jmeno@email.cz" místo "Chyba"
- Prázdné stavy (košík bez produktů): využijte jako konverzní příležitost, ne jen "Košík je prázdný"
- Tlačítko musí říkat co se stane po kliknutí – ne generické "Odeslat" ale "Získat nabídku zdarma"
- Headline na landing page je nejdůležitější element – testujte jako první
- Sociální důkaz v textu: čísla fungují lépe než adjektiva ("4 832 spokojených zákazníků")

## EMAILOVÝ MARKETING A RETENCE
- Získat nového zákazníka stojí 5–7× více než udržet stávajícího
- Follow-up e-maily po nákupu: poděkování, tracking zásilky, cross-sell 2 týdny po doručení
- Opuštěný košík: série 3 e-mailů (1h, 24h, 72h) – průměrná konverze 5–15 %
- Segmentace e-mailového seznamu dramaticky zvyšuje open rate a konverze
- Personalizace předmětu (jméno zákazníka) zvyšuje open rate o 26 %
- Welcome sekvence nových zákazníků: klíčová pro onboarding a první nákup
- Věrnostní program musí mít jasnou hodnotu – bodové systémy fungují, ale musí být jednoduché

## MOBILNÍ VERZE
- Více než 60 % návštěvníků e-shopů přichází z mobilu, ale jen 30 % tam nakoupí
- Formuláře na mobilu: používejte správný typ klávesnice (type="tel", type="email", type="number")
- Tlačítka: minimální velikost 44×44 px (dotek prstu), dostatečné mezery
- Sticky košík / CTA tlačítko na mobilu výrazně zvyšuje konverze
- Načítací čas na mobilu: každá sekunda navíc = 7 % pokles konverzí
- Swipe gesta pro galerii produktů jsou na mobilu standard
- Thumb zone: nejdůležitější akce do spodní části obrazovky (palec dosáhne snáze)

## A/B TESTOVÁNÍ A ANALYTIKA
- Netestujte intuicí – každá změna může konverze zvýšit i snížit
- A/B test potřebuje statistickou signifikanci – minimum 95 %, ideálně 99 %
- Testujte vždy jen jednu proměnnou najednou
- Nejlepší věci k testování: nadpis, CTA tlačítko, cena dopravy, pořadí produktů
- Mouse tracking (Hotjar, MS Clarity) odhalí kde zákazníci klikají a kde odchází
- Heatmapa + záznam sessionů = nejlevnější CRO investice s největším ROI
- Nejčastější místa úniku: produktová stránka, košík, krok adresy
- Testujte hypotézy, ne náhodné změny – každý test musí mít jasný důvod

## REDESIGN A PŘÍPADOVÉ STUDIE
- Redesign Fakturoidu: +48,3 % registrací – klíč: zjednodušení onboardingu a jasný value prop na homepage
- Redesign Spa.cz: +21,5 % objednávek – lepší filtrování, důvěryhodnost, mobilní verze
- Redesign není o novém vizuálu – je o odstranění konverzních bariér
- Před redesignem: analýza dat, uživatelské testování, identifikace pain pointů
- Iterativní redesign (postupné změny) je méně rizikový než "big bang" redesign
- Měřte baseline metriky před změnou – bez toho nevíte jestli se zlepšilo

## AI A AUTOMATIZACE V E-COMMERCE
- AI personalizace produktových doporučení zvyšuje AOV průměrně o 10–30 %
- Chatboty pro zákaznický servis: fungují pro FAQ, selhávají u komplexních problémů
- Automatizace e-mailových sekvencí (opuštěný košík, retence) = nejvyšší ROI z automation
- A/B testování s AI asistencí: rychlejší identifikace vítězných variant
- AI generovaný obsah (popisy produktů) šetří čas, ale potřebuje human review pro tone of voice
`

export async function POST(req) {
  try {
    const { clientName } = await req.json()

    if (!clientName) {
      return NextResponse.json({ success: false, error: 'Chybí jméno klienta' })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'API klíč není nastaven' })
    }

    const systemPrompt = `Jsi KRIS – Knowledge-based Report Intelligence System, expert CRO analytik e-shopů metodologie ESHOP BOOSTER.

Tvá znalostní báze:
${KRIS_KNOWLEDGE_BASE}

TVOJE ÚLOHA: Analyzuj e-shop klienta a vytvoř strukturovanou CRO analýzu. Piš v češtině, konkrétně a akcionovatelně. Každé doporučení musí být specifické pro daný e-shop, ne obecné.

POVINNÁ STRUKTURA ANALÝZY (dodržuj přesně tato označení pro správné zobrazení):

KRITICKE PRIORITY: [název sekce]
1. [konkrétní problém s dopadem na konverze]
   - Proč to bolí: [vysvětlení]
   - Jak opravit: [konkrétní řešení]

VYSOKA PRIORITA: [název sekce]
1. [doporučení]
   - Dopad: [odhad dopadu]
   - Jak na to: [konkrétní kroky]

STREDNI PRIORITA: [název sekce]
1. [doporučení]
   - Jak na to: [kroky]

QUICK WINS: Rychlé výhry (do 1 týdne)
1. [co jde udělat rychle a levně]

Analyzuj tyto oblasti: homepage a první dojem, produktové stránky a fotografie, navigace a kategorie, košík a checkout, trust signály a recenze, mobilní verze, ceny a slevy, copywriting a mikrotexty.

Pokud konkrétní e-shop neznáš, vycházej z obecné praxe v dané kategorii produktů a aplikuj znalostní bázi KRIS.`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 4000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Připrav kompletní KRIS CRO analýzu pro e-shop: ${clientName}

Zaměř se na nejčastější problémy v dané kategorii produktů. Buď konkrétní – jmenuj konkrétní prvky webu, konkrétní čísla, konkrétní kroky. Analýza musí být přímo použitelná jako akční plán.`,
          },
        ],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ success: false, error: 'Chyba API: ' + err })
    }

    const data = await response.json()
    const analysis = data.content?.[0]?.text || ''

    return NextResponse.json({ success: true, analysis })
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message || 'Neznámá chyba' })
  }
}
