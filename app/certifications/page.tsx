import type { Metadata } from "next";

import CertificationsPage from "@/components/ui/certifications-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Certifications & Licenses | MV Custom Builders, Belleville NJ",
  description:
    "MV Custom Builders is DCA licensed, SBE approved, OSHA certified, and fully insured. Serving North & Central Jersey.",
  openGraph: {
    title: "Certifications & Licenses | MV Custom Builders, Belleville NJ",
    description:
      "MV Custom Builders is DCA licensed, SBE approved, OSHA certified, and fully insured.",
  },
};

export default function Certifications() {
  return (
    <>
      <SiteHeader />
      <main>
        <CertificationsPage />
      </main>
      <SiteFooter />
    </>
  );
}
