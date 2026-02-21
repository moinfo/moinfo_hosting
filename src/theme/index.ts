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
  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
  headings: {
    fontWeight: "700",
    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
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
