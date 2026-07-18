const faqs = [
  {
    q: "Is it free to find a supplier?",
    a: "Yes. Browsing suppliers and sending enquiries is free for park owners and operators.",
  },
  {
    q: "How do I contact a supplier?",
    a: "Click \"Get a quote\" on any supplier's profile. Your message goes straight to that supplier — there's no public posting or waiting.",
  },
  {
    q: "How do I list my business as a supplier?",
    a: "Use the \"List your business\" link in the navigation. Listings are reviewed before going live.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-[760px] px-5 py-14">
      <h1 className="mb-8 font-display text-3xl text-forest-deep">Frequently asked questions</h1>
      <div className="flex flex-col divide-y divide-line border-t border-b border-line">
        {faqs.map((f) => (
          <div key={f.q} className="py-5">
            <h2 className="mb-1 font-display text-lg text-forest-deep">{f.q}</h2>
            <p className="text-sm text-ink-soft">{f.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
