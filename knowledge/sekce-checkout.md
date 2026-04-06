# KRIS KB: Sekce Checkout (Objednávkový proces)

## Kritické prvky

### Struktura checkoutu
- Od kroku 2: BEZ menu, BEZ vyhledávání, pouze logo + telefon
- Patička v checkoutu: jen Obchodní podmínky, Ochrana údajů, Kontakt
- Progress bar kroků (1. Košík → 2. Doprava → 3. Platba → 4. Shrnutí)

### Datum doručení
- Konkrétní datum u každé možnosti dopravy
- "Objednáš do 14:00 → doručíme [konkrétní den]"
- U expresní dopravy: zelená barva + urgence

### Platební metody
- Apple Pay a Google Pay na mobilu: dramaticky snižují friction
- BNPL (Twisto, Splitty, Alma): zobrazit jako první platební metodu u objednávek nad 1 000 Kč
- Loga platebních metod viditelná před zahájením checkout procesu

### Formulář
- Automatické vyplnění adresy (Google Places API)
- Inline validace (ne až po odeslání)
- Mobilní číslo ve formátu +420 pro SK/CZ trh

### Trust signály v checkoutu
- SSL badge viditelný
- Telefonní číslo klikatelné
- Recenze / hodnocení obchodu (Heureka, Google)

## Clarity metriky pro checkout
- Funnel: Košík → Doprava → Platba → Shrnutí → Děkujeme
- Odpad na každém kroku: >20 % = kritický problém
- Rage clicks na tlačítko "Pokračovat" nebo "Objednat"
- Heatmapa výběru dopravy: % zákazníků kteří scrollují pod první možnost
