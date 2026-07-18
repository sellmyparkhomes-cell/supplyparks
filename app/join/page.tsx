"use client";

export default function JoinPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: once Supabase is connected, insert a supplier row with status "pending"
    // for admin review, matching the existing PendingSuppliers approval workflow.
    alert("Thanks — your listing has been submitted for review.");
  }

  return (
    <main className="mx-auto max-w-[560px] px-5 py-14">
      <h1 className="mb-2 font-display text-3xl text-forest-deep">List your business</h1>
      <p className="mb-8 text-sm text-ink-soft">
        Submit your details below. Listings are reviewed before going live.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Company name *</label>
          <input required className="w-full rounded-card border border-line px-3 py-2" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Contact name *</label>
          <input required className="w-full rounded-card border border-line px-3 py-2" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email *</label>
          <input type="email" required className="w-full rounded-card border border-line px-3 py-2" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Phone</label>
          <input className="w-full rounded-card border border-line px-3 py-2" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Description *</label>
          <textarea required rows={4} className="w-full rounded-card border border-line px-3 py-2" />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-card bg-rust px-5 py-3 text-sm font-semibold uppercase tracking-wide text-paper hover:bg-rust-deep"
        >
          Submit for review
        </button>
      </form>
    </main>
  );
}
