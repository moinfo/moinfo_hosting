"use client";

import { createTheme, rem } from "@mantine/core";
import { brandBlue, brandGreen, brandYellow, brandOrange } from "./colors";

export const theme = createTheme({
  primaryColor: "brand-blue",
  colors: {
    "brand-blue": brandBlue,
    "brand-green": brandGreen,
    "brand-yellow": brandYellow,
    "brand-orange": brandOrange,
  },
  // Redesign type system — see src/theme/tokens.css. Space Grotesk carries the
  // UI and headings; Instrument Sans is applied per-element for prose; mono is
  // reserved for data values.
  fontFamily: "var(--font-display), var(--font-inter), -apple-system, sans-serif",
  fontFamilyMonospace: "var(--font-mono), ui-monospace, monospace",
  headings: {
    fontWeight: "600",
    fontFamily: "var(--font-display), var(--font-inter), -apple-system, sans-serif",
  },
  defaultRadius: "md",
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  components: {
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
    Card: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});
