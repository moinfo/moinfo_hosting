"use client";

import { Container } from "@mantine/core";
import { IconPhone, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { company, } from "@/data/company";
import { CLIENT_LOGIN } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import classes from "./TopBar.module.css";

export function TopBar() {
  const scrolled = useScrolled(100);

  return (
    <div className={`${classes.topBar} ${scrolled ? classes.hidden : ""}`}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.contactGroup}>
          <a href={`tel:${company.phone}`} className={classes.contactItem}>
            <IconPhone size={14} />
            <span>{company.phone}</span>
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.contactItem}
          >
            <IconBrandWhatsapp size={14} />
            <span>WhatsApp</span>
          </a>
          <a href={`mailto:${company.email}`} className={classes.contactItem}>
            <IconMail size={14} />
            <span>{company.email}</span>
          </a>
        </div>

        <div className={classes.rightGroup}>
          <span className={classes.promoBadge}>
            {company.promoCode} — {company.promoDiscount}
          </span>
        </div>
      </Container>
    </div>
  );
}
