import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Star,
  Clock,
  Shield,
  BarChart3,
  Users,
  MessageCircle,
  CheckCircle2,
  Zap,
  Eye,
  HeadphonesIcon,
  Globe,
  FileText,
  AlarmClock,
  Frown,
  PiggyBank,
  Wallet,
  Landmark,
  LineChart,
  Plane,
  Heart,
  Lightbulb,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative bg-petrol-500 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-petrol-700 via-petrol-500 to-petrol-500" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(200,169,110,0.15),_transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        <div className="container-main relative px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-32 lg:pt-48 lg:pb-36">
          <div className="max-w-4xl animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.07] backdrop-blur-sm border border-white/[0.08] px-5 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-gold-400 rounded-full" />
              <span className="text-sm font-medium text-gold-200 tracking-wide">
                Gestion locative premium &agrave; Paris
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-7">
              Confiez votre bien.
              <br />
              <span className="text-gold-400">
                {"G\u00e9n\u00e9rez des revenus."}
              </span>
            </h1>

            {/* Supporting line */}
            <p className="text-xl sm:text-2xl font-semibold text-white mb-7">
              Sans aucun effort de votre part.
            </p>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-petrol-100/90 leading-relaxed max-w-2xl mb-12 font-light">
              Staynex transforme votre bien en une nouvelle source de revenus
              optimis&eacute;e.{" "}
              <br className="hidden sm:block" />
              Vous encaissez, nous g&eacute;rons tout.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                href="/contact"
                className="btn-gold !px-10 !rounded-xl shadow-lg shadow-gold-400/20"
              >
                Obtenir mon estimation gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/33781197596?text=Bonjour%20Nicolas%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20gestion%20de%20mon%20bien%20et%20son%20potentiel%20de%20revenus."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !rounded-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Parler &agrave; un expert sur WhatsApp
              </a>
            </div>

            {/* Trust ribbon */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-petrol-200/80">
              {[
                "Z\u00e9ro contrainte.",
                "Z\u00e9ro stress.",
                "R\u00e9sultats mesurables.",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400/70" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <section className="relative z-10 -mt-14 px-4 sm:px-6 lg:px-8">
        <div className="container-main">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {[
              {
                value: "+25 %",
                label: "de revenus en moyenne",
                icon: TrendingUp,
              },
              {
                value: "90 %+",
                label: "taux d\u2019occupation",
                icon: BarChart3,
              },
              {
                value: "4.9/5",
                label: "note voyageurs",
                icon: Star,
              },
              {
                value: "< 1 min",
                label: "temps de r\u00e9ponse",
                icon: Clock,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 px-6 py-7 lg:px-8 lg:py-9"
              >
                <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-petrol-500 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-300 mt-3">
            {"Bas\u00e9 sur les biens actuellement g\u00e9r\u00e9s"}
          </p>
        </div>
      </section>

      {/* ===================== PAIN POINTS ===================== */}
      <section className="section-padding-lg">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label">Le constat</span>
            <h2 className="section-title">
              G&eacute;rer un Airbnb seul
              <br className="hidden sm:block" /> co&ucirc;te du temps
              &mdash; et de l&rsquo;argent.
            </h2>
            <p className="section-subtitle mx-auto">
              Que vous exploitiez d&eacute;j&agrave; votre bien&hellip; ou que
              vous n&rsquo;ayez jamais fait de Airbnb, la majorit&eacute; des
              biens sont sous-exploit&eacute;s &mdash; souvent sans que leurs
              propri&eacute;taires le sachent. Entre la gestion, les voyageurs,
              le m&eacute;nage, la tarification&hellip; votre bien ne
              g&eacute;n&egrave;re pas toujours ce qu&rsquo;il pourrait.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: AlarmClock,
                title: "Votre temps est monopolis\u00e9",
                description:
                  "Messages \u00e0 toute heure, check-ins tardifs, urgences le week-end. La gestion d\u2019un bien devient un deuxi\u00e8me m\u00e9tier.",
              },
              {
                icon: PiggyBank,
                title: "Vos revenus sont sous-exploit\u00e9s",
                description:
                  "Sans strat\u00e9gie tarifaire, sans annonce optimis\u00e9e et sans multi-diffusion, votre bien ne g\u00e9n\u00e8re pas ce qu\u2019il devrait.",
              },
              {
                icon: Frown,
                title: "La charge mentale s\u2019accumule",
                description:
                  "M\u00e9nage, linge, maintenance, r\u00e9glementation, cl\u00e9s, avis\u2026 La liste ne s\u2019arr\u00eate jamais et la motivation s\u2019\u00e9rode.",
              },
            ].map((pain) => (
              <div
                key={pain.title}
                className="bg-cream/70 border border-gray-100 rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-petrol-500/[0.06] flex items-center justify-center mb-5">
                  <pain.icon className="w-6 h-6 text-petrol-400" />
                </div>
                <h3 className="font-bold text-petrol-500 text-lg mb-2">
                  {pain.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[0.95rem]">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECTION ===================== */}
      <section className="section-padding-lg bg-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label">La projection</span>
            <h2 className="section-title">
              Et si votre bien
              <br className="hidden sm:block" />{" "}
              <span className="text-gold-500">
                {"finan\u00e7ait vos projets\u00a0?"}
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Plane,
                title: "Vos vacances",
                description:
                  "Partez l\u2019esprit libre \u2014 votre bien g\u00e9n\u00e8re des revenus pendant que vous profitez.",
              },
              {
                icon: Landmark,
                title: "Rembourser votre cr\u00e9dit",
                description:
                  "Votre bien couvre ses propres charges \u2014 et au-del\u00e0.",
              },
              {
                icon: Wallet,
                title: "G\u00e9n\u00e9rer un compl\u00e9ment de revenus",
                description:
                  "Un revenu r\u00e9current, pr\u00e9visible, sans effort de votre part.",
              },
              {
                icon: LineChart,
                title: "Investir et faire fructifier",
                description:
                  "Faites travailler votre argent pour vous. R\u00e9investissez et profitez des int\u00e9r\u00eats compos\u00e9s.",
              },
              {
                icon: Heart,
                title: "Financer un projet de vie",
                description:
                  "Mariage, immobilier, grands projets\u2026 votre bien peut vous y aider.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-petrol-500/[0.06] flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-bold text-petrol-500 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[0.95rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-medium text-gray-400 mt-10">
            Votre bien peut travailler pour vous.
          </p>
        </div>
      </section>

      {/* ===================== BENEFITS ===================== */}
      <section className="section-padding-lg bg-petrol-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,_rgba(200,169,110,0.08),_transparent)]" />
        <div className="container-main relative">
          <div className="max-w-3xl mb-16">
            <span className="section-label !text-gold-400/80">La solution</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Votre bien devient
              <br className="hidden sm:block" />{" "}
              <span className="text-gold-400">un actif rentable.</span>
            </h2>
            <p className="text-lg text-petrol-100/80 leading-relaxed mt-5 max-w-2xl font-light">
              Staynex transforme votre bien en source de revenus optimis&eacute;e.
              <br className="hidden sm:block" />
              Vous encaissez, nous g&eacute;rons tout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Des revenus maximis\u00e9s",
                description:
                  "Tarification dynamique, diffusion multi-plateformes, annonce optimis\u00e9e. Chaque nuit est optimis\u00e9e pour g\u00e9n\u00e9rer le maximum.",
              },
              {
                icon: Shield,
                title: "Z\u00e9ro effort de votre part",
                description:
                  "Vous ne vous occupez de rien. Ni messages, ni m\u00e9nage, ni probl\u00e8mes. Votre temps reste le v\u00f4tre.",
              },
              {
                icon: Star,
                title: "Une exp\u00e9rience qui performe",
                description:
                  "Des voyageurs satisfaits laissent des avis positifs, ce qui am\u00e9liore votre classement, attire plus de r\u00e9servations et vous permet d\u2019augmenter votre prix par nuit. Un cercle vertueux.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-petrol-100/70 leading-relaxed text-[0.95rem]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="section-padding-lg">
        <div className="container-main">
          <div className="text-center mb-20">
            <span className="section-label">{"Comment \u00e7a marche"}</span>
            <h2 className="section-title">
              Trois &eacute;tapes. Z&eacute;ro complication.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-gold-400/40 via-gold-400/20 to-gold-400/40" />

            {[
              {
                step: "01",
                title: "Estimation gratuite",
                description:
                  "Nous analysons votre bien et votre march\u00e9 pour estimer son potentiel de revenus.",
                detail: "Gratuit & sans engagement",
              },
              {
                step: "02",
                title: "On s\u2019occupe de tout",
                description:
                  "Cr\u00e9ation de l\u2019annonce, photos professionnelles offertes, optimisation, tarification intelligente, mise en ligne.",
                detail: "Op\u00e9rationnel sous 48h",
              },
              {
                step: "03",
                title: "Vous encaissez",
                description:
                  "Les r\u00e9servations arrivent, vous encaissez d\u00e8s l\u2019arriv\u00e9e du voyageur. Suivez vos performances en temps r\u00e9el via vos rapports.",
                detail: "Revenus g\u00e9n\u00e9r\u00e9s chaque mois",
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-24 h-24 rounded-full bg-cream border-2 border-gold-400/20 flex items-center justify-center mx-auto mb-8">
                  <span className="text-2xl font-extrabold text-petrol-500">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-petrol-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-50 px-4 py-1.5 rounded-full">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY STAYNEX ===================== */}
      <section className="section-padding-lg bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — Text */}
            <div>
              <span className="section-label">Pourquoi Staynex</span>
              <h2 className="section-title mb-6">
                Un partenaire,
                <br className="hidden lg:block" /> pas un prestataire.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Nos revenus d&eacute;pendent des v&ocirc;tres. Ce mod&egrave;le
                aligne nos int&eacute;r&ecirc;ts&nbsp;: quand vous gagnez plus,
                nous gagnons plus. Technologie, expertise terrain et rigueur
                op&eacute;rationnelle au service de votre rentabilit&eacute;.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary !rounded-xl">
                  D&eacute;couvrir nos services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right — Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Zap,
                  title: "Tarification intelligente",
                  description:
                    "Algorithmes ajustant vos prix en temps r\u00e9el selon la demande, les \u00e9v\u00e9nements et la saisonnalit\u00e9.",
                },
                {
                  icon: HeadphonesIcon,
                  title: "R\u00e9activit\u00e9 24/7",
                  description:
                    "Une \u00e9quipe d\u00e9di\u00e9e r\u00e9pond aux voyageurs en quelques minutes.",
                },
                {
                  icon: Users,
                  title: "Expertise terrain",
                  description:
                    "Une connaissance fine du march\u00e9 et des sp\u00e9cificit\u00e9s locales.",
                },
                {
                  icon: Eye,
                  title: "Transparence totale",
                  description:
                    "Suivi clair de vos performances, aucun frais cach\u00e9.",
                },
                {
                  icon: Globe,
                  title: "Diffusion multi-plateforme",
                  description:
                    "Airbnb, Booking, Vrbo et plus. Visibilit\u00e9 maximale, calendrier synchronis\u00e9.",
                },
                {
                  icon: FileText,
                  title: "Conformit\u00e9 r\u00e9glementaire",
                  description:
                    "Nous g\u00e9rons les obligations l\u00e9gales selon votre ville.",
                },
                {
                  icon: Lightbulb,
                  title: "Optimisation fiscale",
                  description:
                    "Conseils pour structurer vos revenus (LMNP, classement\u2026).",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold-400/30 hover:shadow-sm transition-all duration-300"
                >
                  <feature.icon className="w-5 h-5 text-gold-400 mb-3" />
                  <h3 className="font-bold text-petrol-500 text-[0.95rem] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOUNDER ===================== */}
      <section className="section-padding-lg">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            {/* Photo — left on desktop, first on mobile */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Replace with <Image src="/nicolas.jpg" fill alt="Nicolas Torossian" className="object-cover" /> when photo is ready */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-petrol-500 flex items-center justify-center shadow-xl shadow-petrol-500/20 overflow-hidden">
                  <span className="text-6xl font-extrabold text-gold-400 select-none tracking-tight">
                    NT
                  </span>
                </div>
                <div className="absolute -bottom-3 -right-3 w-64 sm:w-72 h-64 sm:h-72 rounded-2xl border-2 border-gold-400/20 -z-10" />
              </div>
            </div>

            {/* Text — right on desktop */}
            <div>
              <span className="section-label">
                Rencontrez votre interlocuteur
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-petrol-500 leading-tight mb-2">
                Nicolas Torossian
              </h2>
              <p className="text-lg font-semibold text-gold-500 mb-8">
                Fondateur de Staynex
              </p>
              <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
                <p>Je suis Nicolas Torossian, fondateur de Staynex.</p>
                <p>
                  Apr&egrave;s plusieurs ann&eacute;es dans
                  l&rsquo;h&ocirc;tellerie et la gestion de biens,
                  j&rsquo;accompagne aujourd&rsquo;hui des
                  propri&eacute;taires &agrave; maximiser leurs revenus tout
                  en simplifiant totalement la gestion.
                </p>
                <p>
                  Mon objectif&nbsp;: vous offrir une exp&eacute;rience
                  fluide, transparente et rentable.
                </p>
                <p className="font-semibold text-petrol-500">
                  Vous &eacute;changez directement avec moi, sans
                  interm&eacute;diaire.
                </p>
              </div>
              <a
                href="https://wa.me/33781197596?text=Bonjour%20Nicolas%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20gestion%20de%20mon%20bien%20et%20son%20potentiel%20de%20revenus."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !rounded-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Parler avec moi sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section-padding-lg bg-white">
        <div className="container-main">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">{"T\u00e9moignages"}</span>
            <h2 className="section-title">Ils nous font confiance</h2>
            <p className="section-subtitle mx-auto mt-4">
              Des propri&eacute;taires qui ont transform&eacute; leur bien en
              source de revenus performante, sans effort.
            </p>
          </div>

          {/* Proof bar */}
          <div className="bg-cream rounded-2xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 mb-14 overflow-hidden">
            {[
              { value: "150+", label: "biens accompagn\u00e9s" },
              { value: "4.9 \u2605", label: "note moyenne" },
              { value: "< 1\u00a0min", label: "temps de r\u00e9ponse" },
              { value: "+20 \u00e0 +40\u00a0%", label: "revenus optimis\u00e9s" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center">
                <div className="text-2xl font-extrabold text-petrol-500 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                quote:
                  "Je ne pensais pas que mon appartement pouvait g\u00e9n\u00e9rer autant. Nicolas a tout optimis\u00e9.",
                author: "Sarah",
                city: "Paris 11",
              },
              {
                quote:
                  "Un compl\u00e9ment de revenu sans aucune contrainte. Nicolas s\u2019occupe de tout.",
                author: "Julien",
                city: "Paris 3",
              },
              {
                quote:
                  "Depuis que je travaille avec Nicolas, tout est plus fluide et mes revenus ont augment\u00e9.",
                author: "Marc",
                city: "Paris 9",
              },
              {
                quote:
                  "Gestion compl\u00e8te, transparente et efficace. Je recommande Nicolas sans h\u00e9siter.",
                author: "Camille",
                city: "Paris 15",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="text-gold-400 text-xl tracking-widest">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <p className="text-sm text-gray-400 border-t border-gray-100 pt-4">
                  &mdash;&nbsp;{t.author}{t.city ? `, ${t.city}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GUEST REVIEWS ===================== */}
      <section className="section-padding-lg bg-cream">
        <div className="container-main">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Avis voyageurs</span>
            <h2 className="section-title">
              Une exp&eacute;rience 5&nbsp;&#9733; pour vos voyageurs
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Des voyageurs satisfaits qui laissent des avis positifs,
              am&eacute;liorent votre classement et augmentent vos
              r&eacute;servations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                quote:
                  "Appartement tr\u00e8s propre, chaleureux et tr\u00e8s confortable. Nous y avons pass\u00e9 un super s\u00e9jour en famille.",
                focus: "Propret\u00e9 & confort",
                author: "Laure",
                city: "Tournefeuille",
              },
              {
                quote:
                  "H\u00f4te tr\u00e8s aimable, a r\u00e9pondu rapidement \u00e0 chaque message. L\u2019appartement \u00e9tait exactement comme sur les photos.",
                focus: "Communication",
                author: "Christina",
                city: null,
              },
              {
                quote:
                  "L\u2019h\u00f4te a \u00e9t\u00e9 tr\u00e8s communicatif et a donn\u00e9 des r\u00e9ponses rapides. Je recommande vivement.",
                focus: "R\u00e9activit\u00e9",
                author: "Taylor",
                city: "Houston",
              },
              {
                quote:
                  "Appartement bien situ\u00e9, quartier tr\u00e8s calme et Nicolas toujours \u00e0 l\u2019\u00e9coute. Une belle adresse.",
                focus: "Localisation",
                author: "Samir",
                city: "Boumerd\u00e8s",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="text-gold-400 text-xl tracking-widest">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                {/* Focus tag */}
                <span className="self-start text-xs font-semibold uppercase tracking-wider text-gold-500 bg-gold-50 px-3 py-1 rounded-full">
                  {t.focus}
                </span>
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <p className="text-sm text-gray-400 border-t border-gray-100 pt-4">
                  &mdash;&nbsp;{t.author}{t.city ? `, ${t.city}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA + FORM ===================== */}
      <section className="relative bg-petrol-500 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,_rgba(200,169,110,0.1),_transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

        <div className="container-main relative section-padding-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Copy */}
            <div className="text-white">
              <span className="section-label !text-gold-400/80">
                Passez &agrave; l&rsquo;action
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Estimez le potentiel
                <br className="hidden sm:block" />{" "}
                <span className="text-gold-400">de votre bien.</span>
              </h2>
              <p className="text-petrol-100/80 text-lg leading-relaxed mb-10 font-light max-w-lg">
                Recevez une estimation personnalis&eacute;e de vos revenus sous
                24h. Gratuit, sans engagement.
              </p>

              {/* Trust points */}
              <div className="space-y-4 mb-10">
                {[
                  "Analyse du march\u00e9 local",
                  "Estimation selon la saisonnalit\u00e9",
                  "Recommandations concr\u00e8tes",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                    <span className="text-petrol-100/80">{point}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp alternative */}
              <div className="p-6 bg-white/[0.05] border border-white/[0.08] rounded-xl backdrop-blur-sm">
                <p className="text-sm text-petrol-100/70 mb-4">
                  Besoin d&rsquo;une r&eacute;ponse rapide&nbsp;?
                </p>
                <a
                  href="https://wa.me/33781197596?text=Bonjour%20Nicolas%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20gestion%20de%20mon%20bien%20et%20son%20potentiel%20de%20revenus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp !py-3 w-full !rounded-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Parler &agrave; un expert sur WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/10">
              <h3 className="text-xl font-bold text-petrol-500 mb-2">
                Recevez votre estimation personnalis&eacute;e
              </h3>
              <p className="text-sm text-gray-400 mb-8">
                Remplissez le formulaire, nous vous recontactons sous 24h.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
