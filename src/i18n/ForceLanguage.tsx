"use client";

import { useEffect, useMemo } from "react";
import type { Language } from "./types";
import { LanguageContext, translations } from "./LanguageContext";

/**
 * Pins the language for a subtree to exactly `lang`, ignoring the visitor's
 * saved preference/toggle. Used only by the /sw/* pages so Google (and
 * anyone landing there directly) always sees real, server-rendered Swahili
 * — not a client-side toggle that only kicks in after hydration (see
 * LanguageProvider, which still drives the rest of the site normally).
 */
export function ForceLanguage({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      language: lang,
      setLanguage: () => {},
      t: (key: string): string =>
        translations[lang][key] ?? translations.en[key] ?? key,
    }),
    [lang]
  );

  // The root <html lang> is fixed server-side (single root layout for the
  // whole static export) — correct it client-side, same as LanguageProvider
  // does for the toggle. A no-op on an already-correct lang attribute.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
