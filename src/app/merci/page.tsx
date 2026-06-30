import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Demande envoyée",
  description: "Votre demande a bien été envoyée. Nicolas vous recontactera sous 24h.",
};

export default function MerciPage() {
  return (
    <section className="bg-cream min-h-screen flex items-center">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-20 h-20 bg-petrol-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-gold-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-petrol-500 mb-4">
            Demande envoy&eacute;e
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Votre demande a bien &eacute;t&eacute; envoy&eacute;e. Nicolas vous
            recontactera sous 24h avec votre estimation personnalis&eacute;e.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-gold"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour &agrave; l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
