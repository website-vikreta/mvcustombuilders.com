// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

import type { Metadata } from "next";

import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";
import TermsOfServicePage from "@/components/ui/terms-of-service-page";

export const metadata: Metadata = {
  title: "Terms of Service | MV Custom Builders, Belleville NJ",
  description: "Terms of service for MV Custom Builders LLC, Belleville NJ.",
};

export default function TermsOfService() {
  return (
    <>
      <SiteHeader />
      <main>
        <TermsOfServicePage />
      </main>
      <SiteFooter />
    </>
  );
}
