# PLAN.md — CRO Report Roadmap

---

## ✅ v28 — Visual CRO Analysis (HOTOVO 2026-04-11)

**Cil:** KRIS analyzuje web na zaklade realnych screenshotu misto hadani.

**Hotovo:**
1. 25 upload slotu: Homepage (×6), Kategorie (×6), Produkt (×6), Predkosik (×6), Kosik (×6), Thank You, Kontakt, Doprava/Platba, Reklamace, O nas, Blog, Vyhledavani (naseptavac + vysledky)
2. Auto-split dlouhych screenshotu: group sloty automaticky rozdeluji 1200×N obrazek na 1200×1500 kusy a distribuuji do slotu 1-6
3. Single sloty (kontakt, onas, ...) cropnou na top 1500px aby respektovaly Anthropic limit 2000px/stranu pri many-image requestech
4. Klientska komprese: PNG → JPEG 0.75 @ max 1200 width
5. Vercel Blob upload flow: kazdy screenshot jde samostatnym `/api/upload-screenshot` POST requestem → ulozi do `screenshots/{sessionId}/{slotId}.jpg` (private)
6. `/api/analyze` stahuje screeny z Blob pres `get(url, {access:'private'})` a posila jako multimodal content do Anthropic API (`claude-sonnet-4-6`)
7. Screenshoty se po analyze NEMAZOU — zustavaji v Blob pro historii
8. Novy endpoint `/api/screenshot?sessionId=X&slot=Y&token=Z` servuje screeny pro galerii
9. Galerie screenshotu pod kazdou analyzou v historii (3 ve sloupci, klik = open v novem tabu)
10. Odstranen Clarity API fetch (3 denni data = marginalni hodnota) — ~200 radku kodu pryc, 8× CLARITY_API_TOKEN_* env vars smazane z Vercelu
11. Autodetekce Clarity z HTML homepage (`clarity.ms/tag|static.clarity.ms`) — bez checkboxu v UI
12. Klientsky CRO checklist z Google Docu (Ruslan + kolegove) v `app/knowledge/checklist.js`:
    - 838 radku, 95 unikatnich CZ referencnich webu (pozitivni i negativni priklady)
    - Google duveryhodnostni matice, skore kvality 0-99
    - 4 VLNY prioritizace (1. VLNA = max, 4. VLNA = nejpozdeji)
    - Strukturovane sekce: Hlavicka, HP, Kategorie, Detail, Mobil, Kosik, Staticke stranky
    - Case studies: Zbysek Nadenik (USP), Honza Bartos (GAP hello bar hokejkovy efekt),
      Honza Kvasnicka (UX kosik), Ruslan + ESHOP BOOSTER metodika
    - Klicove weby: denatura.cz, herbyway.cz, trenyrkarna.cz, koupelnysyrovy.cz,
      ollies.cz, brainmarket.cz, utrhni.cz, aktin.cz, x-trenink.cz, kulina.cz,
      nazuby.cz, balistas.cz, svihej.cz, zivina.cz, ebenica.cz, pepperfield.cz,
      ketodiet.cz, froyaorganics.com, bloomrobbins.cz, alza.cz, a mnoho dalsich
    - Negativni priklady: sperkystuchlik.cz, dracek.cz, diskontni-nakupy.cz,
      filtry-vodni.cz, velkoobchod-salony.cz, keeostore.cz, tescoma.cz hello bar
    - Checklist se injektuje do system promptu s NEJVYSSI prioritou
13. Tri-vrstvy format doporuceni: `[CRO PRINCIP]` / `[SEGMENT]` / `[JAK OVERIT V CLARITY]` (treti vrstva je navod kam kliknout, ne fake data)
14. 401 handling: expired token → automaticky vyhozeni na login screen (preflight, upload, analyze)
15. Bez authTokenu skryta historie, analyza, paticka — jen login screen
16. Klientska kontrola veku tokenu pri loadu (clean-up expired z localStorage)
17. `scripts/read-latest-report.js` pro cteni reportu z Blob storage

**Otestovano na:** denatura.cz → skore 76/100, konkretni citace ze screenshotu
("Petry P.", "100 000 zakaznic", "4,9 Google", "1 497 Kc", "870+ hodnoceni"),
3 z 5 Quick Wins odkazuji na VLNY z checklistu.

---

## v29 — Referencni weby (NEXT)

**Cil:** KRIS se pri analyze inspiruje nejlepsimi CZ e-shopy.

```
1. Extrahovat z denatura.cz analyzy "CO DELA DOBRE" + silne prvky (zakaznicka studie 73 %,
   predkosik s progress barem, medialni loga Forbes/Vogue/CzechCrunch, prokliknuti USP)
2. Ulozit strukturovane do knowledge/reference-weby.md:
   - denatura.cz (kosmetika) — co konkretne dela dobre + URL sekcí
   - herbyway.cz (prirodni produkty) — pokud nahrajeme screenshoty
   - koupelnysyrovy.cz (nabytek/koupelny) — pokud nahrajeme
3. Napojit reference-weby.md do system promptu v route.js s instrukci:
   "Pri analyze konkretni kategorie se inspiruj referencnimi e-shopy v teto kategorii.
    Kdyz chybi prvek, rekni 'jako to dela [web] — pridej takto'."
4. Otestovat na jinem kosmetickem e-shopu (napr. herbyway.cz nebo jinem) — overit ze
   KRIS rika "denatura.cz dela X, zde chybi"
```

✅ Hotovo kdyz: analyza jineho kosmetickeho webu explicitne porovnava s denatura.cz
⏸ Test: `node scripts/read-latest-report.js <web>` + kontrola ze v analyze je "denatura.cz"

---

## v30a — Google Sheets integrace (ROZPRACOVANO 2026-04-20)

**Cil:** Sheet "MC Ruslan Skopal znalostni baze" jako dynamicky zdroj pro system prompt.

**WIF auth hotovo** (viz CLAUDE.md "Google Sheets integrace" + memory
`project_google_sheets_wif_2026-04-20.md`).

**Pro priste (3 rozhodovaci otazky + implementace):**
```
1. Ktere tabu do system promptu?
   Navrh rozdeleni:
   - CRO analyza (do promptu): Kategorie, Košík, Home Page, Produktové fotky, Procesy?
   - Pracovni/interni (NE do promptu): Jednotlivé schůzky, Affiliate, Agentury,
     Nabídky agentur, CMS, HR, Marketing
   - ???: List 1

2. Sync strategie:
   - A) Manualni button — admin klik → fetch → Blob (NAVRH)
   - B) Cron 1x denne — automaticky
   - C) Live fetch — kazda analyza cte primo (+1s latence)

3. Format pro LLM:
   - markdown tabulky (NAVRH, citelnejsi)
   - CSV
   - JSON

Po rozhodnuti:
4. Implementovat /api/sheets/sync (auth, ulozi vybrane taby do Blob)
5. Loader v app/api/analyze/route.js — injektovat taby do system promptu
6. Cleanup: smazat /api/sheets/debug endpoint (leaky env info)
7. Cleanup: smazat stare SA binding v GCP (subject bez -projects sufixu)
```

**Rozsireni v30b — Google Docs pristup:**
```
Uzivatel chce pristup i ke Google Doc:
https://docs.google.com/document/d/1CAiBvY3JvObrSBPn2UqP65WRMq1a0z-DYd7iXjKnyFA/edit

1. Enable Google Docs API v GCP projektu cro-report-sheets:
   https://console.cloud.google.com/apis/library/docs.googleapis.com?project=cro-report-sheets
2. Sdilet Doc s service accountem cro-report-reader@cro-report-sheets.iam.gserviceaccount.com (Viewer)
3. Rozsirit app/lib/google-sheets.js (nebo novy google-docs.js) o Docs API
4. Pridat scope https://www.googleapis.com/auth/documents.readonly
   do SA impersonation call
5. Existujici WIF token exchange se pouzije beze zmeny
```

✅ Hotovo kdyz: analyza klienta vyuzije aktualni data z Google sheetu (napr. referencni weby, kontakty agentur pro doporuceni apod.)

---

## v30 — Knowledge Base Segmenty

**Cil:** Segment-specificke analyzy s benchmarky

```
1. Vyplnit knowledge base: kosmetika.md, moda.md, elektronika.md, nabytek.md
2. Pridat segment-specificke benchmarky do system promptu (dle vybraneho segmentu v preflight)
3. Otestovat na e-shopu z kazdeho segmentu
4. Smazat stare Blob stores v dashboardu (kris-reports, kkwiki-blob)
```

✅ Hotovo kdyz: analyza kosmetickeho e-shopu obsahuje segment-specificke benchmarky

---

## v31 — Code Quality + Error Handling

**Cil:** Cistejsi kod, bezpecnejsi error handling

```
1. Sjednotit API response format: { ok: true, data } / { ok: false, error: "genericka hlaska" }
2. Odstranit e.message z klientskych odpovedi
3. Pridat input validaci na clientUrl (format, delka, nebezpecne znaky) — castecne hotovo
4. Rozsirit .gitignore (*.log, *.pem, credentials.json, .DS_Store)
5. Zvazit update dependencies (Next.js, Anthropic SDK)
```

---

## v32 — Monitoring + Audit Trail

**Cil:** Logy co preziji function instance

```
1. Externi log storage pro audit trail (Upstash Redis nebo Vercel Log Drain)
2. Denni email report napojit na realna data z Blob (misto TODO sablony)
3. Alert na neobvykle vzory (spike auth failures)
4. Cron na cleanup starých screenshotu (Blob se plni)
```

✅ Hotovo kdyz: vcera provedene analyzy se objevi v dennim emailu

---

## v33 — UX Vylepseni

**Cil:** Lepsi uzivatelsky zazitek

```
1. Accessibility: keyboard navigace, contrast check, semantic HTML
2. prefers-reduced-motion pro loading animaci
3. Lepsi mobilni layout (pod 640px)
4. Error stavy: retry button, lepsi error messages
5. Drag & drop upload screenshotu
```

✅ Hotovo kdyz: Lighthouse accessibility score > 90

---

## Dlouhodobe vize (bez verze)

- TypeScript migrace (postupne, soubor po souboru)
- Automatizovane testy (CI/CD, ne jen manualni kris-test.js)
- Multi-user podpora (vice TOTP klicu, user-scoped reporty)
- Dashboard s prehledem vsech analyzí a trendu
- PDF export primo z appky (ne pres print dialog)
- Google Docs API integration pro ziveho cteni checklistu (misto rucnich updatu checklist.js)
