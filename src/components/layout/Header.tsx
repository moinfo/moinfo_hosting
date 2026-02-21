"use client";

import Image from "next/image";
import {
  Container,
  Button,
  Burger,
  Drawer,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { navLinks, CLIENT_LOGIN } from "@/data/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useScrolled } from "@/hooks/useScrolled";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Header.module.css";

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const scrolled = useScrolled(50);
  const { t } = useLanguage();

  return (
    <header
      className={`${classes.header} ${scrolled ? classes.headerScrolled : ""}`}
    >
      <Container size="xl" className={classes.inner}>
        <a href="#" className={classes.logoGroup}>
          <Image
            src="/images/logo.png"
            alt="Moinfo Hosting"
            width={36}
            height={36}
          />
          <span className={classes.logoText}>
            Moinfo <span className={classes.logoAccent}>Hosting</span>
          </span>
        </a>

        <nav className={classes.nav}>
          {navLinks.map((link) => (
            <a key={link.labelKey} href={link.href} className={classes.navLink}>
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className={classes.rightGroup}>
          <LanguageToggle />
          <ThemeToggle />
          <Button
            component="a"
            href={CLIENT_LOGIN}
            variant="filled"
            size="sm"
            visibleFrom="sm"
          >
            {t("nav.clientArea")}
          </Button>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            aria-label="Toggle navigation"
          />
        </div>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title={t("nav.menu")}
        padding="md"
        size="xs"
        position="right"
        zIndex={300}
      >
        <Stack gap="xs">
          {navLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              className={classes.drawerLink}
              onClick={close}
            >
              {t(link.labelKey)}
            </a>
          ))}
          <Button
            component="a"
            href={CLIENT_LOGIN}
            variant="filled"
            fullWidth
            mt="sm"
          >
            {t("nav.clientArea")}
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
