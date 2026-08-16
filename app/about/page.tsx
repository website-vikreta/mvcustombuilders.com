import type { Metadata } from "next";

import AboutPage from "@/components/ui/about-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "About Us | MV Custom Builders, Belleville NJ",
  description:
    "Founded in 2022, MV Custom Builders restores old and historic homes across North & Central Jersey. Licensed, insured, and 280+ projects completed.",
  openGraph: {
    title: "About Us | MV Custom Builders, Belleville NJ",
    description:
      "Founded in 2022, MV Custom Builders restores old and historic homes across North & Central Jersey.",
  },
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutPage />
      </main>
      <SiteFooter />
    </>
  );
}
