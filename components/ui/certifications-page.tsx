import { BadgeCheck, FileCheck2, HardHat, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";

const CERTIFICATIONS = [
  {
    icon: BadgeCheck,
    title: "DCA Licensed Renovation Contractor",
    issuingBody: "NJ Division of Consumer Affairs",
    idLabel: "REG #13VH12948300",
    description:
      "Registered with the New Jersey Division of Consumer Affairs. This registration means our business practices, warranties, and building methods meet the state's requirements for licensed residential contractors.",
  },
  {
    icon: ShieldCheck,
    title: "SBE Approved Contractor",
    issuingBody: "NJ Small Business Enterprise Program",
    idLabel: "CERT #SBE202409",
    description:
      "Certified Small Business Enterprise under New Jersey's SBE program, confirming our tax compliance and standing to do business in the municipalities we serve.",
  },
  {
    icon: HardHat,
    title: "OSHA Certified Operations",
    issuingBody: "Occupational Safety and Health Administration",
    idLabel: "OSHA CERTIFIED",
    description:
      "Every crew member trains on OSHA safety protocols before stepping on a job site. We keep every site clean, guarded, and hazard-free.",
  },
  {
    icon: FileCheck2,
    title: "Licensed & Insured Coverage",
    issuingBody: "General Liability & Workers' Compensation Insurance",
    idLabel: "POLICY ACTIVE",
    description:
      "Comprehensive general liability and workers' compensation coverage protects our clients and crew throughout every project, from framing to final walkthrough.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="bg-mvcb-black py-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:px-8">
          <span className="text-xs font-semibold tracking-wide text-mvcb-orange uppercase">
            Credentials &amp; Safety
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Certifications &amp; Licenses
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            Fully licensed and structured to run wood framing, structural
            repair, and full renovations with real code compliance, not
            shortcuts.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS LIST */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:px-8">
          {CERTIFICATIONS.map(
            ({ icon: Icon, title, issuingBody, idLabel, description }, index) => (
              <div
                key={title}
                data-reveal
                style={{ animationDelay: `${index * 70}ms` }}
                className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-start"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-mvcb-orange/10">
                  <Icon
                    className="h-7 w-7 text-mvcb-orange-strong"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-semibold text-mvcb-black">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Issuing Body:{" "}
                        <span className="font-semibold text-mvcb-black">
                          {issuingBody}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {idLabel}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        Active
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* TRUST STATEMENT */}
      <section className="border-y border-border bg-mvcb-cream py-16">
        <div
          data-reveal
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center sm:px-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-mvcb-black md:text-3xl">
            Your Protection Is Our Priority
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Every member of our crew is trained on safety protocols before
            setting foot on a job site. From structural repairs to
            full renovations, every project follows code, so you&apos;re
            covered.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-mvcb-black py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:px-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Work With a Licensed, Insured Team
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Make sure your project is handled by a crew that&apos;s
            actually authorized to do the work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-mvcb-orange px-8 font-bold text-mvcb-black hover:bg-mvcb-orange-strong"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
