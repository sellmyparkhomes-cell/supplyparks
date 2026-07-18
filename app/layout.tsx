import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SupplyParks — UK Park Industry Supplier Directory",
  description:
    "Find verified suppliers for the UK park and leisure home industry, and get a quote directly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
