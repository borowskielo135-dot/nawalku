import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";
import { useI18n } from "@/i18n/context";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl font-bold">NA WAŁKU</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mt-1">{t("footer.tag")}</p>
          <p className="mt-6 text-cream/70 max-w-md leading-relaxed">{t("footer.about")}</p>
          <div className="flex items-center gap-3 mt-6">
            <span className="text-2xl font-display font-bold">4,8</span>
            <div>
              <div className="flex gap-0.5 text-gold">
                {"★★★★★".split("").map((s, i) => (<span key={i}>{s}</span>))}
              </div>
              <p className="text-xs text-cream/60">1988 {t("footer.reviews")}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>Hetmańska 1C<br />58-316 Wałbrzych</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" />
              <a href="tel:+48513718011" className="hover:text-cream">513 718 011</a>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="w-4 h-4 text-gold" />
              <a href="https://www.facebook.com/people/NA-WA%C5%81KU-neapolitan-pizza/100076202198882/" target="_blank" rel="noreferrer" className="hover:text-cream">NA WAŁKU on Facebook</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">{t("footer.hours")}</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> {t("contact.day.mon")} – {t("contact.day.thu")}: 13:00 – 22:00</li>
            <li className="ml-6">{t("contact.day.fri")} – {t("contact.day.sat")}: 13:00 – 23:00</li>
            <li className="ml-6">{t("contact.day.sun")}: 13:00 – 22:00</li>
          </ul>
          <p className="mt-4 text-xs text-cream/50">40–60 zł / {t("info.avg").toLowerCase()}</p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} NA WAŁKU Neapolitan Pizza. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link to="/menu" className="hover:text-cream">{t("nav.menu")}</Link>
            <Link to="/kontakt" className="hover:text-cream">{t("nav.contact")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
