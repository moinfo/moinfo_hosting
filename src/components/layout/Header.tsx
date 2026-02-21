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
import { useScrolled } from "@/hooks/useScrolled";
import classes from "./Header.module.css";

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const scrolled = useScrolled(50);

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
            <a key={link.label} href={link.href} className={classes.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={classes.rightGroup}>
          <ThemeToggle />
          <Button
            component="a"
            href={CLIENT_LOGIN}
            variant="filled"
            size="sm"
            visibleFrom="sm"
          >
            Client Area
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
        title="Menu"
        padding="md"
        size="xs"
        position="right"
        zIndex={300}
      >
        <Stack gap="xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={classes.drawerLink}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <Button
            component="a"
            href={CLIENT_LOGIN}
            variant="filled"
            fullWidth
            mt="sm"
          >
            Client Area
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
