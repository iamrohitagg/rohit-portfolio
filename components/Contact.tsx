"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import LocalTime from "@/components/LocalTime";
import { profile } from "@/lib/content";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast({ title: "Email copied", description: profile.email });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    { k: "Phone", v: profile.phone, href: profile.phoneHref },
    { k: "LinkedIn", v: "in/rohit-aggarwalm", href: profile.linkedin, external: true },
    { k: "GitHub", v: "@iamrohitagg", href: profile.github, external: true },
    { k: "Resume", v: "View on Google Drive", href: profile.resume, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t py-28 md:py-40">
      <div className="container">
        <p className="eyebrow flex items-center gap-3" data-reveal>
          <span className="tabular-nums text-primary">05</span>
          <span className="h-px w-6 bg-border-strong" aria-hidden />
          Contact
        </p>

        <h2
          id="contact-title"
          className="mt-8 max-w-[11em] text-display font-medium md:mt-10"
          data-reveal
        >
          Have a product to build? <span className="em text-primary">Let&apos;s talk.</span>
        </h2>

        <div className="mt-14 grid gap-y-14 border-t pt-10 md:mt-20 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-7" data-reveal>
            <p className="max-w-[46ch] text-muted-foreground">
              I&apos;m currently open to new opportunities and collaborations. Feel free to reach out
              if you have a question or just want to connect.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex max-w-full items-baseline gap-3 break-all text-[clamp(1.375rem,3.1vw,2.5rem)] font-medium tracking-[-0.03em]"
            >
              <span className="link-draw">{profile.email}</span>
              <span className="nudge text-primary" aria-hidden>
                ↗
              </span>
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Send an email
              </a>
              <button type="button" onClick={copyEmail} className="btn-secondary min-w-[8.5rem]">
                <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
              </button>
            </div>
          </div>

          <dl className="text-[0.9375rem] md:col-span-4 md:col-start-9" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            {channels.map((c) => (
              <div key={c.k} className="flex items-baseline justify-between gap-6 border-t py-4">
                <dt className="text-subtle">{c.k}</dt>
                <dd>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group inline-flex items-baseline gap-1.5 text-right transition-colors hover:text-primary"
                  >
                    {c.v}
                    {c.external && (
                      <span className="nudge text-xs text-subtle" aria-hidden>
                        ↗
                      </span>
                    )}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-6 border-y py-4">
              <dt className="text-subtle">Location</dt>
              <dd className="tabular-nums">
                {profile.location} · <LocalTime timeZone={profile.timezone} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Contact;
