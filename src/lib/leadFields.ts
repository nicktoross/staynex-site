// Required fields of the estimate form. Shared by both forms and /api/contact
// so the browser and the server always apply exactly the same rule.
export const REQUIRED_LEAD_FIELDS = [
  { name: "firstName", label: "Prénom" },
  { name: "lastName", label: "Nom" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Téléphone" },
  { name: "address", label: "Adresse du bien" },
  { name: "message", label: "Message" },
] as const;

// Labels of the required fields that are missing or contain only spaces.
export function missingLeadFields(data: unknown): string[] {
  const values = (data ?? {}) as Record<string, unknown>;
  return REQUIRED_LEAD_FIELDS.filter(({ name }) => {
    const value = values[name];
    return typeof value !== "string" || value.trim() === "";
  }).map(({ label }) => label);
}

export function missingLeadFieldsMessage(labels: string[]): string {
  const prefix =
    labels.length > 1
      ? "Champs obligatoires manquants"
      : "Champ obligatoire manquant";
  return `${prefix}\u00a0: ${labels.join(", ")}.`;
}
