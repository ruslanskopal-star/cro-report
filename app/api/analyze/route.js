export const runtime = 'edge'

// ============================================================
// KRIS - Knowledge-based Report Intelligence System
// Engine postaveny na metodologii ESHOP BOOSTER
// + znalostni baze z blogu Ondřeje Ilinceva (ilincev.com)
// Verze 6.0 edge v3 - no-dash rule, sonnet-4-6, 8000 tokens
// ============================================================

const KRIS_KNOWLEDGE_BASE = `
# KRIS ZNALOSTNI BAZE v4 - ESHOP BOOSTER + ILINCEV METODOLOGIE

## PRVNI DOJEM A DUVERYHODNOST
- Navstevnik si udela prvni dojem za 0,1 sekundy - vizualni kvalita webu primo ovlivnuje vnimanou duveryhodnost
- Halo efekt: krasny web = lepsi produkt v mysli zakaznika, i kdyz to neni pravda
- Nejdulezitejsi trust signaly: recenze, fotky realnych zakazniku, certifikaty, media ve kterych se e-shop objevil
- "Above the fold" musi okamzite komunikovat: co prodavate, proc u vas, a vyzvu k akci
- Social proof "above the fold": pocet zakazniku, hodnoceni, loga medii/partneru

## OHYB STRANKY (The Fold) - KRITICKA ZONA
- Google studie inzeratu: nad ohybem je obsah viditelny v 68 % pripadu, pod ohybem jen ve 40 %
- Nielsen Norman: prumerny rozdil v pozornosti nad vs. pod ohybem = 84 % ve prospech obsahu nad ohybem
- Nejlepsi pozice CTA: tesne nad ohybem nebo primo v prvni obrazovce
- Uzivatele skroluji POUZE pokud je obsah prvni obrazovky dostatecne motivujici
- Kazda druha polovina inzeratu na internetu nebude nikdy nikym spatrena (spatne umisteni)
- Plati pro vsechna zarizeni - velikost ohybu se lisi, princip zustava stejny

## SLIDER NA HOMEPAGE - PROC NEFUNGUJE
- Banner blindness: lidi ignoruji vse co se hyba nebo pripomina reklamu - slider dela oboje najednou
- Kobercovy nalet sdeleni: misto jednoho silneho sdeleni bombardujete zakaznika vice nekonkretnimi sdelenimi
- Zpomaluje nacitani a odvadi pozornost od konverze
- Reseni: staticky hero banner s JEDNOU silnou nabidkou a JEDNOU vyzvou k akci
- Pokud musite mit slider: personalizujte - 1. az 2. navsteva = prurez sortimentem + vyhody; 3.+ = oblibene kategorie + akce

## SLOGAN A POSITIONING
- 90 % sloganu jsou prazdne fraze: "Vase spokojenost je nasi prioritou", "Kvalita, ktere verite"
- Dobry slogan rika CO delate pro KOHO a PROC je to jine - ne jak se citite jako firma
- Test: zakryjte logo a dejte slogan konkurenci - pokud pasuje, slogan nic nerika
- Misto sloganu testujte konkretni value proposition: "Dorucime do 24h nebo vratime penize"
- 3 otazky pro dobry slogan: Pro koho? Co presne? Proc zrovna my?

## KONKURENCNI VYHODA A DIFERENCIACE
- Vetsina firem tvrdi totez: kvalita, servis, cena - to neni diferenciace
- Skutecna diferenciace: specializace na niku, rychlost, komunita, udrzitelnost, garance
- Konkurovat pouze cenou je sebevrazda - vzdy prijde nekdo levnejsi (Cina, Amazon)
- Brand funguje jako placebo - stejny produkt s lepsim brandem zakaznici vnimaji jako kvalitnejsi
- AirBnB efekt: stejne bile layouty, stejne sans-serif fonty - weby jsou zamennitelne a neviditelne
- Bezpecny design = prumerny design = neviditelny design; zamerně porusto jednu konvenci

## PSYCHOLOGIE STATUSU V NAKUPECH
- Temer kazdy nakup ma slozku statusu - co o mne rika to, co kupuji?
- Luxusni zbozi: zakaznik nekupuje produkt, kupuje status a prislusnost ke skupine
- Cena jako signal kvality: prilis nizka cena u premioveho produktu snizuje vnimanou hodnotu
- Veblenuv efekt: u luxusniho zbozi vyssi cena = vyssi poptavka (opak bezneho trhu)
- Premiove baleni, limitovane edice, exkluzivni pristup, personalizace zvysuji vnimany status

## LUXUS A PREMIOVE E-SHOPY
- Premiove znacky: NIKDY plosne slevy (poskozuji brand), radeji limitovane edice a exkluzivni nabidky
- Fotografie: vzdy lifestyle, vzdy nejvyssi kvalita, detail materialu a remesla (craftsmanship)
- Copywriting luxusu: smyslovy jazyk, pribeh produktu, puvod materialu
- Zakaznicka pece u luxusu: osobni pristup je nutnost, ne bonus
- Veblenuv efekt: neslevujte premiove produkty - cena je soucasti hodnoty

## PSYCHOLOGIE DARKU A VANOCE
- Obdarovany si vazi darku prumerne jen na 82 % jeho skutecne ceny (studie)
- Penezni darky a poukazy maji nejnizsi vnimanou hodnotu - i kdyz jsou prakticky nejflexibilnejsi
- Produkty s pribehem (odkud pochazi, jak vznikly) maji vyssi vnimanou hodnotu
- Pro e-shopy: darkove baleni, pruvodci text na prani, moznost skryti ceny = zvysuji konverzi
- Vanoce: zakaznici jsou ochotni platit vice a nakupuji impulzivne
- Deadlines doruceni (posledni termin objednani pred Vanoci) = silny konverzni element

## PRODUKTOVE STRANKY A FOTOGRAFIE
- 75 % zakazniku povazuje fotky za klicove pri rozhodovani o koupi (Weebly)
- 58 % zakazniku chce videt produkt ze vsech stran - minimum jsou 3 az 5 fotek
- Kazdy 5. zakaznik vrati produkt, protoze fotka neodpovidala realite
- Lifestyle fotky (produkt v kontextu) vyrazne zvysuji konverze u obleceni, doplnku, nabytku
- Zoom funkce na produktovych fotkach je nutnost
- Video produktu zvysuje konverze az o 80 % u komplexnejsich produktu
- Popis produktu: zakaznici nectou, skenují. Bullet pointy > odstavce. Nejdulezitejsi info prvni.
- Dostupnost skladem musi byt jasne viditelna (zelena = skladem, cervena = vyprodano)

## VYPRODANE PRODUKTY - SPRAVNY POSTUP
- Docasne nedostupny produkt bez alternativy = 99 % uzivatelu odchazi ke konkurenci okamzite
- Tlacitko "Pridat do kosiku" ktere nic nedela = NEJHORSI mozny stav - vzdy ho deaktivujte nebo skryjte
- Vite kdy naskladnite: dejte moznost objednat s delsi dodaci lhutou NEBO formular "Hlidaci pes"
- Nevite kdy: nabidnete alternativni produkty, presmerujte, dejte "Hlidaci pes - posleme e-mail"
- Trvale vyprodane produkty: NESMAZAVEJTE stranku (SEO hodnota), presmerujte na alternativy
- Specificka velikost/varianta neni skladem: upozorneni jen pro danou variantu, ostatni zustanou dostupne

## NAVIGACE A KATEGORIE
- Hamburger menu na desktopu je chyba - skryva navigaci a snizuje konverze
- Do 10 polozek: horizontalni navigace; 10+ polozek: vertikalni navigace vlevo (vzor: Alza - 20 kategorii)
- Uzivatele travi pohledem 80 % casu na leve casti obrazovky
- Drobeckova navigace: lokacni (kde jste) a atributova (aktivni filtry)
- Interni vyhledavani: zakaznici kteri vyhledavaji konvertuji 2 az 3x lepe nez ti co browsuji

## INTERNI VYHLEDAVANI NA E-SHOPU
- Zakaznici kteri pouziji vyhledavani konvertuji 2 az 3x lepe - prioritizujte tuto funkci
- Autocomplete/suggest: zobrazujte nejen texty ale i produkty s obrazkem primo v naseptavaci
- Nulove vysledky = promarnena prilezitost: nabidnete alternativy, podobne produkty, kontakt
- Sledujte co zakaznici vyhledavaji = zlaty dul pro merchandising a sortiment
- Preklepy a synonyma: vyhledavac musi rozumet "tricko" i "tricko", "iphone" i "iPhone"

## MEGA MENU - 10 PRAVIDEL
- Maximalne 3 urovne; 4. uroven resejte uvnitr stranek kategorii
- Musi se vejit na jednu obrazovku - co se nevejde, odstrante
- Kazda kategorie musi byt klikaci (ne jen rozcestnik)
- Ikony kategorii pomahaji orientaci a rychlosti skenovani
- Card sorting s realnyumi uzivateli: nechte zakazniky sesekupit produkty dle vlastni logiky (OptimalSort)
- Tree testing: 30 uzivatelu, 10 otazek - overi zda zakaznici najdou co hledaji
- Pouzivejte slovnik zakazniku, ne interni terminologii firmy

## DROPDOWN MENU - LEPSI ALTERNATIVY
- Dropdown skryva moznosti = zvysuje kognitivni zatez
- Lepsi alternativy pro 2 az 5 moznosti: radio buttony, segmented control, karty/dlazidce
- Pro 6+ moznosti: vyhledavani s autocomplete > dropdown
- Vyber pohlavi: nikdy dropdown - radio buttony nebo karty
- Vyber roku narozeni: prime textove pole (type="number")

## IKONY - PRAVIDLA POUZITI
- Ikony bez popisku jsou hazard - uzivatele je neznaji tak jak si myslime
- Vyjimky (funguji i bez textu): lupa, kosik, hamburger menu, hvezdicka, domek
- Ikony s popiskem vzdy > ikony bez popisku
- Testujte zda uzivatele ikonu spravne identifikuji: staci 5 uzivatelu

## A/B TESTOVANI - KDY, JAK, KOLIK VYDELA
- Mene nez 1 000 konverzi/mesic = A/B testovani nema smysl; iterujte bez testovani
- Prumerne ROI A/B testovani: 223 % (dle dostupnych studii)
- Nejcastejsi prvni test: barva CTA tlacitka - je to plyvani; testujte radeji nadpisy a layout
- Statisticka signifikance min. 95 %, idealne 99 %
- Testujte vzdy jen jednu hypotezu s jasnnym duvodem
- Nejlepsi veci k testovani (sestupne): nadpis/headline, text CTA, cena dopravy, poradi produktu

## A/A TESTOVANI - PRED KAZDYM A/B TESTEM
- A/A test = testujete dve identicke verze stranky - zadna zmena obsahu
- Overite: spravnou implementaci nastroje, miru sumu v datech, absenci bias
- Pomaha nastavit minimalni detekovatelny efekt (MDE) pro nasledne A/B testy
- Provedte A/A test pred prvnim A/B testem a prubezne pri zmene nastroje

## MIKROTEXTY A UX COPYWRITING - KONKRETNI CISLA
- Zmena 3 slov v nadpisu = +10 % obratu (dokumentovany pripad z praxe)
- Veeam: "Request a quote" zmena na "Request pricing" = +161,66 % prokliku na CTA
- Google ubytovani: "Book a room" zmena na "Check availability" = +17 % engagement
- Chybove hlassky: konkretni + pratelske + napomocene ("Zadejte e-mail ve formatu jmeno@email.cz")
- Prazdne stavy jsou konverzni prilezitost - nabidnete alternativu, ne jen "Nic jsme nenasli"
- Tlacitko musi rikat co se stane po kliknuti: "Ziskat nabidku zdarma" > "Odeslat"
- Headline na landing page je nejdulezitejsi element - testujte jako prvni

## POP-UPY - CO FUNGUJE A CO NE (analyza 2 miliard pop-upu)
- Top 10 % pop-upu nabizeji neco uzitecneho a relevantniho ke konkretni strance
- Dokumentovane konverze lead magnet pop-upu: sablony e-mailu = 61 %; srovnani kosiku = 47 %
- Newsletter pop-up: zobrazujte az po precteni alespon 50 % clanku
- Exit intent pop-up: posledni sance pro nabidku dopravy zdarma nebo slevy
- Podminky dobreho pop-upu: spravny timing + relevantni obsah + snadne zavreni + hodnotna nabidka

## VYCITKY PO NAKUPU (Buyer's Remorse)
- Buyer's remorse = prirozeny jev, ktery lze aktivne omezit post-purchase komunikaci
- 14 dni na vraceni: komunikujte jako silnou vyhodu, ne jen jako pravni povinnost
- Jak omezit: potvrzovaci e-mail "Udelali jste skvele rozhodnuti", social proof i po nakupu, snadne vraceni
- Cim starsi zakaznik, tim vice vycitke - potrebuji vice ujisteni

## ZDRAZENI - JAK KOMUNIKOVAT A NEPRIJIT O ZAKAZNIKY
- Nikdy neoznamujte zdrazeni az na fakture (pripad Hotjar: +400 % bez upozorneni = hromadny odliv)
- 5 legitimnich duvodu ke zdrazeni: zlepseni produktu, nikdo se nehada o cenu, vyrazne ROI pro klienty, 3 az 12 mesicu od posledniho zdrazeni, zaporna rentabilita
- Bezpecna mira zdrazeni: do 10 az 15 %
- Oznameni: dopredu s vysvetlenim a moznosti prepay za stare ceny

## LEAD MAGNET A CONTENT UPGRADE
- Lead magnet = hodnotny obsah zdarma vymenou za e-mail; funguje 2 az 4x lepe nez pouhy formular
- Content upgrade k danemu clanku konvertuje 2 az 4x lepe nez obecny lead magnet
- Nejlepsi formaty: checklisty, sablony, srovnavaci tabulky, kalkulacky, pruvodci

## LOAJALITA ZAKAZNIKU - CO OPRAVDU FUNGUJE
- Nadsenni zakaznici nejsou rovni lojalnim zakaznikum
- Slevy NEbudují loajalitu - pritahuji cenove citlive zakazniky zavisle na slevach
- Loajalitu buduje: konzistentni zkusenost, rychle reseni problemu, komunita, sdilene hodnoty
- NPS: sledujte trend v case, ne jen absolutni cislo
- United Airlines pripad: jeden negativni viralni zazitke = ztrata 180M USD trzni hodnoty

## STRANKA "O NAS"
- 3. az 5. nejnavstevovanejsi stranka e-shopu - ignorovat ji je strategicka chyba
- Musi obsahovat: proc firma existuje, pribeh zakladatele s fotkou, tym, hodnoty, kontakt
- Pribeh zakladatele zvysuje duveryhodnost a emocionalni vazbu
- Budte lidsti, konkretni a autenticti

## CHECKOUT A OBJEDNAVKOVY PROCES (analyza 200 e-shopu)
- Zasilkovna vede (9 500 vydejnich mist); Ceska posta klesa kvalitou
- Doporuceni: 3 dopravci na adresu + 2 na vydejny; sjednotte vydejni mista do jedne polozky s mapou (dela to jen 10 %)
- Ceny dopravy: prumer 96 Kc na adresu, 70 Kc vydejni misto. Doporuceni: 99 Kc / 69 Kc
- Datum doruceni: zobrazujte u kazde dopravy - dela to jen polovina e-shopu
- Doprava zdarma od hranice: nabizi 75 % e-shopu, median je 1 500 Kc
- Vzorec pro hranici dopravy zdarma: AOV + (cena dopravy / marze). Priklad: 1 250 + (69 / 0,3) = 1 480 Kc
- KRITICKA CHYBA: neptejte se na dorucovaci adresu pri osobnim odberu (54 % e-shopu to dela)
- Pamatujte si vyplnene udaje (56 % e-shopu si to nepamatuje)
- Registraci navrhujte az na dekovaci strance - staci se zeptat na heslo (dela to jen 15 % e-shopu)
- Obchodni podminky: "Kliknutils na Koupit souhlasiste s OP" misto checkboxu
- Minimalizujte pocet poli ve formulari - kazde extra pole snizuje konverze
- U dobirky uvette "lze platit hotove i kartou" (70 % e-shopu tuto info nema)

## PRISTUPNOST A TESTOVANI UX
- Od cervna 2025 povinna pristupnost pro e-shopy nad urcitou velikost (EU zakon)
- Testovani s levou rukou: simuluje omezenou motoriku - odhali problemy s velikosti prvku
- Snizena svitivost displeje pri testovani: odhali problemy s kontrastem
- Minimalni velikost dotykove plochy na mobilu: 7 x 7 mm s 2mm rozestupy
- Vyhybejte se animacim pri motion sensitivity
- Kontrastni pomer textu: minimalne 4,5:1 pro normalni text, 3:1 pro velky text
- Formulare: labely musi byt viditelne - ne jen placeholder ktery zmizi pri psani
- 5 uzivatelu odhali 85 % UX problemu (Jakob Nielsen)

## UZIVATELSKY VYZKUM - JAK SE SPRAVNE PTAT
- Vetsina UX vyzkumu je znehodnocena sugestivnimi otazkami
- Spatna otazka: "Libi se vam nas novy design?" - zakaznik rekne ano ze slusnosti
- Spravna otazka: "Popiste mi, jak byste postupovali pri hledani produktu X" - behavioralni, otevrena
- Nikdy nezacinejte rozhovor ukazkou reseni - nejdriv zmapujte problem a soucasne chovani
- Ptejte se na minule chovani, ne na hypotetice budouci ("Koupili byste to?" je bezcenne)
- 5 uzivatelu odhali 85 % UX problemu - nepotrebujete velky vzorek

## PSYCHOLOGIE POZORNOSTI A SOUSTREDENI
- Uzivatel udrzi soustredeni pri slozitem ukolu cca 20 minut; pri pasivnim browsovani jen 8 sekund
- Systemova reakce do 100ms: uzivatel vnima jako okamzitou; 1s+ = frustrace a opusteni
- Nenuttte uzivatele prepínat kontext: potvrzeni e-mailu mimo web = ztrata az 40 % uzivatelu
- Zobrazujte dulezite informace ve stredu obrazovky nebo jako overlay - ne jako novou zalozku

## REGISTRACE A PRIHLASOVANI
- Registrace pri objednavce = konverzni killer; nabizejte nakup bez registrace vzdy
- Guest checkout je nutnost - zakaznik se zaregistruje sam pokud bude chtet
- Registraci navrhujte az na dekovaci strance (1 pole: "Ulozit vase udaje? Zadejte heslo:")
- Socialni login (Google, Facebook) = mene treni, vice konverzi
- Zapomenute heslo: posilejte reset link, ne docasne heslo

## PRUMERNA HODNOTA OBJEDNAVKY (AOV)
- Zvysovat AOV: upsell/cross-sell, balicky, mnozstevni slevy, doplnkove sluzby
- Hranici dopravy zdarma nastavte mirne nad prumernou AOV - zakaznik si prilozi produkt
- POZOR: agresivni slevy zvysuji AOV, ale snizuji marzi - sledujte marzi na objednavku, ne jen AOV

## RECENZE A SOCIALNI DUKAZ
- Recenze jsou nejsilnejsi trust signal - 92 % zakazniku cte recenze pred nakupem
- Perfektni 5.0 je podezrele - optimum je 4,2 az 4,7
- Recenze s fotkami konvertuji 2x lepe nez textove
- Odpovidejte na negativni recenze verejne
- Pod 10 recenzi zakaznici neduvěruji; 50+ je solidni zaklad
- Recenze zadejte e-mailem 7 az 14 dni po doruceni = nejvyssi response rate

## CENOTVORBA A PSYCHOLOGIE CEN (EU regulace 2023)
- EU regulace: zobrazujte nejnizsi cenu za poslednich 30 dni jako referencni
- Skrthnuta cena musi byt skutecna predchozi cena
- Psychologicke ceny: 999 Kc > 1 000 Kc; zaokrouhlene ceny = signal luxusu
- Kotevni cena: nejdrazsi varianta vlevo meni vnimani ostatnich cen
- Prilis velka sleva snizuje vnimanou kvalitu produktu

## PRIPADOVKA: TRENYRKARNA - 4x OBRAT ZA 6 LET
- Filtry serazeny podle skutecne pouzivnosti (MS Clarity): Velikost, Znacka, Barva
- Pouzite filtry viditelne na zacatku vypisu + tlacitko "Zrusit vse"
- Barvy jako barevne puntiky (ne text)
- Pamatovani vybrane velikosti z filtru do detailu produktu

## PRIPADOVKA: CESKA POJISTOVNA - REDESIGN ZA 7 TYDNU
- Navigace musi odpovidat mentalnimu modelu zakaznika, ne org. strukture firmy
- Kalkulacka: nejasny aktivni stav, neklikatelne prvky vypadajici klikatelne, 5 az 10s nacitani bez progress baru

## PRIPADOVKA: FAKTUROID A SPA.CZ
- Fakturoid: +48,3 % registraci - zjednoduseni onboardingu a jasny value prop
- Spa.cz: +21,5 % objednavek - lepsi filtrovani, duveryhodnost, mobilni verze
- Redesign = odstraneni konverznich barier, ne novy vizual

## AMAZON - INOVACE V LOGISTICE A E-COMMERCE
- Amazon Go (bezpokladenni obchody): kamery + pocitacove videni; platba automaticka pri odchodu
- Amazon ma 10 000+ aktivnich patentu (2023) - desetinasobek oproti roku 2000
- Anticipated shipping: balicky odesílány jeste pred objednavkou na zaklade AI predikce
- Lekce pro e-shopy: logistika je nejsilnejsi Amazonova vyhoda - konkurujte specializaci a zakaznickym zazitkem, ne cenou

## DESIGN ZAKLADY PRO VYVOJARE A NEDESIGNERY
- Bily prostor (whitespace) = aktivni designovy prvek zvysujici citelnost, ne prazdne misto
- Zarovnani: vse na strance by melo byt zarovnano na skrytou mrizku
- Typografie: maximalne 2 rezy pisma; jasna hierarchie (H1 > H2 > body)
- Primarni akcni barva: jen pro nejdulezitejsi akce (CTA tlacitko)
- Gestalt principy: blízkost (co je blizko = patri k sobe), podobnost, kontinuita
- Vizualni hierarchie: zakaznikovo oko sleduje design, ne obsah - navrhnte cestu oci

## IKEA EFEKT - PSYCHOLOGIE VLASTNICTVI
- Produkty ktere sami sestavime/vytvorime si cenime vice (Norton, Mochon, Ariely)
- Aplikace na e-shop: konfigurator produktu, personalizace, sestaveni vlastniho balicku
- Optimalni obtiznost: stredne narocne s jasne viditelnym vysledkem
- Konfigurator zvysuje vnimanou hodnotu a snizuje pravdepodobnost vraceni

## MOBILNI VERZE
- Více nez 60 % navstevniku e-shopu prichazi z mobilu, ale jen 30 % tam nakoupi
- Formulare: spravny typ klavesnice (type="tel", type="email", type="number")
- Tlacitka: minimalni 44x44 px, dostatecne mezery
- Sticky kosik / CTA tlacitko vyrazne zvysuje konverze
- Kazda sekunda navic pri nacitani = 7 % pokles konverzi
- Thumb zone: nejdulezitejsi akce do spodni casti obrazovky
- Vyhybejte se animacim a paralax scrollingu na mobilu (motion sensitivity, vykon)

## EMAILOVY MARKETING A RETENCE
- Ziskat noveho zakaznika stoji 5 az 7x vice nez udrzet stavajiciho
- Opusteny kosik: serie 3 e-mailu (1h, 24h, 72h) - prumerna konverze 5 az 15 %
- Personalizace predmetu (jmeno zakaznika) zvysuje open rate o 26 %
- Post-purchase sekvence: potvrzeni + benefity, tracking, cross-sell po doruceni, recenze po 7 az 14 dnech

## DARK PATTERNS - CEHO SE VYVAROVAT
- Skryte poplatky v poslednim kroku = nejcastejsi duvod opusteni kosiku
- Predvybrane souhlasy s newsletterem nebo pojistenim jsou v EU nelegalni
- Falesna urgence poskozuje brand dlouhodobe
- Confirmshaming, roach motel, skryte predplatne = regulatorni riziko (EU DSA)

## DESIGN JE MANIPULACE - PSYCHOLOGIE
- Kazde UX rozhodnuti ovlivnuje chovani uzivatele - design nikdy neni neutralni
- Nudge theory: male podnety vedou k zadoucimu chovani
- Barvy: cervena = urgence, zelena = bezpeci/potvrdit, modra = duvera
- F-pattern a Z-pattern: nejdulezitejsi info do leveho horniho rohu
- FOMO: omezena dostupnost zvysuje hodnotu; Endowment effect: "30 dni na vraceni" funguje

## CHECKBOXY A PRAVNI UX
- Prilis mnoho souhlasu frustuje uzivatele a snizuje konverze
- Predvybrane souhlasy jsou v EU nelegalni
- Souhlas s OP: "Kliknutim na Koupit souhlasiste s OP" misto checkboxu

## COOKIES A GDPR
- Zadne predzaskrtnute checkboxy - cisty opt-in
- "Odmitnout vse" musi byt stejne snadne jako "Prijmout vse"
- Bez odsouhlaseni nesmiite ukladat zadna data - ani analyticka

## PREDPLATNE A SUBSCRIPTION MODELY
- Rocni predplatne vydela 2x vice pri spravnem nastaveni ceny a komunikace
- Uspora musi byt okamzite zrejma v Kc i v %
- Nejlepsi moment pro nabidku rocniho: ihned po registraci a pri 1. obnove mesicniho

## AI A AUTOMATIZACE V E-COMMERCE
- AI personalizace doporuceni zvysuje AOV prumerne o 10 az 30 %
- Chatboty: funguji pro FAQ, selhavaji u komplexnich problemu
- Automatizace e-mailovych sekvenci = nejvyssi ROI z automation

## OBSAH KTERY DLOUHODOBE ZVYSUJE PRODEJE
- Vzdelavaci obsah buduje autoritu a organicky traffic - nejlevnejsi dlouhodoby marketing
- Nejlepsi formaty: pruvodci "jak na X", srovnani produktu, pripadove studie, FAQ
- Evergreen obsah >> trendovy obsah pro dlouhodobe vysledky
- Produktovy obsah: reseni konkretniho problemu zakaznika > technicke parametry
`

export async function POST(req) {
  try {
    const { clientName, withClarity } = await req.json()

    if (!clientName) {
      return new Response(JSON.stringify({ success: false, error: 'Chybi jmeno klienta' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ success: false, error: 'API klic neni nastaven' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const clarityInstruction = withClarity
      ? 'Klient MA pristup do Microsoft Clarity - zahrnuj doporuceni tykajici se heatmap, nahravek sessions a analyzy chovani uzivatelu.'
      : 'Klient NEMA pristup do Microsoft Clarity - analyza bude postavena pouze na best practices bez dat z Clarity.'

    const systemPrompt = `Jsi KRIS - Knowledge-based Report Intelligence System, expert CRO analytik e-shopu metodologie ESHOP BOOSTER.

Tvá znalostni baze:
${KRIS_KNOWLEDGE_BASE}

PRAVIDLA FORMATOVANI VYSTUPU - DULEZITE:
- NIKDY nepouzivej dlouhou pomlcku (tento znak: -) ani kratkou pomlcku jako oddelovac vety
- Pokud potrebujes oddelit mysleni, pouzij pouze " - " (mezera, pomlcka, mezera) a jen vyjimecne
- Preferuj teckove vety, dvojtecku nebo zavorky misto pomlcek
- Nepouzivej pomlcky v nadpisech ani v sekci titulech

TVOJE ULOHA: Analyzuj e-shop klienta a vytvor strukturovanou CRO analyzu. Pis v cestine, konkretne a akcionovatelne. Kazde doporuceni musi byt specificke pro dany e-shop, ne obecne.

${clarityInstruction}

POVINNA STRUKTURA ANALYZY (dodrzuj presne tato oznaceni pro spravne zobrazeni):

KRITICKE PRIORITY: [nazev sekce]
1. [konkretni problem s dopadem na konverze]
   - Proc to boli: [vysvetleni]
   - Jak opravit: [konkretni reseni]

VYSOKA PRIORITA: [nazev sekce]
1. [doporuceni]
   - Dopad: [odhad dopadu]
   - Jak na to: [konkretni kroky]

STREDNI PRIORITA: [nazev sekce]
1. [doporuceni]
   - Jak na to: [kroky]

QUICK WINS: Rychle vyhry (do 1 tydne)
1. [co jde udelat rychle a levne]

Analyzuj tyto oblasti: homepage a prvni dojem, produktove stranky a fotografie, navigace a kategorie, kosik a checkout, trust signaly a recenze, mobilni verze, ceny a slevy, copywriting a mikrotexty.

Pokud konkretni e-shop neznas, vychazej z obecne praxe v dane kategorii produktu a aplikuj znalostni bazi KRIS.`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 8000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Priprav kompletni KRIS CRO analyzu pro e-shop: ${clientName}

Zamers se na nejcastejsi problemy v dane kategorii produktu. Bud konkretni - jmenuj konkretni prvky webu, konkretni cisla, konkretni kroky. Analyza musi byt primo pouzitelna jako akcni plan.`,
          },
        ],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return new Response(JSON.stringify({ success: false, error: 'Chyba API: ' + err }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const data = await response.json()
    const analysis = data.content?.[0]?.text || ''

    return new Response(JSON.stringify({ success: true, analysis }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (e) {
    return new Response(JSON.stringify({ success: false, error: e.message || 'Neznama chyba' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
