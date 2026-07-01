"use client";

import { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { isWorldCupActive } from "@/data/worldCup";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./WorldCupBadge.module.css";

const DISMISS_KEY = "worldcup2026-dismissed";

export function WorldCupBadge() {
  const { t } = useLanguage();
  // Start hidden so SSR/first paint never flashes the badge before we know
  // whether it is in-window and un-dismissed — avoids a hydration mismatch.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isWorldCupActive() && localStorage.getItem(DISMISS_KEY) !== "1") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={classes.badge} role="status" aria-label={t("worldcup.aria")}>
      <span className={classes.ball} aria-hidden="true">
        ⚽
      </span>
      <span className={classes.text}>
        <span className={classes.title}>{t("worldcup.title")}</span>
        <span className={classes.tagline}>{t("worldcup.tagline")}</span>
      </span>
      <button
        type="button"
        className={classes.close}
        aria-label={t("worldcup.dismiss")}
        onClick={() => {
          localStorage.setItem(DISMISS_KEY, "1");
          setVisible(false);
        }}
      >
        <IconX size={14} />
      </button>
    </div>
  );
}
