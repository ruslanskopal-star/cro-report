# DESIGN SYSTEM — CRO Report (ESHOP BOOSTER)

## Vizualni identita

**Styl**: Dark premium, profesionalni CRO nastroj. Minimalisticky, bez zbytecnych dekoraci.
**Dojem**: Seriozni, data-driven, akce-orientovany. Klient musi mit pocit, ze drzi v ruce profesionalni audit.

---

## Barvy

### Zakladni paleta
| Nazev | Hex | Pouziti |
|-------|-----|---------|
| **Orange (primary)** | `#FF6B00` | CTA buttony, akcenty, logo "O" + "BOOSTER", aktivni stavy, nadpisy sekcí |
| **Black deep** | `#111` | Pozadi stranky (body background) |
| **Card dark** | `#1a1a1a` | Pozadi karet, panelu, inputu hover |
| **Border subtle** | `#2a2a2a` | Jemne bordery karet, oddelovace |
| **Border input** | `#333` | Defaultni border inputu, neaktivni prvky |
| **White** | `#ffffff` | Hlavni nadpisy, primarni text |
| **Text light** | `#ccc` | Bezny text v reportu |
| **Text muted** | `#aaa` | Sekundarni text, loading faze |
| **Text dim** | `#888` | Napoveda, popisky |
| **Text ghost** | `#555` | Disclaimery, casove udaje, neaktivni labely |
| **Text invisible** | `#444` | Info text pod loadingem |
| **Footer text** | `#333` | Copyright, paticky |

### Semanticke barvy (report sekce)
| Nazev | Hex | Pouziti |
|-------|-----|---------|
| **Red critical** | `#ff4444` | Kriticke problemy, error stavy, chybove hlasky |
| **Orange high** | `#FF6B00` | Vysoka priorita |
| **Yellow medium** | `#ffcc00` | Stredni priorita |
| **Cyan quick** | `#00ccff` | Quick Wins sekce |
| **Green positive** | `#4CAF50` | Pozitivni stavy (Clarity toggle ON, checkbox, detekovana kategorie) |
| **Green text** | `#aaffaa` | Doporuceni / Akcni plan / Prioritizace text |
| **Green bg** | `#0d1f0d` | Pozadi Clarity toggle kdyz ON |
| **Green border** | `#2a6b2a` | Border Clarity toggle kdyz ON |
| **Red error bg** | `#2a0a0a` | Pozadi error hlasek |
| **Red error border** | `#aa0000` | Border error hlasek |
| **Copied bg** | `#1a3a1a` | Pozadi "Skopirovano" buttonu |

---

## Typografie

### Font stack
- **Primární (nadpisy, logo, CTA)**: `Arial Black, Arial, sans-serif`
- **Sekundarní (body text, popisky)**: `Arial, sans-serif`
- **Mono (auth input)**: `monospace`

### Velikosti
| Element | Size | Weight | Doplnek |
|---------|------|--------|---------|
| Hlavni nadpis (h1) | 32px | 900 | uppercase |
| Podnadpis (h2 pod logem) | 16px | 700 | uppercase, letter-spacing: 3px, orange |
| Report URL | 22px | 900 | white |
| Sekce h1 (# v reportu) | 22px | 900 | white |
| Sekce h2 (## v reportu) | 15px | 700 | uppercase, letter-spacing: 1px, orange |
| Sekce h3 (### v reportu) | 14px | 700 | #ccc |
| Prioritni sekce label | 17px | 700 | border-left: 4px solid [barva priority] |
| Body text reportu | 15px | normal | line-height: 1.7, #ccc |
| Numbered items | normal | 600 | #ddd, padding-left: 8px |
| Bullet items | 14px | normal | #aaa, padding-left: 20px |
| Italic labels (Jak opravit:) | 14px | normal | italic, #888, padding-left: 16px |
| Auth input | 22px | 900 | letter-spacing: 8px, monospace |
| CTA button | 15px | 900 | uppercase |
| Maly button | 12px | 700 | uppercase |
| Label (uppercase) | 12px | 700 | letter-spacing: 2-3px, uppercase |
| Helper text | 11px | normal | #555 |
| Disclaimer | 12px | normal | #333 |

---

## Komponenty

### Logo (ESHOP BOOSTER)
- Obalka: `background: #111`, `padding: 10px 22px`, `border-radius: 8px`
- "ESH" = white, "O" = orange, "P" = white (vse 22px/900)
- "BOOSTER" pod tim: orange, 13px/900, letter-spacing: 3px

### Input pole
- `padding: 14px 18px`
- `background: #111`
- `border: 2px solid #333`
- `border-radius: 8px`
- `color: white`
- **Focus**: border zmeni na `#FF6B00`
- **Blur**: border zpet na `#333`

### Primarni button (CTA)
- `padding: 14px 28px`
- `background: #FF6B00` (aktivni) / `#333` (disabled)
- `color: white` (aktivni) / `#666` (disabled)
- `border: none`
- `border-radius: 8px`
- `font-weight: 900`
- `text-transform: uppercase`
- `cursor: pointer` / `not-allowed`

### Sekundarni button (Nova analyza, Kopirovat, PDF)
- `padding: 8px 14-16px`
- `background: transparent` nebo `#1a1a1a`
- `border: 1px solid #333` nebo `#555`
- `color: #555` nebo `#aaa`
- `border-radius: 8px`
- `font-weight: 700`
- `text-transform: uppercase`

### Karta (hlavni panel)
- `background: #1a1a1a`
- `border: 2px solid #FF6B00`
- `border-radius: 16px`
- `padding: 32px`

### Karta (historie)
- `background: #1a1a1a`
- `border: 1px solid #2a2a2a`
- `border-radius: 12px`
- `padding: 20px`

### Historie item
- `background: #111`
- `border: 1px solid #2a2a2a`
- `border-radius: 8px`
- `padding: 10px 14px`
- URL: orange, 13px/700
- Datum: #444, 11px

### Report area
- `background: #1a1a1a`
- `border: 2px solid #333`
- `border-radius: 16px`
- `padding: 32px`

### Checkbox (Clarity toggle)
- 18x18px ctverecek, `border-radius: 4px`
- OFF: `border: 2px solid #555`, transparent bg, text #666
- ON: `border: 2px solid #4CAF50`, `bg: #4CAF50`, text #4CAF50
- Obalka ON: `bg: #0d1f0d`, `border: 1px solid #2a6b2a`
- Obalka OFF: `bg: #1a1a1a`, `border: 1px solid #333`

### Select (preflight)
- `padding: 9px 10px`
- `font-size: 12px`
- `background: #111`
- Nevybrany: `border: 1px solid #333`, `color: #555`
- Vybrany: `border: 1px solid #FF6B00`, `color: #FF6B00`
- `border-radius: 6px`
- Grid: `grid-template-columns: 1fr 1fr 1fr`, gap 8px

### Auth screen
- Stejna karta jako hlavni panel (2px solid #FF6B00, border-radius 16px)
- Nadpis: 15px/700, white, centrovany
- Popis: #888, 13px, centrovany
- Input: 160px sirka, 22px font, letter-spacing 8px, monospace, centrovany
- Error: #ff4444, 13px

### Error message
- `background: #2a0a0a`
- `border: 2px solid #aa0000`
- `border-radius: 8px`
- `padding: 14px`
- `color: #ff4444`

---

## Loading animace

### Spinner
- SVG kruh 90x90px, `stroke: #FF6B00`, `strokeWidth: 4`, `strokeDasharray: 60 180`
- Animace: `spin-arc 1.4s linear infinite`
- Vnitrni prstenc: radial gradient orange s `pulse-ring 2s ease-in-out infinite`
- Uprostred: pocet sekund (22px/900 orange) + "SEK" (9px/700 #666)

### Mini spinner (preflight)
- SVG 14x14px, `stroke: #FF6B00`, `strokeWidth: 2`, `strokeDasharray: 12 20`
- Animace: `spin-arc 1s linear infinite`

### Loading phases
- 25 rotujicich textu, kazdy 8-15s (random interval)
- Styl: #aaa, 13px/600
- Pod tim: "Analyza trva cca 3 minuty" — #444, 11px

---

## Layout

### Globalni
- `min-height: 100vh`
- `background: #111`
- `padding: 20px`
- **Max-width**: `800px`, centrovany (`margin: 0 auto`)
- **Padding-top**: `40px`

### Sekce (shora dolu)
1. Logo + nadpis (centrovano, `margin-bottom: 40px`)
2. Auth screen NEBO hlavni input karta (`margin-bottom: 32px`)
3. Preflight (uvnitr karty, `margin-top: 16px`, separator `border-top: 1px solid #222`)
4. Error (uvnitr karty, `margin-top: 16px`)
5. Loading (uvnitr karty)
6. Historie (`margin-bottom: 32px`) — zobrazena jen kdyz neni loading a neni analyza
7. Report area
8. Paticka (centrovana, `margin-top: 24px`)

---

## Print styly

```css
@media print {
  .no-print { display: none !important; }
  html, body {
    background: white !important;
    margin: 0 !important;
    padding: 0 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .print-area {
    background: white !important;
    border: none !important;
    padding: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .print-area div { color: black !important; }
  @page { margin: 15mm; size: A4; }
}
```

Titul pri tisku: `CRO Report - {url} - {HH:MM}`

---

## Report rendering pravidla

### Markdown → vizualni mapovani
| Markdown | Vizual |
|----------|--------|
| `# text` | 22px/900 white |
| `## text` | 15px/700 orange, uppercase, letter-spacing 1px |
| `### text` | 14px/700 #ccc |
| `**bold**` | `<strong>` |
| `*italic*` | `<em>` |
| `- item` / `* item` | 14px #aaa, odsazeno 20px |
| `1. item` | 600 weight #ddd, odsazeno 8px |
| `---` / `***` | 4px mezera |
| Prazdny radek | 4px mezera |

### Prioritni sekce (keyword detection)
| Keyword v textu | Barva textu | Border-left barva |
|-----------------|-------------|-------------------|
| KRITICKE / KRITICK | #ff4444 | #ff4444 |
| VYSOKA | #FF6B00 | #FF6B00 |
| STREDNI | #ffcc00 | #ffcc00 |
| QUICK | #00ccff | #00ccff |
| DOPORUCENA / PRIORITIZACE / AKCNI | #aaffaa | #4CAF50 |

Vsechny prioritni sekce: 17px/700, `border-left: 4px solid`, `padding-left: 12px`, `margin-top: 28px`

### Specialni radky (regex)
- `/^(Proc to boli|Jak opravit|Jak na to|Dopad|Clarity signal|Jak overit):/` → italic, #888, padding-left 16px

---

## Brand elementy

### Badge "ESHOP BOOSTER" (v reportu)
- `background: #FF6B00`
- `border-radius: 8px`
- `padding: 8px 16px`
- `font-size: 12px`
- `font-weight: 700`
- `color: white`
- `text-transform: uppercase`

### Report header
- Levy sloupec: "AI CRO Analyza" label (12px/700 orange, letter-spacing 3px, uppercase) + URL (22px/900 white) + cas (12px #555)
- Pravy sloupec: ESHOP BOOSTER badge + Kopirovat/PDF buttony
- Oddeleno: `border-bottom: 2px solid #333`

### Footer
- `border-top: 1px solid #2a2a2a`
- "ESHOP BOOSTER 2026 • Ruslan Skopal" — #333, 12px
- Globalni footer: "ESHOP BOOSTER 2026 • KRIS v6 • Ruslan Skopal" — #333, 12px, centrovany

---

## Spacing Scale

Zakladni jednotka: **4px**

| Token | Hodnota | Typicke pouziti |
|-------|---------|-----------------|
| xs | 4px | margin-top mezi radky, gap badge |
| sm | 8px | gap buttonu, padding maly |
| md | 12px | gap select grid, padding badge |
| base | 16px | margin-bottom sekce, padding karty vnitrni |
| lg | 20px | padding historie karta |
| xl | 24px | margin-bottom report header |
| 2xl | 28px | margin-top sekce v reportu |
| 3xl | 32px | padding hlavni karty, margin-bottom panelu |
| 4xl | 40px | padding-top stranky |

---

## Responsive / Layout

### Aktualni stav
- Single column layout, `max-width: 800px`
- Zadne breakpointy — funguje na mobilu diky jednoduche strukture
- Preflight selecty: `grid-template-columns: 1fr 1fr 1fr` (muze byt tesne na mobilu)

### Breakpointy (pro budouci pouziti)

| Nazev | Sirka | Pouziti |
|-------|-------|---------|
| mobile | < 640px | Preflight selecty na 1 sloupec, mensi padding |
| tablet | 640-1024px | Aktualni layout (funguje dobre) |
| desktop | > 1024px | Aktualni layout (max-width 800px) |

---

## Accessibility

### Aktualni stav (minimalni)
- Inputs maji placeholder (ale ne label element)
- Buttons maji text obsah
- Keyboard: Enter spousti analyzu i auth

### Pravidla pro budouci zmeny
- **Kontrast**: minimalne 4.5:1 pro text, 3:1 pro velky text
  - #FF6B00 na #111 = 4.3:1 — tesen na hrane, nezmensovat font pod 14px
  - #ccc na #1a1a1a = 10.3:1 — OK
  - #555 na #1a1a1a = 2.7:1 — FAIL pro maly text, pouzivat jen pro dekorativni/nekriticke
- **Focus indikatory**: pri pridani custom focus stylu nikdy `outline: none` bez nahrazky
- **Semantic HTML**: pouzivat `<main>`, `<nav>`, `<section>` kde to dava smysl
- **Form labels**: inputy by mely mit asociovany `<label>` (ne jen placeholder)
- **ARIA**: pouzivat jen kdyz semantic HTML nestaci
- **Obrazky**: alt text na vsechny obrazky (aktualne jen SVG logo — dekorativni)

---

## Animace — Reduced Motion

### Aktualni stav
- Loading spinner: `spin-arc 1.4s linear infinite`
- Pulse ring: `pulse-ring 2s ease-in-out infinite`
- Zadna podpora `prefers-reduced-motion`

### Pravidlo
Pri budouci zmene animaci pridat:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

Nebo cilene: zastavit spinner, nechat jen staticky pocet sekund.

---

## Pravidla pri zmene designu

1. **Orange #FF6B00 je jedina akcentova barva** — nepridavej dalsi akcenty
2. **Dark theme only** — zadny light mode, zadny toggle
3. **Vsechno inline styly** — zadne CSS soubory, zadny globals.css, zadny Tailwind
4. **Font stack je Arial Black + Arial** — zadne externi fonty, zadne Google Fonts
5. **Border-radius**: karty 12-16px, buttony/inputy 6-8px, logo 8px
6. **Transitions**: jen na toggle (Clarity checkbox) — `transition: all 0.2s`
7. **Animace**: jen loading spinner a pulse ring — zadne dalsi animace
8. **Print**: vzdy otestuj ze .no-print skryva spravne a report se tiskne cerne na bilem
9. **Accessibility**: nezmensovat orange text pod 14px (hraticni kontrast), nepouzivat #555 pro kriticke informace
10. **Reduced motion**: pri zmene animaci respektovat `prefers-reduced-motion`
