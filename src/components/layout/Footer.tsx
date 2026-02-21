"use client";

import Image from "next/image";
import { Container } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconPhone,
  IconWorld,
  IconMapPin,
} from "@tabler/icons-react";
import { company, footerLinks } from "@/data/company";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Footer.module.css";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={classes.footer} id="footer">
      <Container size="xl">
        <div className={classes.grid}>
          {/* Brand Column */}
          <div className={classes.brandSection}>
            <div className={classes.brandLogo}>
              <Image
                src="/images/logo.png"
                alt="Moinfo Hosting"
                width={42}
                height={42}
              />
              <div>
                <div className={classes.brandName}>
                  Moinfo<span className={classes.brandNameAccent}>Tech</span>
                </div>
                <div className={classes.brandTagline}>{company.tagline}</div>
              </div>
            </div>
            <p className={classes.brandDescription}>
              {t("footer.brandDescription")}
            </p>
            <div className={classes.socialGroup}>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
                aria-label="Facebook"
              >
                <IconBrandFacebook size={18} />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
                aria-label="Instagram"
              >
                <IconBrandInstagram size={18} />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={18} />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
                aria-label="Twitter"
              >
                <IconBrandX size={18} />
              </a>
            </div>
          </div>

          {/* Hosting Services Column */}
          <div>
            <h4 className={classes.columnTitle}>
              <span
                className={classes.columnDot}
                style={{ background: "var(--mantine-color-brand-blue-5)" }}
              />
              {t("footer.hostingServices")}
            </h4>
            {footerLinks.hosting.map((link) => (
              <a key={link.labelKey} href={link.href} className={classes.columnLink}>
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* Resources Column */}
          <div>
            <h4 className={classes.columnTitle}>
              <span
                className={classes.columnDot}
                style={{ background: "var(--mantine-color-brand-green-5)" }}
              />
              {t("footer.resources")}
            </h4>
            {footerLinks.resources.map((link) => (
              <a key={link.labelKey} href={link.href} className={classes.columnLink}>
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* Contact Column */}
          <div>
            <h4 className={classes.columnTitle}>
              <span
                className={classes.columnDot}
                style={{ background: "var(--mantine-color-brand-orange-5)" }}
              />
              {t("footer.contactUs")}
            </h4>
            <div className={classes.contactItem}>
              <div className={classes.contactIcon}>
                <IconMail size={18} color="var(--mantine-color-brand-green-5)" />
              </div>
              <span>{company.email}</span>
            </div>
            <div className={classes.contactItem}>
              <div className={classes.contactIcon}>
                <IconPhone size={18} color="var(--mantine-color-brand-green-5)" />
              </div>
              <span>{company.phone}</span>
            </div>
            <div className={classes.contactItem}>
              <div className={classes.contactIcon}>
                <IconWorld size={18} color="var(--mantine-color-brand-green-5)" />
              </div>
              <span>moinfo.co.tz</span>
            </div>
            <div className={classes.contactItem}>
              <div className={classes.contactIcon}>
                <IconMapPin size={18} color="var(--mantine-color-brand-green-5)" />
              </div>
              <span>{company.address}</span>
            </div>
          </div>
        </div>

        {/* TCRA Badge */}
        <div className={classes.tcraSection}>
          <div className={classes.tcraBadge}>
            <Image
              src="/images/tcra-badge.webp"
              alt="TCRA Accredited"
              width={48}
              height={48}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <div className={classes.tcraText}>{t("footer.tcra")}</div>
              <div className={classes.tcraSubtext}>{t("footer.tzRegistrar")}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={classes.bottom}>
          <span>&copy; {new Date().getFullYear()} {t("footer.copyright")}</span>
          <div className={classes.bottomLinks}>
            <a href="#" className={classes.bottomLink}>
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className={classes.bottomLink}>
              {t("footer.termsOfService")}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
