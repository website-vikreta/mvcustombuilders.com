import type { Metadata } from "next";

import PortfolioPage from "@/components/ui/portfolio-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Portfolio | MV Custom Builders, Belleville NJ",
  description:
    "Real renovation and restoration work across North & Central Jersey, with a before/after look at a full commercial interior build-out.",
  openGraph: {
    title: "Portfolio | MV Custom Builders, Belleville NJ",
    description:
      "Real renovation and restoration work across North & Central Jersey.",
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
