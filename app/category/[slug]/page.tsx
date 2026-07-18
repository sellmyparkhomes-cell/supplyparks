import { notFound } from "next/navigation";
import { categoryName, categories } from "@/lib/categories";
import { suppliersByCategory } from "@/lib/suppliers";
import SupplierCard from "@/components/SupplierCard";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const exists = categories.some((c) => c.slug === params.slug);
  if (!exists) return notFound();

  const list = suppliersByCategory(params.slug);

  return (
    <main className="mx-auto max-w-[1160px] px-5 py-12">
      <h1 className="mb-2 font-display text-3xl text-forest-deep">
        {categoryName(params.slug)}
      </h1>
      <p className="mb-8 text-sm text-ink-soft">{list.length} suppliers in this category</p>
      <div className="grid gap-5 md:grid-cols-3">
        {list.map((s) => (
          <SupplierCard key={s.id} supplier={s} source={`category_${params.slug}`} />
        ))}
        {list.length === 0 && (
          <p className="text-ink-soft">No suppliers listed in this category yet.</p>
        )}
      </div>
    </main>
  );
}
