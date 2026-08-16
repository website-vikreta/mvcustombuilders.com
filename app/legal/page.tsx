import type { Metadata } from "next";

import LegalPage from "@/components/ui/legal-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | MV Custom Builders, Belleville NJ",
  description: "Privacy policy for MV Custom Builders LLC, Belleville NJ.",
};

export default function Legal() {
  return (
    <>
      <SiteHeader />
      <main>
        <LegalPage />
      </main>
      <SiteFooter />
    </>
  );
}
