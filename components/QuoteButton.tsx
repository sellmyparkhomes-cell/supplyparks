"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import { track } from "@/lib/track";

// The single, consistent "Get a quote" action used everywhere — nav, hero,
// supplier cards and supplier profiles. One component, one behaviour, so the
// CTA can never drift out of sync across the site again.
export default function QuoteButton({
  supplierId,
  supplierName,
  source,
  variant = "primary",
  label = "Get a quote",
}: {
  supplierId: string;
  supplierName: string;
  source: string;
  variant?: "primary" | "outline";
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  const base =
    "inline-block rounded-card px-5 py-3 text-xs font-semibold uppercase tracking-wide";
  const styles =
    variant === "primary"
      ? "bg-rust text-paper hover:bg-rust-deep"
      : "border border-forest-deep text-forest-deep hover:bg-paper-dim";

  return (
    <>
      <button
        className={`${base} ${styles}`}
        onClick={() => {
          track({ type: "quote_click", supplierId, source });
          setOpen(true);
        }}
      >
        {label} &rarr;
      </button>
      {open && (
        <EnquiryModal
          supplierId={supplierId}
          supplierName={supplierName}
          source={source}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
