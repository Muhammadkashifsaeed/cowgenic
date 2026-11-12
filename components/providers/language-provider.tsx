"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionaries, type Locale, type SiteDictionary } from "@/lib/i18n";

const STORAGE_KEY = "cowgenic-locale";

let cachedLocale: Locale | null = null;
const listeners = new Set<() => void>();

function readStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }
  if (cachedLocale !== null) {
    return cachedLocale;
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    cachedLocale = stored === "ur" ? "ur" : "en";
  } catch {
    cachedLocale = "en";
  }
  return cachedLocale;
}

function setStoredLocale(next: Locale) {
  cachedLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignore storage quota / privacy mode errors
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

interface LanguageContextValue {
  locale: Locale;
  isRtl: boolean;
  t: SiteDictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribe,
    readStoredLocale,
    (): Locale => "en",
  );

  const isRtl = locale === "ur";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [locale, isRtl]);

  const setLocale = useCallback((next: Locale) => {
    setStoredLocale(next);
  }, []);

  const toggleLocale = useCallback(() => {
    const current = readStoredLocale();
    setStoredLocale(current === "en" ? "ur" : "en");
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        isRtl,
        t: dictionaries[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

