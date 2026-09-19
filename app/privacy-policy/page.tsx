// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

import type { Metadata } from "next";

import PrivacyPolicyPage from "@/components/ui/privacy-policy-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | MV Custom Builders, Belleville NJ",
  description: "Privacy policy for MV Custom Builders LLC, Belleville NJ.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <SiteHeader />
      <main>
        <PrivacyPolicyPage />
      </main>
      <SiteFooter />
    </>
  );
}
