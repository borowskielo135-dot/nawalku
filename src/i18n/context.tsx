import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, LANGS } from "./translations";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

const SUPPORTED: Lang[] = ["pl", "en", "es", "de"];
const STORAGE_KEY = "nawalku-lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "pl";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved as Lang)) return saved as Lang;
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of langs) {
    const code = l.toLowerCase().slice(0, 2) as Lang;
    if (SUPPORTED.includes(code)) return code;
  }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pl");

  useEffect(() => {
    const initial = detectInitial();
    setLangState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (key: string) => translations[lang][key] ?? translations.pl[key] ?? key;

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useI18n must be used within I18nProvider");
  return c;
}

export { LANGS };
export type { Lang };
