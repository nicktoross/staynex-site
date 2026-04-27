import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, address, message } =
      await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const from = "Staynex <nicolas@staynex.fr>";

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #f0ede8;color:#6b7280;font-size:14px;white-space:nowrap;vertical-align:top;width:140px;">${label}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #f0ede8;font-weight:600;font-size:14px;color:#111827;">${value}</td>
      </tr>`;

    const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f8f6f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f6f3;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0F3B44;padding:28px 32px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#C8A96E;border-radius:8px;width:36px;height:36px;text-align:center;vertical-align:middle;">
                  <span style="color:#0F3B44;font-weight:800;font-size:18px;line-height:36px;">S</span>
                </td>
                <td style="padding-left:12px;">
                  <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">Staynex</span>
                </td>
              </tr>
            </table>
            <p style="color:#a8c5cc;font-size:13px;margin:12px 0 0;">Nouvelle demande d&rsquo;estimation</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 6px;font-size:20px;color:#0F3B44;">
              ${escapeHtml(firstName)} ${escapeHtml(lastName)}
            </h2>
            <p style="margin:0 0 24px;color:#6b7280;font-size:14px;">
              Soumis via le formulaire de contact &mdash; staynex.fr
            </p>

            <!-- Fields table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0ede8;border-radius:10px;overflow:hidden;">
              ${row("Prénom", escapeHtml(firstName))}
              ${row("Nom", escapeHtml(lastName))}
              ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#0F3B44;">${escapeHtml(email)}</a>`)}
              ${row("Téléphone", escapeHtml(phone || "—"))}
              ${row("Adresse du bien", escapeHtml(address || "—"))}
            </table>

            <!-- Message -->
            <p style="margin:24px 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;font-weight:600;">Message</p>
            <div style="background:#f8f6f3;border-radius:10px;padding:18px 20px;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>

            <!-- Reply CTA -->
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#C8A96E;color:#0F3B44;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;text-decoration:none;">
                R&eacute;pondre &agrave; ${escapeHtml(firstName)}
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f6f3;padding:18px 32px;text-align:center;border-top:1px solid #eee;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              Staynex &mdash; Conciergerie Airbnb Premium &agrave; Paris &mdash;
              <a href="https://staynex.fr" style="color:#0F3B44;">staynex.fr</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  return NextResponse.json(
    { error: "RESEND_API_KEY manquante." },
    { status: 500 }
  );
}

const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: ["ntorossian@outlook.fr", "nicolas@staynex.fr"],
      replyTo: email,
      subject: `Nouveau lead Staynex — ${firstName} ${lastName}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Échec de l'envoi. Veuillez réessayer." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Une erreur inattendue est survenue." },
      { status: 500 }
    );
  }
}
