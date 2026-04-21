"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Simulate sending — replace with your API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Demande envoy&eacute;e
        </h3>
        <p className="text-green-700">
          Merci. Notre &eacute;quipe vous recontactera sous 24h avec votre
          estimation personnalis&eacute;e.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Pr&eacute;nom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
            placeholder="Jean"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
            placeholder="Dupont"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
            placeholder="jean@exemple.fr"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            T&eacute;l&eacute;phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Adresse du bien
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
          placeholder="Arrondissement ou adresse compl\u00e8te"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="D\u00e9crivez votre bien : type, nombre de pi\u00e8ces, situation actuelle (lou\u00e9 ou non), vos objectifs..."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Recevoir mon estimation gratuite
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
