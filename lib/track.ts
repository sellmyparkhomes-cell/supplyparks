// Lightweight CTA instrumentation, per the board's recommendation: track
// "Get a Quote" clicks separately from completed enquiry submissions, so we
// can actually tell whether the CTA fix is working instead of guessing again.
//
// This stub logs to the console and (client-side) localStorage so the
// behaviour is visible during development. Swap the body of `track()` for a
// real Supabase insert once the database is connected — the call sites in
// components never need to change.

export type CtaEvent =
  | { type: "quote_click"; supplierId: string; source: string }
  | { type: "quote_submit"; supplierId: string; source: string };

export function track(event: CtaEvent) {
  const payload = { ...event, timestamp: new Date().toISOString() };

  if (typeof window !== "undefined") {
    const key = "supplyparks_cta_events";
    const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]");
    existing.push(payload);
    window.localStorage.setItem(key, JSON.stringify(existing));
  }

  // TODO: once Supabase is connected, replace with:
  // await supabase.from("cta_events").insert(payload);
  console.log("[cta]", payload);
}
