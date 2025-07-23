# Swiggy‑Style Food Ordering UI (React + Vite + Supabase)
<img width="1279" height="80" alt="image" src="https://github.com/user-attachments/assets/85b74f3a-a7b6-4955-9cb8-17740f98da98" />

A learning project that recreates core UI flows from Swiggy: sticky header with location selector, slide‑in drawer, search panel, category rail, and top restaurants carousel. Data loads from Supabase (public read) and maps into reusable React components styled with Tailwind CSS.

- 🔗 Live Link [https://swiggy-clone-site-react.vercel.app/]

---

### 🚀 Quick Start (TL;DR)
```
git clone <YOUR_REPO_URL> swiggy-clone
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

<img width="1291" height="577" alt="image" src="https://github.com/user-attachments/assets/0fe12454-b83f-4b5a-82ff-c0d9fd22f60a" />
<img width="1332" height="579" alt="image" src="https://github.com/user-attachments/assets/a6885849-698e-4be0-846f-186c19977780" />



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
