import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  BarChart3,
  Key,
  Sparkles,
  MessageSquare,
  Wrench,
  Receipt,
  Check,
  X,
  MessageCircle,
} from "lucide-react";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Staynex gère votre bien Airbnb de A à Z : annonce optimisée, tarification dynamique, accueil, ménage et maintenance. Maximisez vos revenus sans effort.",
};

const services = [
  {
    icon: Camera,
    title: "Annonce optimis\u00e9e pour performer",
    description:
      "Photos professionnelles, titre optimis\u00e9 et description con\u00e7ue pour augmenter votre taux de conversion et votre prix par nuit.",
    features: [
      "Shooting photo professionnel",
      "R\u00e9daction orient\u00e9e conversion",
      "Diffusion multi-plateformes",
    ],
  },
  {
    icon: BarChart3,
    title: "Tarification intelligente et \u00e9volutive",
    description:
      "Vos prix s\u2019ajustent automatiquement selon la demande, la saison, les \u00e9v\u00e9nements locaux et la concurrence. Vous ne laissez plus de revenus sur la table.",
    features: [
      "Ajustement tarifaire quotidien",
      "Analyse concurrentielle en continu",
      "Taux d\u2019occupation optimis\u00e9",
    ],
  },
  {
    icon: Key,
    title: "Accueil fluide, sans friction",
    description:
      "Arriv\u00e9e autonome ou accueil en personne, guide digital, recommandations locales. Le voyageur se sent attendu d\u00e8s la premi\u00e8re minute.",
    features: [
      "Check-in flexible 24/7",
      "Guide d\u2019accueil digital personnalis\u00e9",
      "Inspection syst\u00e9matique du logement",
    ],
  },
  {
    icon: Sparkles,
    title: "M\u00e9nage professionnel irr\u00e9prochable",
    description:
      "Linge h\u00f4telier, produits premium, contr\u00f4le qualit\u00e9 photo apr\u00e8s chaque rotation. Le standard qui g\u00e9n\u00e8re des avis 5 \u00e9toiles.",
    features: [
      "\u00c9quipes form\u00e9es aux standards h\u00f4teliers",
      "Linge et consommables fournis",
      "Contr\u00f4le qualit\u00e9 photo syst\u00e9matique",
    ],
  },
  {
    icon: MessageSquare,
    title: "R\u00e9activit\u00e9 24/7",
    description:
      "Les voyageurs sont pris en charge en quelques minutes, dans leur langue. R\u00e9sultat\u00a0: moins de probl\u00e8mes, de meilleurs avis, plus de r\u00e9servations.",
    features: [
      "R\u00e9ponse en quelques minutes",
      "Support multilingue",
      "Gestion proactive des avis",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance r\u00e9active, z\u00e9ro surprise",
    description:
      "R\u00e9seau d\u2019artisans de confiance, interventions rapides, suivi pr\u00e9ventif. Votre bien reste en parfait \u00e9tat sans que vous ayez \u00e0 vous en occuper.",
    features: [
      "R\u00e9seau d\u2019artisans v\u00e9rifi\u00e9s",
      "Interventions coordonn\u00e9es sous 24h",
      "Rapports mensuels sur l\u2019\u00e9tat du bien",
    ],
  },
  {
    icon: Receipt,
    title: "Optimisation fiscale intelligente",
    description:
      "LMNP, classement du logement, optimisation de la fiscalit\u00e9\u00a0: nous vous aidons \u00e0 r\u00e9duire vos imp\u00f4ts et maximiser vos revenus nets.",
    features: [
      "Statut LMNP simplifi\u00e9",
      "Classement du logement",
      "Conseil personnalis\u00e9",
    ],
  },
];

const faqItems = [
  {
    question: "Quels sont vos tarifs\u00a0?",
    answer:
      "Notre r\u00e9mun\u00e9ration est de 20\u00a0% TTC des revenus g\u00e9n\u00e9r\u00e9s. Elle peut \u00eatre ajust\u00e9e selon le bien et devient d\u00e9gressive si vous nous confiez plusieurs logements. Aucun frais cach\u00e9. Aucun abonnement. Ce mod\u00e8le aligne nos int\u00e9r\u00eats\u00a0: plus vous gagnez, plus nous gagnons.",
  },
  {
    question: "Est-ce que je garde le contr\u00f4le sur mon bien\u00a0?",
    answer:
      "Totalement. Vous d\u00e9cidez des dates bloqu\u00e9es, du prix minimum, des r\u00e8gles d\u2019accueil. Vous recevez un rapport mensuel complet et avez acc\u00e8s \u00e0 un espace propri\u00e9taire en ligne. Nous sommes votre partenaire, pas votre rempla\u00e7ant.",
  },
  {
    question: "Y a-t-il une dur\u00e9e d\u2019engagement\u00a0?",
    answer:
      "Non. Nos contrats sont flexibles, sans dur\u00e9e minimum. Vous pouvez r\u00e9silier \u00e0 tout moment avec un pr\u00e9avis de 30 jours. Nous comptons sur la qualit\u00e9 de nos r\u00e9sultats pour vous fid\u00e9liser, pas sur un engagement contractuel.",
  },
  {
    question: "G\u00e9rez-vous la r\u00e9glementation\u00a0?",
    answer:
      "Oui, nous vous accompagnons sur l\u2019ensemble des d\u00e9marches r\u00e9glementaires selon votre ville pour que vous louiez en toute conformit\u00e9.",
  },
  {
    question: "Comment puis-je suivre mes revenus\u00a0?",
    answer:
      "Chaque mois, vous recevez un rapport d\u00e9taill\u00e9 avec vos revenus, votre taux d\u2019occupation, les notes voyageurs et nos recommandations d\u2019optimisation. Tout est transparent, chiffr\u00e9 et v\u00e9rifiable.",
  },
  {
    question: "Que se passe-t-il en cas de d\u00e9g\u00e2t\u00a0?",
    answer:
      "Chaque s\u00e9jour est couvert par l\u2019assurance AirCover d\u2019Airbnb et par nos propres garanties. Nous documentons l\u2019\u00e9tat du logement avant et apr\u00e8s chaque s\u00e9jour et g\u00e9rons int\u00e9gralement les r\u00e9clamations le cas \u00e9ch\u00e9ant.",
  },
  {
    question: "Quand est-ce que je suis pay\u00e9\u00a0?",
    answer:
      "Vous percevez vos revenus d\u00e8s l\u2019arriv\u00e9e du voyageur. Tout est transparent et suivi dans vos rapports mensuels.",
  },
  {
    question: "Qui paie les frais de m\u00e9nage\u00a0?",
    answer:
      "Les frais de m\u00e9nage sont pay\u00e9s par le voyageur. Nous optimisons ces co\u00fbts pour rester comp\u00e9titifs tout en garantissant une qualit\u00e9 irr\u00e9prochable.",
  },
  {
    question: "Puis-je utiliser mon logement quand je veux\u00a0?",
    answer:
      "Oui. Vous bloquez librement les dates dans le calendrier selon vos besoins.",
  },
  {
    question:
      "Comment \u00eatre s\u00fbr de retrouver mon logement dans le m\u00eame \u00e9tat\u00a0?",
    answer:
      "Nous s\u00e9lectionnons rigoureusement les voyageurs gr\u00e2ce \u00e0 un filtrage interne et une analyse des profils. Chaque s\u00e9jour est encadr\u00e9, suivi et v\u00e9rifi\u00e9. Notre objectif est de garantir la s\u00e9curit\u00e9 de votre bien et de vous assurer une tranquillit\u00e9 totale.",
  },
  {
    question: "Y a-t-il un risque de squat\u00a0?",
    answer:
      "Non. Le risque de squat est extr\u00eamement faible dans ce type de gestion. Les s\u00e9jours sont courts, encadr\u00e9s et suivis en continu. Chaque r\u00e9servation est valid\u00e9e, les voyageurs sont identifi\u00e9s, et le logement est contr\u00f4l\u00e9 entre chaque s\u00e9jour, notamment lors des passages de m\u00e9nage.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-petrol-500 text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Chaque service est con&ccedil;u pour{" "}
              <span className="text-gold-400">g&eacute;n&eacute;rer plus de revenus</span>
            </h1>
            <p className="text-lg text-petrol-100 leading-relaxed max-w-2xl">
              Nous ne g&eacute;rons pas simplement votre bien&nbsp;: nous
              l&rsquo;optimisons. Chaque prestation vise un objectif
              pr&eacute;cis&nbsp;: maximiser vos revenus tout en
              pr&eacute;servant votre bien.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-petrol-500" />
                </div>
                <h3 className="text-xl font-bold text-petrol-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-gold-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
              La diff&eacute;rence entre d&eacute;l&eacute;guer&hellip; et
              vraiment rentabiliser votre bien
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              La diff&eacute;rence entre g&eacute;rer un bien et le
              rentabiliser.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-petrol-500 text-white text-center py-4 text-sm font-semibold">
              <div className="px-4">{"Crit\u00e8re"}</div>
              <div className="px-4">Conciergerie classique</div>
              <div className="px-4">Avec Staynex</div>
            </div>
            {[
              {
                criteria: "Transparence des revenus",
                without: "Visibilit\u00e9 limit\u00e9e",
                with: "Transparence totale + reporting",
              },
              {
                criteria: "Acc\u00e8s \u00e0 l\u2019annonce",
                without: "Non",
                with: "Oui, vous restez propri\u00e9taire",
              },
              {
                criteria: "Engagement",
                without: "6 \u00e0 12 mois",
                with: "Sans engagement",
              },
              {
                criteria: "Frais",
                without: "Frais cach\u00e9s possibles",
                with: "Mod\u00e8le clair et align\u00e9",
              },
              {
                criteria: "R\u00e9activit\u00e9",
                without: "Horaires limit\u00e9s",
                with: "24/7 en quelques minutes",
              },
              {
                criteria: "Taux de r\u00e9ponse",
                without: "Variable",
                with: "100\u00a0%",
              },
              {
                criteria: "Taux d\u2019occupation",
                without: "Irr\u00e9gulier",
                with: "Optimis\u00e9 en continu",
              },
              {
                criteria: "Note moyenne",
                without: "~4,5 \u2013 4,7",
                with: "+4,9",
              },
              {
                criteria: "D\u00e9lai de mise en ligne",
                without: "1 \u00e0 2 semaines",
                with: "48h",
              },
              {
                criteria: "Optimisation fiscale",
                without: "Non",
                with: "Oui",
              },
              {
                criteria: "Statut Airbnb",
                without: "Non partenaire officiel",
                with: "Partenaire officiel Airbnb",
              },
            ].map((row, i) => (
              <div
                key={row.criteria}
                className={`grid grid-cols-3 text-center text-sm py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                }`}
              >
                <div className="px-4 font-medium text-petrol-500">
                  {row.criteria}
                </div>
                <div className="px-4 text-gray-400 flex items-center justify-center gap-1">
                  <X className="w-4 h-4 text-red-400" />
                  {row.without}
                </div>
                <div className="px-4 text-petrol-500 font-medium flex items-center justify-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  {row.with}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
              Vos questions, nos r&eacute;ponses
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Transparence et clart&eacute; sur notre fonctionnement.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-petrol-500 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pr&ecirc;t &agrave; rentabiliser votre bien&nbsp;?
          </h2>
          <p className="text-petrol-100 text-lg mb-10 max-w-xl mx-auto">
            Recevez une estimation gratuite de vos revenus potentiels. Sans
            engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Obtenir mon estimation gratuite
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
