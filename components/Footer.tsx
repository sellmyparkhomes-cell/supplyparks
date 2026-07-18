import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-forest-deep px-5 py-10 text-paper">
      <div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-3 text-[13px] opacity-80 sm:flex-row">
        <div>SupplyParks — the UK park industry supplier network</div>
        <div className="flex gap-4">
          <Link href="/suppliers">Suppliers</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
