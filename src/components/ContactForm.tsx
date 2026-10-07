"use client";

import { useRef, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { missingLeadFields, missingLeadFieldsMessage } from "@/lib/leadFields";

export default function ContactForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Guards against a double submit; released only if the request fails.
  const submitting = useRef(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;

    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: (fd.get("firstName") ?? "") as string,
      lastName:  (fd.get("lastName")  ?? "") as string,
      email:     (fd.get("email")     ?? "") as string,
      phone:     (fd.get("phone")     ?? "") as string,
      address:   (fd.get("address")   ?? "") as string,
      message:   (fd.get("message")   ?? "") as string,
    };

    const missing = missingLeadFields(data);
    if (missing.length > 0) {
      setError(missingLeadFieldsMessage(missing));
      return;
    }

    submitting.current = true;
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

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

      // Success confirmed: the button stays disabled while /merci loads.
      router.push("/merci");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Veuillez r\u00e9essayer."
      );
      submitting.current = false;
      setSending(false);
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="space-y-6">
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
            T&eacute;l&eacute;phone *
          </label>
          <input
            type="tel"
            id="hp-phone"
            name="phone"
            required
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
          Adresse du bien *
        </label>
        <input
          type="text"
          id="hp-address"
          name="address"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-petrol-500 focus:border-transparent outline-none transition-all"
          placeholder="Arrondissement ou adresse complète"
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
          placeholder="Décrivez votre bien : type, nombre de pièces, situation actuelle (loué ou non), vos objectifs..."
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
