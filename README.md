# Le Cronache di Beygat - Website

Sito web tematico per il romanzo **"Le Cronache di Beygat: Fuga dal Regno Centrale"** di Cristian Sanchez.

## 🚀 Quick Start

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Apri http://localhost:3000
```

## 📁 Struttura

```
bookeditor/
├── src/
│   ├── app/
│   │   ├── page.tsx         # Homepage
│   │   ├── layout.tsx       # Layout principale
│   │   ├── globals.css      # Stili globali
│   │   ├── libro/           # Pagina "Il Libro"
│   │   ├── autore/          # Pagina "L'Autore"
│   │   ├── estratto/        # Estratto gratuito
│   │   ├── contatti/        # Form contatti
│   │   └── acquista/        # Pagina acquisto
│   └── components/
│       ├── Header.tsx       # Navigazione
│       └── Footer.tsx       # Footer
├── tailwind.config.ts       # Configurazione Tailwind
└── package.json
```

## 🎨 Tema

Il design riflette l'atmosfera **distopica** del libro:

- **Palette:** Grigi metallici (steel), blu luminoso (omnis-glow)
- **Typography:** Cinzel per titoli, Georgia per testo
- **Mood:** Dark, industriale, misterioso

### Colori principali

| Nome | Hex | Uso |
|------|-----|-----|
| `steel-950` | #0d1117 | Background |
| `steel-100` | #eceef2 | Testo principale |
| `omnis-glow` | #60a5fa | Accenti, CTA |
| `omnis-cherry` | #dc2626 | Tobias |
| `omnis-lavender` | #a855f7 | Crystal |

## 📄 Pagine

1. **Home** - Hero animato, citazione, feature cards
2. **Il Libro** - Trama e personaggi
3. **L'Autore** - Bio e influenze
4. **Estratto** - Primo capitolo completo
5. **Contatti** - Form funzionale
6. **Acquista** - Opzioni Kindle e Paperback

## 🛠 Tecnologie

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** (Cinzel)

## 📦 Build per Produzione

```bash
npm run build
npm start
```

## 🌐 Deploy

Compatibile con:
- Vercel (consigliato)
- Netlify
- Qualsiasi hosting Node.js

---

*© 2025 Cristian Sanchez. Tutti i diritti riservati.*
