// ESHOP BOOSTER — interni CRO checklist
// Zdroj: Ruslan Skopal + kolegove (Google Doc, Skool, COE 2025 prezentace Honzy Kvasnicky)
// Pouziti: route.js injektuje do system promptu s NEJVYSSI prioritou
//
// POZNAMKA KRIS: Toto je zavazny hodnoticí ramec. Hodnot web PRIMARNĚ podle
// polozek v tomto checklistu. Polozky mimo checklist jsou druhorade.

export const ESHOP_BOOSTER_CHECKLIST = `
# ESHOP BOOSTER — KLIENTSKY CHECKLIST (MAX PRIORITA)

## FILOZOFIE A KONTEXT

### Google Duveryhodnostni matice (era AI od 09/2025)
Google zavedl "duveryhodnostni matici" jako reakci na AI generated obsah. Cilem je
odlisit autenticky lidsky obsah od AI obsahu. Google nove hodnoti weby podle:
- Autenticky vlastni obsah (NE AI balast, NE kopie od dodavatele)
- Signifikantni (jasne rozpoznatelne) prvky znacky
- Medialni obsah na strance (vlastni fotky, videa)
- Interni prolinkovani
- Pribeh znacky / O nas
- Osobni kontakt (jmeno + fotka + telefon + cas dostupnosti)
- Recenze / hodnoceni (optimum 4,2-4,7, min 50)
- FAQ s schema markup
- Authority rank — lide ve firme, nazor odbornika

### Google Skore kvality vstupni stranky
- Skala 0-99, neni verejne dostupna, jina pro hlavni domenu a dilci URL
- Ovlivnuje: SEO pozice, cenu prokliku (o 20-30 %), AI Overview
- Zakladni benchmark segmentu ~45-50 bodu
- Vyssi segmenty (napr. vyziva/zdravi) az ~61 bodu
- AI obsah penalizace od 01/2026: vice nez 60 % AI nebo genericky obsah = postih

### Design standardy (povinne Google pravidla)
- Pismo NIKDY mensi nez 13px (penalizace), idealne 16px hlavni obsah
- Kontrastni pomer min 4,5:1 (WCAG), overit na color.review
- Touch zony min 7x7 mm s 2mm rozestupy (EU zakon od 06/2025)
- Seda barva pro aktivni prvky = CHYBA
- Konverzni barva pouze pro konverzni prvky (nezanaset do jinych prvku)
- Velikost kazdeho obrazku idealne pod 100 kB (rychlost nacitani)
- Core Web Vitals v zelenych cislech (PageSpeed Insights)

### Hlavni princip
"Ukazte ze jste zubar" — prokazte zakaznikovi ze jste odbornik ve svem segmentu.
Duveryhodnost je u vetsiny e-shopu nejvetsi prostor pro vylepseni.

### Data-driven pristup (Case Studies)
- **Zbysek Nadenik USP studie**: Absence USP listy napric celym webem
  prokazatelne snizuje VSECHNY klicove konverzni metriky
- **Honza Bartos GAP case study**: Hello bar + propsani do kategorie +
  propsani do detailu produktu = hokejkovy efekt v trzbach behem akci
- **Statisticky duveryhodna data**: Ne "mysim si" ale "data rikaji"
- Honza Kvasnicka (UX designer) — referencni autorita pro UX zasady kosiku
- Honza Bartos — autor Shoptet doplnku "Upsell a Cross-sell"
- Ruslan Skopal + tym ESHOP BOOSTER — interni metodika

---

## 4 VLNY PRIORITIZACE

Prace na webu se rozdeluje do 4 vln podle dopadu a narocnosti.

### 1. VLNA (max dopad, max priorita)
- Reference na HP, kategorii, detailu produktu
- Upselly v kosiku a predkosiku
- USP lista + proklikavajici na staticke stranky k USP
- Mobil: hamburger menu VPRAVO
- Eliminace "mega pruseru" (cokoli co kriticky blokuje konverzi)
- Quick wins: poradi kategorii/produktu podle dat prodeju, kolo stesti

### 2. VLNA (duveryhodnost a kontakt)
- Viditelny kontakt s fotkou + status online/offline
- Hlavicka: telefon s obličejem, horni lista hodnoceni
- Nazor odbornika na detailu produktu
- Stranka kontaktu: fotky tymu, kamenna prodejna
- Pole vyhledavani: desktop + mobil viditelne
- Hello bar (barva, kontrast)
- Kosik: zakladni opravy chyb
- Mobilni verze: odstraneni zakladnich chyb
- Detail produktu: oprava nejvetsich chyb (chybi skladem, anglicke nazvy)
- Infografika do galerie TOP produktu
- Univerzalni duvody "Proc nakoupit zrovna u vas"

### 3. VLNA (kategorie a filtry)
- Filtry + rozcestniky napric webem
- Texty kategorii
- Rozcestnik ala Olivie
- Zobrazeni produktu (detail vs. do kosiku)
- Hello bar — plne vyuziti potencialu
- PageSpeed Core Web Vitals

### 4. VLNA (doladeni popisku a FAQ)
- Popisky produktu — vylepsit 20 % nejdulezitejsich
- FAQ doplnit
- Nahledove obrazky po najeti mysi
- Zbyle staticke stranky (kontakt, doprava atd.)

---

## HLAVICKA A NAVIGACE

### Logo s dovetkem
Logo musi mit pod sebou "dovetek nazvu" = specializaci e-shopu.
- Zakaznik behem vteriny vi kde se nachazi a co e-shop prodava
- Prodava vasi specializaci napric celym webem
- Priklady: trenyrkarna.cz, andos.cz, v-mart.cz, hooray.cz

### Heureka logo mezi logem a vyhledavanim
Zvysuje duveryhodnost e-shopu + prodava super hodnoceni.
- Zakaznik si podvedome rika "u tohoto e-shopu je vsechno v poradku"
- Priklad: Oveckarna.cz
- Alternativa: certifikat Heureka "Overeno zakazniky" — silny trust signal
  zejmena pro nezname e-shopy

### Horni lista — hodnoceni e-shopu
Umistit informace o hodnoceni / spokojenych zakaznicich do horni lišty.
- Vidi se napric celym webem
- Priklady: myboobee.com, psinakup.cz, deadiacosmetics.cz

### Info menu lista
Velmi silny prvek duveryhodnosti + orientace.
Polozky (individualne podle e-shopu, na zaklade dat):
- Kontakt (POVINNE)
- Nase produkty (pokud mam co rict o odliseni)
- Blog
- Garance vraceni penez
- Pribehy zakazniku / Pred-Po
- Jak pouzivat produkty
- Caste dotazy (FAQ)
- Recenze (POVINNE)
- O nas — zakaznik vidi ze jste odbornik ve svem segmentu (denatura.cz, mojemana.cz)
- Proc nase produkty — proc si vybrat vas (navaznost na USP)
- Nase odliseni / Proc nakoupit u nas
- Kamenna prodejna (pokud ma)
ZAKAZANO: Obchodni podminky v menu (patri do paticky)
- Priklady: brainmarket.cz, balistas.cz, mountfield.cz, tescoma.cz, herbyway.cz

### Prodejna v menu + horni liste ("Prodejte co delate")
Pokud mate kamennou prodejnu, MUSI byt viditelne v menu nebo horni liste.
- Zvysuje duveryhodnost znacky + prodava ze jste realna firma
- Priklady: rcprofi.cz (prodejna viditelne v menu)
- Propagace kamenne prodejny: menu → samostatna stranka → patička → detail produktu
  (nezapomenout ji zobrazit na vsech tech mistech aby zakaznik nahodne narazil)

### Viditelny kontakt v hlavicce (KRITICKY)
Telefon + email rovnou v hlavicce WEBU + OBLICEJ poradkyne + zelene/cervene kolecko
(online/offline status). Je to jedna z nejsilnejsich konverznich pak pro e-shopy.
- Hlavicka: herbyway.cz, denatura.cz
- Mobilni verze: denatura.cz
- U telefonu uvest od-do kolika muzu volat

### Patička — kontakt s fotkou (druhe misto)
Ta stejna osoba s fotkou i v paticce.
- Priklady: herbyway.cz, denatura.cz, kulina.cz

### Rozbalovaci hamburger kontakt
Jednoduchy pristup k celemu kontaktu na jeden klik.
- Priklady: nazuby.cz, denatura.cz, trenyrkarna.cz, kulina.cz

### Pole pro vyhledavani — desktop
Musi byt VYRAZNE, zakaznik ho musi hned videt.
- Nevyrazne pole = ztrata konverzi (zakaznik nehleda = nenakoupi)
- Pro zakazniky kteri hledaji je konverzni pomer 2-3x vyssi nez ostatni
- Ideal: "hybajici se text" v placeholderu s vychozim vyhledavanym vyrazem
- Priklady: brainmarket.cz, herbyway.cz, kulina.cz, balistas.cz, svihej.cz

### Pole pro vyhledavani — mobil (KRITICKY)
Na mobilu je pole casto "utopene" a neni vubec videt. Musi byt POKIRNE videt,
ideal i kdyz otevrenem hamburger menu.
- "Hybajici se text" v placeholderu (rotujici vyhledavany vyraz)
- Priklady: trenyrkarna.cz, aktin.cz, nazuby.cz, kulina.cz, herbyway.cz

### Naseptavac a "nic nenalezeno" stav
- Naseptavac: zakaznici kteri vyhledavaji konvertuji 2-3x lepe (statistika)
- Stav "nic nenalezeno": NIKDY prazdny!
  - Nabidnout alternativu (podobne produkty, kategorie)
  - Kontakt (telefon + email na poradkyni)
  - Vyzva: "Nevite co hledate? Zavolejte nam"
- Menu na mobilu: ikona 3 car I TEXT "MENU", nikdy seda barva

### Menu — poradi kategorii podle dat
Nejprodavanejsi kategorie = prvni. Nejprodavanejsi podkategorie = prvni. Nejprodavanejsi produkt = prvni.

---

## HOMEPAGE

### Hello bar (informacni lista napric webem)
Velmi silny prvek pro promo akcí, slev, informaci. Nejlepsi efekt vznika kdyz:
1. Hello bar informuje o akci
2. Stejna informace je na urovni kategorie
3. Stejna informace je i na detailu produktu
Teprve kombinace tri mist vytvari "hokejkovy efekt" v trzbach (data od Honzy Bartose z GAP).
- SPRAVNE: trenyrkarna.cz, denatura.cz (viditelny, vyrazny kontrast)
- SPATNE: tescoma.cz (cerna+tmave seda = lista neni videt)
- FOMO efekt na detailu produktu: elenys.cz, nanospace.cz
- FOMO na kategorii: elenys.cz (v ramci vypisu), tarani.cz (odpocet akce)
- Barva: vyrazna (zelena emos.cz, cervena dajanarodriguez.cz)
- Pozor na kontrast — WCAG pravidla

### Slider
- Idealni pocet slideru na HP: 2 (vice je kontraproduktivni a zpomaluje nacitani)
- Kazdy banner musi mit CTA tlacitko (vyzvu k akci)
- Bez CTA = mnohem nizsi proklikovost
- Slider musi splnovat "squint test" (hlavni sdeleni musi byt citelne i kdyz sklapnete oci)
- SPRAVNE: hannibal.cz, brainmarket.cz, alza.cz (loga partneru upozadena)

### CTA textace na bannerech (1. VLNA TIP)
Misto genericke "Zobrazit vice" pouzivat emotional-action textace:
- "Jdu nam poridit zazitek" (kava.cz)
- "Chci vyzkouset" (aktivni akce)
- "Hledam svuj produkt" (sprava orientace)
- "Zacnu setrit" (hodnota)
Priklady: hanibal.cz, kava.cz

### Staticke hero
Staticke hero s JEDNOU nabidkou a JEDNOU vyzvou je casto lepsi nez slider.

### Hlavni claim pred USP
Zvyraznit hlavni claim e-shopu jeste pred USP listou.
- Priklad: denatura.cz

### USP lista (KRITICKY)
USP lista MUSI byt na KAZDE vstupni strance (homepage, kategorie, produkt, kontakt).
- Absence USP listy prokazatelne snizuje vsechny konverzni metriky (Zbysek Nadenik studie)
- Nazvy USP: konkretni + dovetek (herbyway.cz, balistas.cz)
- KRITICKE: USP musi byt PROKLIKAVAJICI na podrobne staticke stranky
- Pokud USP nejsou proklikavajici, efekt je KONTRAPRODUKTIVNI
  ("navnadim se ale nemohu se dozvedet vic, e-shop neco skryva")

### Staticke stranky k USP
Kazda vyhoda musi mit vlastni podrobnou statickou stranku.
Priklady kvalitnich statickych stranek:
- x-trenink.cz/produkty-testujeme-vyrobeno-v-cr
- zivina.cz/o-nas/#fresh
- podlahyplotz.cz/doprava-a-platba
- ollies.cz (kvalita a cerstvost, pripraveno s laskou)
- svet-koupelny.cz/doprava
- brainmarket.cz/prodejna-brainmarket-ostrava
- ikea.com/cz/cs/customer-service/services/delivery
- denatura.cz/slozeni-produktu-denatura
- koupelnysyrovy.cz/prodlouzena-zaruka
- nanospace.cz/vyrobeno-v-cr

### Recenze / reference na HP
Recenze musi byt na HP co NEJVYS (ne jen dole).
- Zlate hvezdicky (zasadne NE sede) — mozek okamzite pozna pozitivni hodnoceni
- 4 recenze vedle sebe + proklik na vsechny
- Ruční vyber 12 "nejlepsich" recenzi — rotuji pri nacteni stranky
- Pravidlo: recenze z poslednich 30 dni, min 30 znaku
- Symbol "overene recenze" + logo zdroje (Heureka, Google)
- Foto reference (fotky spokojenych zakazniku) = 2x vyssi konverze
- Priklady: x-trenink.cz, denatura.cz, bloomrobbins.cz, herbyway.cz, zdravybatoh.cz, svihej.cz

### Loga Heureka + dalsi sluzby (spodni cast HP)
Ve spodni casti HP: logo Heureky, Google, prepravcu, platebnich metod, partnery.
- Zvysuje konverzni pomer, Google to v indexaci hodnoti pozitivne
- Priklady: denatura.cz, herbyway.cz

### Proc nase produkty (graficky)
Vizualne prezentovat proc si zakaznik ma vybrat vase produkty.
- Priklady: marmeladyspribehem.cz, zivina.cz, denatura.cz, herbyway.cz, bloomrobbins.cz

### Rychly rozcestnik (dlazdice)
Dlazdice na HP jsou VYRAZNY podil na proklikovosti (Clarity data z trenyrkarna.cz).
- Rozcestnik podle ucelu/situace:
  - tallguys.cz (do prace, na dovolenou — lifestyle kategorie)
  - 4camping.cz (ucelove rozdeleni)
- Rozcestnik podle parametru:
  - kancelarskezidle.com (podle vysky postavy, ceny)
  - kancelar24.cz (podobna filtrace parametru)
- Rozcestnik podle mistnosti/stylu:
  - breno.cz (druh mistnosti, barva, styl)
- Poradi dlazdic VZDY podle dat prodeju (nejprodavanejsi prvni)
- Cilem: zakaznik do "cile" (produkt) na max 3 kliky
- Spravne priklady: nazuby.cz, kulina.cz, balistas.cz
- Spatne priklady: cistimezuby.cz (chybi rozcestnik)

### Text na HP s vnitrnim prolinkovanim
Pokud se na HP uziva text, MUSI obsahovat vnitrni prolinkovani na klicove kategorie a staticke stranky.
Bez prolinkovani = nevyuzity SEO potencial + zakaznik se "nedostane dal".
- Text nesmi byt genericky SEO filler — musi rikat NECO o znacce/produktu co stoji za cteni
- Idealne prolinkovat min na 3-5 klicovych kategorii + 2-3 staticke stranky
- Priklady kvalitneho textu HP: herbyway.cz, denatura.cz
- Alternativa: kratke VIDEO namisto textu — ukazte co delate
  - Priklad: donlemme.cz (video na HP)
  - KRITICKE: Pokud mate video, recyklujte ho na stranku "O nas" a do systemovych emailu
    — zakaznik ho tam ocekava a potvrdi si autenticitu

### Foto reference motivace zakazniku
Pokud chcete foto reference na HP, MUSITE zakazniky aktivne motivovat aby fotky posilali.
- Priklady motivace:
  - goldbee.cz (vyzva "poslete nam fotku + ziskate slevu na dalsi nakup")
  - the2-0brand.com (foto reference z Instagramu)
- Foto reference konvertuji 2x lepe nez textove
- Recyklovat foto reference do galerie produktu (viz DETAIL sekce)

### Newsletter subscription
Vyzva "prihlasit se k odberu" musi byt zpracovana zajimave s ukazkou produktu.
- Priklady: pranamat.cz, kulina.cz

### Patička — kompletni
Vyuzit potencial na maximum.
- Kontakt s fotkou + status (herbyway, denatura, kulina)
- Loga Heureka/Google/prepravci/plateb
- Kamenna prodejna (meetyshop.com)
- Priklady: kulina.cz, denatura.cz, herbyway.cz, nazuby.cz

---

## KATEGORIE

### Meta data + SEO (pro klicove kategorie)
- Zvyraznit vyhody v title a description
- Pouzivat symboly (napr. ✳️) pro vizualni odliseni ve vysledcích
- Priklad titulku: "OD EXPERTU" kapitalkami (grilovani.cz)
- Dynamicky titulek s aktualni slevou (benu.cz)

### Popis kategorie
NE dlouhy SEO text — max 3-5 vet na zacatku.
- Misto SEO textu: zvyseni kredibility + rozcestnik na informace o kategorii
- Ukazat odbornost v segmentu (profiDJ pattern: "My tomu rozumime, tady jsou duvody...")
- SEO princip: psat pro LIDI, ne pro vyhledavace

### SEO text pattern "Zjistete vice"
Dobry vzor kombinace SEO + UX:
1. Na zacatku kategorie: KRATKE duleziite informace (3-5 vet)
2. Odkaz "Zjistete vice o [kategorii]" na konec stranky
3. Dole detailni SEO text pro Google (plny obsah, h2, h3, prolinkovani)
- Vysledek: zakaznik vidi jen to podstatne nahoru, SEO ma plny obsah dole
- Priklad: hudy.cz

### Dynamicky title pri filtrovani
Pri filtrovani "nejlevnejsi" zmenit title a nadpis na "Levne [kategorie]".
- Zvysuje SEO zasah na ruzne obraty
- Priklad: hudy.cz

### Jasne zobrazeni podkategorii
Dlazdice podkategorii v hornim casti kategorie. Pozor na mobilni verzi.

### Barevne varianty ve vypise (fashion)
Zobrazovat barevne varianty rovnou ve vypise produktu.
- Jeden produkt se zmenou barvy (astratex.cz, dobrytextil.cz)
- Alternativa: samostatne produkty vedle sebe (4camping.cz, ikea)
- Pravidlo Honza Kvasnicka: zavisi na sire sortimentu

### Filtry (VELMI KRITICKE)
- Filtry MUSI byt rovnou ROZBALENE, NE sbalene
- Rozbaleneho filtru si vsimne vyrazne vic lidi
- Pozor na poradi filtru — podle dulezitosti a hledanosti
- Filtrace podle prodejny (Alza)
- Priklady: alza.cz, dalsi spravne priklady ve Figma dokumentech

### Stitky produktu (KRITICKY pro konverzi)
Stitky "lidovka", "zlata stredni cesta", "pro narocne" maji OBROVSKY vliv na konverze.
- Ridi zakaznikovo rozhodovani
- Alternativa: vlastni "peceete" / ocenneni (brainmarket, ketodiet, ebenica, pepperfield)
- Dalsi stitky: bestseller, novinka, sleva, posledni kusy, doporucujeme
- Implementovat jako CSS overlay na fotografii, ne pod ni
- Priklady: Sufan, zdravybatoh.cz, nazuby.cz

### Vlastni ocenneni / peceete
Misto klasickych stitku vlastni vizual odlisuje top produkty.
- Priklady: ketodiet.cz, ebenica.cz, pepperfield.cz, bloomrobbins.cz

### Hodnoceni (hvezdicky) — jen kde jsou
Prazdne hvezdicky / nizka hodnoceni NEZOBRAZOVAT.
- Zobrazit jen zlate hvezdicky u produktu s dobrym hodnocenim
- Priklady: spravny vzor

### Nahledovy obrazek po najetí (hover)
Druha fotografie nebo infografika pri najetí mysi.
- Moda: pohled zezadu, druhe obleceni
- Specialky: infografika s klicovymi informacemi

### Termin dodani + SKLADEM ve vypise
Zakaznik musi videt "skladem" a "dorucime do" primo ve vypise.
- Pozor na mobilni verzi
- Priklady: konkretni e-shopy

### CTA tlacitko "Detail / Zobrazit"
Chybi-li CTA tlacitko pod produktem v kategorii, proklikovost klesa.
- Platí pro produkty nad ~300 Kc (pod 300 Kc casto funguje "do kosiku" primo)
- Priklady chyb: trenyrkarna.cz, x-trenink.cz, kulina.cz

### Poradi produktu
Nejprodavanejsi produkty na prvnich mistech.
- Zvyraznit TOP 5-6 nejprodavanejsich specialnim stitkem s POZICI prodejnosti v kategorii
  (napr. "#1 nejprodavanejsi", "#2 nejprodavanejsi")
- Stitky "lidovka" / "zlata stredni cesta" / "pro narocne" maji brutalni vliv na konverze
- Pokud stitky pro e-shop nejsou vhodne, nahradit vlastnimi "pecetemi" / ocennenim

### 5 pravidel pro zarazeni produktu do vypisu TOP kategorie
Aby se produkt dostal do kategorie nejprodavanejsich / TOP vyber, MUSI splnit vsechna:
1. Ma fotku (kvalitni, min 1 000 px sirka)
2. Je skladem (realna dostupnost z API, ne "do 3 tydnu")
3. Ma aktivni prodeje za poslednich 30 dni (nemrtvy produkt)
4. Cena alespon 500 Kc (aby se vyplatilo ho propagovat)
5. Marze alespon 40 % (aby prodeje davaly byznys smysl)

### Lista "nejprodavanejsi produkty" v kategorii
Pokud neni podlozeno daty ze TAHAJI konverze, DAT PRYC.
- Nikdy nezobrazovat produkty ktere nejsou skladem
- Pokud zustane, aplikovat 5 pravidel vyse

### Seznam "TOP produkty" v levem menu kategorie
Pokud neni podlozeno daty ze funguje na konverze, DAT PRYC.
- Boční menu je vetsinou zbytecne
- Pokud zustane, pouzit ho radeji na filtry

### Bočni menu kategorie
Boční menu je vetsinou zbytecne — zakaznik se orientuje horní navigaci.
- Pouzit jen pokud je specificky duvod + data
- Pokud zustane, vyuzit na ZOBRAZENY (rozbaleny) filtr, ne na TOP produkty

---

## DETAIL PRODUKTU

### SEO nazev — overeni hledanosti
Pred navrhem SEO nazvu produktu overit co lide skutecne vyhledavaji:
- Google Trends (trends.google.com) — bezplatny nastroj
- Ukazuje hledanost terminu dle zeme, regionu, obdobi
- Volit nazev podle terminu ktere SKUTECNE hledaji, ne ktere si myslime

### Cesky nazev
NE anglicke nazvy. Cesky popis produktu v nazvu.
- E-shopy casto argumentuji "anglicky nazev kvuli Heurece" — NENI PRAVDA
- Parovani s Heurekou se resi pres FEED a nastroje tretich stran, ne pres nazev
- Cesky nazev je pro zakaznika daleko prijemnejsi a pochopitelnejsi
- KRITICKE pravidlo SEO: Pokud menite nazev uz existujiciho produktu, NIKDY
  nemente URL (jinak prijdete o SEO pozice a linky z minulosti)
- Priklady spatne: "BarkBox Salmon Treats 200g". Spravne: "Granule z lososa pro psy 200g"

### Klicove informace v nazvu
Do nazvu zanest co nejvic hodnotnych informaci.
- Pozornost zakaznika je na nazvu nejvyssi
- Priklad: aktin.cz (nazvy s kompletni specifikaci)

### Priklady kvalitni popisky produktu (KLICOVE PRODUKTY)
Vylepsit popisky u TOP 20 % nejdulezitejsich produktu. Referencni e-shopy:
- aktin.cz/vilgain-testo-na-pizzu (kompletni informace, benefity, pouziti)
- nomadgoods.com (styl + technicke parametry)
- naturalprotein.cz/probiotika-a-prebiotika
- ketodiet.cz/p/proteinove-susenky
- denatura.cz/serum-na-rasy-denatura (studie, timeline, FAQ)

### Reference primo pod nazvem (KRITICKY)
Hvezdicky + pocet recenzi primo pod nazvem produktu.
- Rozhodujici pro dalsi cteni
- Priklady: herbyway.cz, svihej.cz, ketodiet.cz, cubenest

### Piktogramy / badge benefitu
Graficke znazorneni benefitu nad/u popisku.
- Rychla vizualni identifikace
- Priklady: konkretni e-shopy (viz dokument)

### Bodove shrnuti klicovych informaci
Pred podrobnym popiskem: bodovy seznam "Co produkt dela / pro koho je".
- Priklady: denatura.cz, x-trenink.cz, zivina.cz, cubenest.cz

### "Popis pokracuje nize" indikator
Pokud ma detail produktu kratky popis nad foldem, zakaznikovi sdelit ze popis
pokracuje dale na strance (jinak scrolluje do prazdna a mysli ze uz nic neni).
- Priklad: brainmarket.cz
- Sipka dolu + text "Scrollujte pro vice informaci" nebo "Zobrazit cely popis"

### Pro koho se hodi / Pro koho se nehodi
Explicitne oznacit cilove segmenty + kontraindikace.
- Snizuje vraceni zbozi o 15-20 %
- Format: "Produkt je idealni pro [segment]. Neni vhodny pro [segment]."
- Funguje ve KAZDE kategorii (kosmetika=typ pleti, sport=uroven, nabytek=styl)

### Termin dodani s "dnes / zitra / pozitri" + datum
Lidé casto nevedi aktualni datum, ale "dnes/zitra" chapou vsichni.
- Idealni format: "Objednate-li do 15:00, dorucime ZITRA (15.4.2026)"
- Slovickovy system: "dnes", "zitra", "pozitri", "do 3 dnu", "pristi tyden"
- Priklady SPRAVNE: trenyrkarna.cz, cubenest.cz
- Priklady SPATNE: astratex.cz (jen datum bez slovickoveho vyrazu), x-trenink.cz

### Textace doruceni: "Dorucime do" > "Muzeme dorucit"
KRITICKE: Pouzivat AKTIVNI textace "Dorucime do [datum]" namisto pasivni
"Muzeme dorucit do [datum]". Aktivni = komitment, pasivni = nejistota.
- "Dorucime" = slib → zakaznik veri
- "Muzeme dorucit" = podminene → zakaznik vahaji

### Jen koncove ceny (vcetne DPH)
Cena bez DPH matlouci. Odstranit.

### Skladovost na prodejnach (API)
Pokud ma kamenne prodejny, zobrazit dostupnost na prodejnach.
- Realna data z API (ne hardcoded)
- Pod tlacitkem/rozkliknutim aby nematlo online kupce:
  - Datart.cz (skladovost rozbalitelna)
  - iSetos.cz (stejny pattern)
- Primo zobrazeno v detailu: alza.cz (plne transparentni)
- Cil: neptaklit online kupujici, ale umoznit lokalnim zakaznikum vyzvednut rychle

### Galerie produktu — infografika (TOP produkty)
V galerii produktu mit infografiky s klicovymi informacemi.
- Priklad: wolfi-shop.cz (odstavnovac citrusu s infografikou)
- Zvysuje konverze az o 80 % u klicovych produktu
- Infografika rika: pro koho je, jak funguje, v cem je lepsi

### Gif videa v galerii
Kratke gif video u klicovych produktu.
- Brutalne zvedne vnimani produktu
- Priklady: konkretni e-shopy

### Reference do galerie
Pracovat s galerii jako s marketingovou plochou.
- Fotka 1: produkt
- Fotka 2: produkt v pouziti
- Fotka 3: infografika
- Fotka 4: reference/recenze s fotografii zakaznika
- Priklady: spravne galerie

### "Kolik uz zakazniku koupilo"
Grafické znazorneni poctu prodanych kusu.
- Priklady: denatura.cz, herbyway.cz, froyaorganics.com

### Jak dlouho vydrzi + cena za davku
"Kura na 30 dni = 50 Kc/den" — vypocet prevodu na denni naklad.
- Priklady: froyaorganics.com, brainmarket.cz, aktin.cz

### Balicky / sety v detailu
Upselling primo u produktu — balicky s navaznymi produkty.
- Priklady: zivina.cz, renovality.cz, ajemfit.cz, ultramenu.cz, svihej.cz
- Shoptet doplnek: Upsell a Cross-sell Honzy Bartose

### Predplatne na obdobi
Moznost nakupit jako predplatne.
- Priklad: froyaorganics.com

### Box "Nevíte si rady"
Kontakt primo v detailu produktu.
- S telefonním cislem + e-mailem (trenyrkarna.cz, x-trenink.cz)
- Jako chatovaci bublina (deadiacosmetics.cz)
- KRITICKE: Na mobilu MUSI cislo i email fungovat po prokliknutí:
  - tel: link → okamzite otevre volani (tel:+420...)
  - mailto: link → okamzite otevre prazdnou zpravu
- Bez click-to-call / click-to-mail je efekt boxu v mobilu mnohem nizsi

### USP lista v detailu produktu
USP z HP propsane take do detailu produktu.

### "Proc nakoupit u vas" (s fotkami)
Vizualni prezentace klicovych duvodu primo v detailu.
- Priklady: koupelnysyrovy.cz (vyborne), goldea.cz (gif animace)

### Doplnkovy prodej (cross-sell)
Naplnit potrebu zakaznika od A do Z (koberec → nuz na rezani).
- Priklady: spravny doplnkovy prodej
- Shoptet: doplnek Upsell a Cross-sell Honza Bartos

### Tip na servirovani / pouziti
Zvysuje duveryhodnost + odbornost.
- Priklady: ollies.cz

### Nazor odbornika (TOP produkty)
U klicovych produktu citovat odbornika s fotografii.
- Pro niche e-shopy KRITICKE — zakaznik chce odbornost ne genericky popis

### Porovnani "jablka vs hrusky"
Vizualne porovnat vas produkt s beznymi na trhu.
- Tabulka / grafika s rozdily
- Priklady: brainmarket.cz, herbyway.cz, aktin.cz, utrhni.cz

### Univerzalni informace o firme
Blok s klicovymi informacemi o firme propisane do KAZDEHO detailu produktu.
- Vytvorime 1x, pouzivame napric e-shopem
- Argumenty z USP + nase sluzby + odliseni
- Priklady: utrhni.cz (jak balime, cena dopravy, reklamace, nas pribeh),
  ollies.cz, goldea.cz (gif), dijanarodriguez, elega.cz
- Pred/Po ukazky u utrhni.cz: jak balime, cena dopravy, reklamace, nas pribeh

### "Jak balime" video nebo text
Kratke video nebo textovy popis balení.
- Priklady: spravne e-shopy

### Recenze na detailu produktu (KRITICKY)
- Heureka symbol viditelne v pozici
- Zlate hvezdicky (NIKDY sede)
- Mobile-friendly zobrazeni
- 12 ručne vybranych recenzi, rotace
- Foto reference (goldbee — skvela motivace zakazniku k fotkam)
- Before/After u kosmetiky, mody, fitness
- Priklady: herbyway, svihej, cubenest, denatura

### Doplnit FAQ na stranku
Kratky FAQ primo na detailu produktu.
- Odpovedi na caste otazky
- Schema markup pro Google rich snippets

### Parametry pod popiskem (NE v zalozkach)
Google ignoruje skryty obsah v zalozkach. Zakaznici zalozky zridka klikaji.
- Ideal: parametry jako rozcestnik / fixni lista

### NE povinna registrace pro oblíbené
Nikdy nenutit registraci pro zakladni funkce.
- Vede k opusteni webu

### Kamenna prodejna
Pokud ma, propagovat MAXIMALNE:
- Samostatna staticka stranka s fotografiemi prodejny
- Polozka v hornim menu a patičce
- Info na detailu produktu (kamenna prodejna = trust)
- Priklady: brainmarket.cz, udirny.cz, koupelnysyrovy.cz, podlahyplotz.cz

---

## MOBILNI VERZE

### Hamburger menu VPRAVO (ne vlevo)
Pro vetsinu lidi (pravaci) prijemnejsi na klikani.
- Priklad: trenyrkarna.cz

### Barevne oddeleni menu polozek
Informacni polozky (O nas, blog, kontakt) odlisit barevne od produktovych polozek.
- Zakaznik na mobilu hned rozpozna: "tohle jsou produkty, tamhleto je informace"
- Bez oddeleni menu vypada jako jeden dlouhy seznam

### Rozbaleni kategorii/podkategorii spravne
Mobilni menu musi mit spravne nastavene rozbaleni — na klepnuti kategorie
se rozbali podkategorie INLINE (ne navigace pryc).
- Zakaznik nevi jak se vratit kdyz ho odnavedu na jinou stranku
- Hierarchie: Kategorie → klepnuti → podkategorie rozbalene pod ni

### Pole "hledat" vzdy viditelne
Na mobilu pole hledat MUSI byt vzdy videt, ideal i v hamburger menu.
- "Hybajici se text" v placeholderu
- Priklady: trenyrkarna.cz, aktin.cz

### Kontrola celeho kosiku na mobilu
VZDY overit kosik na mobilni verzi — casta chyba.

---

## KOSIK A OBJEDNAVKOVY PROCES

### Predkosik — upsell (KRITICKY)
Pri pridani do kosiku nabidnout multipacky / varianty.
- Zvyseni AOV a prumerne hodnoty objednavky
- Priklady:
  - trenyrkarna.cz (multipack: vyber vice ks za nizsi cenu)
  - fabini.cz (rozdilna nabidka nez v kosiku — odlisne produkty)
- Shoptet: doplnek Upsell a Cross-sell od Honzy Bartose
- Pravidlo: nabizet produkty ktere byly za poslednich 90 dni NEJPRODAVANEJSI
  s danym produktem (ne genericka TOP nabidka)

### Kosik — cross-sell
Pred dokoncenim objednavky dalsi doplnkovy prodej.
- Priklady: konkretni e-shopy

### Doplnkove moznosti v kosiku
Nabidnout min 3 doplnkove moznosti:
- Dysko zabaleno
- Darkove baleni
- Rychle doruceni (express)
- Pojisteni produktu
- Prodlouzena zaruka

### Pojisteni + prodlouzena zaruka (drazsi produkty)
U produktu nad ~2 000 Kc nabidnout pojisteni.
- Priklady: alza.cz (vyborne), dalsi

### Slevovy kod — SKRYT za checkbox
Viditelne pole slevoveho kodu = zakaznici jdou na Google hledat slevu = opousti kosik.
- Skryt za checkbox "Mam slevovy kod"
- Po kliknuti se zobrazi pole
- Priklady: spravne skryte slevove pole

### Honza Kvasnicka — kosik best practices
Kosik obecne upravovat podle zasad Honzy Kvasnicky (nejlepsi CZ UX designer).
- Video: https://youtu.be/ka2F0YhP9OQ (cas 4:55)

### Platba QR kodem (KRITICKY)
QR kod je stale vyuzivanejsi platebni metoda.
- Pro e-shop VYHODA: neplatite % poplatek z objednavky (platba kartou ~1-2 %)
- Cenove zvyhodnit (zakaznik vice zvoli) ALE staci i zaradit QR na PRVNI misto
  v seznamu plateb — zakaznici casto voli prvni moznost
- KRITICKE: Pozor na textaci QR platby — spatne textace sniZi pouziti
  (pouzit popis ve stylu "Rychla online platba pres bankovnictvi na 2 kliky")
- Priklady: konkretni e-shopy v Shoptet prostredi

### Pozice druhu dopravy a platby
Na prvnich mistech MUSI byt ty druhy dopravy a platby, ktere chcete nejvic prodavat.
- Zakaznici casto voli prvni moznost
- Kontrola: jsou na prvnich mistech tve nejrychlejsi/nejvyhodnejsi varianty?

### Apple Pay / Google Pay (KRITICKY)
Bez Apple/Google Pay na mobilu e-shop ztraci zakazniky.
- Dramaticky snizuje friction objednavky

### BNPL (Twisto, Klarna, Alma, Splitty)
U produktu nad 1 000 Kc BNPL zvysuje konverze o 15-30 %.
- Zobrazit jako mesicni splatku u ceny na detailu produktu
- Pro drazsi produkty (kosmetika nad 1 500 Kc, elektronika nad 2 000 Kc) KRITICKE

### Termin dodani i v kosiku
Zopakovat informaci o dodani i v kosiku.

### Checkout od kroku 2
Od kroku 2 kosiku: bez menu, bez vyhledavani. Jen logo, telefon s fotkou, jazykovy prepinac.
- Priklady: inspiraci z kroku 2 a 3 u spravnych e-shopu

### Paticka v checkoutu
Jen: Obchodni podminky, Ochrana udaju, Kontakt.

### Jednotna barva konverznich tlacitek
Napric celym webem jedna konverzni barva (nemenit napr. z oranzove na HP na zelenou v kosiku).

### Prihlasit ke svemu uctu — decentně
Prihlaseni v kosiku NE vyrazne. Zakaznika nesmi mást jako povinnost.

### Progress bar "do dopravy zdarma"
"Do dopravy zdarma jeste X Kc" zvysuje AOV o 10-20 %.

### Dekovaci stranka
Po dokonceni objednavky:
- DEKOVACI VIDEO za objednavku (osobni, autenticke, zakladatel / team)
- Zrecyklovat TO SAME video do systemoveho potvrzovaciho emailu
- Dalsi prvky: kontakt na poradkyni, odkaz na "Co delat dal"
- Cilem: zakaznik se citi ze udelal spravne rozhodnuti (snizuje vraceni zbozi)

### Prazdny kosik
Prazdny kosik NESMI byt jen textem "Vas kosik je prazdny".
Musi obsahovat:
- TOP produkty / bestsellers
- Posledni prohlednute produkty (pokud mame data)
- Kontakt na poradkyni
- Tlacitko "Vratit se do nakupu" → homepage nebo nejdulezitejsi kategorie
- Cilem: "vratit zakaznika zpet do hry" aby neodesel definitivne

### Osobni odber
Adresa + cas vyzvednuti (OD-DO kolika).
- Spatny priklad: "Osobni odber: Praha" (chybi adresa, hodiny)
- Spravny priklad: "Osobni odber zdarma — Praha 2, Vinohradska 123
  Po-Pa 9-18, So 9-12"

### Limitovana nabidka v upsellu
FOMO v upsellu zvysuje konverze.
- Priklady: notino.cz

---

## STATICKE STRANKY

Spolecne pravidlo: staticke stranky NEJSOU text wally. Jsou to emotional commitment.
Zakaznik nestoji ve vasi kamenne prodejne — musite emoci a vjem dodat digitalne.

### Kontakt / prodejna
- Fotky lidí, prodejny, tymu (autenticke, ne stock fotky)
- Telefonni cisla s osobami + statusem online/offline
- Mapa, otvíraci doba konkretne (Po-Pa 9-18, So 9-12)
- Priklady SPRAVNE:
  - svet-koupelny.cz (vidi se vse dulezite + fotky davaji duveryhodnost)
  - megapixel.cz
  - x-hokej.cz
  - ollies.cz
  - cestouprirody.eu
  - koupelnysyrovy.cz (dve varianty)
  - elega.cz
  - brainmarket.cz
- Priklady SPATNE:
  - velkoobchod-salony.cz (chybi autenticita)
  - saloos.cz
  - sachovezbozi.cz
  - dracek.cz (hromada textu kterou nikdo neprecte)
  - keeostore.cz (nevyuzity potencial)

### O nas / nas pribeh
- Autenticky pribeh (ne genericky)
- Fotky zakladatelu
- Priklady: ollies.cz, utrhni.cz, cokoladovnajanek.cz

### Doprava a platba
- Vizualne, ne text
- Priklady: podlahyplotz.cz, svet-koupelny.cz, ikea.cz, x-trenink.cz

### Reklamace
- Prehlednost + obrazky
- Pred/Po utrhni.cz

### Kamenna prodejna — vlastni stranka
Samostatna staticka stranka s fotografiemi prodejny + adresou + otviracimi hodinami.
- SPRAVNE priklady:
  - brainmarket.cz (rozcestnik + jednotlive stranky)
  - udirny.cz (jednoducha ale funkcni)
  - vseprogril.cz
  - podlahyplotz.cz
  - koupelnysyrovy.cz
- SPATNE priklady (nevyuzity potencial):
  - sperkystuchlik.cz
  - dracek.cz
  - diskontni-nakupy.cz
  - filtry-vodni.cz (nehezke fotky)
- Propagace: samostatna stranka → menu → patička → detail produktu
  (priklad detailu s kamennou prodejnou: shop.axello.eu, elega.cz)

---

## DALSI TIPY (obecne)

### Kolo stesti
Vyzva na slevove kody / slevu na prvni nakup.
- Sluzba Koloo (responzivni i na mobilu, plne funguje)
- Priklady pres Koloo: trenyrkarna.cz, fanda-nhl.cz, tvorboshop.cz
- Vlastni verze: bloomrobbins.cz
- Koloo vyhoda: sbira kontakty i z mobilnich uzivatelu
  (tradicni kola stesti na mobilu nefunguji)

### Shoptet sablona
Doporuceni modernich sablon: Apollo, Jupiter, Merkur.

### Nadpisy a texty
- Nadpisy: https://www.skool.com/eshop-booster-mastermind (article ec0d209b)
- Texty obecne: https://www.skool.com/eshop-booster-mastermind (article fb1c33cd)

### Certifikace a ocenneni produktu
Pokud maji produkty certifikace/ocenneni, zobrazit.
- Priklady: alkohol.cz, bloomrobbins.cz, ketodiet.cz

---

## PRIORITIZACE DOPORUCENI

Pri navrhovani Quick Wins a roadmapy VZDY:
1. Prioritizovat podle VLN (1. VLNA prvni, 4. VLNA posledni)
2. Dopad × Narocnost matice
3. Zacit tim co ma nejvyssi poměr dopad/narocnost v 1. VLNE
4. Konkretni doporuceni pro TENTO e-shop (ne generik)
5. Odkazat na priklad z checklistu (napr. "jako to ma herbyway.cz")

## ZAKAZ

NIKDY neporucuj veci ktere nejsou v tomto checklistu jako KRITICKE priority.
Mimo-checklist polozky mohou byt jen jako doplnujici (MEDIUM/LOW).
`
