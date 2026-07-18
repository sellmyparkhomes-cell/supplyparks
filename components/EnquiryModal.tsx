"use client";

import { useState } from "react";
import { track } from "@/lib/track";

export default function EnquiryModal({
  supplierId,
  supplierName,
  source,
  onClose,
}: {
  supplierId: string;
  supplierName: string;
  source: string;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: once Supabase is connected, insert into `enquiries` and email the supplier.
    track({ type: "quote_submit", supplierId, source });
    setSent(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-card bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="font-display text-xl text-forest-deep">
              Get a quote from {supplierName}
            </h2>
            <p className="text-sm text-ink-soft">
              We&apos;ll send your message straight to the supplier.
            </p>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-ink-soft hover:text-ink"
          >
            &times;
          </button>
        </div>

        {sent ? (
          <p className="py-6 text-center text-forest-deep">
            Sent. {supplierName} will be in touch directly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Your name *</label>
              <input required className="w-full rounded-card border border-line px-3 py-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Phone</label>
              <input className="w-full rounded-card border border-line px-3 py-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email address *</label>
              <input type="email" required className="w-full rounded-card border border-line px-3 py-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Message *</label>
              <textarea
                required
                rows={4}
                placeholder="Tell the supplier what you're looking for..."
                className="w-full rounded-card border border-line px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-card bg-rust px-5 py-3 text-sm font-semibold uppercase tracking-wide text-paper hover:bg-rust-deep"
            >
              Send enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
