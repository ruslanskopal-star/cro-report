import { NextResponse } from 'next/server'

// ============================================================
// KRIS - Knowledge-based Report Intelligence System
// Engine postavený na metodologii ESHOP BOOSTER
// Verze 6.0 – streaming SSE, 55+ znalostních sekcí
// + David Šimák "UX bez smyslu" (Grizly, 2025)
// + AI a SEO 2026 (Czech Online Expo, Kvasnička)
// + Microsoft Clarity metodologie (Vojta Mikula, Picards)
// ============================================================

export const maxDuration = 60

const KRIS_KNOWLEDGE_BASE = `
# KRIS ZNALOSTNÍ BÁZE v6 – ESHOP BOOSTER METODOLOGIE

## PRVNÍ DOJEM A DŮVĚRYHODNOST
- Návštěvník si udělá první dojem za 0,1 sekundy – vizuální kvalita webu přímo ovlivňuje vnímanou důvěryhodnost
- Halo efekt: krásný web = lepší produkt v mysli zákazníka, i když to není pravda
- Nejdůležitější trust signály: recenze, fotky reálných zákazníků, certifikáty, média ve kterých se e-shop objevil
- "Above the fold" musí okamžitě komunikovat: co prodáváte, proč u vás, a výzvu k akci
- Social proof "above the fold": počet zákazníků, hodnocení, loga médií/partnerů

## OHYB STRÁNKY (The Fold) – KRITICKÁ ZÓNA
- Google studie inzerátů: nad ohybem je obsah viditelný v 68 % případů, pod ohybem jen ve 40 %
- Nielsen Norman: průměrný rozdíl v pozornosti nad vs. pod ohybem = 84 % ve prospěch obsahu nad ohybem
- Nejlepší pozice CTA: těsně nad ohybem nebo přímo v první obrazovce
- Uživatelé skrolují POUZE pokud je obsah první obrazovky dostatečně motivující
- Každá druhá polovina inzerátů na internetu nebude nikdy nikým spatřena (špatné umístění)

## SLIDER NA HOMEPAGE – PROČ NEFUNGUJE
- Banner blindness: lidi ignorují vše co se hýbe nebo připomíná reklamu – slider dělá oboje najednou
- Kobercový nálet sdělení: místo jednoho silného sdělení bombardujete zákazníka více nekonkrétními sděleními
- Zpomaluje načítání a odvádí pozornost od konverze
- Řešení: statický hero banner s JEDNOU silnou nabídkou a JEDNOU výzvou k akci
- Pokud musíte mít slider: personalizujte – 1.–2. návštěva = průřez sortimentem + výhody; 3.+ = oblíbené kategorie + akce

## SLOGAN A POSITIONING
- 90 % sloganů jsou prázdné fráze: "Vaše spokojenost je naší prioritou", "Kvalita, které věříte"
- Dobrý slogan říká CO děláte pro KOHO a PROČ je to jiné – ne jak se cítíte jako firma
- Test: zakryjte logo a dejte slogan konkurenci – pokud pasuje, slogan nic neříká
- Místo sloganu testujte konkrétní value proposition: "Doručíme do 24h nebo vrátíme peníze"
- 3 otázky pro dobrý slogan: Pro koho? Co přesně? Proč zrovna my?

## KONKURENČNÍ VÝHODA A DIFERENCIACE
- Většina firem tvrdí totéž: kvalita, servis, cena – to není diferenciace
- Skutečná diferenciace: specializace na niku, rychlost, komunita, udržitelnost, garance
- Konkurovat pouze cenou je sebevražda – vždy přijde někdo levnější (Čína, Amazon)
- Brand funguje jako placebo – stejný produkt s lepším brandem zákazníci vnímají jako kvalitnější
- AirBnB efekt: stejné bílé layouty, stejné sans-serif fonty → weby jsou zaměnitelné a neviditelné
- Bezpečný design = průměrný design = neviditelný design; záměrně porušte jednu konvenci

## PSYCHOLOGIE STATUSU V NÁKUPECH
- Téměř každý nákup má složku statusu – co o mně říká to, co kupuji?
- Luxusní zboží: zákazník nekupuje produkt, kupuje status a příslušnost ke skupině
- Cena jako signál kvality: příliš nízká cena u prémiového produktu snižuje vnímanou hodnotu
- Veblenův efekt: u luxusního zboží vyšší cena = vyšší poptávka (opak běžného trhu)
- Prémiové balení, limitované edice, exkluzivní přístup, personalizace zvyšují vnímaný status

## LUXUS A PRÉMIOVÉ E-SHOPY
- Prémiové značky: NIKDY plošné slevy (poškozují brand), raději limitované edice a exkluzivní nabídky
- Fotografie: vždy lifestyle, vždy nejvyšší kvalita, detail materiálů a řemesla (craftsmanship)
- Copywriting luxusu: smyslový jazyk, příběh produktu, původ materiálu
- Zákaznická péče u luxusu: osobní přístup je nutnost, ne bonus
- Veblenův efekt: neslevujte prémiové produkty – cena je součástí hodnoty

## PSYCHOLOGIE DÁRKŮ A VÁNOCE
- Obdarovaný si váží dárku průměrně jen na 82 % jeho skutečné ceny (studie)
- Peněžní dárky a poukazy mají nejnižší vnímanou hodnotu – i když jsou prakticky nejflexibilnější
- Produkty s příběhem (odkud pochází, jak vznikly) mají vyšší vnímanou hodnotu
- Pro e-shopy: dárkové balení, průvodní text na přání, možnost skrytí ceny = zvyšují konverzi
- Vánoce: zákazníci jsou ochotni platit více a nakupují impulzivně
- Deadlines doručení (poslední termín objednání před Vánoci) = silný konverzní element

## PRODUKTOVÉ STRÁNKY A FOTOGRAFIE
- 75 % zákazníků považuje fotky za klíčové při rozhodování o koupi (Weebly)
- 58 % zákazníků chce vidět produkt ze všech stran – minimum jsou 3–5 fotek
- Každý 5. zákazník vrátí produkt, protože fotka neodpovídala realitě
- Lifestyle fotky (produkt v kontextu) výrazně zvyšují konverze u oblečení, doplňků, nábytku
- Zoom funkce na produktových fotkách je nutnost
- Video produktu zvyšuje konverze až o 80 % u komplexnějších produktů
- Popis produktu: zákazníci nečtou, skenují. Bullet pointy > odstavce. Nejdůležitější info první.
- Dostupnost skladem musí být jasně viditelná (zelená = skladem, červená = vyprodáno)

## VYPRODANÉ PRODUKTY – SPRÁVNÝ POSTUP
- Dočasně nedostupný produkt bez alternativy = 99 % uživatelů odchází ke konkurenci okamžitě
- Tlačítko "Přidat do košíku" které nic nedělá = NEJHORŠÍ možný stav – vždy ho deaktivujte nebo skryjte
- Víte kdy naskladníte: dejte možnost objednat s delší dodací lhůtou NEBO formulář "Hlídací pes"
- Nevíte kdy: nabídněte alternativní produkty, přesměrujte, dejte "Hlídací pes – pošleme e-mail"
- Trvale vyprodané produkty: NESMAZÁVEJTE stránku (SEO hodnota), přesměrujte na alternativy
- Specifická velikost/varianta není skladem: upozornění jen pro danou variantu, ostatní zůstanou dostupné

## NAVIGACE A KATEGORIE
- Hamburger menu na desktopu je chyba – skrývá navigaci a snižuje konverze
- Do 10 položek: horizontální navigace; 10+ položek: vertikální navigace vlevo (vzor: Alza – 20 kategorií)
- Uživatelé tráví pohledem 80 % času na levé části obrazovky
- Drobečková navigace: lokační (kde jste) a atributová (aktivní filtry)
- Interní vyhledávání: zákazníci kteří vyhledávají konvertují 2–3× lépe než ti co browsují

## INTERNÍ VYHLEDÁVÁNÍ NA E-SHOPU
- Zákazníci kteří použijí vyhledávání konvertují 2–3× lépe – prioritizujte tuto funkci
- Autocomplete/suggest: zobrazujte nejen texty ale i produkty s obrázkem přímo v našeptávači
- Nulové výsledky = promarněná příležitost: nabídněte alternativy, podobné produkty, kontakt
- Sledujte co zákazníci vyhledávají = zlatý důl pro merchandising a sortiment
- Překlepy a synonyma: vyhledávač musí rozumět "tricko" i "tričko", "iphone" i "iPhone"

## MEGA MENU – 10 PRAVIDEL
- Maximálně 3 úrovně; 4. úroveň řešte uvnitř stránek kategorií
- Musí se vejít na jednu obrazovku – co se nevejde, odstraňte
- Každá kategorie musí být klikací (ne jen rozcestník)
- Ikony kategorií pomáhají orientaci a rychlosti skenování
- Card sorting s reálnými uživateli: nechte zákazníky seskupit produkty dle vlastní logiky (OptimalSort)
- Tree testing: 30 uživatelů, 10 otázek – ověří zda zákazníci najdou co hledají
- Používejte slovník zákazníků, ne interní terminologii firmy

## DROPDOWN MENU – LEPŠÍ ALTERNATIVY
- Dropdown skrývá možnosti = zvyšuje kognitivní zátěž
- Lepší alternativy pro 2–5 možností: radio buttony, segmented control, karty/dlaždice
- Pro 6+ možností: vyhledávání s autocomplete > dropdown
- Výběr pohlaví: nikdy dropdown – radio buttony nebo karty
- Výběr roku narození: přímé textové pole (type="number")

## IKONY – PRAVIDLA POUŽITÍ
- Ikony bez popisků jsou hazard – uživatelé je neznají tak jak si myslíme
- Výjimky (fungují i bez textu): lupa, košík, hamburger menu, hvězdička, domek
- Ikony s popiskem vždy > ikony bez popisku
- Testujte zda uživatelé ikonu správně identifikují: stačí 5 uživatelů

## A/B TESTOVÁNÍ – KDY, JAK, KOLIK VYDĚLÁ
- Méně než 1 000 konverzí/měsíc = A/B testování nemá smysl; iterujte bez testování
- Průměrné ROI A/B testování: 223 % (dle dostupných studií)
- Nejčastější první test: barva CTA tlačítka – je to plýtvání; testujte raději nadpisy a layout
- Statistická signifikance min. 95 %, ideálně 99 %
- Testujte vždy jen jednu hypotézu s jasným důvodem
- Nejlepší věci k testování (sestupně): nadpis/headline, text CTA, cena dopravy, pořadí produktů

## A/A TESTOVÁNÍ – PŘED KAŽDÝM A/B TESTEM
- A/A test = testujete dvě identické verze stránky – žádná změna obsahu
- Ověříte: správnou implementaci nástroje, míru šumu v datech, absenci bias
- Pomáhá nastavit minimální detekovatelný efekt (MDE) pro následné A/B testy
- Proveďte A/A test před prvním A/B testem a průběžně při změně nástroje

## MIKROTEXTY A UX COPYWRITING – KONKRÉTNÍ ČÍSLA
- Změna 3 slov v nadpisu = +10 % obratu (dokumentovaný případ z praxe)
- Veeam: "Request a quote" → "Request pricing" = +161,66 % prokliků na CTA
- Google ubytování: "Book a room" → "Check availability" = +17 % engagement
- Chybové hlášky: konkrétní + přátelské + nápomocné ("Zadejte e-mail ve formátu jmeno@email.cz")
- Prázdné stavy jsou konverzní příležitost – nabídněte alternativu, ne jen "Nic jsme nenašli"
- Tlačítko musí říkat co se stane po kliknutí: "Získat nabídku zdarma" > "Odeslat"
- Headline na landing page je nejdůležitější element – testujte jako první

## POP-UPY – CO FUNGUJE A CO NE (analýza 2 miliard pop-upů)
- Top 10 % pop-upů nabízejí něco užitečného a relevantního ke konkrétní stránce
- Dokumentované konverze lead magnet pop-upů: šablony e-mailů = 61 %; srovnání košíků = 47 %
- Newsletter pop-up: zobrazujte až po přečtení alespoň 50 % článku
- Exit intent pop-up: poslední šance pro nabídku dopravy zdarma nebo slevy
- Podmínky dobrého pop-upu: správný timing + relevantní obsah + snadné zavření + hodnotná nabídka

## VÝČITKY PO NÁKUPU (Buyer's Remorse)
- Buyer's remorse = přirozený jev, který lze aktivně omezit post-purchase komunikací
- 14 dní na vrácení: komunikujte jako silnou výhodu, ne jen jako právní povinnost
- Jak omezit: potvrzovací e-mail "Udělali jste skvělé rozhodnutí", social proof i po nákupu, snadné vrácení
- Čím starší zákazník, tím více výčitek – potřebují více ujištění

## ZDRAŽENÍ – JAK KOMUNIKOVAT A NEPŘIJÍT O ZÁKAZNÍKY
- Nikdy neoznamujte zdražení až na faktuře (případ Hotjar: +400 % bez upozornění = hromadný odliv)
- 5 legitimních důvodů ke zdražení: zlepšení produktu, nikdo se nehádá o cenu, výrazné ROI pro klienty, 3–12 měsíců od posledního zdražení, záporná rentabilita
- Bezpečná míra zdražení: do 10–15 %
- Oznámení: dopředu s vysvětlením a možností prepay za staré ceny

## LEAD MAGNET A CONTENT UPGRADE
- Lead magnet = hodnotný obsah zdarma výměnou za e-mail; funguje 2–4× lépe než pouhý formulář
- Content upgrade k danému článku konvertuje 2–4× lépe než obecný lead magnet
- Nejlepší formáty: checklisty, šablony, srovnávací tabulky, kalkulačky, průvodci

## LOAJALITA ZÁKAZNÍKŮ – CO OPRAVDU FUNGUJE
- Nadšení zákazníci ≠ loajální zákazníci
- Slevy NEbudují loajalitu – přitahují cenově citlivé zákazníky závislé na slevách
- Loajalitu buduje: konzistentní zkušenost, rychlé řešení problémů, komunita, sdílené hodnoty
- NPS: sledujte trend v čase, ne jen absolutní číslo
- United Airlines případ: jeden negativní virální zážitek = ztráta 180M USD tržní hodnoty

## STRÁNKA "O NÁS"
- 3.–5. nejnavštěvovanější stránka e-shopu – ignorovat ji je strategická chyba
- Musí obsahovat: proč firma existuje, příběh zakladatele s fotkou, tým, hodnoty, kontakt
- Příběh zakladatele zvyšuje důvěryhodnost a emocionální vazbu
- Buďte lidští, konkrétní a autentičtí

## CHECKOUT A OBJEDNÁVKOVÝ PROCES (analýza 200 e-shopů)
- Zásilkovna vede (9 500 výdejních míst); Česká pošta klesá kvalitou
- Doporučení: 3 dopravci na adresu + 2 na výdejny; sjednoťte výdejní místa do jedné položky s mapou (dělá to jen 10 %)
- Ceny dopravy: průměr 96 Kč na adresu, 70 Kč výdejní místo. Doporučení: 99 Kč / 69 Kč
- Datum doručení: zobrazujte u každé dopravy – dělá to jen polovina e-shopů
- Doprava zdarma od hranice: nabízí 75 % e-shopů, medián je 1 500 Kč
- Vzorec pro hranici dopravy zdarma: AOV + (cena dopravy / marže). Příklad: 1 250 + (69 / 0,3) = 1 480 Kč
- KRITICKÁ CHYBA: neptejte se na doručovací adresu při osobním odběru (54 % e-shopů to dělá)
- Pamatujte si vyplněné údaje (56 % e-shopů si to nepamatuje)
- Registraci navrhujte až na děkovací stránce – stačí se zeptat na heslo (dělá to jen 15 % e-shopů)
- Obchodní podmínky: "Kliknutím na Koupit souhlasíte s OP" místo checkboxu
- Minimalizujte počet polí ve formuláři – každé extra pole snižuje konverze
- U dobírky uveďte "lze platit hotově i kartou" (70 % e-shopů tuto info nemá)

## PŘÍSTUPNOST A TESTOVÁNÍ UX
- Od června 2025 povinná přístupnost pro e-shopy nad určitou velikost (EU zákon)
- Testování s levou rukou: simuluje omezenou motoriku – odhalí problémy s velikostí prvků
- Snížená svítivost displeje při testování: odhalí problémy s kontrastem
- Minimální velikost dotykové plochy na mobilu: 7 × 7 mm s 2mm rozestupy
- Kontrastní poměr textu: minimálně 4,5:1 pro normální text, 3:1 pro velký text
- Formuláře: labely musí být viditelné – ne jen placeholder který zmizí při psaní
- 5 uživatelů odhalí 85 % UX problémů (Jakob Nielsen)

## UŽIVATELSKÝ VÝZKUM – JAK SE SPRÁVNĚ PTÁT
- Většina UX výzkumů je znehodnocena sugestivními otázkami
- Špatná otázka: "Líbí se vám náš nový design?" → zákazník řekne ano ze slušnosti
- Správná otázka: "Popište mi, jak byste postupovali při hledání produktu X" → behaviorální, otevřená
- Nikdy nezačínejte rozhovor ukázkou řešení – nejdřív zmapujte problém a současné chování
- Ptejte se na minulé chování, ne na hypotetické budoucí ("Koupili byste to?" je bezcenné)
- 5 uživatelů odhalí 85 % UX problémů – nepotřebujete velký vzorek

## PSYCHOLOGIE POZORNOSTI A SOUSTŘEDĚNÍ
- Uživatel udrží soustředění při složitém úkolu cca 20 minut; při pasivním browsování jen 8 sekund
- Systémová reakce do 100ms: uživatel vnímá jako okamžitou; 1s+ = frustrace a opuštění
- Nenutťe uživatele přepínat kontext: potvrzení e-mailu mimo web = ztráta až 40 % uživatelů
- Zobrazujte důležité informace ve středu obrazovky nebo jako overlay – ne jako novou záložku

## REGISTRACE A PŘIHLAŠOVÁNÍ
- Registrace při objednávce = konverzní killer; nabízejte nákup bez registrace vždy
- Guest checkout je nutnost – zákazník se zaregistruje sám pokud bude chtít
- Registraci navrhujte až na děkovací stránce (1 pole: "Uložit vaše údaje? Zadejte heslo:")
- Sociální login (Google, Facebook) = méně tření, více konverzí
- Zapomenuté heslo: posílejte reset link, ne dočasné heslo

## PRŮMĚRNÁ HODNOTA OBJEDNÁVKY (AOV)
- Zvyšovat AOV: upsell/cross-sell, balíčky, množstevní slevy, doplňkové služby
- Hranici dopravy zdarma nastavte mírně nad průměrnou AOV – zákazník si přiloží produkt
- POZOR: agresivní slevy zvyšují AOV, ale snižují marži – sledujte marži na objednávku, ne jen AOV
- Multibuy optimalizace (případ nebe.cz): správně nastavené množstevní slevy → +20 % CR, +51 % AOV
- Multibuy pravidlo: velký skok až u 4.–5. kusu (ne lineárně), zákazník tak přeskakuje rovnou na vyšší tier

## RECENZE A SOCIÁLNÍ DŮKAZ
- Recenze jsou nejsilnější trust signál – 92 % zákazníků čte recenze před nákupem
- Perfektní 5.0 je podezřelé – optimum je 4,2–4,7
- VAROVÁNÍ: příliš perfektní hodnocení (4,85+) může SNIŽOVAT konverze – zákazník nevěří (případ nebe.cz: 4,85 hvězd → -9 % CR)
- Recenze s fotkami konvertují 2× lépe než textové
- Odpovídejte na negativní recenze veřejně
- Pod 10 recenzí zákazníci nedůvěřují; 50+ je solidní základ
- Recenze žádejte e-mailem 7–14 dní po doručení = nejvyšší response rate
- Nikdy nesuplujte nedokonalé recenze reklamami ani koupenou důvěrou

## CENOTVORBA A PSYCHOLOGIE CEN (EU regulace 2023)
- EU regulace: zobrazujte nejnižší cenu za posledních 30 dní jako referenční
- Škrtnutá cena musí být skutečná předchozí cena
- Psychologické ceny: 999 Kč > 1 000 Kč; zaokrouhlené ceny = signál luxusu
- Kotevní cena: nejdražší varianta vlevo mění vnímání ostatních cen
- Příliš velká sleva snižuje vnímanou kvalitu produktu

## PŘÍPADOVKA: TRENÝRKÁRNA – FILTROVÁNÍ DLE CLARITY DAT
- Filtry seřazeny podle skutečné používanosti (MS Clarity): Velikost → Značka → Barva
- Použité filtry viditelné na začátku výpisu + tlačítko "Zrušit vše"
- Barvy jako barevné puntíky (ne text)
- Pamatování vybrané velikosti z filtru do detailu produktu

## PŘÍPADOVKA: ČESKÁ POJIŠŤOVNA – REDESIGN ZA 7 TÝDNŮ
- Navigace musí odpovídat mentálnímu modelu zákazníka, ne org. struktuře firmy
- Kalkulačka: nejasný aktivní stav, neklikatelné prvky vypadající klikatelně, 5–10s načítání bez progress baru

## PŘÍPADOVKA: FAKTUROID A SPA.CZ
- Fakturoid: +48,3 % registrací – zjednodušení onboardingu a jasný value prop
- Spa.cz: +21,5 % objednávek – lepší filtrování, důvěryhodnost, mobilní verze
- Redesign = odstranění konverzních bariér, ne nový vizuál

## AMAZON – INOVACE V LOGISTICE A E-COMMERCE
- Amazon Go (bezpokladenní obchody): kamery + počítačové vidění; platba automatická při odchodu
- Amazon má 10 000+ aktivních patentů (2023) – desetinásobek oproti roku 2000
- Anticipated shipping: balíčky odesílány ještě před objednávkou na základě AI predikce
- Lekce pro e-shopy: logistika je nejsilnější Amazonova výhoda – konkurujte specializací a zákaznickým zážitkem, ne cenou

## DESIGN ZÁKLADY PRO VÝVOJÁŘE A NEDESIGNÉRY
- Bílý prostor (whitespace) = aktivní designový prvek zvyšující čitelnost, ne prázdné místo
- Zarovnání: vše na stránce by mělo být zarovnáno na skrytou mřížku
- Typografie: maximálně 2 řezy písma; jasná hierarchie (H1 > H2 > body)
- Primární akční barva: jen pro nejdůležitější akce (CTA tlačítko)
- Gestalt principy: blízkost (co je blízko = patří k sobě), podobnost, kontinuita
- Vizuální hierarchie: zákazníkovo oko sleduje design, ne obsah – navrhněte cestu očí

## IKEA EFEKT – PSYCHOLOGIE VLASTNICTVÍ
- Produkty které sami sestavíme/vytvoříme si ceníme více (Norton, Mochon, Ariely)
- Aplikace na e-shop: konfigurátor produktu, personalizace, sestavení vlastního balíčku
- Optimální obtížnost: středně náročné s jasně viditelným výsledkem
- Konfigurátor zvyšuje vnímanou hodnotu a snižuje pravděpodobnost vrácení

## MOBILNÍ VERZE
- Více než 60 % návštěvníků e-shopů přichází z mobilu, ale jen 30 % tam nakoupí
- Formuláře: správný typ klávesnice (type="tel", type="email", type="number")
- Tlačítka: minimální 44×44 px, dostatečné mezery
- Sticky košík / CTA tlačítko výrazně zvyšuje konverze
- Každá sekunda navíc při načítání = 7 % pokles konverzí
- Thumb zone: nejdůležitější akce do spodní části obrazovky
- Vyhněte se animacím a paralax scrollingu na mobilu (motion sensitivity, výkon)

## EMAILOVÝ MARKETING A RETENCE
- Získat nového zákazníka stojí 5–7× více než udržet stávajícího
- Opuštěný košík: série 3 e-mailů (1h, 24h, 72h) – průměrná konverze 5–15 %
- Personalizace předmětu (jméno zákazníka) zvyšuje open rate o 26 %
- Post-purchase sekvence: potvrzení + benefity → tracking → cross-sell po doručení → recenze po 7–14 dnech

## DARK PATTERNS – ČEHO SE VYVAROVAT
- Skryté poplatky v posledním kroku = nejčastější důvod opuštění košíku
- Předvybrané souhlasy s newsletterem nebo pojištěním jsou v EU ilegální
- Falešná urgence poškozuje brand dlouhodobě
- Confirmshaming, roach motel, skryté předplatné = regulatorní riziko (EU DSA)

## DESIGN JE MANIPULACE – PSYCHOLOGIE
- Každé UX rozhodnutí ovlivňuje chování uživatele – design nikdy není neutrální
- Nudge theory: malé podněty vedou k žádoucímu chování
- Barvy: červená = urgence, zelená = bezpečí/potvrdit, modrá = důvěra
- F-pattern a Z-pattern: nejdůležitější info do levého horního rohu
- FOMO: omezená dostupnost zvyšuje hodnotu; Endowment effect: "30 dní na vrácení" funguje

## CHECKBOXY A PRÁVNÍ UX
- Příliš mnoho souhlasů frustruje uživatele a snižuje konverze
- Předvybrané souhlasy jsou v EU ilegální
- Souhlas s OP: "Kliknutím na Koupit souhlasíte s OP" místo checkboxu

## PŘEDPLATNÉ A SUBSCRIPTION MODELY
- Roční předplatné vydělá 2× více při správném nastavení ceny a komunikace
- Úspora musí být okamžitě zřejmá v Kč i v %
- Nejlepší moment pro nabídku ročního: ihned po registraci a při 1. obnově měsíčního

## AI A AUTOMATIZACE V E-COMMERCE
- AI personalizace doporučení zvyšuje AOV průměrně o 10–30 %
- Chatboty: fungují pro FAQ, selhávají u komplexních problémů
- Automatizace e-mailových sekvencí = nejvyšší ROI z automation

## OBSAH KTERÝ DLOUHODOBĚ ZVYŠUJE PRODEJE
- Vzdělávací obsah buduje autoritu a organický traffic – nejlevnější dlouhodobý marketing
- Nejlepší formáty: průvodci "jak na X", srovnání produktů, případové studie, FAQ
- Evergreen obsah >> trendový obsah pro dlouhodobé výsledky
- Produktový obsah: řešení konkrétního problému zákazníka > technické parametry

## AI A SEO 2026 (Czech Online Expo – Kvasnička)
- Google AI Overview přepisuje tradiční SEO: featured snippety nahrazeny AI shrnutím
- AI generovaný obsah > 60 % na stránce = riziko Google penalizace za nízkou originalitu
- Skóre kvality vstupní stránky (Landing Page Quality Score): 1–99, ovlivňuje cenu za klik
- Faktory skóre: relevance obsahu ke klíčovému slovu, rychlost, mobilní UX, bezpečnost
- Stránky s nízkým skóre platí za inzerci 3–5× více než stránky s vysokým skóre
- Doporučení: originální obsah psaný pro lidi (ne pro boty), struktura odpovídající záměru vyhledávání
- Google E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness – přidávejte autory s credentialami
- AI Overview přebírá traffic: optimalizujte pro "nulté kliknutí" – buďte zdrojem který AI cituje

## MICROSOFT CLARITY METODOLOGIE (Vojta Mikula, Picards)
- Clarity je zdarma + bez limitu dat + GDPR compliant – výmluva "nemám nástroj" neplatí
- 3 kroky k insightům: (1) Instalace přes GTM za 5 minut, (2) Čtení heatmap, (3) Analýza nahrávek
- Rage clicks = uživatel kliká zuřivě na prvek → signál broken functionality nebo frustrace z UX
- Dead clicks = klikání na neklikatelné prvky → zákazník si myslí, že to funguje (a nefunguje)
- Scroll heatmapa: kde většina uživatelů přestane scrollovat = tam je "skutečný fold" (ne design fold)
- Session recordings: filtrujte dle "Rage clicks" nebo "Quick backs" (opuštění do 3 sekund) = nejrychlejší cesta k problémům
- IKEA případ (Clarity): heatmapa odhalila, že zákazníci klikali na dekorativní obrázek produktu – přidali link → +8 % CTR
- Kampaňová LP případ: scroll heatmapa ukázala 70 % odpad nad formulářem → přesunuli CTA výše → +23 % konverzí
- Objednávkový funnel: nahrávky odhalily zákazníky kteří scrollují nahoru v checkoutu → chybějící info výše v procesu
- Praktické workflow: každý týden 10 nahrávek zákazníků kteří nedokončili objednávku → prioritní backlog UX fixů
- Clarity + GA4 kombinace: Clarity vysvětlí PROČ se čísla v GA4 dějí, GA4 řekne CO se děje

## FEATURE FACTORY PAST – PROČ STAVÍME VĚCI KTERÉ NIKDO NECHCE
- Feature Factory = organizace která vyrábí funkce protože MŮŽE, ne protože zákazník CHCE
- 80 % funkcionalit v průměrném SaaS produktu je zákazníky málokdy nebo nikdy použito (Pendo 2019, saasfactor 2026)
- 64 % funkcionalit v zakázkových aplikacích se nepoužívá vůbec (Chaos Report, Standish Group 2002)
- Průměrná investice veřejně obchodovaných SaaS firem do nevyužitých funkcí: 29,5 miliard USD
- Symptomy Feature Factory: roadmapa je seznam funkcí (ne seznam problémů), slavíme release (ne výsledek), testujeme na konci (nebo vůbec)
- Otázky před každou novou funkcí: Řeší to reálný problém zákazníka? Kolik zákazníků to potřebuje? Jak to poznáme že to funguje?
- Doporučení: Roadmapu stavějte z problémů, ne řešení. "Snížit odchody v pokladně o 10 %" > "Přidat PayPal"

## RON KOHAVI A REALITA A/B TESTOVÁNÍ – SKROMNOST V PREDIKCI
- Ron Kohavi (Microsoft, Amazon, AirBnB): "66 % nápadů selže" – včetně těch od zkušených produktových manažerů
- Microsoft Bing: v optimalizovaných systémech selhává až 90 % nápadů i u nejlepších týmů světa
- Statistika výsledků vylepšení: 33 % pomohlo, 33 % zhoršilo, 33 % nemělo efekt (Ron Kohavi)
- Intuice zkušených lídrů není výrazně přesnější než intuice průměrných – data jsou lepší rozhodce
- Bing případ (2012): malá změna titulku reklamy navržena inženýrem → HiPPOs odmítli jako nízkou prioritu → čekala 6 měsíců v backlogu → po spuštění +12 % revenue = 100M USD ročně
- Poučení: velký dopad může mít malá změna, velký projekt nulový dopad – bez testování to nevíte
- Pokud proaktivně netestujete, pracujete s pravděpodobností přibližně 10 % že jste na správné stopě

## HIPPO EFFECT – NEJVYŠŠÍ PLAT ROZHODUJE (A BÝVÁ TO CHYBA)
- HIPPO = Highest Paid Person's Opinion – v poradách vítězí názor nejlépe placeného, ne ten nejlépe podložený
- Good UX nevzniká v konferenčních místnostech ani PowerPoint prezentacích – vzniká testováním s uživateli
- "Karel to chápe, tak to bude chápat každý" = jeden z nejnebezpečnějších předpokladů v produktovém rozvoji
- Rozmlouvejte HiPPO efekt daty: "Toto je hypotéza – změřme to" místo "Toto je pravda"
- Správná otázka ke každému návrhu od vedení: "Jak to ověříme?" – ne "Jak to postavíme?"

## ZOMBIE FUNKCE – KDY FEATURE ZABÍT
- Zombie funkce = existuje, konzumuje zdroje na údržbu, ale zákazníci ji nepoužívají
- Omyl utopených nákladů: firma pokračuje v investování jen proto aby "ospravedlnila" minulé výdaje
- Příznaky zombie funkce: nízká adoption (< 5 % zákazníků), zákazníci ji nenajdou bez nápovědy, podpora ji nedoporučuje
- 3 otázky k rozhodnutí o zabití: (1) Řeší to reálný problém zákazníka? (2) Používají to nebo je nutíme? (3) Vydělalo by to na sebe kdybyste začali dnes?
- Jak zabít: oznámit předem, nabídnout alternativu, redirecty, měřit dopad odstranění
- Nejlepší rozhodnutí je často něco SMAZAT, ne přidat

## TESTOVÁNÍ DŘÍVE NEŽ KODUJETE – PROTOTYPY A EARLY VALIDATION
- Testovat musíte už na úrovni náčrtu na ubrousku – ne až na finálním produktu
- Každé € investované do testování před vývojem ušetří 10–100 € na opravách po vydání
- Papírový prototyp stačí k odhalení 80 % UX problémů u nové funkce
- Naše intuice je tragicky mimo: Carousel na HP = Banner Blindness zóna; zákazníci nechtějí pokročilé filtry ale funkční vyhledávání; nečtou váš příběh – hledají cenu dopravy
- Testování musí být proaktivní (před vývojem), ne reaktivní (po vydání)
- Fáze validace: problémové interview → paper prototype → klikatelný prototyp → A/B test → live měření

## UMĚNÍ MAZAT A ZJEDNODUŠOVAT – LESS IS MORE V PRAXI
- Máš opravdu jistotu, že daný prvek webu už nemůže být jednodušší?
- Každý přidaný prvek zvyšuje kognitivní zátěž – zákazník musí aktivně ignorovat co ho nezajímá
- Zjednodušení registrace Fakturoid: odstranění polí → +48 % nových zákazníků
- Zákazník se mění: co fungovalo 2 roky zpět může být dnes brzdou konverze
- Princip "Funguje to, nech to být" je past: funguje = nepotopilo, ne = generuje maximum
- Audit webu jednou za rok z pohledu "co můžeme odstranit" = stejně důležitý jako "co přidáme"

## KOPÍROVÁNÍ KONKURENCE – PROČ NEFUNGUJE
- "Mají to tak ostatní" není argument pro zavedení funkce
- To že konkurent má funkci neznamená že jim pomáhá – možná ji mají kvůli HiPPO efektu
- Každý web má jiného zákazníka, jiný kontext, jinou historii vztahu s uživatelem
- A/B test u vás = jediný validní důkaz že daná funkce funguje pro vaše zákazníky
- Případ nebe.cz: recenze 4,85 hvězd SNÍŽILY CR o 9 % – příliš perfektní hodnocení budí nedůvěru
- Případ nebe.cz multibuy: úprava struktury slev (ne výše slev) → +20 % CR a +51 % AOV

## DŮVĚRYHODNOSTNÍ MATICE – CO ZÁKAZNÍCI OPRAVDU VĚŘÍ
- Nejdůvěryhodnější: recenze od ověřených zákazníků s fotkou a jménem (ne anonymní)
- Druhá nejdůvěryhodnější: nezávislá média, novináři, influenceři bez zjevného placeného vztahu
- Třetí: certifikáty a ocenění od renomovaných institucí (Heureka, Zboží, APEK)
- Nejméně důvěryhodné: vlastní tvrzení e-shopu ("Jsme nejlepší", "Zaručená kvalita")
- Trust signály nad košíkem jsou 3× cennější než trust signály v patičce
- Negativní recenze na webu (s odpovědí) paradoxně zvyšují důvěru – ukazuje autenticitu
`

export async function POST(req) {
  try {
    const { clientName, withClarity } = await req.json()

    if (!clientName) {
      return new Response(
        JSON.stringify({ success: false, error: 'Chybí jméno klienta' }),
        { headers: { 'Content-Type': 'application/json' } }
      )
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'API klíč není nastaven' }),
        { headers: { 'Content-Type': 'application/json' } }
      )
    }

    const claritySection = withClarity
      ? `
Klient MÁ přístup do Microsoft Clarity. Do analýzy ZAHRŇ konkrétní pokyny:
- Co přesně zkontrolovat v heatmapách (které stránky, jaké vzorce)
- Jak filtrovat nahrávky (Rage clicks, Quick backs, neúspěšné objednávky)
- Konkrétní metriky k měření v Clarity pro daný typ e-shopu
- Jak kombinovat Clarity data s GA4 pro hlubší pochopení problémů
`
      : `
Klient NEMÁ přístup do Microsoft Clarity. Doporučení postav na best practices a obecných datových vzorcích pro daný typ e-shopu. Na konci doporučení přidej sekci "DOPORUČUJEME ZAPOJIT CLARITY" s vysvětlením co by Clarity odhalilo.
`

    const systemPrompt = `Jsi KRIS – Knowledge-based Report Intelligence System v6, expert CRO analytik e-shopů metodologie ESHOP BOOSTER.

Tvá znalostní báze:
${KRIS_KNOWLEDGE_BASE}

${claritySection}

TVOJE ÚLOHA: Analyzuj e-shop klienta a vytvoř strukturovanou CRO analýzu. Piš v češtině, konkrétně a akcionovatelně. Každé doporučení musí být specifické pro daný e-shop, ne obecné.

POVINNÁ STRUKTURA ANALÝZY (dodržuj přesně tato označení):

KRITICKE PRIORITY: [název problémové oblasti]
1. [konkrétní problém s dopadem na konverze]
   - Proč to bolí: [vysvětlení s čísly]
   - Jak opravit: [konkrétní kroky]

VYSOKA PRIORITA: [název oblasti]
1. [doporučení]
   - Dopad: [odhad dopadu]
   - Jak na to: [konkrétní kroky]

STREDNI PRIORITA: [název oblasti]
1. [doporučení]
   - Jak na to: [kroky]

QUICK WINS: Rychlé výhry (do 1 týdne)
1. [co jde udělat rychle a levně – konkrétní akce]

Analyzuj tyto oblasti: homepage a první dojem, produktové stránky a fotografie, navigace a kategorie, košík a checkout, trust signály a recenze, mobilní verze, ceny a AOV optimalizace, copywriting a mikrotexty, Feature Factory audit (co lze smazat/zjednodušit).

Pokud konkrétní e-shop neznáš, vycházej z obecné praxe v dané kategorii produktů. Buď specifický – zmiňuj konkrétní prvky typické pro daný typ e-shopu.`

    // Streaming SSE response
    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
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
              messages: [
                {
                  role: 'user',
                  content: `Připrav kompletní KRIS CRO analýzu pro e-shop: ${clientName}

Zaměř se na nejčastější problémy v dané kategorii produktů. Každé doporučení musí být konkrétní – jmenuj konkrétní prvky webu, konkrétní čísla, konkrétní kroky. Analýza musí být přímo použitelná jako akční plán.

Nezapomeň na Feature Factory audit: co na tomto e-shopu pravděpodobně existuje ale zákazníci to nepoužívají nebo to brání konverzím.`,
                },
              ],
            }),
          })

          if (!anthropicRes.ok) {
            const errText = await anthropicRes.text()
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ error: 'API error: ' + errText })}\n\n`)
            )
            controller.close()
            return
          }

          const reader = anthropicRes.body.getReader()
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
              if (!data || data === '[DONE]') continue

              try {
                const parsed = JSON.parse(data)
                if (
                  parsed.type === 'content_block_delta' &&
                  parsed.delta?.type === 'text_delta' &&
                  parsed.delta?.text
                ) {
                  controller.enqueue(
                    encoder.encode(
                      `data: ${JSON.stringify({ text: parsed.delta.text })}\n\n`
                    )
                  )
                }
              } catch {
                // skip malformed JSON
              }
            }
          }

          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (e) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: e.message || 'Neznámá chyba' })}\n\n`)
          )
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no',
      },
    })
  } catch (e) {
    return new Response(
      JSON.stringify({ success: false, error: e.message || 'Neznámá chyba' }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  }
}
