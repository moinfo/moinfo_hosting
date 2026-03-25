"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Button,
  Burger,
  Drawer,
  Stack,
  Group,
  Menu,
  UnstyledButton,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { navLinks, CLIENT_LOGIN } from "@/data/navigation";
import type { NavLink } from "@/data/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useScrolled } from "@/hooks/useScrolled";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Header.module.css";

function DesktopNavItem({ link }: { link: NavLink }) {
  const { t } = useLanguage();

  if (!link.children) {
    return (
      <Link href={link.href} className={classes.navLink}>
        {t(link.labelKey)}
      </Link>
    );
  }

  return (
    <Menu trigger="hover" openDelay={0} closeDelay={150} position="bottom-start" offset={4}>
      <Menu.Target>
        <Link href={link.href} className={classes.navLink}>
          {t(link.labelKey)}
          <IconChevronDown size={14} style={{ marginLeft: 4 }} />
        </Link>
      </Menu.Target>
      <Menu.Dropdown>
        {link.children.map((child) => (
          <Menu.Item key={child.labelKey} component={Link} href={child.href}>
            {t(child.labelKey)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

function MobileNavItem({
  link,
  onClose,
}: {
  link: NavLink;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [opened, { toggle }] = useDisclosure(false);

  if (!link.children) {
    return (
      <Link href={link.href} className={classes.drawerLink} onClick={onClose}>
        {t(link.labelKey)}
      </Link>
    );
  }

  return (
    <>
      <UnstyledButton className={classes.drawerLink} onClick={toggle}>
        <Group justify="space-between">
          {t(link.labelKey)}
          <IconChevronDown
            size={16}
            style={{
              transform: opened ? "rotate(180deg)" : "none",
              transition: "transform 200ms",
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        <Stack gap={0} pl="md">
          {link.children.map((child) => (
            <Link
              key={child.labelKey}
              href={child.href}
              className={classes.drawerLink}
              onClick={onClose}
            >
              {t(child.labelKey)}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </>
  );
}

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const scrolled = useScrolled(50);
  const { t } = useLanguage();

  return (
    <header
      className={`${classes.header} ${scrolled ? classes.headerScrolled : ""}`}
    >
      <Container size="xl" className={classes.inner}>
        <Link href="/" className={classes.logoGroup}>
          <Image
            src="/images/logo.png"
            alt="Moinfo Hosting"
            width={36}
            height={36}
          />
          <span className={classes.logoText}>
            Moinfo <span className={classes.logoAccent}>Hosting</span>
          </span>
        </Link>

        <nav className={classes.nav}>
          {navLinks.map((link) => (
            <DesktopNavItem key={link.labelKey} link={link} />
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
            <MobileNavItem key={link.labelKey} link={link} onClose={close} />
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
