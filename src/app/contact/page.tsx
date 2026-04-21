import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Estimez le potentiel de votre bien avec Staynex. Recevez une estimation gratuite de vos revenus locatifs sous 24h. Sans engagement.",
};

const quickFAQ = [
  {
    question: "Combien de temps pour mettre mon bien en location\u00a0?",
    answer:
      "En 24 \u00e0 48h, votre bien est pr\u00eat \u00e0 \u00eatre lou\u00e9. Nous nous occupons du shooting photo, de la r\u00e9daction de l\u2019annonce, de la mise en ligne et de la configuration tarifaire. D\u00e8s le lendemain, votre bien peut commencer \u00e0 recevoir ses premi\u00e8res r\u00e9servations.",
  },
  {
    question: "Est-ce que je garde le contr\u00f4le sur mon bien\u00a0?",
    answer:
      "Oui, totalement. Vous restez d\u00e9cisionnaire \u00e0 chaque \u00e9tape\u00a0: prix minimum, disponibilit\u00e9s, r\u00e8gles d\u2019accueil. Vous avez acc\u00e8s \u00e0 votre annonce et \u00e0 un suivi mensuel clair avec vos revenus et performances. Nous sommes votre partenaire, pas votre rempla\u00e7ant.",
  },
  {
    question: "Mon bien est-il vraiment rentable en location courte dur\u00e9e\u00a0?",
    answer:
      "Dans la grande majorit\u00e9 des cas, oui. Tout d\u00e9pend de l\u2019emplacement, du type de bien et de la strat\u00e9gie appliqu\u00e9e. Notre r\u00f4le est justement d\u2019optimiser chaque levier pour maximiser vos revenus et rendre votre bien le plus performant possible.",
  },
  {
    question: "Y a-t-il un risque pour mon logement\u00a0?",
    answer:
      "Non. Chaque r\u00e9servation est v\u00e9rifi\u00e9e et votre logement est contr\u00f4l\u00e9 apr\u00e8s chaque s\u00e9jour par nos \u00e9quipes. Les s\u00e9jours sont courts, encadr\u00e9s et suivis en continu, ce qui rend les risques extr\u00eamement faibles.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-petrol-500 text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Estimez le potentiel{" "}
              <span className="text-gold-400">de votre bien</span>
            </h1>
            <p className="text-lg text-petrol-100 leading-relaxed max-w-2xl">
              Recevez une estimation gratuite de vos revenus locatifs en 24h.
              Sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-petrol-500 mb-8">
                Recevez votre estimation personnalis&eacute;e
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact info */}
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="text-lg font-bold text-petrol-500 mb-6">
                  Nos coordonn&eacute;es
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-petrol-500 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <a
                        href="mailto:nicolas@staynex.fr"
                        className="text-petrol-500 font-medium hover:underline"
                      >
                        nicolas@staynex.fr
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-petrol-500 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {"T\u00e9l\u00e9phone"}
                      </div>
                      <a
                        href="tel:+33781197596"
                        className="text-petrol-500 font-medium hover:underline"
                      >
                        +33 7 81 19 75 96
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-petrol-500 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Adresse</div>
                      <span className="text-petrol-500 font-medium">
                        Paris, France
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-petrol-500 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {"Disponibilit\u00e9"}
                      </div>
                      <span className="text-petrol-500 font-medium">
                        {"Disponibilit\u00e9 7j/7 : 9h \u2013 23h"}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-petrol-500 rounded-2xl p-8 text-white text-center">
                <MessageCircle className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">
                  Besoin d&rsquo;une r&eacute;ponse imm&eacute;diate&nbsp;?
                </h3>
                <p className="text-petrol-100 text-sm mb-6">
                  &Eacute;changez directement avec moi sur WhatsApp.
                </p>
                <a
                  href="https://wa.me/33781197596?text=Bonjour%20Nicolas%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20gestion%20de%20mon%20bien%20et%20son%20potentiel%20de%20revenus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-petrol-500 mb-4">
              Questions fr&eacute;quentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={quickFAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
