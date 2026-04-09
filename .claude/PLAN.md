# PLAN.md — CRO Report Roadmap

---

## v28 — Knowledge Base Segmenty

**Cil:** Segment-specificke analyzy s benchmarky

```
1. Vyplnit knowledge base: kosmetika.md, moda.md, elektronika.md
2. Pridat segment-specificke benchmarky do system promptu (dle vybraneho segmentu v preflight)
3. Otestovat: node scripts/kris-test.js na e-shopu z kazdeho segmentu
4. Smazat stare Blob stores v dashboardu (kris-reports, kkwiki-blob)
```

✅ Hotovo kdyz: analyza kosmetickeho e-shopu obsahuje segment-specificke benchmarky
⏸ Test: `node scripts/kris-test.js` na 3 e-shopech z ruznych segmentu

---

## v29 — Code Quality + Error Handling

**Cil:** Cistejsi kod, bezpecnejsi error handling

```
1. Sjednotit API response format: { ok: true, data } / { ok: false, error: "genericka hlaska" }
2. Odstranit e.message z klientskych odpovedi (3 endpointy)
3. Pridat input validaci na clientUrl (format, delka, nebezpecne znaky)
4. Rozsirit .gitignore (*.log, *.pem, credentials.json, .DS_Store)
5. Zvazit update dependencies (Next.js, Anthropic SDK)
```

✅ Hotovo kdyz: zadny endpoint nevraci e.message, vsechny responses konzistentni
⏸ Test: `curl` na kazdy endpoint s invalidnim vstupem

---

## v30 — Monitoring + Audit Trail

**Cil:** Logy co preziji function instance

```
1. Externi log storage pro audit trail (Upstash Redis nebo Vercel Log Drain)
2. Denni email report napojit na realna data z Blob (misto TODO sablony)
3. Alert na neobvykle vzory (spike auth failures)
```

✅ Hotovo kdyz: vcera provedene analyzy se objevi v dennim emailu

---

## v31 — UX Vylepseni

**Cil:** Lepsi uzivatelsky zazitek

```
1. Accessibility: keyboard navigace, contrast check, semantic HTML
2. prefers-reduced-motion pro loading animaci
3. Lepsi mobilni layout (pod 640px)
4. Error stavy: retry button, lepsi error messages
```

✅ Hotovo kdyz: Lighthouse accessibility score > 90

---

## Dlouhodobe vize (bez verze)

- TypeScript migrace (postupne, soubor po souboru)
- Automatizovane testy (CI/CD, ne jen manualni kris-test.js)
- Multi-user podpora (vice TOTP klicu, user-scoped reporty)
- Dashboard s prehledem vsech analyzí a trendu
- PDF export primo z appky (ne pres print dialog)
