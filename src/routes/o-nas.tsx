import { createFileRoute } from "@tanstack/react-router";
import { Flame, Leaf, ChefHat, Award, Heart } from "lucide-react";
import interiorImg from "@/assets/interior.jpg";
import doughImg from "@/assets/dough.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — NA WAŁKU Neapolitan Pizza Wałbrzych" },
      { name: "description", content: "Poznaj NA WAŁKU — pizzerię, gdzie tradycja Neapolu spotyka się z pasją do gotowania. Dowiedz się więcej o naszym piecu, składnikach i filozofii." },
      { property: "og:title", content: "O nas — NA WAŁKU" },
      { property: "og:description", content: "Pizzeria neapolitańska z piecem opalanym drewnem w Wałbrzychu." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <div className="bg-background">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden -mt-20 pt-20 flex items-end">
        <img src={interiorImg} alt="Wnętrze NA WAŁKU" className="absolute inset-0 w-full h-full object-cover" width={1400} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        <div className="container mx-auto px-6 pb-16 relative z-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold animate-fade-in">O nas</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-cream max-w-2xl animate-fade-up">
            Pasja, drewno, ogień.
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="reveal space-y-6 text-lg leading-relaxed text-foreground/90">
            <p className="text-2xl font-display italic text-primary">
              "Pizza to nie tylko jedzenie — to rytuał, który zaczyna się od dobrego ciasta."
            </p>
            <p>
              NA WAŁKU powstało z prostego marzenia: przywieźć do Wałbrzycha prawdziwą,
              klasyczną pizzę neapolitańską. Taką, jaką jada się na uliczkach Neapolu — z chrupiącym,
              lekko opieczonym brzegiem, miękkim środkiem i składnikami, które same opowiadają historię.
            </p>
            <p>
              Nasze ciasto dojrzewa <strong>48 godzin</strong>. Używamy mąki typu "00", drożdży i wody — nic więcej.
              Pomidory San Marzano DOP, mozzarella di bufala DOP, oliwa extra virgin — wszystko sprowadzane
              prosto z Włoch. Pizza wjeżdża do pieca na <strong>450°C</strong> i wychodzi w mniej niż 90 sekund.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ChefHat, title: "Tradycja", desc: "Receptury prosto z Neapolu" },
              { icon: Flame, title: "Piec opalany drewnem", desc: "450°C, 90 sekund" },
              { icon: Leaf, title: "Włoskie DOP", desc: "Najlepsze składniki" },
              { icon: Heart, title: "Z miłością", desc: "Każda pizza ręcznie" },
            ].map((v, i) => (
              <div key={i} className="reveal bg-secondary/40 rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors" style={{ transitionDelay: `${i * 80}ms` }}>
                <v.icon className="w-8 h-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          <img src={doughImg} alt="Wyrabianie ciasta" loading="lazy" width={1200} height={1400} className="rounded-3xl object-cover h-[500px] reveal" />
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Nasz sekret</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Ciasto, które oddycha</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Długie dojrzewanie ciasta to fundament neapolitańskiej pizzy. Dzięki niemu staje się
              ono lekkie, łatwo strawne i ma głęboki, lekko orzechowy smak. To jeden z powodów, dla
              których goście wracają do nas ciągle na nowo.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-4xl font-bold text-primary">4,8</div>
                <div className="text-xs text-muted-foreground mt-1">★ Google</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary">1988+</div>
                <div className="text-xs text-muted-foreground mt-1">Opinii</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary flex items-center gap-1"><Award className="w-7 h-7" /></div>
                <div className="text-xs text-muted-foreground mt-1">Top Wałbrzych</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
