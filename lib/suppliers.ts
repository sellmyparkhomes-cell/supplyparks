export type Supplier = {
  id: string;
  name: string;
  categories: string[]; // category slugs
  region: string;
  description: string;
  yearsTrading?: string;
  phone?: string;
  email: string;
  website?: string;
  verified: boolean;
};

// Real supplier data pulled from the live admin (26 approved suppliers).
// The 12 below carry full profiles copied from the current Browse page.
// The remainder are placeholders (name + email only, from the admin's membership
// list) flagged for full migration during the content-migration build phase —
// do not treat their category/description as accurate yet.

export const suppliers: Supplier[] = [
  {
    id: "oakgrove-cabins",
    name: "Oakgrove Cabins Ltd",
    categories: ["lodges-static-homes"],
    region: "Derry",
    description:
      "Family run business who have been crafting luxury lodges and park homes since 1998.",
    yearsTrading: "Trading since 1998",
    phone: "02871 861166",
    email: "sales@oakgrovelodges.co.uk",
    website: "www.oakgrovelodges.co.uk",
    verified: true,
  },
  {
    id: "decoco-park-home-interiors",
    name: "Decoco Park Home Interiors Ltd",
    categories: ["furniture-interiors"],
    region: "Northamptonshire",
    description:
      "Whether you're looking for a complete internal finish or a refresh, our team of skilled professionals are here to bring your home back to life.",
    email: "Decoco@mail.com",
    verified: true,
  },
  {
    id: "may-recruitment",
    name: "May Recruitment",
    categories: ["professional-services-recruitment"],
    region: "Plymouth",
    description:
      "We help businesses hire with confidence. A leading recruitment partner within the Leisure and Holiday Park industry.",
    email: "milly@mayrecruitment.co.uk",
    verified: true,
  },
  {
    id: "parcvu",
    name: "ParcVu Powered by Booking Experts",
    categories: ["it-software", "sales-marketing-media"],
    region: "Cheshire",
    description:
      "ParcVu has helped holiday parks manage their business for over 35 years, from small family run parks to the largest of operators. Now part of Booking Experts, one of Europe's leading software providers.",
    yearsTrading: "35+ years",
    email: "andy.cressey@parcvu.com",
    verified: true,
  },
  {
    id: "park-designs",
    name: "Park Designs",
    categories: ["sales-marketing-media"],
    region: "Nottingham",
    description:
      "Original and creative content solutions tailored to caravan, lodge, park home, mobile home and estate agency businesses.",
    email: "marketing@park-designs.co.uk",
    verified: true,
  },
  {
    id: "sansom-construction-group",
    name: "Sansom Construction Group",
    categories: ["groundwork-construction", "landscaping-environment", "maintenance-repairs", "utilities-energy"],
    region: "Devon",
    description:
      "Trusted experts in surfacing, groundworks and civil engineering, delivering projects across the holiday park sector for over 20 years.",
    yearsTrading: "20+ years",
    email: "neil@scgltd.com",
    verified: true,
  },
  {
    id: "echo-financial-services",
    name: "Echo Financial Services",
    categories: ["finance-insurance", "professional-services-recruitment"],
    region: "Wiltshire",
    description:
      "All tax and finance advice to residential and holiday park operators for over 40 years. Park development, sales, purchases, due diligence, IHT and CGT planning.",
    yearsTrading: "40+ years",
    email: "cp@echofinancialservices.co.uk",
    verified: true,
  },
  {
    id: "jem-marketing",
    name: "JEM Marketing",
    categories: ["sales-marketing-media"],
    region: "",
    description:
      "Holiday Park Marketing Consultant and Fractional CMO helping UK holiday park operators unlock strategic growth, increase bookings and boost holiday home sales.",
    email: "mel@jem-marketing.co.uk",
    verified: true,
  },
  {
    id: "my-compliance-consultant",
    name: "My Compliance Consultant Limited",
    categories: ["professional-services-recruitment", "finance-insurance"],
    region: "North Yorkshire",
    description:
      "Specialist consumer credit compliance firm helping lenders, brokers and financial service providers meet UK regulatory requirements.",
    email: "shaun@mycomplianceconsultant.com",
    verified: true,
  },
  {
    id: "prestige-developments",
    name: "Prestige Developments",
    categories: ["maintenance-repairs"],
    region: "Northamptonshire",
    description:
      "The UK's number one Park Home refurbishment company, established since 1991, covering all park home refurbishments and repairs.",
    yearsTrading: "Trading since 1991",
    email: "dave.ray@prestigedevelopments.com",
    verified: true,
  },
  {
    id: "fitrite-fencing-decking",
    name: "Fitrite Fencing & Decking",
    categories: ["landscaping-environment", "maintenance-repairs"],
    region: "Doncaster",
    description:
      "Many years' experience working on holiday parks nationally. A trusted, leading uPVC decking supplier installing premium-quality decking and fencing.",
    email: "emma.harrison@fitrite.info",
    verified: true,
  },
  {
    id: "mainland-leisure",
    name: "Mainland Leisure Ltd",
    categories: ["hot-tubs-spa-wellness", "health-safety"],
    region: "Cheshire",
    description: "Hot tubs, heat pumps and compliance with HSG282.",
    email: "neil@thetubstore.co.uk",
    verified: true,
  },
  // -- Placeholders below: name + email only, migrate full profile from current admin --
  { id: "quickmove-properties", name: "Quickmove Properties", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "stuart.bell@quickmoveproperties.co.uk", verified: true },
  { id: "parks-in-video", name: "Parks in Video Limited", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "info@parksinvideo.co.uk", verified: true },
  { id: "park-and-leisure", name: "Park and Leisure Ltd", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "barry@parkandleisure.co.uk", verified: true },
  { id: "groundscrews4u", name: "Groundscrews4u Ltd", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "Andy@gs4u.co.uk", verified: true },
  { id: "furniture-centre", name: "Furniture Centre Limited", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "info@furniturecentre.co.uk", verified: true },
  { id: "holidaylodges-co-uk", name: "holidaylodges.co.uk", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "info@holidaylodges.co.uk", verified: true },
  { id: "the-park-home-agency", name: "The Park Home Agency", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "chris.hendry@theparkhomeagency.co.uk", verified: true },
  { id: "holidaymaker", name: "Holidaymaker", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "allana@holidaymakerapp.co.uk", verified: true },
  { id: "approved-finance-group", name: "Approved Finance Group", categories: ["finance-insurance"], region: "", description: "Profile to be migrated from the current site.", email: "info@approved-finance.co.uk", verified: true },
  { id: "world-of-park-leisure-homes-show", name: "The World of Park & Leisure Homes Show", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "organisers@parkandleisurehomeshows.co.uk", verified: true },
  { id: "omar-park-development-services", name: "Omar Park Development Services", categories: ["groundwork-construction"], region: "", description: "Profile to be migrated from the current site.", email: "opds@omar.co.uk", verified: true },
  { id: "dress-pack-solutions", name: "Dress Pack Solutions Ltd", categories: ["furniture-interiors"], region: "", description: "Profile to be migrated from the current site.", email: "info@dresspacks.co.uk", verified: true },
  { id: "the-print-agency", name: "The Print Agency", categories: ["sales-marketing-media"], region: "", description: "Profile to be migrated from the current site.", email: "sarah@theprintagency.com", verified: true },
  { id: "sell-my-group", name: "Sell My Group", categories: ["other"], region: "", description: "Profile to be migrated from the current site.", email: "info@sellmygroup.co.uk", verified: true },
];

export function getSupplier(id: string): Supplier | undefined {
  return suppliers.find((s) => s.id === id);
}

export function suppliersByCategory(slug: string): Supplier[] {
  return suppliers.filter((s) => s.categories.includes(slug));
}
