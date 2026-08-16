import type { Metadata } from "next";

import ContactPage from "@/components/ui/contact-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Contact | MV Custom Builders, Belleville NJ",
  description:
    "Request a consultation with MV Custom Builders. Call (973) 555-0147 or send us your project details, serving North & Central Jersey.",
  openGraph: {
    title: "Contact | MV Custom Builders, Belleville NJ",
    description:
      "Request a consultation with MV Custom Builders, serving North & Central Jersey.",
  },
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactPage />
      </main>
      <SiteFooter />
    </>
  );
}
