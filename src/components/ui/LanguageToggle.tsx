"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={classes.toggle}>
      <button
        className={`${classes.option} ${language === "en" ? classes.active : ""}`}
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`${classes.option} ${language === "sw" ? classes.active : ""}`}
        onClick={() => setLanguage("sw")}
        aria-label="Switch to Swahili"
      >
        SW
      </button>
    </div>
  );
}
