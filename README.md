# SupplyParks — rebuild (v1 scaffold)

This is a working starter for the SupplyParks rebuild: Next.js + Tailwind,
styled to match the approved concept (Fraunces + IBM Plex Sans, forest/rust
palette), seeded with real supplier data pulled from the current site's admin.

## What's in here

- Home, Browse Suppliers (search + category filter), Category pages, Supplier
  profiles, FAQ, "List your business", legal page stubs.
- One consistent "Get a quote" button used everywhere (nav, hero, every
  supplier card, top of every profile) — replacing the old broken/buried CTA.
- Click vs. submission tracking on every quote button (`lib/track.ts`), so we
  can tell whether the CTA fix is actually working.
- Supplier portal and admin routes are stubbed with clear TODOs — they need a
  Supabase project connected before they do anything real.

## Running it yourself

You need Node.js installed (nodejs.org — get the LTS version). Then, in this
folder:

```
npm install
npm run dev
```

Open http://localhost:3000 to see it.

## Deploying (no local setup needed)

1. Create a new GitHub repository and upload this whole folder to it.
2. In Vercel, "Add New Project" → import that GitHub repo → Deploy.
   Vercel installs everything and builds it automatically — you don't need
   Node.js on your own machine for this path.
3. Once it's live on a vercel.app address, we point supplyparks.co.uk's DNS
   at it and it becomes the real site.

## Still to do before this replaces the live site

- Create a free Supabase project (supabase.com) — this becomes the real
  database instead of the hard-coded data in `lib/suppliers.ts`.
- Wire up supplier + admin login (Supabase Auth).
- Build the admin approval queue and analytics dashboard against real data.
- Migrate full profiles for the 14 suppliers currently seeded as
  placeholders (search this codebase for "Profile to be migrated").
- Point supplyparks.co.uk's DNS at Vercel and cancel the old hosting.
