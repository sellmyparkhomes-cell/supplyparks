"use client";

import { useMemo, useState } from "react";
import SupplierCard from "@/components/SupplierCard";
import { suppliers } from "@/lib/suppliers";
import { categories } from "@/lib/categories";

export default function SuppliersPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return suppliers.filter((s) => {
      const matchesCategory = !activeCategory || s.categories.includes(activeCategory);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <main>
      <section className="bg-forest-deep px-5 py-14 text-paper">
        <div className="mx-auto max-w-[1160px]">
          <h1 className="mb-2 font-display text-3xl md:text-4xl">Find a supplier</h1>
          <p className="opacity-85">Browse {suppliers.length} verified suppliers in the UK park industry</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-5 py-10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, description, or location..."
          className="mb-5 w-full rounded-card border border-line px-4 py-3"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-card border px-4 py-2 text-sm ${
              activeCategory === null
                ? "border-forest-deep bg-forest-deep text-paper"
                : "border-line text-ink-soft"
            }`}
          >
            All categories
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCategory(c.slug)}
              className={`rounded-card border px-4 py-2 text-sm ${
                activeCategory === c.slug
                  ? "border-forest-deep bg-forest-deep text-paper"
                  : "border-line text-ink-soft"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-ink-soft">{filtered.length} suppliers found</p>

        <div className="grid gap-5 md:grid-cols-3">
          {filtered.map((s) => (
            <SupplierCard key={s.id} supplier={s} source="browse" />
          ))}
        </div>
      </section>
    </main>
  );
}
