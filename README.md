# The One Fitness Club — Liquid Strength website demo
Website concept crafted by Pythos Studio. React + Vite + TypeScript + Tailwind + Framer Motion + GSAP.

## Run
```
npm install
npm run dev
npm run build
```

## Real content already in the project
Photos in `public/images/` were taken from the club's Instagram profile and cropped to remove captions and address strips. Address, hours, phone and map location come from the club's Google Maps listing (`src/config/business.ts`).

## Confirm with the owner before launch
- Permission to use the photos (trainers, members, team) on the website.
- The WhatsApp number in `src/config/business.ts` (currently 07045 14113, from the Maps listing; the club's posts also show 87795 86466).
- Membership plans and prices in `src/data/membership.ts`. `price: null` shows "Contact us for current membership plans". The promotional offers seen on Instagram (₹8,999, ₹9,999) are not published until confirmed.
- Programs (`src/data/programs.ts`) and the sample articles (`src/data/articles.ts`).
- To swap photos, replace files in `public/images/` or edit `src/data/gallery.ts`.

## Deploy
1. Push to GitHub. 2. In Vercel: Add New Project, import the repo (Vite preset auto-detected). 3. Deploy. No environment variables needed.

No admin dashboard, database, or live Instagram sync exists; content is edited in the data files.
