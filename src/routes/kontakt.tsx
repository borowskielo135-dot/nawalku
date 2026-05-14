import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Facebook, Mail, Navigation } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

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

const hours = [
  { day: "Poniedziałek", time: "13:00 – 22:00" },
  { day: "Wtorek", time: "13:00 – 22:00" },
  { day: "Środa", time: "13:00 – 22:00" },
  { day: "Czwartek", time: "13:00 – 22:00" },
  { day: "Piątek", time: "13:00 – 23:00" },
  { day: "Sobota", time: "13:00 – 23:00" },
  { day: "Niedziela", time: "13:00 – 22:00" },
];

function ContactPage() {
  useReveal();
  return (
    <div className="bg-background">
      <section className="bg-charcoal text-cream py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold animate-fade-in">Kontakt</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold animate-fade-up">Wpadnij do nas</h1>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto animate-fade-up delay-200">
            Czekamy na Ciebie w sercu Wałbrzycha — zarezerwuj stolik lub po prostu wpadnij.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 max-w-6xl">
          <div className="space-y-6 reveal">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="font-display text-3xl font-bold">Adres</h2>
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
                      <Navigation className="w-4 h-4" /> Wyznacz trasę
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefon</div>
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
                <h2 className="font-display text-3xl font-bold">Godziny otwarcia</h2>
              </div>
              <ul className="mt-6 space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-2 border-b border-border last:border-0 text-sm">
                    <span className="font-medium">{h.day}</span>
                    <span className="text-muted-foreground tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">Średnia cena: 40–60 zł za osobę</p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <Mail className="w-8 h-8" />
              <h3 className="mt-4 font-display text-2xl font-bold">Rezerwacja</h3>
              <p className="mt-2 text-primary-foreground/80 text-sm">
                Najlepiej zadzwoń — odbieramy szybko i pomożemy znaleźć idealny termin.
              </p>
              <a href="tel:+48513718011" className="mt-6 inline-flex items-center gap-2 bg-cream text-charcoal px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" /> Zadzwoń teraz
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
