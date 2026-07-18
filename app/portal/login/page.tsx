export default function PortalLoginPage() {
  return (
    <main className="mx-auto max-w-[420px] px-5 py-16">
      <h1 className="mb-2 font-display text-2xl text-forest-deep">Supplier portal</h1>
      <p className="mb-6 text-sm text-ink-soft">Log in to view your enquiries and edit your profile.</p>
      <div className="rounded-card border border-line bg-white p-6 text-sm text-ink-soft">
        Login isn&apos;t wired up yet — this needs a Supabase project connected first.
        <br />
        <br />
        TODO: replace with Supabase auth (email + password), matching the existing
        supplier accounts once migrated.
      </div>
    </main>
  );
}
