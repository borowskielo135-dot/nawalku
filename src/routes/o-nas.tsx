import { createFileRoute } from "@tanstack/react-router";
import { Flame, Leaf, ChefHat, Award, Heart } from "lucide-react";
import interiorImg from "@/assets/interior.jpg";
import doughImg from "@/assets/dough.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n/context";

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
  const { t, lang } = useI18n();
  useReveal([lang]);
  return (
    <div className="bg-background">
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden -mt-20 pt-20 flex items-end">
        <img src={interiorImg} alt="Wnętrze NA WAŁKU" className="absolute inset-0 w-full h-full object-cover" width={1400} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        <div className="container mx-auto px-6 pb-16 relative z-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold animate-fade-in">{t("about.kicker")}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-cream max-w-2xl animate-fade-up">
            {t("about.title")}
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="reveal space-y-6 text-lg leading-relaxed text-foreground/90">
            <p className="text-2xl font-display italic text-primary">{t("about.quote")}</p>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ChefHat, title: t("about.v1.t"), desc: t("about.v1.d") },
              { icon: Flame, title: t("about.v2.t"), desc: t("about.v2.d") },
              { icon: Leaf, title: t("about.v3.t"), desc: t("about.v3.d") },
              { icon: Heart, title: t("about.v4.t"), desc: t("about.v4.d") },
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
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">{t("about.secret")}</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">{t("about.dough")}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.doughBody")}</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-4xl font-bold text-primary">4,8</div>
                <div className="text-xs text-muted-foreground mt-1">★ Google</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary">1988+</div>
                <div className="text-xs text-muted-foreground mt-1">{t("hero.reviews")}</div>
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
