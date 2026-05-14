import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Phone, Clock, Flame, Leaf, Award, ArrowRight, ChefHat, Users } from "lucide-react";
import heroImg from "@/assets/hero-pizza.jpg";
import interiorImg from "@/assets/interior.jpg";
import doughImg from "@/assets/dough.jpg";
import diavolaImg from "@/assets/diavola.jpg";
import burrataImg from "@/assets/burrata.jpg";
import margheritaImg from "@/assets/margherita.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NA WAŁKU — Neapolitan Pizza w Wałbrzychu | 4,8 ★" },
      { name: "description", content: "Autentyczna pizza neapolitańska w Wałbrzychu. Wypiekana w piecu opalanym drewnem. Hetmańska 1C. Rezerwacje: 513 718 011." },
      { property: "og:title", content: "NA WAŁKU — Neapolitan Pizza" },
      { property: "og:description", content: "Najlepsza pizza neapolitańska w Wałbrzychu. 4,8 ★ na podstawie 1988 opinii." },
    ],
  }),
  component: HomePage,
});

const popularPizzas = [
  { img: diavolaImg, name: "Diavola", price: 52, tag: "Popularne", desc: "Salami spianata piccante, czosnek, pomidorki suszone" },
  { img: burrataImg, name: "Burratina", price: 56, tag: "Polecane", desc: "Burrata, pesto pistacjowe, pomidorki półsuszone, balsamico" },
  { img: margheritaImg, name: "Margherita di Bufala", price: 50, tag: "Klasyk", desc: "Mozzarella di bufala DOP, San Marzano DOP, świeża bazylia" },
];

const reviews = [
  {
    author: "Michał Zalewski",
    role: "Lokalny przewodnik · 77 opinii",
    when: "5 miesięcy temu",
    text: "Rewelacja! Pizze oryginalne, wyraziste. Przed pizzą oferują czekadełko w formie placka od pizzy z oliwą. Trzy oliwy na stole to naprawdę rzadkość — widać gdzie jest podrzędny bar, a gdzie prawdziwa restauracja. Pierwszy raz spotkałem się z krojeniem pizzy nożycami. Obsługa bardzo miła i profesjonalna.",
  },
  {
    author: "Ada S.",
    role: "Lokalny przewodnik · 39 opinii",
    when: "6 miesięcy temu",
    text: "Wybraliśmy się tam przy okazji wycieczki w okolicach Zamku Książ. Fajne miejsce, blisko Zamku. Zamówiliśmy 3 różne pizze: margherita, diavola i gorgonzola. Wszystkie naprawdę pyszne. Nie czekaliśmy długo!",
  },
  {
    author: "Ilona",
    role: "3 opinie",
    when: "2 miesiące temu",
    text: "Jadłam już wiele pizz, ale Pizza Burratini zdecydowanie wygrywa wszystko. To była najlepsza pizza, jaką jadłam — idealnie wypieczone, chrupiące ciasto, świetnej jakości składniki i ta kremowa burrata, która rozpływa się na ciepłej pizzy… absolutne niebo.",
  },
];

function HomePage() {
  useReveal();
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Pizza Margherita z pieca opalanego drewnem" className="w-full h-full object-cover" width={1600} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-transparent to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 py-20 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-md border border-cream/20 rounded-full px-4 py-2 text-cream text-xs uppercase tracking-[0.25em] animate-fade-in">
              <Flame className="w-3.5 h-3.5 text-gold" />
              Wypiekane w piecu opalanym drewnem
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold text-cream leading-[0.95] text-balance animate-fade-up">
              NA WAŁKU
              <span className="block text-gold text-3xl sm:text-4xl md:text-5xl mt-3 font-medium italic">
                neapolitan pizza
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-cream/85 max-w-xl leading-relaxed animate-fade-up delay-200">
              Autentyczna pizza z Neapolu w sercu Wałbrzycha. Cienkie, chrupiące ciasto,
              San Marzano DOP, mozzarella di bufala — wszystko z najwyższej półki.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-2xl shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all"
              >
                Zobacz menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+48513718011"
                className="inline-flex items-center gap-3 bg-cream/10 backdrop-blur-md border border-cream/30 text-cream px-8 py-4 rounded-full font-semibold hover:bg-cream hover:text-charcoal transition-all"
              >
                <Phone className="w-5 h-5" />
                Zarezerwuj stolik
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-cream animate-fade-up delay-500">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5 text-gold">
                  {"★★★★★".split("").map((s, i) => (<span key={i} className="text-xl">{s}</span>))}
                </div>
                <div>
                  <div className="font-bold text-lg leading-none">4,8 / 5</div>
                  <div className="text-xs text-cream/60 mt-1">1988 opinii Google</div>
                </div>
              </div>
              <div className="h-10 w-px bg-cream/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-gold" />
                <div>
                  <div className="font-bold text-lg leading-none">Top pizzeria</div>
                  <div className="text-xs text-cream/60 mt-1">w Wałbrzychu</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs uppercase tracking-[0.3em] animate-pulse">
          Przewiń ↓
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-charcoal text-cream py-8 border-y border-cream/10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: MapPin, label: "Adres", value: "Hetmańska 1C, Wałbrzych" },
            { icon: Clock, label: "Otwarte", value: "Pon–Niedz: 13:00 – 22:00" },
            { icon: Phone, label: "Telefon", value: "513 718 011" },
            { icon: Users, label: "Średnio", value: "40–60 zł / osoba" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <item.icon className="w-5 h-5 text-gold" />
              <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60">{item.label}</div>
              <div className="text-sm font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 md:py-32 bg-grain">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Nasza historia</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight text-balance">
              Pizza, jakiej nigdy nie jadłeś.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              W NA WAŁKU robimy pizzę dokładnie tak, jak robi się ją w Neapolu — od długo
              dojrzewającego ciasta, przez San Marzano DOP, po piec opalany drewnem.
              Każda pizza wychodzi z pieca w mniej niż 90 sekund i trafia na stół chrupiąca,
              aromatyczna i z lekko opieczonym brzegiem.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { icon: ChefHat, title: "48h", desc: "Tyle dojrzewa nasze ciasto" },
                { icon: Flame, title: "450°C", desc: "Temperatura w piecu" },
                { icon: Leaf, title: "100%", desc: "Składniki z Włoch" },
              ].map((s, i) => (
                <div key={i} className="text-center sm:text-left">
                  <s.icon className="w-7 h-7 text-primary mx-auto sm:mx-0" />
                  <div className="mt-3 font-display text-3xl font-bold">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal">
            <img src={doughImg} alt="Wyrabianie ciasta neapolitańskiego" loading="lazy" width={1200} height={1400} className="rounded-2xl object-cover h-full row-span-2 ring-gold-soft" />
            <img src={interiorImg} alt="Wnętrze pizzerii NA WAŁKU" loading="lazy" width={1400} height={1000} className="rounded-2xl object-cover aspect-square" />
            <img src={margheritaImg} alt="Pizza Margherita" loading="lazy" width={1000} height={1000} className="rounded-2xl object-cover aspect-square" />
          </div>
        </div>
      </section>

      {/* POPULAR */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Najczęściej zamawiane</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-balance">
              Ulubione pizze naszych gości
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trzy pizze, które trafiają na stół najczęściej. Każda z prawdziwym charakterem.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {popularPizzas.map((p, i) => (
              <div key={p.name} className="group reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-charcoal">
                  <img src={p.img} alt={p.name} loading="lazy" width={1000} height={1000} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-sm text-charcoal text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground font-display text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                    {p.price}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 reveal">
            <Link to="/menu" className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-5 transition-all">
              Zobacz pełne menu <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* OPCJE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Na miejscu", desc: "Klimatyczna sala z piecem opalanym drewnem", emoji: "🍷" },
              { title: "Na wynos", desc: "Zamów telefonicznie i odbierz osobiście", emoji: "📦" },
              { title: "Dostawa", desc: "Dowozimy gorącą pizzę pod twoje drzwi", emoji: "🛵" },
            ].map((o, i) => (
              <div key={o.title} className="reveal bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-4xl">{o.emoji}</div>
                <h3 className="mt-4 font-display text-2xl font-bold">{o.title}</h3>
                <p className="mt-2 text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 md:py-32 bg-charcoal text-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Opinie gości</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold text-balance">
              4,8 ★ na podstawie 1988 opinii
            </h2>
            <p className="mt-4 text-cream/70">Co mówią o nas ludzie, którzy nas odwiedzili.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="reveal bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 hover:bg-cream/10 transition-colors" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex gap-0.5 text-gold mb-4">
                  {"★★★★★".split("").map((s, j) => (<Star key={j} className="w-4 h-4 fill-current" />))}
                </div>
                <p className="text-cream/90 leading-relaxed text-sm">"{r.text}"</p>
                <div className="mt-6 pt-6 border-t border-cream/10">
                  <div className="font-semibold">{r.author}</div>
                  <div className="text-xs text-cream/50 mt-1">{r.role} · {r.when}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grain" />
        <div className="container mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-balance max-w-3xl mx-auto leading-tight">
            Zarezerwuj stolik i poczuj smak prawdziwej Italii
          </h2>
          <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Zadzwoń do nas albo wpadnij na Hetmańską 1C. Czekamy od 13:00.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:+48513718011" className="inline-flex items-center gap-3 bg-cream text-charcoal px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-2xl">
              <Phone className="w-5 h-5" />
              513 718 011
            </a>
            <Link to="/kontakt" className="inline-flex items-center gap-3 bg-charcoal/20 backdrop-blur border border-cream/30 text-cream px-8 py-4 rounded-full font-semibold hover:bg-charcoal/40 transition-colors">
              Jak dojechać
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
