import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-petrol-500 text-white">
      <div className="container-main section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-petrol-500 font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Staynex</span>
            </div>
            <p className="text-petrol-200 text-sm leading-relaxed">
              Votre bien m&eacute;rite de g&eacute;n&eacute;rer des revenus
              &agrave; la hauteur de son potentiel. Nous nous en occupons.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gold-400 mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Services", href: "/services" },
                { name: "\u00c0 propos", href: "/a-propos" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-petrol-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gold-400 mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-petrol-200">
              <li>Gestion locative compl&egrave;te</li>
              <li>Optimisation des revenus</li>
              <li>Accueil &amp; exp&eacute;rience voyageur</li>
              <li>M&eacute;nage &amp; maintenance</li>
              <li>Annonce &amp; tarification</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gold-400 mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-petrol-200">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                nicolas@staynex.fr
              </li>
              <li className="flex items-center gap-3 text-sm text-petrol-200">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+33781197596" className="hover:text-white transition-colors">
                  +33 7 81 19 75 96
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-petrol-200">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                Paris, France
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-petrol-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-petrol-200">
            &copy; {new Date().getFullYear()} Staynex. Tous droits
            r&eacute;serv&eacute;s.
          </p>
          <div className="flex gap-6 text-sm text-petrol-200">
            <Link href="/contact" className="hover:text-white transition-colors">
              Mentions l&eacute;gales
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Politique de confidentialit&eacute;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
