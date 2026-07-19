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
// Descriptions are verbatim copy from each supplier's admin record (Full
// Description; Short Description used as a fallback where Full is blank).

export const suppliers: Supplier[] = [
  {
    id: "oakgrove-cabins",
    name: "Oakgrove Cabins Ltd",
    categories: ["lodges-static-homes"],
    region: "Derry",
    description:
      `Combining exceptional craftsmanship with modern design and a fully bespoke service. With a commitment to quality and innovation, we create tailored bespoke living spaces. In addition to manufacture we proudly own and operate two exclusive park developments.
Why choose an Oakgrove? Due to the WOW created as soon as your customers walk through the door.`,
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
      `The industry's No.1 choice when attention to detail matters! Decoco Park Home Interiors not only deal with the transport and siting of your park home or lodge they then complete the internal elements to the highest of standards. With meticulous attention to detail, from flawless paint application to precise trim work, their craftsmanship enhances the beauty of your Lodge or Park Home.`,
    email: "Decoco@mail.com",
    verified: true,
  },
  {
    id: "may-recruitment",
    name: "May Recruitment",
    categories: ["professional-services-recruitment"],
    region: "Plymouth",
    description:
      `We are a one-stop shop covering all sales, operational and office-based roles. Our personalised, consultative approach allows us to deliver high-quality talent at speed, without compromising on fit. We genuinely care about the people and businesses we work with, making the hiring process straightforward, enjoyable and refreshingly human. From independent, family-run parks to national operators, we make hiring faster, smarter and more effective.`,
    email: "milly@mayrecruitment.co.uk",
    verified: true,
  },
  {
    id: "parcvu",
    name: "ParcVu Powered by Booking Experts",
    categories: ["it-software", "sales-marketing-media"],
    region: "Cheshire",
    description:
      `ParcVu has helped holiday parks run their business for over 35 years, from small family-run sites to the largest operators. Park management is the whole focus here, and that shows in software built around how parks actually work.
In 2024 ParcVu became part of Booking Experts, one of Europe's leading software providers. The partnership opens a new chapter. Together the two companies are building a cloud-native platform that brings every part of park operations into one connected system.
The platform covers:

Lead management
Bookings
Online payments
Content management

Each part connects to the rest, so the tools you use to run the park work as one system rather than several that sit apart. For operators, that means managing the park from a single place, from a guest's first enquiry through to payment.
Thirty-five years in parks, now with the reach of a European software group behind it.`,
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
      `Park Designs creates content and marketing for the holiday park, park home and residential property sector. They work with caravan, lodge, park home and mobile home businesses, alongside estate agencies and residential property firms.
The approach is built around your own team. Park Designs produces the content and helps your staff use it, so you reduce agency fees and build the skills in-house rather than outsourcing everything long term.`,
    email: "marketing@park-designs.co.uk",
    verified: true,
  },
  {
    id: "sansom-construction-group",
    name: "Sansom Construction Group",
    categories: ["groundwork-construction", "landscaping-environment", "maintenance-repairs", "utilities-energy"],
    region: "Devon",
    description:
      `Sansom Construction Group is a family-run surfacing, groundworks and civil engineering contractor based in the South West, with over 50 years of experience delivering projects across the UK.

With more than 20 years of experience in the holiday and leisure park sector, working for both large group operators and independent family-run parks, Sansom supports projects from early pre-construction through to final delivery.

Its expertise includes earthworks, infrastructure and groundworks, adoption works and Section 278 highway schemes, as well as turnkey site infrastructure, base construction, drainage and utilities, surfacing, landscaping and phased works within live operational environments. Backed by its own in-house plant and haulage fleet, Sansom delivers projects with greater control, efficiency and reliability on site.

Projects are managed end to end with a focus on safety, programme, compliance and long-term quality.`,
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
      `Although newly established in name, our heritage spans more than 80 years. Now entering our third generation, we are proud to uphold a longstanding tradition of delivering high-quality, personalised service to businesses of all sizes - from sole traders to multinational corporations.
Strategic planning for the creation and protection of wealth through profit has been at the heart of our success. With over half a century of practical experience, we take great pride in continuing to offer professional, trusted advice.`,
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
      `JEM Marketing is a Devon-based fractional CMO and freelance marketing consultancy run by Melanie Brook, MCIM. It works with UK holiday park operators and leisure businesses, giving them board-level marketing support on a part-time basis rather than at the cost of a full-time hire.
Melanie brings over 15 years of experience leading marketing across hospitality, insurance and digital. The work pairs marketing strategy with hands-on delivery, shaped around each operator's goals and budget. For parks, that means handling the balance of seasonal demand, guest experience and holiday-home sales together rather than as separate problems.
Support flexes from monthly input to something more regular, and starts with a free 30-minute discovery call.`,
    email: "mel@jem-marketing.co.uk",
    verified: true,
  },
  {
    id: "my-compliance-consultant",
    name: "My Compliance Consultant Limited",
    categories: ["professional-services-recruitment", "finance-insurance"],
    region: "North Yorkshire",
    description:
      `My Compliance Consultant Ltd is a specialist consumer credit compliance firm that helps lenders, brokers, and financial service providers meet UK regulatory requirements. The company provides expert guidance, compliance frameworks, and ongoing support to ensure firms operate in line with FCA rules and industry best practices.`,
    email: "shaun@mycomplianceconsultant.com",
    verified: true,
  },
  {
    id: "prestige-developments",
    name: "Prestige Developments",
    categories: ["maintenance-repairs"],
    region: "Northamptonshire",
    description:
      `Prestige Developments is the No.1 Park Home and Mobile Home Refurbishment company in the UK. Having been established since 1991, we have transformed park homes all over the country, mainly from referrals from our satisfied customers.
Our service, quality and satisfaction rate are unrivalled in the industry and we are respected and recommended by Insurance Companies, Surveyors and Local Authorities.

Our commitment has always been to listen and give great, free advice.

Providing the very best products to the highest possible specifications at competitive prices, and to back this up with the industry's finest installation teams and first-class customer service and aftercare.`,
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
      `Fitrite Fencing & Decking is a Doncaster-based manufacturer and installer of uPVC and composite decking, fencing and balustrades, working with holiday parks, caravan and lodge owners across the UK. They specialise in holiday park, caravan and lodge decking, with verandah, deck and balustrade solutions for all sizes and configurations.
The deck boards are manufactured in the UK using first-generation recycled PVC with a virgin PVC outer skin. The boards contain no organic material, so they won't rot or decay, and a hollow finned design gives more structural strength than a solid board while letting air move through to keep them cooler in sun and less brittle in cold. The surface carries a British Standard certified non-slip texture, and upkeep is minimal beyond an occasional clean.
Fitrite supplies and fits decking for parks alongside domestic and commercial work, all built from the same product range. Products come with warranties of up to 20 years.`,
    email: "emma.harrison@fitrite.info",
    verified: true,
  },
  {
    id: "mainland-leisure",
    name: "Mainland Leisure Ltd",
    categories: ["hot-tubs-spa-wellness", "health-safety"],
    region: "Cheshire",
    description:
      `Supplying the holiday park sector with hot tubs that are designed for a commercial environment, air source heat pumps to reduce operating costs and the Blue Connect water analyser which can monitor the hot tub water 24hrs a day and enable remote testing - cutting out the labour intensive manual tests.
The system allows every hot tub on the park to be monitored from a laptop or desktop. 24hr alerts to staff and reduced chemical usage.
Since 2005 we have been constantly moving with the new technology to find better ways to make hot tub maintenance and Compliance with HSG282 easier.`,
    email: "neil@thetubstore.co.uk",
    verified: true,
  },
  {
    id: "quickmove-properties",
    name: "Quickmove Properties",
    categories: ["sales-marketing-media"],
    region: "Swindon",
    description:
      `Quickmove Properties has supported the residential park home industry since 1998, working with park operators across the UK from its base in Royal Wootton Bassett. The company provides sales, buyer lead generation and transactional support for park partners.

Many park home buyers have a house to sell first which can stall a sale. Quickmove converts buyers into cash-ready purchasers using their 5-star rated Property Part-Exchange service, so operators spend less time waiting on a sale to complete elsewhere.

The work is handled by an in-house team of property specialists experienced in dealing with manufacturers, customers, estate agents and solicitors, which keeps the process straightforward for the operator and the buyer alike.

Quickmove is a HARPA Associate Member and a member of The Property Ombudsman.`,
    phone: "01793 840917",
    email: "stuart.bell@quickmoveproperties.co.uk",
    website: "www.quickmoveproperties.co.uk",
    verified: true,
  },
  {
    id: "parks-in-video",
    name: "Parks in Video Limited",
    categories: ["sales-marketing-media"],
    region: "Edinburgh",
    description:
      `Parks in Video (VIV) is a video app built for holiday park operators and their sales teams. It lets sales staff and call centres record and send a personalised video of any holiday home or lodge in stock, straight from a phone, tablet or desk, so a buyer sees the actual home rather than a generic brochure image.
The app grew out of VIV, a video response tool first used by car dealerships to send buyers personalised videos of vehicles in stock. The same approach now applies to the leisure sector, and it suits parks of any size.
Beyond recording, the app manages and publishes video and image content, tracks uploads, and gives sales teams a dashboard of park and customer activity. It connects to a park's inventory so the catalogue sits inside the app.`,
    phone: "0131 259 2508",
    email: "info@parksinvideo.co.uk",
    website: "www.parksinvideo.co.uk",
    verified: true,
  },
  {
    id: "park-and-leisure",
    name: "Park and Leisure Ltd",
    categories: ["maintenance-repairs"],
    region: "Bury St Edmunds",
    description:
      `With years of industry knowledge and a passion for customer satisfaction, we specialise in providing a wide range of static caravan spares and accessories—from LPG water heaters to door and window fittings, wallpaper and matching trims, taps and shower mixers and more. Whether you're carrying out routine maintenance, tackling a repair job, or upgrading your caravan, we're here to make sure you have the right parts at the right price.

Why Choose Us?
Wide Product Range.
Large Stocks.
Live Stock Figures.
Dedicated Trade Login. Offering great wholesale pricing.

We stock an extensive selection of spares and accessories, specifically designed for static caravans and holiday homes. You'll find everything you need in one place.

Fast UK Delivery
We understand how important it is to get your caravan up and running quickly. That's why we offer fast and reliable shipping throughout the UK and Europe.

Expert Support
Got a question? Our knowledgeable team is always happy to help. Whether you need technical advice or help finding the right part, we're just a call or email away.

Trusted by Customers Nationwide
We pride ourselves on excellent customer service and have built a reputation for reliability, quality, and competitive pricing.
Supplying Caravan Repairers, Manufacturers, Caravan Dealers, Park Operators both Small and Large, Retailers, Caravan and Camping Shops, Plumbers and Plumbers Merchants and Independent DIY Stores.

Our Mission
Our mission is simple: to be the UK's go-to source for static caravan spares and accessories. We aim to make maintenance and repairs easier and more affordable for caravan owners, park operators, and repair professionals alike.`,
    phone: "01284 277159",
    email: "barry@parkandleisure.co.uk",
    website: "www.parkandleisure.co.uk",
    verified: true,
  },
  {
    id: "groundscrews4u",
    name: "Groundscrews4u Ltd",
    categories: ["groundwork-construction"],
    region: "",
    description:
      `Leading UK installers of groundscrews for commercial and residential customers and owners of the innovative STAYGROUNDED™ siting system.

Introducing STAYGROUNDED™, the innovative ground screw siting system is revolutionising the holiday and leisure park industry. Designed to provide a quick, cost efficient, and eco-friendly solution for siting holiday lodges, caravans, and pods, our STAYGROUNDED™ base siting system is set to transform the way projects are completed.`,
    phone: "07803 084232",
    email: "Andy@gs4u.co.uk",
    website: "www.gs4u.co.uk",
    verified: true,
  },
  {
    id: "furniture-centre",
    name: "Furniture Centre Limited",
    categories: ["furniture-interiors"],
    region: "Kettering",
    description:
      `Furniture Centre Limited supplies quality furniture and interior furnishings for holiday parks and lodges.`,
    phone: "01536 414121",
    email: "info@furniturecentre.co.uk",
    website: "www.furniturecentre.co.uk",
    verified: true,
  },
  {
    id: "holidaylodges-co-uk",
    name: "holidaylodges.co.uk",
    categories: ["lodges-static-homes"],
    region: "",
    description:
      `Holidaylodges.co.uk is a holiday lodge listing and booking portal, part of The Travel Chapter Group. It brings lodges from across England, Scotland and Wales together in one place for holidaymakers to search and book, filtered by the features that matter to them, from hot tubs and waterside views to pet-friendly and family-friendly stays.
For lodge owners and park operators, the site works as a marketing channel. A listing puts a lodge in front of an audience already looking for lodge breaks, with the booking side handled through the wider Travel Chapter platform and its established holiday-letting reach.`,
    email: "info@holidaylodges.co.uk",
    website: "www.holidaylodges.co.uk",
    verified: true,
  },
  {
    id: "the-park-home-agency",
    name: "The Park Home Agency",
    categories: ["sales-marketing-media"],
    region: "",
    description:
      `With over 25 years experience within estate agency and the park home industry, The Park Home Agency has built its reputation on expert advice, transparency and genuine care for our clients. We've helped thousands of people buy and sell park homes across the UK, making us a trusted name for those looking to make their next move with confidence.`,
    phone: "07794 533382",
    email: "chris.hendry@theparkhomeagency.co.uk",
    website: "www.theparkhomeagency.co.uk",
    verified: true,
  },
  {
    id: "holidaymaker",
    name: "Holidaymaker",
    categories: ["it-software", "sales-marketing-media"],
    region: "Dorchester",
    description:
      `Holidaymaker is a connected guest experience platform for holiday parks and short-stay venues, sitting above existing PMS and booking systems to join up guest information, live "what's on", messaging, rebooking and insight in one calm, coherent layer. We combine platform, community and events to help operators reduce friction, protect margin and deliver clearer, more confident experiences for both guests and teams.`,
    phone: "01305 542075",
    email: "allana@holidaymakerapp.co.uk",
    website: "www.holidaymakerapp.co.uk",
    verified: true,
  },
  {
    id: "approved-finance-group",
    name: "Approved Finance Group",
    categories: ["finance-insurance"],
    region: "Milton Keynes",
    description:
      `All the finance your business needs, from business loans and asset finance to property and vehicle funding. We deliver fast approvals, competitive rates and 5-star rated customer service.`,
    phone: "01908 429888",
    email: "info@approved-finance.co.uk",
    website: "www.approved-finance.co.uk",
    verified: true,
  },
  {
    id: "world-of-park-leisure-homes-show",
    name: "The World of Park & Leisure Homes Show",
    categories: ["other"],
    region: "",
    description:
      `The World of Park & Leisure Homes Show is the perfect platform to showcase your park, homes, products, services, and lifestyle offering to a highly engaged audience.

Meet prospective buyers face-to-face, build trust, answer questions, and present yourselves in a setting designed for discovery and decision-making.

If you're interested in exhibiting and want to reach a motivated audience ready to explore their options, we'd love to hear from you.

Send us a message for more information and find out how exhibiting can work for your park.`,
    phone: "07917 131681",
    email: "organisers@parkandleisurehomeshows.co.uk",
    website: "www.parkandleisurehomeshows.co.uk",
    verified: true,
  },
  {
    id: "omar-park-development-services",
    name: "Omar Park Development Services",
    categories: ["groundwork-construction"],
    region: "Thetford",
    description:
      `Omar Park Development Services (OPDS) is the development arm of Omar Group, the park home and lodge manufacturer established in 1965. OPDS supports new and existing park operators across every stage of creating and running a park, from finding land through to a finished, operating site.
The team advises on planning, site design and layout, infrastructure and construction, then handles home delivery and siting and the appointment of approved contractors. For operators who want the whole job handled in one place, OPDS offers a full turnkey solution, taking a development from raw land to completed park, with Omar Group homes supplied and marketing and sales support available alongside.
An expert panel works in partnership with owners to evaluate and deliver development plans on time and on budget. OPDS also works with a tax partner on capital allowances, helping operators identify reliefs on qualifying park assets.`,
    phone: "01842 810673",
    email: "opds@omar.co.uk",
    website: "www.omar.co.uk",
    verified: true,
  },
  {
    id: "dress-pack-solutions",
    name: "Dress Pack Solutions Ltd",
    categories: ["furniture-interiors"],
    region: "",
    description:
      `Dress Pack Solutions supplies dress packs and soft furnishings that style holiday homes and show units for sale or rental. Based in Bude, Cornwall and established in 2017, it works with holiday parks, park groups, manufacturers and holiday home owners across the UK.
The business is run by Tracy Dallow, who has over 25 years in the holiday park sector, spanning park operations, management, dressing and show support. That background shapes the service: packs built to present a home well and help it sell or let, rather than a generic furnishing bundle.
Options run from full dress packs for park homes, lodges and caravans through to individual soft furnishings, towels and bedding, available to buy outright or to dress units for hire.`,
    phone: "07825 778594",
    email: "info@dresspacks.co.uk",
    website: "www.dresspacks.co.uk",
    verified: true,
  },
  {
    id: "the-print-agency",
    name: "The Print Agency",
    categories: ["sales-marketing-media"],
    region: "Bournemouth",
    description:
      `The Print Agency is a graphic design and print company based in Ferndown, near Bournemouth. It works as a single partner across both sides of a job, designing the artwork and producing the printed result, from business stationery through to large exhibition stands.
The design side covers branding and logo work, design for print and design for digital. The print side runs from small-format items to large-format and outdoor signage, with display stands, branded clothing and corporate gifts alongside. A web-to-print service lets clients order recurring printed items through their own online portal.`,
    phone: "01202 872777",
    email: "sarah@theprintagency.com",
    website: "www.theprintagency.com",
    verified: true,
  },
  {
    id: "sell-my-group",
    name: "Sell My Group",
    categories: ["sales-marketing-media"],
    region: "",
    description:
      `Sell My Group is the UK's largest marketplace for park homes, lodges and static caravans, connecting buyers with parks, operating groups and manufacturers across the country. In short, the specialist equivalent of Rightmove for the parks sector.
For park operators, groups and manufacturers, it works as an advertising channel built around the industry. Listings reach buyers already searching for holiday and residential homes, and any property advertised with Sell My Group is also syndicated to major portals, including Rightmove, widening reach well beyond a single site.
Buyers search by region, county, town or park group and filter on what matters to them, from part-exchange and pet-friendly parks through to sea views and swimming pools.`,
    phone: "03333 445014",
    email: "info@sellmygroup.co.uk",
    website: "www.sellmygroup.co.uk",
    verified: true,
  },
];

export function getSupplier(id: string): Supplier | undefined {
  return suppliers.find((s) => s.id === id);
}

export function suppliersByCategory(slug: string): Supplier[] {
  return suppliers.filter((s) => s.categories.includes(slug));
}
