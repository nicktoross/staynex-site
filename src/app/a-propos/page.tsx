import type { Metadata } from "next";
import Image from "next/image";
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
  title: "\u00c0 propos",
  description:
    "Staynex aide les propri\u00e9taires et occupants \u00e0 transformer leur bien en actif rentable, sans contrainte. D\u00e9couvrez notre approche.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-petrol-500 text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Nous transformons votre bien en{" "}
              <span className="text-gold-400">actif rentable</span>
            </h1>
            <p className="text-lg text-petrol-100 leading-relaxed max-w-2xl">
              Staynex aide les propri&eacute;taires &agrave; transformer leur
              bien en source de revenus performante, sans effort et sans
              compromis.
            </p>
            <p className="text-lg text-petrol-100 leading-relaxed max-w-2xl mt-4">
              Que vous louiez d&eacute;j&agrave; ou que vous souhaitiez vous
              lancer, nous optimisons chaque d&eacute;tail pour maximiser votre
              rentabilit&eacute;.
            </p>
          </div>
        </div>
      </section>

      {/* Fondateur */}
      <section className="section-padding bg-cream">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <span className="section-label">Le fondateur</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-6">
                Nicolas Torossian
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  J&rsquo;ai commenc&eacute; chez Microsoft et LinkedIn,
                  o&ugrave; j&rsquo;ai travaill&eacute; sur des sujets de
                  croissance, de data et de performance marketing.
                </p>
                <p>
                  Puis chez Expedia &agrave; Paris, j&rsquo;accompagnais
                  directement des h&ocirc;tels pour am&eacute;liorer leur
                  visibilit&eacute;, leur taux de remplissage et leurs
                  revenus.
                </p>
                <p>
                  C&rsquo;est l&agrave; que j&rsquo;ai compris ce qui fait
                  vraiment la diff&eacute;rence entre un bien qui performe et
                  un bien qui stagne.
                </p>
                <p className="font-semibold text-petrol-500">
                  J&rsquo;ai cr&eacute;&eacute; Staynex pour appliquer ces
                  m&eacute;thodes au march&eacute; Airbnb.
                </p>
                <p>
                  {"Aujourd\u2019hui, j\u2019aide des propri\u00e9taires\u00a0\u00e0\u00a0:"}
                </p>
                <ul className="space-y-3">
                  {[
                    "Maximiser leurs revenus",
                    "Optimiser leur performance sur Airbnb",
                    "D\u00e9l\u00e9guer la gestion sans perdre le contr\u00f4le",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-semibold text-petrol-500">
                  Approche simple&nbsp;: analyser, optimiser, performer.
                </p>
                <p>
                  Avec Staynex, vous &eacute;changez directement avec
                  moi &mdash; pas d&rsquo;agence, pas
                  d&rsquo;interm&eacute;diaire.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://wa.me/33781197596?text=Bonjour%20Nicolas%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20gestion%20de%20mon%20bien%20et%20son%20potentiel%20de%20revenus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp !rounded-xl inline-flex"
                >
                  <MessageCircle className="w-5 h-5" />
                  Parler avec Nicolas
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolas-torossian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-petrol-400 hover:text-petrol-500 hover:opacity-80 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
  aria-hidden="true"
>
  <rect width="24" height="24" rx="4" fill="#0A66C2" />
  <path
    d="M7.1 9H4.4v8h2.7V9zM5.8 7.7c.9 0 1.5-.6 1.5-1.4 0-.8-.6-1.4-1.5-1.4s-1.5.6-1.5 1.4c0 .8.6 1.4 1.5 1.4zM19.6 17h-2.7v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8V17h-2.7V9h2.7v1.1c.4-.6 1-1.4 2.5-1.4 1.8 0 3.1 1.2 3.1 3.8V17z"
    fill="#ffffff"
  />
</svg>
                  Voir mon profil LinkedIn
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl shadow-petrol-500/20">
                  <Image
                    src="/nicolas.jpg"
                    alt="Nicolas Torossian founder Staynex"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-64 sm:w-80 h-64 sm:h-80 rounded-2xl border-2 border-gold-400/20 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-6">
                Notre approche
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Beaucoup de propri&eacute;taires poss&egrave;dent un bien qui
                  pourrait g&eacute;n&eacute;rer bien plus&hellip; mais manquent
                  de temps, d&rsquo;expertise ou de strat&eacute;gie.
                </p>
                <p>
                  Certains louent d&eacute;j&agrave;, mais leurs revenus
                  stagnent faute d&rsquo;optimisation&nbsp;: tarification,
                  annonce, exp&eacute;rience voyageur.
                </p>
                <p>
                  C&rsquo;est l&agrave; que nous faisons la diff&eacute;rence.
                </p>
                <p>
                  Nous prenons en charge l&rsquo;int&eacute;gralit&eacute; de la
                  gestion, avec une approche orient&eacute;e performance&nbsp;:
                  maximiser vos revenus, am&eacute;liorer l&rsquo;exp&eacute;rience
                  et valoriser votre bien sur le long terme.
                </p>
              </div>
            </div>
            <div className="bg-cream rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "150+", label: "biens accompagn\u00e9s", icon: Home },
                  { value: "24/7", label: "r\u00e9activit\u00e9", icon: Zap },
                  { value: "Revenus", label: "optimis\u00e9s", icon: Banknote },
                  { value: "Aucune", label: "dur\u00e9e d\u2019engagement", icon: LockOpen },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-petrol-500">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
              Ce qui guide nos d&eacute;cisions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Des principes concrets, appliqu&eacute;s au quotidien sur chaque bien.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Performance",
                description:
                  "Chaque d\u00e9cision est prise pour maximiser vos revenus. Notre r\u00e9mun\u00e9ration est index\u00e9e sur vos r\u00e9sultats.",
              },
              {
                icon: Clock,
                title: "R\u00e9activit\u00e9",
                description:
                  "Les voyageurs n\u2019attendent pas. Notre \u00e9quipe r\u00e9pond en quelques minutes et intervient en quelques heures.",
              },
              {
                icon: Eye,
                title: "Transparence",
                description:
                  "Rapports d\u00e9taill\u00e9s, tarification claire, acc\u00e8s en temps r\u00e9el. Vous savez toujours exactement o\u00f9 en sont vos revenus.",
              },
              {
                icon: Award,
                title: "Rigueur",
                description:
                  "Contr\u00f4le qualit\u00e9 syst\u00e9matique, processus standardis\u00e9s, attention aux d\u00e9tails. Votre bien est entre de bonnes mains.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-petrol-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-petrol-500 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \u00c0 qui s\u2019adresse Staynex */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
              &Agrave; qui s&rsquo;adresse Staynex&nbsp;?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Que vous louiez d&eacute;j&agrave; ou que vous souhaitiez vous
              lancer, nous avons une solution adapt&eacute;e.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Propri\u00e9taires qui louent d\u00e9j\u00e0",
                description:
                  "Vos revenus stagnent malgr\u00e9 Airbnb\u00a0? Nous optimisons votre annonce, votre tarification et votre exp\u00e9rience pour d\u00e9bloquer tout le potentiel de votre bien.",
              },
              {
                title: "Propri\u00e9taires qui veulent se lancer",
                description:
                  "Vous avez un bien mais ne savez pas par o\u00f9 commencer\u00a0? Nous nous occupons de tout, de la cr\u00e9ation \u00e0 la mise en location, jusqu\u2019aux premi\u00e8res r\u00e9servations.",
              },
              {
                title: "Occupants avec un bien disponible",
                description:
                  "Vous avez un bien disponible ponctuellement\u00a0? Nous le transformons en source de revenus, m\u00eame sur de courtes p\u00e9riodes.",
              },
            ].map((profile) => (
              <div
                key={profile.title}
                className="bg-cream rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-petrol-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-petrol-500 mb-1">
                  {profile.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-4">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-petrol-500 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Faites travailler votre bien pour vous
          </h2>
          <p className="text-petrol-100 text-lg mb-10 max-w-xl mx-auto">
            D&eacute;couvrez combien votre bien peut r&eacute;ellement
            g&eacute;n&eacute;rer. Estimation gratuite, sans engagement.
          </p>
          <Link href="/contact" className="btn-gold">
            Obtenir mon estimation gratuite
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
