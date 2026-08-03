import { Stack } from "@mantine/core";
import classes from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  description?: string;
  /** Marketing sections are left-aligned in the redesign; keep centre as an opt-in. */
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <Stack
      align={align === "center" ? "center" : "flex-start"}
      gap="sm"
      mb={40}
      className={align === "center" ? classes.center : undefined}
    >
      <h2 className={classes.title}>{title}</h2>
      {description && <p className={classes.description}>{description}</p>}
    </Stack>
  );
}
