"use client";

import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// EmailJS credentials come from .env locally (same three NEXT_PUBLIC_EMAILJS_*
// vars as the rest of the site). .env is gitignored and never ships with the
// build, so add the same values in the hosting provider's env settings.
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function UnderConstructionBlock() {
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);

  function validate() {
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
        email,
        subject: "New under-construction signup",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full md:flex md:h-screen">
      {/* image */}
      <div className="relative order-2 hidden aspect-[4/3] w-full md:order-1 md:block md:aspect-auto md:h-full md:w-1/2">
        <Image
          src="/images/under-construction-hero.webp"
          alt="Three builders on ladders installing metal siding over house wrap on a home exterior."
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* text + email capture */}
      <div className="relative order-1 flex min-h-screen flex-col items-center justify-center overflow-y-auto bg-mvcb-cream px-6 py-16 text-center sm:px-8 md:order-2 md:h-full md:min-h-0 md:w-1/2 md:px-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-blueprint-grid-light"
        />
        <div className="relative flex flex-col items-center text-center">
          {/* Placeholder: swap for the real logo mark once it's available. */}
          <span className="text-lg font-extrabold tracking-tight text-mvcb-black">
            MV Custom Builders
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-mvcb-black sm:text-5xl md:text-6xl">
            We&apos;re under construction
          </h1>

          <p className="mt-4 max-w-md text-base text-muted-foreground">
            We&apos;re rebuilding our site from the ground up. Leave your
            email and we&apos;ll let you know the moment we break ground.
          </p>

          <div className="mt-8 w-full max-w-md">
            {status === "success" ? (
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-600/20 bg-emerald-600/10 p-5 text-mvcb-black">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-700" />
                <p className="text-sm font-semibold">
                  You&apos;re on the list. We&apos;ll reach out the moment we
                  break ground.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
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
                      onBlur={validate}
                      placeholder="you@example.com"
                      aria-invalid={fieldError ? "true" : "false"}
                      className="h-12 rounded-full px-5 text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="h-12 shrink-0 rounded-full bg-mvcb-orange px-6 font-bold text-mvcb-black hover:bg-mvcb-orange-strong disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Joining...
                      </span>
                    ) : (
                      "Notify Me"
                    )}
                  </Button>
                </div>

                {fieldError && (
                  <p
                    role="alert"
                    className="mt-2 text-left text-sm font-medium text-mvcb-orange-strong"
                  >
                    {fieldError}
                  </p>
                )}
                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-2 text-left text-sm font-medium text-mvcb-orange-strong"
                  >
                    Something went wrong &mdash; please try again or call us
                    directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
