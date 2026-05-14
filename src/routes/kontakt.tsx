import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Facebook, Mail, Navigation } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n/context";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — NA WAŁKU Neapolitan Pizza Wałbrzych" },
      { name: "description", content: "Pizzeria NA WAŁKU — Hetmańska 1C, 58-316 Wałbrzych. Telefon: 513 718 011. Otwarte codziennie od 13:00." },
      { property: "og:title", content: "Kontakt — NA WAŁKU" },
      { property: "og:description", content: "Hetmańska 1C, Wałbrzych. Tel. 513 718 011." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useI18n();
  useReveal([lang]);

  const hours = [
    { day: t("contact.day.mon"), time: "13:00 – 22:00" },
    { day: t("contact.day.tue"), time: "13:00 – 22:00" },
    { day: t("contact.day.wed"), time: "13:00 – 22:00" },
    { day: t("contact.day.thu"), time: "13:00 – 22:00" },
    { day: t("contact.day.fri"), time: "13:00 – 23:00" },
    { day: t("contact.day.sat"), time: "13:00 – 23:00" },
    { day: t("contact.day.sun"), time: "13:00 – 22:00" },
  ];

  return (
    <div className="bg-background">
      <section className="bg-charcoal text-cream py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold animate-fade-in">{t("contact.kicker")}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold animate-fade-up">{t("contact.title")}</h1>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto animate-fade-up delay-200">{t("contact.body")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 max-w-6xl">
          <div className="space-y-6 reveal">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="font-display text-3xl font-bold">{t("contact.address")}</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Hetmańska 1C</div>
                    <div className="text-muted-foreground text-sm">58-316 Wałbrzych</div>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Hetmańska+1C+58-316+Wałbrzych"
                      target="_blank" rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
                    >
                      <Navigation className="w-4 h-4" /> {t("contact.directions")}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{t("info.phone")}</div>
                    <a href="tel:+48513718011" className="text-muted-foreground text-sm hover:text-primary">513 718 011</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Facebook className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Facebook</div>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-muted-foreground text-sm hover:text-primary">facebook.com/nawalku</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="font-display text-3xl font-bold">{t("contact.hours")}</h2>
              </div>
              <ul className="mt-6 space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                    <span className="font-medium">{h.day}</span>
                    <span className="text-muted-foreground tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">{t("contact.avg")}</p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <Mail className="w-8 h-8" />
              <h3 className="mt-4 font-display text-2xl font-bold">{t("contact.book")}</h3>
              <p className="mt-2 text-primary-foreground/80 text-sm">{t("contact.bookBody")}</p>
              <a href="tel:+48513718011" className="mt-6 inline-flex items-center gap-2 bg-cream text-charcoal px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" /> {t("contact.callNow")}
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[500px]">
              <iframe
                title="Mapa NA WAŁKU"
                src="https://www.google.com/maps?q=Hetmańska+1C,+58-316+Wałbrzych&output=embed"
                className="w-full h-full min-h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
