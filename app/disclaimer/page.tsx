// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

import type { Metadata } from "next";

import DisclaimerPage from "@/components/ui/disclaimer-page";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export const metadata: Metadata = {
  title: "Disclaimer | MV Custom Builders, Belleville NJ",
  description: "Website disclaimer for MV Custom Builders LLC, Belleville NJ.",
};

export default function Disclaimer() {
  return (
    <>
      <SiteHeader />
      <main>
        <DisclaimerPage />
      </main>
      <SiteFooter />
    </>
  );
}
