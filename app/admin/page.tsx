export default function AdminPage() {
  return (
    <main className="mx-auto max-w-[760px] px-5 py-16">
      <h1 className="mb-2 font-display text-2xl text-forest-deep">Admin</h1>
      <p className="text-sm text-ink-soft">
        TODO: pending supplier approvals, membership controls (active / suspend /
        terminate), and the analytics dashboard — same shape as the current
        Base44 admin, rebuilt against Supabase once it&apos;s connected. Restrict
        this route to admin accounts only before launch.
      </p>
    </main>
  );
}
