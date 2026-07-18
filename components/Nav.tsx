import Link from "next/link";
import QuoteButton from "./QuoteButton";

export default function Nav() {
  return (
    <>
      <div className="bg-forest-deep px-5 py-2 text-[13px] tracking-wide text-paper">
        <div className="mx-auto flex max-w-[1160px] items-center justify-between opacity-90">
          <span>UK Park &amp; Leisure Home Industry — Supplier Directory</span>
          <span className="hidden sm:inline">26 verified suppliers</span>
        </div>
      </div>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold text-forest-deep">
            <span className="inline-block h-7 w-7 rounded-card bg-forest" />
            SupplyParks
          </Link>
          <nav className="hidden gap-8 text-sm text-ink-soft md:flex">
            <Link href="/suppliers">Suppliers</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/join">List your business</Link>
          </nav>
          <QuoteButton supplierId="general" supplierName="a SupplyParks supplier" source="nav" />
        </div>
      </header>
    </>
  );
}
