import type { Metadata } from "next";

import HomePage from "@/components/ui/home-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "MV Custom Builders | Historic Home Renovation, Belleville NJ",
  description:
    "Licensed renovation and restoration builders serving North & Central Jersey since 2022. Kitchen, bath, additions, and whole-home renovation for old and historic homes.",
  openGraph: {
    title: "MV Custom Builders | Historic Home Renovation, Belleville NJ",
    description:
      "Licensed renovation and restoration builders serving North & Central Jersey since 2022.",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "MV Custom Builders",
  telephone: "+1-973-555-0147",
  address: {
    "@type": "PostalAddress",
    streetAddress: "31 Bridge St",
    addressLocality: "Belleville",
    addressRegion: "NJ",
    postalCode: "07109",
    addressCountry: "US",
  },
  areaServed: ["North Jersey", "Central Jersey"],
  foundingDate: "2022",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <SiteHeader />
      <main>
        <HomePage />
      </main>
      <SiteFooter />
    </>
  );
}
