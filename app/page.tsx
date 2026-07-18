import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import SupplierCard from "@/components/SupplierCard";
import CategoryGrid from "@/components/CategoryGrid";
import { suppliers } from "@/lib/suppliers";
import { categories } from "@/lib/categories";

export default function Home() {
  const featured = suppliers.slice(0, 3);

  return (
    <main>
      <section className="border-b border-line py-16 md:py-24">
        <div className="mx-auto grid max-w-[1160px] items-end gap-12 px-5 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-rust-deep">
              The supplier network for UK parks
            </div>
            <h1 className="mb-5 font-display text-4xl leading-tight text-forest-deep md:text-6xl">
              Find the right supplier without the endless searching.
            </h1>
            <p className="mb-8 max-w-md text-lg text-ink-soft">
              Browse verified suppliers across construction, finance, marketing and
              more — every category the park industry actually needs, in one place.
            </p>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <QuoteButton
                supplierId="general"
                supplierName="a SupplyParks supplier"
                source="homepage_hero"
              />
              <Link
                href="/suppliers"
                className="inline-block rounded-card border border-forest-deep px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-forest-deep hover:bg-paper-dim"
              >
                Browse suppliers
              </Link>
            </div>
            <div className="text-[13px] text-ink-soft">
              Free to use. Responses go straight to your inbox.
            </div>
          </div>
          <div className="rounded-card bg-forest-deep p-8 text-paper">
            <div className="flex justify-between border-b border-paper/15 py-3.5 text-sm">
              <span>Verified suppliers</span>
              <b className="font-display text-xl font-medium">{suppliers.length}</b>
            </div>
            <div className="flex justify-between py-3.5 text-sm">
              <span>Industry categories</span>
              <b className="font-display text-xl font-medium">{categories.length}</b>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16">
        <div className="mx-auto max-w-[1160px] px-5">
          <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
            <h2 className="font-display text-2xl text-forest-deep md:text-3xl">
              Browse by category
            </h2>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1160px] px-5">
          <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
            <h2 className="font-display text-2xl text-forest-deep md:text-3xl">
              Featured suppliers
            </h2>
            <Link href="/suppliers" className="text-[13px] font-semibold uppercase tracking-wide text-rust-deep">
              Browse all {suppliers.length} &rarr;
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((s) => (
              <SupplierCard key={s.id} supplier={s} source="homepage_featured" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
