import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  TrendingUp,
  Shield,
  Clock,
  Star,
  MessageCircle,
} from "lucide-react";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Conciergerie Airbnb Paris — Gestion locative premium",
  description:
    "Staynex, votre conciergerie Airbnb à Paris. Gestion complète de votre bien, tarification dynamique, +25% de revenus. Service premium dans tous les arrondissements.",
  keywords: [
    "conciergerie airbnb paris",
    "gestion airbnb paris",
    "conciergerie location courte durée paris",
    "co-host airbnb paris",
    "gestion locative courte durée paris",
    "conciergerie airbnb premium paris",
  ],
};

const seoFAQ = [
  {
    question: "Qu'est-ce qu'une conciergerie Airbnb à Paris ?",
    answer:
      "Une conciergerie Airbnb à Paris est un service professionnel qui prend en charge la gestion complète de votre location courte durée : création d'annonce, tarification, accueil des voyageurs, ménage, communication et maintenance. Elle permet aux propriétaires de générer des revenus optimisés sans s'occuper de la gestion quotidienne.",
  },
  {
    question: "Combien coûte une conciergerie Airbnb à Paris ?",
    answer:
      "Les tarifs d'une conciergerie Airbnb à Paris varient généralement entre 15% et 25% des revenus locatifs, selon l'étendue des services. Chez Staynex, notre commission est basée sur la performance : nos intérêts sont alignés avec les vôtres puisque nous gagnons plus quand vous gagnez plus.",
  },
  {
    question: "Combien peut rapporter un appartement Airbnb à Paris ?",
    answer:
      "Un appartement bien géré à Paris peut rapporter entre 2 000€ et 8 000€ par mois selon sa taille, son emplacement et la saison. Un T2 dans un quartier central peut générer environ 3 000 à 4 500€/mois avec une gestion optimisée. Nos propriétaires constatent en moyenne +25% de revenus par rapport à une gestion en autonomie.",
  },
  {
    question: "Est-il légal de louer son appartement sur Airbnb à Paris ?",
    answer:
      "Oui, la location courte durée est légale à Paris sous certaines conditions : pour une résidence principale, elle est limitée à 120 jours par an. Le bien doit être déclaré en mairie et disposer d'un numéro d'enregistrement. Pour une résidence secondaire, un changement d'usage est nécessaire. Staynex vous accompagne dans toutes ces démarches.",
  },
  {
    question: "Dans quels arrondissements de Paris intervenez-vous ?",
    answer:
      "Staynex intervient dans tous les arrondissements de Paris et en proche banlieue. Nos zones les plus demandées sont le Marais (3e-4e), Saint-Germain (6e), le Triangle d'Or (8e), Opéra (9e), Bastille (11e), Montmartre (18e) et le 16e arrondissement. Chaque quartier a ses spécificités que nous maîtrisons parfaitement.",
  },
  {
    question: "Comment choisir la meilleure conciergerie Airbnb à Paris ?",
    answer:
      "Pour choisir une bonne conciergerie Airbnb à Paris, vérifiez : son expérience et le nombre de biens gérés, les avis de ses propriétaires clients, la transparence de ses tarifs, la qualité de son service client (temps de réponse, disponibilité), et ses résultats concrets en termes de revenus et taux d'occupation.",
  },
];

const arrondissements = [
  { name: "Marais", arr: "3e-4e", type: "Historique & tendance" },
  { name: "Saint-Germain", arr: "6e", type: "Chic & littéraire" },
  { name: "Triangle d'Or", arr: "8e", type: "Luxe & prestige" },
  { name: "Opéra", arr: "9e", type: "Central & dynamique" },
  { name: "Bastille", arr: "11e", type: "Branché & vivant" },
  { name: "Montmartre", arr: "18e", type: "Bohème & artistique" },
  { name: "Tour Eiffel", arr: "7e-16e", type: "Résidentiel & premium" },
  { name: "Latin", arr: "5e", type: "Étudiant & culturel" },
];

export default function ConciergeriePage() {
  return (
    <>
      {/* Hero SEO */}
      <section className="bg-petrol-500 text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Conciergerie Airbnb à Paris —{" "}
              <span className="text-gold-400">
                Gestion premium de votre bien
              </span>
            </h1>
            <p className="text-lg text-petrol-100 leading-relaxed max-w-2xl mb-8">
              Staynex est votre partenaire de confiance pour la gestion
              complète de votre location Airbnb à Paris. Tarification
              dynamique, accueil personnalisé et revenus optimisés dans tous
              les arrondissements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">
                Estimation gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/33781197596?text=Bonjour%20Nicolas%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20gestion%20de%20mon%20bien%20et%20son%20potentiel%20de%20revenus."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu SEO principal */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-petrol-500 mb-6">
              Pourquoi faire appel à une conciergerie Airbnb à Paris ?
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4 mb-12">
              <p>
                Paris est la première destination touristique mondiale avec plus
                de 30 millions de visiteurs par an. Pour les propriétaires, la
                location courte durée représente une opportunité exceptionnelle
                de rentabiliser leur bien immobilier. Mais gérer un bien Airbnb
                de manière optimale demande du temps, de l&apos;expertise et une
                disponibilité constante.
              </p>
              <p>
                C&apos;est là qu&apos;intervient <strong>Staynex</strong>, votre
                conciergerie Airbnb premium à Paris. Notre équipe d&apos;experts
                prend en charge l&apos;intégralité de la gestion de votre bien :
                de la création de l&apos;annonce à l&apos;accueil des voyageurs,
                en passant par la tarification dynamique et le ménage
                professionnel.
              </p>
              <p>
                Nos propriétaires constatent en moyenne <strong>+25% de
                revenus</strong> par rapport à une gestion en autonomie, grâce à
                notre expertise en optimisation tarifaire et notre connaissance
                approfondie du marché parisien.
              </p>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: TrendingUp,
                  title: "Revenus maximisés",
                  text: "Tarification dynamique et optimisation du taux d'occupation pour des revenus supérieurs de 25% en moyenne.",
                },
                {
                  icon: Clock,
                  title: "Zéro gestion",
                  text: "Nous gérons tout de A à Z : annonce, réservations, accueil, ménage, maintenance. Vous n'avez rien à faire.",
                },
                {
                  icon: Star,
                  title: "Avis 5 étoiles",
                  text: "Service premium pour vos voyageurs : accueil personnalisé, linge hôtelier, réactivité maximale.",
                },
                {
                  icon: Shield,
                  title: "Conformité assurée",
                  text: "Déclaration mairie, numéro d'enregistrement, respect des 120 jours : nous gérons toute la réglementation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 bg-cream rounded-xl"
                >
                  <div className="w-12 h-12 bg-petrol-500 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-petrol-500 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services locaux */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
              Nos services de conciergerie à Paris
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Un service adapté aux spécificités du marché parisien.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Création et optimisation d'annonces multi-plateformes",
                "Shooting photo professionnel de votre bien",
                "Tarification dynamique adaptée aux événements parisiens",
                "Check-in personnalisé ou boîte à clés sécurisée",
                "Ménage professionnel avec linge hôtelier premium",
                "Communication voyageurs 7j/7 en moins d'une heure",
                "Maintenance réactive avec réseau d'artisans locaux",
                "Accompagnement réglementaire complet (mairie, enregistrement)",
                "Rapports mensuels détaillés avec analytics",
                "Gestion des avis et de la e-réputation",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl"
                >
                  <Check className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
              Nous intervenons dans tout Paris
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Chaque quartier a ses spécificités. Notre connaissance locale fait
              la différence.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {arrondissements.map((q) => (
              <div
                key={q.name}
                className="bg-cream hover:bg-petrol-500 group rounded-xl p-6 text-center transition-all duration-300 cursor-default"
              >
                <MapPin className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                <h3 className="font-bold text-petrol-500 group-hover:text-white transition-colors">
                  {q.name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-petrol-100 transition-colors">
                  {q.arr} — {q.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
              Questions fréquentes sur la conciergerie Airbnb à Paris
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={seoFAQ} />
          </div>
        </div>
      </section>

      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: seoFAQ.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Staynex — Conciergerie Airbnb Paris",
            description:
              "Conciergerie Airbnb premium à Paris. Gestion complète de votre bien, tarification dynamique et expérience voyageur exceptionnelle.",
            url: "https://staynex.fr",
            telephone: "+33600000000",
            email: "nicolas@staynex.fr",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressCountry: "FR",
            },
            areaServed: {
              "@type": "City",
              name: "Paris",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "200",
            },
          }),
        }}
      />

      {/* CTA */}
      <section className="section-padding bg-petrol-500 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Confiez-nous la gestion de votre bien à Paris
          </h2>
          <p className="text-petrol-100 text-lg mb-10 max-w-2xl mx-auto">
            Obtenez une estimation gratuite de vos revenus potentiels. Notre
            équipe vous recontacte sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Estimation gratuite
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/33781197596?text=Bonjour%20Nicolas%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20gestion%20de%20mon%20bien%20et%20son%20potentiel%20de%20revenus."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
