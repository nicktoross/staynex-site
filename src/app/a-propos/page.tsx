import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Eye,
  MessageCircle,
  TrendingUp,
  Users,
  Home,
  Zap,
  Banknote,
  LockOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Staynex aide les propriétaires et occupants à transformer leur bien en actif rentable, sans contrainte.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-petrol-500 text-white pt-32 pb-20">
        <div className="container-main">
          <h1 className="text-4xl font-bold mb-6">
            Nous transformons votre bien en{" "}
            <span className="text-gold-400">actif rentable</span>
          </h1>
          <p className="text-lg text-petrol-100 max-w-2xl">
            Staynex aide les propriétaires à générer plus de revenus sans effort.
          </p>
        </div>
      </section>

      {/* Fondateur */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texte */}
            <div>
              <span className="section-label">Le fondateur</span>
              <h2 className="text-3xl font-bold text-petrol-500 mb-6">
                Nicolas Torossian
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  J’ai commencé dans l’hôtellerie et le voyage, notamment chez Expedia.
                </p>
                <p>
                  Très vite, j’ai compris que beaucoup de propriétaires passent à côté du potentiel Airbnb.
                </p>

                <ul className="space-y-2">
                  {[
                    "Maximiser leurs revenus",
                    "Améliorer l’expérience voyageur",
                    "Déléguer la gestion",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-4 h-4 text-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="font-semibold text-petrol-500">
                  Transparence, performance et accompagnement humain.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/33781197596"
                  className="btn-whatsapp inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Parler avec Nicolas
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/nicolas.jpg"
                  alt="Nicolas Torossian"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-petrol-500 text-white text-center">
        <div className="container-main">
          <h2 className="text-3xl font-bold mb-4">
            Faites travailler votre bien pour vous
          </h2>
          <Link href="/contact" className="btn-gold">
            Estimation gratuite
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
