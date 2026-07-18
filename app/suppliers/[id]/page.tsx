import { notFound } from "next/navigation";
import { getSupplier } from "@/lib/suppliers";
import { categoryName } from "@/lib/categories";
import QuoteButton from "@/components/QuoteButton";

export default function SupplierDetailPage({ params }: { params: { id: string } }) {
  const supplier = getSupplier(params.id);
  if (!supplier) return notFound();

  return (
    <main className="mx-auto max-w-[1160px] px-5 py-12">
      <div className="grid gap-10 md:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            {supplier.categories.map((c) => (
              <span
                key={c}
                className="rounded-card bg-paper-dim px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-rust-deep"
              >
                {categoryName(c)}
              </span>
            ))}
          </div>
          <h1 className="mb-2 font-display text-3xl text-forest-deep md:text-4xl">
            {supplier.name}
          </h1>
          <div className="mb-6 text-sm text-ink-soft">
            {supplier.region}
            {supplier.yearsTrading ? ` · ${supplier.yearsTrading}` : ""}
          </div>
          <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-ink">
            {supplier.description}
          </p>

          {/* Top-of-page CTA per the board's advice — not buried at the bottom */}
          <QuoteButton
            supplierId={supplier.id}
            supplierName={supplier.name}
            source="supplier_detail_top"
          />
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-card border border-line bg-white p-5">
            <h2 className="mb-3 font-display text-base text-forest-deep">Contact</h2>
            <ul className="space-y-2 text-sm">
              {supplier.phone && <li>Phone: {supplier.phone}</li>}
              <li>Email: {supplier.email}</li>
              {supplier.website && <li>Website: {supplier.website}</li>}
            </ul>
          </div>
          <div className="rounded-card bg-forest-deep p-5 text-paper">
            <h2 className="mb-2 font-display text-base">Make an enquiry</h2>
            <p className="mb-4 text-sm opacity-85">
              Interested in this supplier? Get in touch directly.
            </p>
            <QuoteButton
              supplierId={supplier.id}
              supplierName={supplier.name}
              source="supplier_detail_sidebar"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
