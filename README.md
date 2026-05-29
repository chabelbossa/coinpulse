<div align="center">
  <br />
  <img src="public/readme/dashboard-preview.png" alt="CoinPulse Dashboard" width="800" style="border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
  <br />

  <h1 align="center" style="font-size: 3rem; font-weight: 800; margin-bottom: 0;">🚀 CoinPulse</h1>
  <h3 align="center" style="font-size: 1.5rem; color: #94a3b8; font-weight: 400; margin-top: 10px;">The Ultimate Real-Time Crypto Intelligence Dashboard</h3>

  <div style="margin-top: 20px;">
    <img src="https://img.shields.io/badge/-Next.js_16-000000?style=for-the-badge&logo=Next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/-CoinGecko_API-8DC63F?style=for-the-badge&logo=coingecko&logoColor=white" />
  </div>

  <p align="center" style="max-width: 600px; margin: 30px auto; font-size: 1.1rem; line-height: 1.6; color: #cbd5e1;">
    <b>CoinPulse</b> brings institutional-grade crypto tracking to your browser. Re-engineered with a stunning <b>Slate & Cyan</b> glassmorphism interface, it delivers real-time market data, surgical-precision charting, and instant token analytics in a package that feels as good as it performs.
  </p>
</div>

---

## 💎 Experience the New Design

We've completely overhauled the visual experience to focus on clarity, depth, and data visibility.

<div align="center">
 <img src="public/readme/mobile-preview.png" alt="CoinPulse Mobile UI" width="400" style="border-radius: 30px; border: 4px solid #334155;">
</div>

### ✨ Key Visual Features

- **Deep Slate Theme**: A custom-calibrated `#0a0e14` dark palette that reduces eye strain while maximizing contrast for charts and data.
- **Glassmorphism Spec**: Translucent cards with `backdrop-blur-sm` and subtle gradient borders create a sense of depth and hierarchy.
- **Alive Interactions**: Hover effects, glows, and smooth transitions bring the interface to life without distracting from the data.
- **Progressive Geometry**: A refined radius system (6px to 24px) that guides the eye naturally through information clusters.

---

## 📸 Portfolio Gallery

<div align="center" style="display: flex; flex-direction: column; gap: 20px;">
  <img src="public/readme/portfolio-macbook.png" alt="CoinPulse on MacBook" width="800" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
  <img src="public/readme/portfolio-iphone.png" alt="CoinPulse on iPhone" width="800" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

---

## 🔋 Power Features

👉 **Real-Time Market Pulse**: Instant access to global market caps, BTC/ETH dominance, and live trending coins driven by CoinGecko's high-frequency endpoints.

👉 **Precision Charting**: A custom implementation of **TradingView Lightweight Charts**, offering responsive, interactive candlestick visualization for any asset.

👉 **Live Order Flow**: Watch trades happen in real-time with our WebSocket-powered trade history and order book visualization.

👉 **Smart Conversion**: A context-aware currency converter that handles multi-fiat and crypto pairs instantly.

👉 **Global Search**: Find any asset in seconds with our optimized global search engine, linking directly to deep-dive analytics pages.

---

## ⚙️ Built With Modern Tech

CoinPulse is crafted with the latest reliable web technologies:

- **Next.js 16** for lightning-fast server-side rendering and edge performance.
- **Tailwind CSS v4** for a high-performance, utility-first design system.
- **Shadcn/ui** for accessible, robust component primitives.
- **next-intl** for seamless internationalization and unmatched global reach.

---

## 🤸 Quick Start

Want to run CoinPulse locally?

1.  **Clone the repo**

    ```bash
    git clone https://github.com/adrianhajdin/coinpulse.git
    cd coinpulse
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file:

    ```env
    COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
    COINGECKO_API_KEY=your_key_here
    NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=
    NEXT_PUBLIC_COINGECKO_API_KEY=
    ```

    `NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL` is optional. If it is empty or not a valid `ws://` / `wss://` URL, the app keeps the historical chart and disables the live WebSocket stream instead of opening a broken relative socket.

4.  **Launch**

    ```bash
    npm run dev
    ```

    Visit `http://localhost:3000`.

---

## ✅ Local Verification

Last verified on 2026-05-29 with the local `.env.local` CoinGecko configuration:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm audit --omit=dev --audit-level=moderate
```

Observed results:

- ESLint completed with 0 errors and 0 warnings.
- TypeScript completed with `npx tsc --noEmit`.
- Production build completed successfully on Next.js 16.2.6.
- Production dependency audit reports 0 vulnerabilities after upgrading Next/React and pinning PostCSS 8.5.10 through `overrides`.
- Browser smoke check completed on `http://127.0.0.1:3210/en`, `/en/coins`, and `/en/coins/bitcoin`.
- The Bitcoin detail page was rechecked after fixing the hydration mismatch and invalid relative WebSocket URL; the verified browser run had 0 console errors.

Current screenshots:

![CoinPulse home](docs/screenshots/home-en.png)

![CoinPulse coins list](docs/screenshots/coins-en.png)

![CoinPulse Bitcoin details](docs/screenshots/bitcoin-en.png)

---

<div align="center">
  <p style="color: #64748b; font-size: 0.9rem;">
    Designed & Engineered for the future of decentralized finance.
  </p>
</div>
