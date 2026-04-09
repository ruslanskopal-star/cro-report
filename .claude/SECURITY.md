# SECURITY.md — CRO Report

Bezpecnostni pravidla pro psani a review kodu v tomto projektu.

---

## Zakladni principy

- Nikdy neduvěruj vstupu od uzivatele. Validuj a sanitizuj na kazde hranici systemu.
- Princip nejmensich opravneni vsude (API tokeny, env vars, pristup k Blob).
- Selhavej bezpecne. Chyby NESMI odhalit interni detaily uzivateli.
- Obrana do hloubky. Nespolehej se na jedinou vrstvu ochrany.

---

## Autentizace

- TOTP (Google Authenticator) → HMAC session token (24h platnost)
- Session tokeny: HMAC-SHA256 s timestampem, secret = TOTP_SECRET na serveru
- Token format: `timestamp.signature` — validuje se vek (max 24h) i podpis
- Rate limit na login: max 5 pokusu / 15 minut per IP (Upstash Redis)
- TOTP secret NIKDY v klientskem kodu — zustava jen na serveru
- Pri zmene formatu tokenu/auth: upozornit uzivatele ze se musi znovu prihlasit

---

## Autorizace

- Kazdy API endpoint MUSI overit session token pred jakoukoli operaci
- Auth token se predava v body (POST) nebo query/header (GET/DELETE)
- Cron endpoint pouziva CRON_SECRET v Authorization headeru
- Zadny endpoint nesmi byt nahodne verejny — overit pri pridani noveho

---

## Validace vstupu

- Validovat vsechny vstupy na serveru, bez ohledu na klientskou validaci
- `clientUrl`: validovat format URL, omezit delku (max 200 znaku), odmitnou nebezpecne znaky
- TOTP kod: presne 6 cislic, nic jineho
- API requesty: odmitnou neocekavana pole kde je to mozne
- String delky omezit na rozumne meze (URL, analyza, hostname)
- JSON body: parsovat v try/catch, nikdy nepredpokladat strukturu

---

## Prevence injekci

### XSS (Cross-Site Scripting)
- Vsechny vystupy renderovane v HTML musi byt escapovane
- React pouziva auto-escaping — NEPOUZIVAT `dangerouslySetInnerHTML`
- Sanitizovat text analyzy pred renderovanim (renderLine funkce)

### Command Injection
- Nikdy nepredavat uzivatelsky vstup do shell prikazu
- URL od uzivatele se pouziva jen jako parametr pro Anthropic API, ne pro fetch na server

### CSRF
- SameSite cookies nejsou pouzivane (token-based auth v body)
- CORS omezeni na `cro-report.vercel.app` jako dodatecna ochrana

---

## Ochrana dat

- Blob storage je PRIVATE — prime URL vrati 403
- Reporty pristupne jen pres autentizovany endpoint `/api/reports`
- NIKDY nelogovat citlive udaje (tokeny, TOTP kody, API klice)
- Logovat: IP + akce (login/fail/analyze/report) — BEZ obsahu requestu
- Security headers: HSTS, X-Frame-Options DENY, nosniff, XSS protection, Permissions-Policy
- CORS: explicitne jen `https://cro-report.vercel.app`, nikdy wildcard

---

## API Security

- Autentizovat KAZDY endpoint (zadne nahodne verejne endpointy)
- Rate limit na vsechny kriticke operace:
  - Auth: 5 pokusu / 15 min per IP
  - Analyze: 10 analyzí / 1h per IP
- Validovat Content-Type na prichozich requestech
- Vracet konzistentni chybovy format: `{ error: "popis" }` BEZ internich detailu
- NIKDY nevracet `e.message` primo klientovi — pouzit genericke hlasky
- HTTP status kody: 400 (bad input), 401 (unauthorized), 429 (rate limit), 500 (server error)

---

## Sprava secretu

- NIKDY commitovat secrety, API klice nebo credentials do repozitare
- Vsechny credentials v env promennych na Vercelu (`vercel env`)
- Env vars: ANTHROPIC_API_KEY, TOTP_SECRET, BLOB_READ_WRITE_TOKEN, KV_REST_API_*, RESEND_API_KEY, CRON_SECRET
- `.gitignore` MUSI obsahovat: `.env`, `.env.local`, `.env*.local`, `credentials.json`, `*.pem`
- Pred commitem: zkontrolovat diff na nahodne pridane secrety
- Rotace secretu: po jakomkoli podezreni na kompromitaci

---

## Dependencies

- Udrzovat dependencies aktualni, zvlaste security patche
- Pred pridanim nove dependency: zkontrolovat maintainera, licenci, popularitu
- Pinovat verze v package.json (vyhnout se neocekavanym zmenam)
- Odstranit nepouzivane dependencies
- Aktualni stav: Next.js 14.2.3, @anthropic-ai/sdk 0.20.0 — zvazit update

---

## Logovani

- Logovat: auth udalosti (login OK/FAIL), rate limit hity, report operace (GET/POST/DELETE)
- Logovat: IP adresu + akci na kazdem endpointu
- NIKDY nelogovat: request body (muze obsahovat citliva data), tokeny, API klice
- Format: `[ENDPOINT] AKCE ip=X detail=Y`
- Logy zmizi s function instance — pro audit trail zvazit externi storage

---

## Error Handling

- Uzivateli zobrazit genericke hlasky ("Chyba serveru", "Neplatny vstup")
- Detailni chybove informace logovat JEN na serveru (console.error)
- NIKDY nevracet stack traces, databazove chyby, nebo cesty k souborum v odpovedi
- Vzor pro API error response:
  ```js
  // SPRAVNE
  return Response.json({ error: 'Chyba serveru' }, { status: 500 })

  // SPATNE — leaks internals
  return Response.json({ error: e.message }, { status: 500 })
  ```

---

## .gitignore minimum

```
node_modules
.next
.env
.env.local
.env*.local
.vercel
*.log
*.pem
credentials.json
.DS_Store
```
