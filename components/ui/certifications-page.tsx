import Action from "@/components/ui/action";
import CertBadge from "@/components/ui/cert-badge";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";
import { CERTIFICATIONS } from "@/lib/certifications";

export default function CertificationsPage() {
  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20">
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] uppercase text-white sm:text-5xl md:text-6xl">
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
      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:px-8">
          {CERTIFICATIONS.map((cert) => {
            const { title, issuingBody, idLabel, description } = cert;
            return (
              <div
                key={title}
                data-reveal
                className="flex flex-col gap-6  border border-mvcb-line bg-background p-8 sm:flex-row sm:items-start"
              >
                <CertBadge cert={cert} size="lg" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Issuing Body:{""}
                        <span className="font-semibold text-mvcb-black">
                          {issuingBody}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="border border-mvcb-line bg-background px-3 py-1 text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                        {idLabel}
                      </span>
                      <span className="flex items-center gap-1.5  border border-emerald-600/30 bg-emerald-600/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 uppercase">
                        <span className="h-1.5 w-1.5  bg-emerald-600" />
                        Active
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRUST STATEMENT */}
      <section className="py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col gap-6 bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-3xl">
            Your Protection Is Our Priority
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Every member of our crew is trained on safety protocols before
            setting foot on a job site. From structural repairs to full
            renovations, every project follows code, so you&apos;re covered.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-white md:text-5xl">
            Work With a Licensed, Insured Team
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Make sure your project is handled by a crew that&apos;s actually
            authorized to do the work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Action href="/contact" size="lg" withArrow>
              Contact us
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}
