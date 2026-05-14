import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n, LANGS } from "@/i18n/context";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 h-10 px-3 rounded-full bg-secondary/60 hover:bg-secondary text-foreground border border-border text-sm font-medium transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{current.code}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[180px] bg-popover border border-border rounded-xl shadow-xl py-2 z-50 animate-fade-in">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-secondary text-popover-foreground"
            >
              <span className="text-base">{l.flag}</span>
              <span className="flex-1 text-left">{l.label}</span>
              {l.code === lang && <Check className="w-4 h-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
