"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Capture FormData immediately — before setState or any async op —
    // to prevent React's event pooling from nullifying e.currentTarget.
    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: (fd.get("firstName") ?? "") as string,
      lastName:  (fd.get("lastName")  ?? "") as string,
      email:     (fd.get("email")     ?? "") as string,
      phone:     (fd.get("phone")     ?? "") as string,
      address:   (fd.get("address")   ?? "") as string,
      message:   (fd.get("message")   ?? "") as string,
    };

    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Parse JSON carefully — server may return HTML on unexpected errors
      let body: { error?: string } = {};
      try {
        body = await res.json();
      } catch {
        // non-JSON response — handled by res.ok check below
      }

      if (!res.ok) {
        throw new Error(
          body.error ?? `Erreur ${res.status} \u2014 veuillez r\u00e9essayer.`
        );
      }

      // Only reaches here if the API returned 2xx
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Veuillez r\u00e9essayer."
      );
    } finally {
      setSending(false);
    }
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
          Merci. Nicolas vous recontactera sous 24h avec votre estimation
          personnalis&eacute;e.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="hp-firstName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Pr&eacute;nom *
          </label>
          <input
            type="text"
            id="hp-firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
            placeholder="Jean"
          />
        </div>
        <div>
          <label
            htmlFor="hp-lastName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nom *
          </label>
          <input
            type="text"
            id="hp-lastName"
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
            htmlFor="hp-email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="hp-email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
            placeholder="jean@exemple.fr"
          />
        </div>
        <div>
          <label
            htmlFor="hp-phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            T&eacute;l&eacute;phone
          </label>
          <input
            type="tel"
            id="hp-phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="hp-address"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Adresse du bien
        </label>
        <input
          type="text"
          id="hp-address"
          name="address"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
          placeholder="Arrondissement ou adresse compl\u00e8te"
        />
      </div>

      <div>
        <label
          htmlFor="hp-message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="hp-message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="D\u00e9crivez votre bien : type, nombre de pi\u00e8ces, situation actuelle (lou\u00e9 ou non), vos objectifs..."
        />
      </div>

      {error && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

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
