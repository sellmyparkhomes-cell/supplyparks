export type Category = {
  slug: string;
  name: string;
};

// 13 fixed categories — cleaned up from the messy/duplicated tag list on the live site.
export const categories: Category[] = [
  { slug: "groundwork-construction", name: "Groundwork & Construction" },
  { slug: "finance-insurance", name: "Finance & Insurance" },
  { slug: "furniture-interiors", name: "Furniture & Interiors" },
  { slug: "landscaping-environment", name: "Landscaping & Environment" },
  { slug: "professional-services-recruitment", name: "Professional Services & Recruitment" },
  { slug: "sales-marketing-media", name: "Sales, Marketing & Media" },
  { slug: "it-software", name: "IT & Software" },
  { slug: "health-safety", name: "Health & Safety" },
  { slug: "hot-tubs-spa-wellness", name: "Hot Tubs, Spa & Wellness" },
  { slug: "maintenance-repairs", name: "Maintenance & Repairs" },
  { slug: "lodges-static-homes", name: "Lodges & Static Homes" },
  { slug: "utilities-energy", name: "Utilities & Energy" },
  { slug: "other", name: "Other" },
];

export function categoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? "Other";
}
