import Link from "next/link";
import { categories } from "@/lib/categories";
import { suppliersByCategory } from "@/lib/suppliers";

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
      {categories.map((c, i) => (
        <Link
          key={c.slug}
          href={`/category/${c.slug}`}
          className="flex min-h-[110px] flex-col justify-between bg-paper p-5 hover:bg-paper-dim"
        >
          <span className="font-display text-2xl text-forest/40">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold text-ink">
            {c.name} <span className="text-ink-soft">({suppliersByCategory(c.slug).length})</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
