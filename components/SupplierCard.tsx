import Link from "next/link";
import type { Supplier } from "@/lib/suppliers";
import { categoryName } from "@/lib/categories";
import QuoteButton from "./QuoteButton";

export default function SupplierCard({ supplier, source = "browse" }: { supplier: Supplier; source?: string }) {
  const primaryCategory = supplier.categories[0];
  return (
    <div className="flex flex-col gap-3 rounded-card border border-line bg-white p-6">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-rust-deep">
        {categoryName(primaryCategory)}
      </div>
      <h3 className="font-display text-lg text-forest-deep">
        <Link href={`/suppliers/${supplier.id}`}>{supplier.name}</Link>
      </h3>
      {supplier.yearsTrading && (
        <div className="text-xs text-ink-soft">{supplier.yearsTrading}</div>
      )}
      <p className="flex-1 text-sm text-ink-soft">{supplier.description}</p>
      <div className="flex items-center justify-between border-t border-line pt-3">
        <QuoteButton
          supplierId={supplier.id}
          supplierName={supplier.name}
          source={source}
          variant="outline"
          label="Get a quote"
        />
        <span className="text-xs text-ink-soft">{supplier.region}</span>
      </div>
    </div>
  );
}
