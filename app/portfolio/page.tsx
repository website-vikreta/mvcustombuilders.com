import type { Metadata } from "next";

import PortfolioPage from "@/components/ui/portfolio-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Portfolio | MV Custom Builders, Belleville NJ",
  description:
    "Before-and-after photos of our own work across North & Central Jersey: commercial build-outs, second-story additions, porches, siding, and pool decks.",
  openGraph: {
    title: "Portfolio | MV Custom Builders, Belleville NJ",
    description:
      "Before-and-after photos of real renovation work across North & Central Jersey.",
  },
};

export default function Portfolio() {
  return (
    <>
      <SiteHeader />
      <main>
        <PortfolioPage />
      </main>
      <SiteFooter />
    </>
  );
}
