"use client";

import Link from "next/link";
import { Container } from "@mantine/core";
import { company } from "@/data/company";
import classes from "./Contact.module.css";

/**
 * Contact page.
 *
 * Every figure here is real and already published elsewhere on the site or in
 * the design handoff — address, both phone numbers, TIN and the department
 * mailboxes. Nothing is placeholder except the map, which needs an embed.
 */

const CHANNELS = [
  {
    key: "CALL",
    title: "Phone",
    lines: [company.phone, company.phone2],
    action: `tel:${company.phone.replace(/\s/g, "")}`,
    actionLabel: "Call now",
    note: "Mon–Sat, business hours",
  },
  {
    key: "CHAT",
    title: "WhatsApp",
    lines: ["Fastest for quick questions"],
    action: company.whatsapp,
    actionLabel: "Open WhatsApp",
    note: "Usually replies within the hour",
    external: true,
  },
  {
    key: "MAIL",
    title: "Email",
    lines: [company.email],
    action: `mailto:${company.email}`,
    actionLabel: "Send email",
    note: "For anything not urgent",
  },
  {
    key: "TICKET",
    title: "Support ticket",
    lines: ["Tracked, with history"],
    action: "https://mobilling.co.tz/portal/tickets/new",
    actionLabel: "Open a ticket",
    note: "Signed-in customers · 24/7",
    external: true,
  },
];

const DEPARTMENTS = [
  { key: "SALES", title: "Sales", email: "sales@moinfo.co.tz", desc: "Quotes, new services, migrations." },
  { key: "SUPPORT", title: "Technical support", email: "support@moinfo.co.tz", desc: "Hosting, email, DNS and domains." },
  { key: "BILLING", title: "Billing", email: "billing@moinfo.co.tz", desc: "Invoices, payments and receipts." },
  { key: "ABUSE", title: "Abuse", email: "abuse@moinfo.co.tz", desc: "Report spam or a compromised site." },
];

const HOURS = [
  { day: "Monday – Friday", time: "08:00 – 18:00" },
  { day: "Saturday", time: "09:00 – 14:00" },
  { day: "Sunday & public holidays", time: "Closed" },
  { day: "Emergency support", time: "24/7 via ticket" },
];

export function ContactContent() {
  return (
    <>
      <nav className={classes.breadcrumb} aria-label="Breadcrumb">
        <Container size="xl" className={classes.crumbInner}>
          <Link href="/" className={classes.crumbLink}>
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className={classes.crumbCurrent}>Contact</span>
        </Container>
      </nav>

      <section className={`${classes.hero} dcWash`}>
        <div className="dcGrid" aria-hidden="true" />
        <Container size="xl" className={classes.heroInner}>
          <div className={classes.eyebrow}>
            <span className={classes.eyebrowRule} aria-hidden="true" />
            Talk to a human in Kibaha
          </div>
          <h1 className={classes.title}>Contact us</h1>
          <p className={classes.lede}>
            Four ways to reach us, all answered by the same team — in your time
            zone, in English or Swahili.
          </p>
        </Container>
      </section>

      {/* Channel tiles */}
      <section className={classes.channels}>
        <Container size="xl">
          <div className={classes.channelGrid}>
            {CHANNELS.map((c) => (
              <div key={c.key} className={classes.channel}>
                <div className={classes.channelKey}>{c.key}</div>
                <div className={classes.channelTitle}>{c.title}</div>
                <div className={classes.channelLines}>
                  {c.lines.map((l) => (
                    <div key={l} className={classes.channelLine}>
                      {l}
                    </div>
                  ))}
                </div>
                <div className={classes.channelNote}>{c.note}</div>
                <a
                  className={classes.channelAction}
                  href={c.action}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {c.actionLabel}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Office + hours */}
      <section className={classes.office}>
        <Container size="xl" className={classes.officeInner}>
          <div>
            <div className={classes.sectionEyebrow}>01 · Office</div>
            <h2 className={classes.sectionTitle}>Come and see us</h2>
            <p className={classes.officeAddress}>{company.address}</p>

            <dl className={classes.facts}>
              <div className={classes.fact}>
                <dt className={classes.factLabel}>TIN</dt>
                <dd className={classes.factValue}>172-200-664</dd>
              </div>
              <div className={classes.fact}>
                <dt className={classes.factLabel}>Registrar</dt>
                <dd className={classes.factValue}>TCRA accredited · .tz</dd>
              </div>
            </dl>

            {/* A real embed still needs to go here — see the handoff's assets note. */}
            <div className={classes.mapPlaceholder} role="img" aria-label="Map placeholder">
              MAP — NJUWENI HOTEL, KIBAHA
            </div>
          </div>

          <div>
            <div className={classes.sectionEyebrow}>02 · Hours</div>
            <h2 className={classes.sectionTitle}>When we&apos;re open</h2>
            <div className={classes.hours}>
              {HOURS.map((h) => (
                <div key={h.day} className={classes.hourRow}>
                  <span className={classes.hourDay}>{h.day}</span>
                  <span className={classes.hourTime}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Departments */}
      <section className={classes.departments}>
        <Container size="xl">
          <div className={classes.sectionEyebrow}>03 · Departments</div>
          <h2 className={classes.sectionTitle}>Reach the right desk</h2>
          <div className={classes.deptGrid}>
            {DEPARTMENTS.map((d) => (
              <div key={d.key} className={classes.dept}>
                <div className={classes.channelKey}>{d.key}</div>
                <div className={classes.deptTitle}>{d.title}</div>
                <p className={classes.deptDesc}>{d.desc}</p>
                <a className={classes.deptEmail} href={`mailto:${d.email}`}>
                  {d.email}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
