import type { Metadata } from "next";

import ServicesPage from "@/components/ui/services-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Services | MV Custom Builders, Belleville NJ",
  description:
    "Whole-home renovation, kitchen and bathroom remodeling, basement finishing, room additions, and historic exterior restoration across North & Central Jersey.",
  openGraph: {
    title: "Services | MV Custom Builders, Belleville NJ",
    description:
      "Whole-home renovation, kitchen and bathroom remodeling, basement finishing, room additions, and historic exterior restoration.",
  },
};

export default function Services() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServicesPage />
      </main>
      <SiteFooter />
    </>
  );
}
