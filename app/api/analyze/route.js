// route_v6_edge_v11.js
// Zmeny oproti v10: KRIS_KNOWLEDGE_BASE v7
// - 3x vice znalosti z checklistu Jana Kvasnicka (61+ chyb) a prezentace Czech Online Expo 2026
// - Nova sekce: Google Skore kvality vstupni stranky
// - Nova sekce: Duveryhodnostni matice (AI era)
// - Nova sekce: Design a pristupnost (rozsirena)
// - Nova sekce: Header (telefon, search, kosik, menu)
// - Nova sekce: Kategorie (filtrace, razeni, stitky, podkategorie)
// - Nova sekce: Detail produktu (storytelling, rozcestnik vs zalozky, fixni lista)
// - Nova sekce: Objednavkovy proces (upsell, slevovy kod, minimalizace)
// - Nova sekce: Ostatni stranky (kontakt FAQ, O nas, slevovy kod stranka)

export const runtime = 'edge'

const KRIS_KNOWLEDGE_BASE = `
# KRIS ZNALOSTNI BAZE v7

## GOOGLE SKORE KVALITY VSTUPNI STRANKY

### Co to je a proc je dulezite
- Google pouziva skore kvality vstupni stranky (hodnota 1-99), ktere neni verejne dostupne
- Skore je rozdilne pro hlavni domenu a dilci URL
- Primo ovlivnuje: pozice ve vyhledavani (SEO), cenu prokliku v reklame, zobrazeni v AI overview
- Od 2025 plati, ze az 30 % dopadu na ranking ma UX a kvalita stranky

### Co Google hodnosti
- Kvalita a unikatnost obsahu (vlastni obsah ma prednost pred AI obsahem)
- Graficka stranka: citelnost, velikost pisma, vykresleni na mobilu, touch zony
- Medialni obsah na strance (fotografie, video, infografiky = body nahoru)
- Interni prolinkovani a prace s crawl budgetem
- Signature prvky znacky (vizualni prvky charakteristicke pro vas brand)
- Duveryhodnostni prvky: recenze, certifikaty, osobni kontakt, vlastni foto/video

### AI obsah a Google penalizace
- Od 09/2025: vice nez 80 % AI obsahu na strance = penalizace
- Od 01/2026: vice nez 60 % AI obsahu = penalizace (pravidla se zprisnuji)
- Google penalizuje i vizualni AI obsah (generovane fotografie bez oznaceni)
- Vlastni autenticky obsah ma vzdy prednost pred AI generovanym

### AI Overview a spirala smrti
- Google si pujcuje obsah do AI Overview, navstevnik nepotrebuje klikat na web
- Snizuje se organicka navstevnost, Google snizuje ranking, prodrazuje se reklama
- Reseni: tvorte obsah, ktery AI nemuze nahradit (vlastni zkusenosti, data, storytelling)

## DUVERYHODNOSTNI MATICE (ERA AI)

### Novy algoritmus Google od 09/2025
- Hodnoceni stavi na: Autenticita, Transparentnost, Vlastni obsah
- Snahou je predejit stavu, ze vsechny weby budou stejne (vsechno AI)

### Nejdulezitejsi prvky duveryhodnosti (serazene podle dopadu)
1. Autenticky obsah (vlastni texty, ne AI balast)
2. Osobni kontakt (fotografie clena tymu, jmeno, telefon)
3. Signature prvky znacky (unikatni vizualni prvky)
4. Vlastni fotografie a videa (ne stockove)
5. Authority rank (lide v projektu/firme, jejich profily)
6. Pribeh znacky a stranka O nas
7. Recenze a hodnoceni (min. 50 recenzi, optimum 4,2-4,7 hvezdicky)
8. Certifikace, platebni metody, moznosti dopravy
9. Unikatni textace (ne genericke kopie od dodavatele)
10. FAQ (odpovedi na nejcastejsi dotazy)

## MICROSOFT CLARITY – JAK CIST DATA PRO CRO ANALYZU

### Heatmapy
- Click heatmapy odhaluji kde uzivatele klikaji na neaktivni prvky (dead clicks) – okamzita priorita opravy
- Scroll heatmapy presne ukazuji kde uzivatele prestali scrollovat – obsah pod touto casti je prakticky neviditelny
- Pokud scroll depth na produktove strance nepresahuje 50 %, je problem s prvni obrazovkou nebo nacitanim
- Area heatmapy ukazuji kde uzivatele travi cas pohledem – porovnej s idealnim F-pattern nebo Z-pattern
- Pokud je CTR hlavniho CTA tlacitka pod 2 %, testuj text, barvu nebo pozici

### Rage Clicks
- Rage click = uzivatel klikne 3x a vice rychle za sebou na stejne misto – signal frustrace
- Nejcastejsi priciny: neaktivni tlacitko, prvek ktery VYPADA klikatelne ale neni, pomaly JavaScript
- Top 3 stranky s nejvyssi miru rage clicks jsou nejvyssi priority pro redesign
- Rage clicks na checkout strance primo zpusobuji opusteni kosiku – resit okamzite
- Rage clicks na filtry signalizuji problem s UX filtrovani nebo rychlosti odezvy

### Dead Clicks
- Dead click = klik na prvek bez reakce – uzivatel ocekava akci ale nedostane ji
- Typicke problemy: dekorativni texty vypadajici jako odkazy, produktove obrazky bez zoomu, ikonky bez funkce
- Pokud vice nez 5 % kliknuti na dany prvek jsou dead clicks, nutny redesign nebo pridani funkce

### Session Recordings
- Analyzuj relace s nejvyssim cas na strance ale nizkou konverzi
- Filtruj nahravky kde uzivatel navstivil kosik ale nenakoupil
- Sleduj "rage sessions" (vice nez 5 rage clicks v jedne relaci) – nejcennejsi zpetna vazba
- Porovnej nahravky desktop vs. mobil

### Scroll Depth
- Scroll depth pod 30 % = vazny problem s prvni obrazovkou
- Scroll depth 30-60 % = prumerny vysledek, testuj usporadani obsahu
- Scroll depth nad 70 % = dobry engagement, umisti sem CTA tlacitko

### Konverzni Trychtyre v Clarity
- Nastav trychtyr: Homepage, Kategorie, Produkt, Kosik, Objednavka, Dekujeme
- Odpad mezi Produkt a Kosik nad 70 % = problem s cenou, duverou nebo informacemi
- Odpad pri checkoutu nad 60 % = problem s formularem, dopravou nebo platbou

### JavaScript Chyby
- Clarity zaznamenava JS chyby – zkontroluj stranky s vysokou miru opakujicich se chyb
- JS chyba na checkout strance = prime opusteni – absolutni priorita

## DESIGN A PRISTUPNOST

### Velikost pisma a citelnost
- Pismo NIKDY mensi nez 13px – Google za to dava postih v rankingu
- Hlavni textovy obsah (delsi texty): minimalne 15-17px
- Zarovnani vlevo (ne do bloku) – obsah se lepe cte
- Kontrastni pomer textu: minimalne 4,5:1 pro normalni text
- Pozor na text pres fotografii – pokud neni citelny, jde o postih od Google
- iPhone: pole vyhledavani musi mit pismo minimalne 16px jinak se automaticky priblizi

### Touch zony na mobilu (KRITICKE od 2024)
- Google klade stale vetsi tlak na spravne touch zony aktivnich prvku
- Okolo aktivnich prvku musi byt dostatecna vzdusnost
- Minimalni dotykova plocha: 7x7 mm s 2mm rozestupy (EU zakon od cervna 2025)
- Formulare: labely musi byt viditelne, ne jen placeholder ktery zmizi pri psani

### Aktivni prvky a jejich jednoznacnost
- Velky problem: navstevnik nevi, co je aktivni prvek a co ne
- Odkazy zpracovane jako cerny text bez znaceni = dead clicks
- SEDA BARVA pro aktivni prvky je chyba – evokuje neaktivni stav
- Konverzni barva musi byt nejvyraznejsi barvou v designu a pouzivana POUZE pro konverzni prvky
- Konverzni prvky: tlacitko koupit, prvni krok objednavky, kolecko poctu v kosiku
- Test: nejlepsi konverzni barva neni vzdy zelena – zavisi na celkovem designu

### Mobilni vykresleni
- Spousta e-shopu si neudela kontrolu mobilniho zobrazeni
- Obsah mimo zakladni zobrazeni (scrollovatelnou cast) = postih od Google
- Zkontrolovat vykresleni na nejcastejsich zarizenich a prohlizecich
- Medialni obsah na strance (foto, video, gify, infografiky) = body nahoru od Google

### Signature prvky znacky (2025)
- Google dava body nahoru za prvky charakteristicke pro vasi znacku
- Vizualni prvky v designu, charakteristicke barvy, zpracovani fotografii, unikatni komponenty
- Cim vice se vizualne odlisujete, tim vetsi vyhoda v AI ere

## HEADER

### Horni pruh
- Pokud mate kampane, prezentujte je v hornim pruhu (viditelny na kazde strance)
- Pruh musi obsahovat jednoznacny odkaz nebo tlacitko (ne jen text)
- Fixni pruh, ktery se drzi pri scrollovani, ma lepsi vysledky

### Telefonni cislo
- Telefonni cislo v hlavicce buduje duveryhodnost a ma vliv na konverze
- MOBILNI cislo funguje lepe nez pevna linka – lide vi, ze volaji zdarma
- Mobilni cislo ma meritelne lepsi konverzni pomer
- Idealne uvest dny a casy pro volani
- U osobnich e-shopu: pridat fotografii clena tymu vedle cisla

### Vyhledavani
- Pokud vyhledavani vede ke konverzi (overit v GA4), musi byt IHNED viditelne (ne jen ikona lupy)
- Zakaznici kteri vyhledavaji konvertuji 2-3x lepe
- Naseptavac vyhledavani je dnes zaklad – bez nej doporucit Luigi's Box nebo alternativu
- Poradi v naseptavaci: produkty skladem maji prednost, fraze v nazvu produktu ma prednost
- Stav "nic nenalezeno" nikdy nesmis nechat prazdny – nabidni alternativu nebo kontakt
- iPhone: pole vyhledavani musi mit minimalne 16px jinak se automaticky priblizi a schovaji prvky

### Kosik
- Hover efekt kosiku by mel vizualizovat progress k doprave zdarma
- V hover efektu: odkaz na kategorii levnych produktu pro dosazeni dopravy zdarma (do 200 Kc)

### Menu
- Menu na mobilu musi mit IKONU 3 linek I TEXT "MENU" – nikoliv jen ikonu
- Menu nikdy nesmi pusobit jako neaktivni prvek, nikdy seda barva
- E-shopova a obsahova cast patri do JEDNOHO menu (ne oddelene)
- Hamburguer menu na desktopu je chyba – skryva navigaci a snizuje konverze
- Do 10 polozek: horizontalni navigace; 10 a vice polozek: vertikalni vlevo
- Testovat vliv banneru v menu (nejprodavanejsi produkt, aktualni kampan)

## HOMEPAGE

### Hero sekce a slider
- Staticke hero s JEDNOU silnou nabidkou a JEDNOU vyzvou k akci je lepsi nez slider
- Slider (pokud ho musi mit): kazdy banner musi mit JEDNOZNACNOU informaci o nabidce a TLACITKO
- Banner bez tlacitka snizuje klik-through rate
- Banner bez konkretni nabidky (jen "Pansky kolekce") = mrhani prostorem
- Banner blindness: lidi ignoruji vse co se hybne nebo pripomina reklamu

### USP – konkurencni vyhody
- USP musi byt na KAZDE vstupni strance (homepage, kategorie, produkt, kontakt, blog)
- Nejvetsi zajem navstevniku: doprava zdarma (od jake vyse) a rychlost doruceni
- Nad USP: brandovy nadpis ktery vas odlisi od konkurence
- Ke kazde vyhode pridat odkaz na stranku kde je vyhoda rozebrána (navstevnici neveri prazdnym tvrzenim)
- Analyzovat konkurenci minimalne jednou za 3-6 mesicu

### Pop-up okno
- Pop-up NIKDY hned pri prvni navsteve na mobilu (postih od Google + zahlceni + cookie hlaska)
- Pop-up okno musi mit ztmavene okoli aby navstevnik videl obsah okna

### Prezentace firmy
- Pokud nejste velky e-shop, prezentujte na homepage informace o firme a vasem pristupu
- Pribeh firmy, proc nakoupit u vas, kdo za e-shopem stoji = zvysuje duveryhodnost i SEO

## KATEGORIE

### Popis kategorie
- Popis kategorie: maximalne 3-5 vet, ne dlouhy SEO text ktery posouva produkty dolu
- Muze obsahovat TIP oddeleny od zakladniho popisu (napr. venostni program s odkazem)
- Odkaz na konfigurator nebo pruvodce vyberem v popisu pomaha konverzim

### Filtrace
- Vizualni prvky ve filtraci (ikony pohlavi, barevne ctverecky, material) = rychlejsi vyber
- Pojmy ve filtraci ktere navstevnik nezna: pridat ikonu "i" s tooltipem vysvetlenim
- U slozitych filtru: pridat odkaz na clanek kde navstevnik zjisti jak vybrat
- Pokud kategorie ma hodne produktu: pop-up okno vyzyvajici k filtrovani zvysuje konverze

### Razeni
- Minimalizovat moznosti razeni – jen to co navstevnici realne pouzivaji
- Standardni razeni: Nejprodavanejsi, Nejlevnejsi, Nejdrazsi, Nejnovejsi
- Moznost "Abecedne" uz skoro nikdo nepouziva – odebrat

### Vypis produktu
- Velka fotografie produktu – pokud ji nepoznam, nerozhodnu se
- Hodnoceni na vypisu: zobrazit pocet hvezdicek, hodnotu I pocet hodnoceni (zlatou barvou)
- Skladovost barevne odlisit: skladem (zelena), 3 dny (zelena), pozdeji (oranzova), vyprodano (cervena)
- Stitek sleva/vyprodej: vzdy musi byt doprovazen presskrtnutou cenou
- Hover efekt fotografie u vhodnych produktu (pohled zezadu, detail, produkt v prostredi)
- Stitky pro jednodussi vyber u prvnich 3-4 produktu (Lidovka, Zlata stredni cesta, Pro narocne)
- Banner misto jednoho produktu ve vypisu: podporuje kampane, max jeden na stranku
- Nacitani dalsich produktu: graficky progress bar ukazuje kolik jich jeste je

### Podkategorie
- Pod vypisem produktu znovu zobrazit podkategorie
- Navstevnik po prvnim proscrollovani si lepe uvidi co hledal a proklikne se hloubeji

## DETAIL PRODUKTU

### Fotografie
- Velka fotografie ma PRIMY vliv na konverzi – cim vetsi, tim lepe
- Minimum: 3-5 fotek ze vsech stran, 75 % zakazniku povazuje fotky za klicove
- Galerie muze obsahovat specialni vizualy (infografika, vysledky pouziti, porovnani pred/po)
- U designovych produktu: vice fotografii nad sebou v hlavni galerii
- Video produktu zvysuje konverze az o 80 % u slozitejsich produktu

### Perex a popis produktu
- Perex musi obsahovat to NEJDULEZITEJSI o produktu, ne kratky odbity text
- Priznaky produktu s ikonou berou vice pozornosti nez obycejny text
- NIKDY nepouzivat zalozky pro deleni obsahu (SEO ignoruje skryty obsah, navstevnici zalozky nepouzivaji)
- Misto zálozek: rozcestnik na strance ktery ukazuje jaky obsah navstevnik najde
- Fixni lista pri scrollovani: fotka produktu, cena, skladovost, CTA tlacitko

### Storytelling obsahu
- Na detailu produktu pracovat co nejlepe se storytellingem
- Vysvetlit co produkt umi, cim je zajimav, jake ma vlastnosti a vysledky
- Medialni obsah v popisu produktu (foto, video, gif) = body nahoru od Google a lepsi konverze
- Dostupnost skladem musi byt jasne viditelna

### Okoli konverzni cesty
- Zobrazit moznosti dopravy v blizkosti tlacitka "Pridat do kosiku" (klik = pop-up s metodami)
- Uvest kolik jeste nakoupit pro dopravu zdarma
- Zobrazit datum doruceni u kazde moznosti dopravy

### Interni prolinkovani
- Z detailu produktu musi vest odkazy na relevantni kategorie, filtrovane stranky, clanky
- Pomaha robotovi vyhledavani procházet web (crawl budget optimalizace)

## OBJEDNAVKOVY PROCES

### Kosik (prvni krok)
- Upsell v kosiku: nabidnout 3-5 levnych produktu (do 200 Kc) relevantních k objednavce
- U upsell produktu: fotografie, nazev, skladovost i cena pro spravny kontext
- Minimalizace slevoveho pole: schovat za checkbox misto otevreneho pole
- Otevrene pole pro slevovy kod laka navstevniky k hledani kodu na webu konkurence

### Slevovy kod jako strategie
- Vytvorit vlastni stranku "[znacka] slevovy kod" (neprolinkovana na e-shopu, jen SEO)
- Tato stranka zachyti navstevniky hledajici slevu a nabidne jim vlastni kod
- Napr. denatura.cz/slevovy-kod-denatura – stoji na 1. miste ve vyhledavani

### Hlavicka a paticka v objednavkovem procesu
- KRITICKA CHYBA: plnohodnotna paticka v checkoutu = mnozstvi odkazu = odchod
- Paticka v checkoutu: jen nejnutnejsi (kontakt, ochrana udaju, obchodni podminky)
- Hlavicka od druheho kroku: bez menu, bez vyhledavani, jen logo a kontakt
- Cil: navstevnik se musi soustredit POUZE na dokonceni objednavky

### Doruceni a platba
- Zobrazovat datum doruceni u KAZDE moznosti dopravy (ne jen "1-2 dny")
- Resi to jen polovina e-shopu – velka konkurencni vyhoda
- Zvlaste dulezite pred Vanoce
- KRITICKA CHYBA: neptejte se na dorucovaci adresu pri osobnim odberu
- Registraci navrhujte az na dekovaci strance, ne v checkoutu
- Zasilkovna vede (9 500 vydejnich mist) – vzdy ji mit jako moznost
- Minimalizuj pocet poli v formulari – kazde extra pole snizuje konverze

## FOOTER

### Struktura paticky
- Logicke cleneni do sekci: Zakaznicka podpora, O nas, Poradime vam
- Zakaznicka podpora: Kontakt, Prodejny, Doprava a platba, Sledovani zasilky, Reklamace, OP, GDPR
- O nas: Venostni program, Nas pribeh, Recenze, Nabidka pro firmy, Kariera
- Poradime vam: Blog/magazin, Poradna, Slovnik pojmu, FAQ, Nase znacky

### Osobni kontakt v paticce
- Osobni kontakt v paticce buduje duveryhodnost (fotka cloveka, jmeno, telefon)
- Plati to same co pro kontakt v hlavicce (mobilni cislo, cas dostupnosti)

### Dalsi prvky paticky
- Loga platebních metod a dopravcu = trust signal pro nezname e-shopy
- Loga socialnich siti = dalsi trust signal (e-shop je aktivni)
- Copyright: zobrazovat roky fungování ("2018-2026") ne jen aktualni rok
- Zobrazeni let na trhu zvysuje duveryhodnost u novych navstevniku

## OSTATNI STRANKY

### Stranka Kontakt
- Stranka kontaktu musi obsahovat sekci FAQ s odpovedi na nejcastejsi dotazy
- Snizuje pocet hovoru na zakaznickou podporu
- Clovek ktery najde odpoved sam = spokojeny zakaznik

### Stranka O nas / Nas pribeh
- Zakaznici stale vice chteji vedet u koho nakupuji – stranka O nas ovlivnuje konverzni pomer
- Obsahovat: kdo jste, proc jste zacali, jak pracujete, co vas odlisuje
- Vlastni pribeh + autenticky obsah = body nahoru od Google

### Vyhledavani slevoveho kodu
- Overit co se zobrazi pri hledani "[vase znacka] slevovy kod"
- Pokud jsou tam konkurencni agregatory, vytvorit vlastni vstupni stranku s kodem

## PRVNI DOJEM A DUVERYHODNOST
- Navstevnik si udela prvni dojem za 0,1 sekundy
- Halo efekt: krasny web = lepsi produkt v mysli zakaznika
- Nejdulezitejsi trust signaly: recenze, fotky realnych zakazniku, certifikaty, media
- Above the fold musi komunikovat: co prodavate, proc u vas, a vyzvu k akci

## RECENZE A SOCIALNI DUKAZ
- 92 % zakazniku cte recenze pred nakupem
- Perfektni 5.0 je podezrele – optimum je 4,2 az 4,7
- Recenze s fotkami konvertuji 2x lepe nez textove
- Pod 10 recenzi zakaznici neveruji; 50 a vice je solidni zaklad
- Hodnoceni zobrazovat zlatou barvou, s poctem hvezdicek, hodnotou i poctem

## CENOTVORBA A PSYCHOLOGIE CEN
- EU regulace 2023: zobrazuj nejnizsi cenu za poslednich 30 dni jako referencni
- Psychologicke ceny: 999 Kc je lepsi nez 1 000 Kc
- Kotvici cena: nejdrazsi varianta vlevo meni vnimani ostatnich cen
- Stitek sleva/vyprodej vzdy doprovadet presskrtnutou cenou

## MOBILNI VERZE
- Vice nez 60 % navstevniku prichazi z mobilu, ale jen 30 % tam nakoupi
- Kazda sekunda navic pri nacitani = 7 % pokles konverzi
- Thumb zone: nejdulezitejsi akce do spodni casti obrazovky
- Sticky kosik nebo CTA tlacitko vyrazne zvysuje mobilni konverze

## EMAILOVY MARKETING
- Opusteny kosik: serie 3 e-mailu (1h, 24h, 72h) – prumerna konverze 5-15 %
- Personalizace predmetu (jmeno zakaznika) zvysuje open rate o 26 %
- Ziskat noveho zakaznika stoji 5-7x vice nez udrzet stavajiciho

## A/B TESTOVANI
- Mene nez 1 000 konverzi za mesic = A/B testovani nema smysl
- Nejlepsi veci k testovani: nadpis, text CTA, cena dopravy, poradi produktu
- Statisticka signifikance minimalne 95 %

## DARK PATTERNS
- Skryte poplatky v poslednim kroku = nejcastejsi duvod opusteni kosiku
- Predvybrane souhlasy s newsletterem jsou v EU ilegalni
- Falsna urgence poskozuje brand dlouhodobe

## PRISTUPNOST (EU zakon od cervna 2025)
- Od cervna 2025 povinna pristupnost pro e-shopy nad urcitou velikost
- Minimalni velikost dotykove plochy: 7x7 mm s 2mm rozestupy
- Kontrastni pomer textu: minimalne 4,5:1 pro normalni text
- Formulare: labely musi byt viditelne, ne jen placeholder ktery zmizi pri psani
`

async function fetchPageMeta(url) {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CROBot/1.0; +https://cro-report.vercel.app)',
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
    const { clientUrl, withClarity } = await req.json()

    if (!clientUrl) {
      return new Response(
        JSON.stringify({ error: 'Chybi URL klienta' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API klic neni nastaven' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const pageMeta = await fetchPageMeta(clientUrl)

    let metaContext = ''
    if (pageMeta) {
      metaContext = `\nREALNA DATA ZISKANA ZE STRANKY KLIENTA (pouzij v analyze):\n`
      if (pageMeta.title) metaContext += `- Title stranky: "${pageMeta.title}"\n`
      if (pageMeta.description) metaContext += `- Meta description: "${pageMeta.description}"\n`
      if (pageMeta.h1) metaContext += `- Hlavni nadpis (H1): "${pageMeta.h1}"\n`
      if (pageMeta.h2Count !== undefined) metaContext += `- Pocet H2 nadpisu: ${pageMeta.h2Count}\n`
      if (pageMeta.hasSchema !== undefined) metaContext += `- Structured data (schema.org): ${pageMeta.hasSchema ? 'ANO' : 'NE'}\n`
      if (pageMeta.canonical) metaContext += `- Canonical URL: ${pageMeta.canonical}\n`
      metaContext += `Komentuj tyto udaje primo v analyze.\n`
    } else {
      metaContext = `\nMeta data stranky se nepodarilo nacist. Analyzu postav na zaklade URL a kategorie produktu.\n`
    }

    const clarityInstruction = withClarity
      ? `Klient MA pristup do Microsoft Clarity. U kazde kriticke nebo vysoke priority uved jak ji overit v Clarity datech.`
      : `Klient NEMA pristup do Microsoft Clarity. Doporuc zavedeni Clarity jako quick win.`

    const now = new Date()
    const dateStr = now.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })
    const dateInstruction = `Dnesni datum je ${dateStr}. Pokud uvadis datum analyzy, pouzij VZDY toto datum.`

    const systemPrompt = `Jsi KRIS – Knowledge-based Report Intelligence System, expert CRO analytik e-shopu metodologie ESHOP BOOSTER.

Tvoje znalostni baze:
${KRIS_KNOWLEDGE_BASE}

TVOJE ULOHA: Analyzuj e-shop klienta na zaklade jeho URL a vytvor strukturovanou CRO analyzu. Pis v cestine, konkretne a akcionovatelne. Kazde doporuceni musi byt specificke pro TENTO e-shop a jeho kategorii produktu.

${metaContext}

${clarityInstruction}

${dateInstruction}

DULEZITE PRAVIDLO 1 – NO DASH RULE (ABSOLUTNI ZAKAZ): Ve svem vystupu NIKDY nepouzivej znak pomlcky jako oddelovac nebo dekoraci. Zakazane znaky: en dash (–), em dash (—), pomlcka jako oddelovac. Jedina vyjimka: pomlcka uvnitr slova (e-shop, self-service). Misto oddelovacu pouzivej VZDY dvojtecku nebo novy radek.

DULEZITE PRAVIDLO 2 – NO VERSION FOOTER: Na konci analyzy NIKDY nepridavej verzi, nazev systemu ani zkratky jako KRIS, ESHOP BOOSTER apod.

DULEZITE PRAVIDLO 3 – KONKRETNOST: Kazde doporuceni musi obsahovat:
a) PRESNY POPIS problemu (konkretni prvek, stranka, sekce)
b) KONKRETNI RESENI s kroky
c) OCEKAVANY DOPAD v % nebo Kc

POVINNÁ STRUKTURA ANALYZY (pouzivej presne tato klicova slova):

SKORE E-SHOPU
[Cele cislo 0-100]
Prvni dojem a duveryhodnost: X/10
Produktove stranky: X/10
Navigace a vyhledavani: X/10
Kosik a checkout: X/10
Mobilni verze: X/10
Trust signaly a recenze: X/10
Cenotvorba: X/10
Copywriting a obsah: X/10
[2-3 vety komentar ke skore]

CO DELA DOBRE
1. [Konkretni silna stranka]
   Proc to funguje: [CRO princip]
2. [Dalsi silna stranka]
   Proc to funguje: [vysvetleni]
3. [Dalsi silna stranka]
   Proc to funguje: [vysvetleni]

KRITICKE PRIORITY
1. [Presny nazev problemu a kde se nachazi]
   Proc to boli: [dopad na konverze s ciselnym odhadem]
   Jak opravit: [krok za krokem]
   Odhadovany dopad: [% nebo Kc]
   ${withClarity ? 'Jak overit v Clarity: [presna instrukce]' : ''}

VYSOKA PRIORITA
1. [Doporuceni s konkretnim popisem]
   Dopad: [odhad]
   Jak na to: [konkretni kroky]
   ${withClarity ? 'Clarity signal: [co hledat]' : ''}

STREDNI PRIORITA
1. [Doporuceni]
   Jak na to: [kroky]

QUICK WINS (do 1 tydne)
1. [Konkretni rychla zmena]

Oblasti analyzy: homepage a prvni dojem, produktove stranky a fotografie, navigace a kategorie, kosik a checkout, trust signaly a recenze, mobilni verze, cenotvorba, copywriting a obsah, title a meta description, Google skore kvality vstupni stranky, duveryhodnostni matice.`

    const userMessage = `Priprav kompletni KRIS CRO analyzu pro e-shop: ${clientUrl}

Bud maximalne konkretni: pojmenuj konkretni prvky webu, uved cisla a kroky. Analyza musi byt primo pouzitelna jako akcni plan pro majitele e-shopu.`

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
      return new Response(
        JSON.stringify({ error: 'Chyba Anthropic API: ' + err }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
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
              if (
                parsed.type === 'content_block_delta' &&
                parsed.delta?.type === 'text_delta'
              ) {
                const chunk = parsed.delta.text
                await writer.write(
                  encoder.encode(`data: ${JSON.stringify({ chunk })}\n\n`)
                )
              }
            } catch {
              // ignoruj nevalidni JSON radky
            }
          }
        }
        await writer.write(encoder.encode('data: [DONE]\n\n'))
      } catch (err) {
        await writer.write(
          encoder.encode(`data: ${JSON.stringify({ error: err.message })}\n\n`)
        )
      } finally {
        await writer.close()
      }
    })()

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e.message || 'Neznama chyba' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
