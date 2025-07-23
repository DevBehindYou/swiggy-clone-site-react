# Swiggy‑Style Food Ordering UI (React+Vite+Supabase)
<img width="1275" height="89" alt="image" src="https://github.com/user-attachments/assets/41b93d47-a882-4529-831b-de9fff8dca73" />

A learning project that recreates core UI flows from Swiggy: sticky header with location selector, slide‑in drawer, search panel, category rail, and top restaurants carousel. Data loads from Supabase (public read) and maps into reusable React components styled with Tailwind CSS.

- 🔗 Live Link [https://swiggy-clone-site-react.vercel.app/]

---

### 🚀 Quick Start (TL;DR)
```
git clone https://github.com/DevBehindYou/swiggy-clone-site-react.git swiggy-clone
cd swiggy-clone

# 2. Install deps
npm install

# 3. Start dev server
npm run dev
```

### 🧰 Tech Stack

- React (functional components + hooks)
- Vite (fast dev + build)
- Tailwind CSS (utility styling)
- React Icons (icon set: Rx, Io, Md, Lu, Pi, etc.)
- Supabase (Postgres DB, Row Level Security, optional Storage for images)

### 🌟 Key Features

- Sticky header with location label, caret trigger, dark backdrop, left slide drawer, ESC / click‑out close.
- Drawer search panel with type filter, keyboard nav, clear action.
- Action links: Search, Offers (badge), Help, Sign In, Cart (count).
- Category rail: horizontal list of food types loaded from Supabase category table.
- Top Restaurants carousel: translates horizontally with arrow controls; rating, ETA, promo overlay.
- Data‑driven UI: loads category and restaurants rows; safe image fallback.
- Path import aliases in Vite for clean imports.

### 🔐 Supabase Client

Create supabaseClient.jsx in the project src/servers/supabaseClient.jsx.
```
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

## 🖼️ Screenshots

Screenshots or GIFs here:
<img width="1325" height="651" alt="screely-1753267536405" src="https://github.com/user-attachments/assets/44b8997e-cd92-44e4-b694-69cd734d84c3" />
<img width="1362" height="673" alt="screely-1753267579085" src="https://github.com/user-attachments/assets/7c1cc671-0243-460c-8889-f5326f95c904" />
<img width="1375" height="600" alt="screely-1753267749914" src="https://github.com/user-attachments/assets/888aada0-ed44-4dbe-bad0-900e5ac1e1d1" />


### 📁 Project Structure

layout:
```
swiggy-clone/
├─ public/
│  ├─ swiggy-logo.svg
│  └─ images/              # local demo images (optional; use Storage in prod)
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Category.jsx
│  │  ├─ Card.jsx
│  │  ├─ Footer.jsx
│  │  ├─ OnlineDelivery.jsx
│  │  └─ TopRestaurants.jsx
│  │  └─ SearchPanel.jsx
│  ├─ servers/
│  │  └─ supabaseClient.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ vite.config.js
├─ package.json
└─ README.md
```
### ✅ Roadmap

- Lazy load images (intersection observer)
- Per restaurant route view (menu, reviews)
- Cart state + checkout mock
- Auth sign‑in (email magic link or OAuth)
- Offer eligibility by auth state
- Skeleton loading states
- Unit tests (Vitest + Testing Library)
