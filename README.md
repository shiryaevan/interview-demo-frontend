# 🌸 Interview Demo Dashboard

A full-stack demo project showcasing frontend architecture, typed API integration, and modern UI/UX best practices.

📌 **Live demo**: [interview-demo-frontend](https://shiryaevan.github.io/interview-demo-frontend/)  
🔧 **Backend**: [interview-demo-backend](https://github.com/shiryaevan/interview-demo-backend)

---

## 🛠️ Stack

### Frontend
- **React 18** + **TypeScript**
- **TypeScript** + **strict types** — type safety from backend to UI
- **Vite** — lightning-fast bundler
- **Nano Stores Router** — simple and typed router for SPAs
- **RTK Query** — typed API communication via OpenAPI generator
- **ShadCN UI** — headless components based on Radix UI + Tailwind
- **Recharts** — charting and data visualization
- **React Hook Form** — robust and performant form handling
- **ESLint**, **Prettier**, **Husky**, **Lint-staged** — code quality and DX
- **GitHub Pages** — deployment

### Backend
- **Cloudflare Workers** + **Hono** — fast edge-ready backend
- **OpenAPI schema** — source of truth for the contract
- **Faker.js** — mock realistic data
- **Custom auth** — token-based flow for demo purposes
- **CORS + Error middleware** — production-ready headers & handling

---

## ✨ Features

- 🔐 Auth (mock login, token storage, header injection)
- 📊 Dashboard with real-time visualizations
- 🌱 Plant growth stats (height, harvest, fertilizer)
- 📅 Time-series and per-day breakdown
- 📋 Responsive table with row grouping and dynamic layout
- 🎨 Theming with Tailwind + Radix
- 🚀 Instant deploy via GitHub Pages and Wrangler
- ⚙️ Fully typed API client generated from OpenAPI schema
- 🧩 API integration via RTK Query + auto-injected auth headers

---

## 🧩 OpenAPI Integration

The project uses OpenAPI schema as a single source of truth:
- Generate **fully typed clients** with `openapi-generator` (with `fetch` and `redux-toolkit` generator)
- Use with **RTK Query** for seamless data fetching
- Inject **auth headers** automatically

## 📦 Deployment

- **Frontend**: auto-deployed to GitHub Pages on `main`
- **Backend**: deployed via Cloudflare Workers with Wrangler

---

## 📝 Todo

- [ ] Improve accessibility (a11y)

---

## 🧠 Author

Made with ❤️ by [shiryaevan](https://github.com/shiryaevan)