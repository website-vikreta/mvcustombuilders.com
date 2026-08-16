"use client";

import emailjs from "@emailjs/browser";
import { CheckCircleFill, Clock, GeoAlt, Phone } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

import Action from "@/components/ui/action";
import { Input } from "@/components/ui/input";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROJECT_TYPES = [
  "Whole-Home Renovation",
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Basement Finishing",
  "Room Addition",
  "Exterior & Historic Restoration",
  "Other",
];

const INFO_CARDS = [
  {
    icon: GeoAlt,
    label: "Belleville Headquarters",
    value: "31 Bridge St, Belleville, NJ 07109",
  },
  {
    icon: Phone,
    label: "Call Us Directly",
    value: "(973) 555-0147",
  },
  {
    icon: Clock,
    label: "Hours of Operation",
    value: "Monday – Saturday, 8:00 AM – 5:00 PM",
  },
];

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);

  function validate() {
    if (!name.trim()) {
      setFieldError("Enter your name.");
      return false;
    }
    if (!EMAIL_PATTERN.test(email)) {
      setFieldError("Enter a valid email address.");
      return false;
    }
    setFieldError(null);
    return true;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name,
        email,
        phone,
        project_type: projectType || "Not specified",
        message,
        subject: "New contact request",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20">
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] uppercase text-white sm:text-5xl md:text-6xl">
            Get In <span className="text-mvcb-orange">Touch</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            Tell us about your project. We&apos;ll walk the property, give you a
            straight answer on scope, and get you on the schedule.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <h2 className="text-2xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-3xl">
              Request a Consultation
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We get back to you within one business day.
            </p>

            <div className="mt-8">
              {status === "success" ? (
                <div className="flex items-center gap-3  border border-emerald-600/20 bg-emerald-600/10 p-5">
                  <CheckCircleFill className="h-6 w-6 shrink-0 text-emerald-700" />
                  <p className="text-sm font-semibold text-mvcb-black">
                    Request sent. We&apos;ll be in touch within one business
                    day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold tracking-wide text-mvcb-black uppercase"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                          if (fieldError) setFieldError(null);
                        }}
                        placeholder="John Doe"
                        className="mt-2 h-11  px-4"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold tracking-wide text-mvcb-black uppercase"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="(973) 555-0147"
                        className="mt-2 h-11  px-4"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold tracking-wide text-mvcb-black uppercase"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (fieldError) setFieldError(null);
                      }}
                      placeholder="you@example.com"
                      aria-invalid={fieldError ? "true" : "false"}
                      className="mt-2 h-11  px-4"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-semibold tracking-wide text-mvcb-black uppercase">
                      Project Type
                    </span>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger className="mt-2 h-11 w-full">
                        <SelectValue placeholder="Select project type..." />
                      </SelectTrigger>
                      <SelectContent>
                        {PROJECT_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold tracking-wide text-mvcb-black uppercase"
                    >
                      Message / Project Scope
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us about your home and what needs fixing..."
                      className="mt-2  px-4 py-3"
                    />
                  </div>

                  {fieldError && (
                    <p
                      role="alert"
                      className="text-sm font-medium text-mvcb-orange"
                    >
                      {fieldError}
                    </p>
                  )}
                  {status === "error" && (
                    <p
                      role="alert"
                      className="text-sm font-medium text-mvcb-orange"
                    >
                      Something went wrong &mdash; please try again or call us
                      directly.
                    </p>
                  )}

                  <Action
                    type="submit"
                    size="lg"
                    loading={status === "sending"}
                    loadingLabel="Sending"
                  >
                    Send request
                  </Action>
                </form>
              )}
            </div>
          </div>

          <div data-reveal className="flex flex-col gap-4">
            {INFO_CARDS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4  border border-mvcb-line bg-background p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center  border border-mvcb-line">
                  <Icon
                    className="h-5 w-5 text-mvcb-orange"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                    {label}
                  </span>
                  <p className="text-sm font-semibold text-mvcb-black">
                    {value}
                  </p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden  border border-mvcb-line">
              <iframe
                title="MV Custom Builders office location"
                src="https://www.google.com/maps?q=31+Bridge+St,+Belleville,+NJ+07109&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-white md:text-5xl">
            Prefer to Call? Reach Us Directly
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Skip the form. Call our team to talk through your project and get on
            the schedule.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Action href="tel:+19735550147" size="lg">
              Call (973) 555-0147
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}
