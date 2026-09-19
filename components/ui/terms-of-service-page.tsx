// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

const SECTIONS = [
  { id: "introduction", title: "1. Introduction" },
  { id: "communications", title: "2. Communications" },
  { id: "content", title: "3. Content" },
  { id: "prohibited-uses", title: "4. Prohibited Uses" },
  { id: "analytics", title: "5. Analytics" },
  { id: "no-use-by-minors", title: "6. No Use By Minors" },
  { id: "intellectual-property", title: "7. Intellectual Property" },
  { id: "copyright-policy", title: "8. Copyright Policy" },
  { id: "dmca", title: "9. DMCA Notice and Procedure" },
  { id: "error-reporting", title: "10. Error Reporting and Feedback" },
  { id: "links-to-other-websites", title: "11. Links to Other Websites" },
  { id: "disclaimer-of-warranty", title: "12. Disclaimer of Warranty" },
  { id: "limitation-of-liability", title: "13. Limitation of Liability" },
  { id: "termination", title: "14. Termination" },
  { id: "governing-law", title: "15. Governing Law" },
  { id: "changes-to-service", title: "16. Changes to Service" },
  { id: "amendments-to-terms", title: "17. Amendments to Terms" },
  { id: "waiver-and-severability", title: "18. Waiver and Severability" },
  { id: "acknowledgement", title: "19. Acknowledgement" },
  { id: "contact", title: "20. Contact Us" },
];

const PROHIBITED_USES = [
  "In any way that violates any applicable law or regulation.",
  "To exploit, harm, or attempt to exploit or harm minors in any way.",
  'To transmit or procure the sending of any advertising, promotional material, "junk mail," or "spam."',
  "To impersonate or attempt to impersonate the Company, its employees, or any other person or entity.",
  "In any way that infringes upon the rights of others or is illegal, threatening, fraudulent, or harmful.",
  "To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.",
];

const PROHIBITED_USES_ADDITIONAL = [
  "Disable, overburden, damage, or impair the Service or interfere with any other party's use of it.",
  "Use any robot, spider, or automated process to access the Service, including for monitoring or copying content.",
  "Introduce viruses, trojans, worms, or other malicious or technologically harmful material.",
  "Attempt to gain unauthorized access to, interfere with, or disrupt the Service or any server or database connected to it.",
  "Attack the Service via a denial-of-service or distributed denial-of-service attack.",
];

const DMCA_REQUIREMENTS = [
  "A signature of the person authorized to act on behalf of the copyright owner;",
  "A description of the copyrighted work you claim has been infringed;",
  "The URL or location on the Service of the material you claim is infringing;",
  "Your address, telephone number, and email address;",
  "A statement that you have a good faith belief the disputed use is not authorized;",
  "A statement, under penalty of perjury, that the information in your notice is accurate and that you are authorized to act on the copyright owner's behalf.",
];

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
      {number}. {title}
    </h2>
  );
}

function MailtoLink({ children }: { children: string }) {
  return (
    <a
      href={`mailto:${children}`}
      className="text-mvcb-black underline hover:text-mvcb-orange"
    >
      {children}
    </a>
  );
}

export default function TermsOfServicePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-mvcb-line py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <h1 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: September 19, 2026 &middot; MV Custom Builders LLC
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:flex-row">
          <nav aria-label="Terms sections" className="shrink-0 lg:w-56">
            <span className="text-xs font-semibold tracking-wide text-mvcb-black uppercase">
              Sections
            </span>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted-foreground hover:text-mvcb-orange"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-1 flex-col gap-10">
            <div id="introduction">
              <SectionHeading number="1" title="Introduction" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Welcome to MV Custom Builders (&quot;Company&quot;,
                &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)!
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                These Terms of Service (&quot;Terms&quot;) govern your use of
                our website located at mvcustombuilders.com (the
                &quot;Service&quot;), operated by MV Custom Builders.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our Privacy Policy also governs your use of our Service and
                explains how we collect, safeguard, and disclose information
                that results from your use of our web pages.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                By using the Service, you acknowledge that you have read and
                understood these Terms and our Privacy Policy (together, the
                &quot;Agreements&quot;) and agree to be bound by them. If you
                do not agree with these Terms, please do not use the
                Service, or contact us at{" "}
                <MailtoLink>mvcustombuilder@gmail.com</MailtoLink> so we can
                try to find a solution.
              </p>
            </div>

            <div id="communications">
              <SectionHeading number="2" title="Communications" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We only contact you using the information you provide
                through our contact form, and only to respond to your
                inquiry. We do not add you to a marketing or newsletter list
                unless you separately and explicitly opt in to receive such
                communications, and you may unsubscribe at any time by
                emailing <MailtoLink>mvcustombuilder@gmail.com</MailtoLink>.
              </p>
            </div>

            <div id="content">
              <SectionHeading number="3" title="Content" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Content found on or through this Service is the property of
                MV Custom Builders or used with permission. You may not
                distribute, modify, transmit, reuse, download, repost, copy,
                or use this Content, in whole or in part, for commercial
                purposes or personal gain, without express written
                permission from us.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Any quote, estimate, or pricing information provided through
                this website or its contact form is non-binding and provided
                for general informational purposes only. Actual
                construction, renovation, or building services are governed
                exclusively by a separately signed written agreement between
                MV Custom Builders and the client, and are subject to
                applicable permits and inspections.
              </p>
            </div>

            <div id="prohibited-uses">
              <SectionHeading number="4" title="Prohibited Uses" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You may use the Service only for lawful purposes and in
                accordance with these Terms. You agree not to use the
                Service:
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                {PROHIBITED_USES.map((item, index) => (
                  <li key={item}>
                    4.{index + 1}. {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Additionally, you agree not to:
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                {PROHIBITED_USES_ADDITIONAL.map((item, index) => (
                  <li key={item}>
                    4.{index + 7}. {item}
                  </li>
                ))}
              </ul>
            </div>

            <div id="analytics">
              <SectionHeading number="5" title="Analytics" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We use third-party service providers, including Google
                Analytics, to monitor and analyze use of our Service.
              </p>
            </div>

            <div id="no-use-by-minors">
              <SectionHeading number="6" title="No Use By Minors" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The Service is intended only for use by individuals at least
                eighteen (18) years old. By using the Service, you represent
                that you are at least eighteen (18) years of age.
              </p>
            </div>

            <div id="intellectual-property">
              <SectionHeading number="7" title="Intellectual Property" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The Service and its original content (excluding content
                provided by users), features, and functionality are and will
                remain the exclusive property of MV Custom Builders and its
                licensors. The Service is protected by copyright, trademark,
                and other laws of the United States and foreign countries.
                Our trademarks may not be used without our prior written
                consent.
              </p>
            </div>

            <div id="copyright-policy">
              <SectionHeading number="8" title="Copyright Policy" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We respect the intellectual property rights of others. If
                you believe content on the Service infringes your copyright,
                please submit a claim via email to{" "}
                <MailtoLink>mvcustombuilder@gmail.com</MailtoLink> with the
                subject line &quot;Copyright Infringement,&quot; including a
                description of the alleged infringement as detailed below.
              </p>
            </div>

            <div id="dmca">
              <SectionHeading
                number="9"
                title="DMCA Notice and Procedure for Copyright Infringement Claims"
              />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You may submit a notification under the Digital Millennium
                Copyright Act (DMCA) by providing our Copyright Agent with:
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                {DMCA_REQUIREMENTS.map((item, index) => (
                  <li key={item}>
                    9.{index + 1}. {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Contact our Copyright Agent via email at{" "}
                <MailtoLink>mvcustombuilder@gmail.com</MailtoLink>.
              </p>
            </div>

            <div id="error-reporting">
              <SectionHeading number="10" title="Error Reporting and Feedback" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You may provide us with feedback, suggestions, or error
                reports concerning the Service at{" "}
                <MailtoLink>mvcustombuilder@gmail.com</MailtoLink>. You
                acknowledge that we may use this feedback without any
                obligation of confidentiality or compensation to you.
              </p>
            </div>

            <div id="links-to-other-websites">
              <SectionHeading number="11" title="Links to Other Websites" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our Service may contain links to third-party websites not
                owned or controlled by MV Custom Builders. We have no
                control over and assume no responsibility for the content or
                practices of any third-party sites. We advise you to review
                the terms and privacy policies of any third-party site you
                visit.
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                You acknowledge and agree that Company shall not be
                responsible or liable for any damage or loss caused by or in
                connection with use of or reliance on any third-party
                content, goods, or services.
              </p>
            </div>

            <div id="disclaimer-of-warranty">
              <SectionHeading number="12" title="Disclaimer of Warranty" />
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                The Service is provided by the Company on an &quot;as
                is&quot; and &quot;as available&quot; basis. The Company
                makes no representations or warranties of any kind, express
                or implied, as to the operation of the Service or the
                information, content, or materials included. Your use of the
                Service is at your sole risk.
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                The Company does not warrant that the Service will be
                accurate, reliable, error-free, or uninterrupted, or that
                defects will be corrected.
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                The foregoing does not affect any warranties which cannot be
                excluded or limited under applicable law.
              </p>
            </div>

            <div id="limitation-of-liability">
              <SectionHeading number="13" title="Limitation of Liability" />
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                Except as prohibited by law, you agree to hold us and our
                officers, directors, employees, and agents harmless for any
                indirect, punitive, special, incidental, or consequential
                damages arising from your use of the Service, including any
                violation of applicable laws or regulations. If liability is
                found, it will be limited to the maximum extent permitted by
                law. Some states do not allow the exclusion or limitation of
                certain damages, so this limitation may not apply to you.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This limitation applies only to use of the website itself
                and does not affect any separate written agreement governing
                actual construction or renovation services.
              </p>
            </div>

            <div id="termination">
              <SectionHeading number="14" title="Termination" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We may suspend or restrict your access to the Service at any
                time, without prior notice, for any reason, including breach
                of these Terms. If you wish to stop using the Service, you
                may simply discontinue accessing it.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                All provisions which by their nature should survive
                termination shall survive, including ownership provisions,
                warranty disclaimers, and limitations of liability.
              </p>
            </div>

            <div id="governing-law">
              <SectionHeading number="15" title="Governing Law" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                These Terms shall be governed by the laws of the State of
                New Jersey, without regard to its conflict of law
                provisions.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of that right. If any
                provision is held invalid or unenforceable, the remaining
                provisions will remain in effect. These Terms constitute the
                entire agreement between us regarding the Service.
              </p>
            </div>

            <div id="changes-to-service">
              <SectionHeading number="16" title="Changes to Service" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We reserve the right to withdraw or amend the Service, or
                any part of it, at our discretion without notice. We are not
                liable if the Service is unavailable at any time.
              </p>
            </div>

            <div id="amendments-to-terms">
              <SectionHeading number="17" title="Amendments to Terms" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We may amend these Terms at any time by posting updated
                terms on this page. Your continued use of the Service after
                changes are posted means you accept the revised Terms.
              </p>
            </div>

            <div id="waiver-and-severability">
              <SectionHeading number="18" title="Waiver and Severability" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                No waiver of any term of these Terms shall be considered a
                continuing waiver of that or any other term. If any
                provision of these Terms is held invalid by a court, that
                provision will be limited to the minimum extent necessary,
                and the remaining provisions will continue in full force and
                effect.
              </p>
            </div>

            <div id="acknowledgement">
              <SectionHeading number="19" title="Acknowledgement" />
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                By using the Service, you acknowledge that you have read
                these Terms of Service and agree to be bound by them.
              </p>
            </div>

            <div id="contact">
              <SectionHeading number="20" title="Contact Us" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Please send feedback, comments, or questions by email:{" "}
                <MailtoLink>mvcustombuilder@gmail.com</MailtoLink>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
