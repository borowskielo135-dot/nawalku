import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { menu, dodatki } from "@/data/menu";
import { useReveal } from "@/hooks/use-reveal";
import { Pizza, Wine, Coffee, Salad, Beer, Sparkles, Soup, Cake } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — NA WAŁKU Neapolitan Pizza Wałbrzych" },
      { name: "description", content: "Pełne menu pizzerii NA WAŁKU. Pizze rossa, bianca, speciale, sałatki, desery, koktajle, piwo i napoje. Wałbrzych, Hetmańska 1C." },
      { property: "og:title", content: "Menu NA WAŁKU" },
      { property: "og:description", content: "Pizze neapolitańskie i więcej — pełne menu pizzerii NA WAŁKU." },
    ],
  }),
  component: MenuPage,
});

const groups: { label: string; icon: typeof Pizza; ids: string[] }[] = [
  { label: "Pizza", icon: Pizza, ids: ["pizza-miesiaca", "rossa", "bianca", "speciale"] },
  { label: "Przystawki", icon: Soup, ids: ["przystawki", "zupy", "focaccia"] },
  { label: "Sałatki", icon: Salad, ids: ["salatki"] },
  { label: "Desery", icon: Cake, ids: ["desery"] },
  { label: "Koktajle", icon: Sparkles, ids: ["koktajle", "szprycery", "moktajle"] },
  { label: "Piwo & Wino", icon: Beer, ids: ["piwo-lane", "piwo-butelkowe"] },
  { label: "Napoje", icon: Coffee, ids: ["napoje-cieple", "napoje-zimne"] },
];

function MenuPage() {
  useReveal();
  const [active, setActive] = useState("Pizza");
  const visibleIds = groups.find((g) => g.label === active)?.ids ?? [];
  const sections = menu.filter((s) => visibleIds.includes(s.id));

  return (
    <div className="bg-background">
      {/* HEADER */}
      <section className="bg-charcoal text-cream py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold animate-fade-in">Pełne menu</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold animate-fade-up">Smakuj Italię</h1>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto animate-fade-up delay-200">
            Pizze ok. 32 cm wypiekane w piecu opalanym drewnem. Składniki prosto z Włoch.
          </p>
        </div>
      </section>

      {/* TABS */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4 -mx-6 px-6 scrollbar-hide">
            {groups.map((g) => {
              const isActive = active === g.label;
              return (
                <button
                  key={g.label}
                  onClick={() => setActive(g.label)}
                  className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary text-foreground hover:bg-secondary/70"
                  }`}
                >
                  <g.icon className="w-4 h-4" />
                  {g.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
        {sections.map((section) => (
          <section key={section.id} className="mb-20 reveal">
            <div className="text-center mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold">{section.title}</h2>
              {section.subtitle && (
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-primary font-semibold">{section.subtitle}</p>
              )}
              {section.note && <p className="mt-1 text-sm text-muted-foreground italic">{section.note}</p>}
            </div>
            <div className="space-y-1">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 py-5 border-b border-border last:border-0 hover:bg-secondary/30 -mx-4 px-4 rounded-lg transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-xl font-bold">{item.name}</h3>
                      {item.badge && (
                        <span className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-display text-2xl font-bold text-primary tabular-nums">{item.price} <span className="text-sm font-medium text-muted-foreground">zł</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {active === "Pizza" && (
          <section className="reveal mt-12 bg-secondary/50 rounded-3xl p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold">Skomponuj własną pizzę</h2>
              <p className="mt-2 text-sm text-muted-foreground">Lub wybierz dodatek do swojej</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Mięsny", ...dodatki.miesny },
                { title: "Warzywny", ...dodatki.warzywny },
                { title: "Ser", ...dodatki.ser },
                { title: "Inne", ...dodatki.inne },
              ].map((d) => (
                <div key={d.title} className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="font-display text-lg font-bold text-primary uppercase tracking-wider text-sm">{d.title}</h4>
                  <p className="mt-2 text-sm text-foreground leading-relaxed">{d.items}</p>
                  {d.price && <p className="mt-2 text-xs text-muted-foreground">{d.price}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
