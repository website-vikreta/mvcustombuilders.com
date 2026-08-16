import type { Metadata } from "next";

import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";
import TestimonialsPage from "@/components/ui/testimonials-page";

export const metadata: Metadata = {
  title: "Testimonials | MV Custom Builders, Belleville NJ",
  description:
    "What clients say about renovation and restoration work by MV Custom Builders across North & Central Jersey.",
  openGraph: {
    title: "Testimonials | MV Custom Builders, Belleville NJ",
    description:
      "What clients say about renovation and restoration work by MV Custom Builders.",
  },
};

export default function Testimonials() {
  return (
    <>
      <SiteHeader />
      <main>
        <TestimonialsPage />
      </main>
      <SiteFooter />
    </>
  );
}
