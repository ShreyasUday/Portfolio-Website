import { NextResponse } from "next/server";
import { Resend } from "resend";
import { cleanText, isValidEmail } from "@/lib/validators";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string; // honeypot
};

function getEnv(name: string) {
  const v = process.env[name];
  return v && v.trim().length > 0 ? v : undefined;
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields.
  if (payload.company && payload.company.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = cleanText(payload.name ?? "", 80);
  const email = cleanText(payload.email ?? "", 200);
  const message = cleanText(payload.message ?? "", 2000);

  if (name.length < 2) {
    return NextResponse.json({ error: "Name is too short." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email is invalid." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message is too short." },
      { status: 400 },
    );
  }

  const resendKey = getEnv("RESEND_API_KEY");
  const toEmail = getEnv("CONTACT_TO_EMAIL") ?? "udayshreyas123@gmail.com";
  const fromEmail = getEnv("CONTACT_FROM_EMAIL") ?? "Portfolio <onboarding@resend.dev>";

  if (!resendKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      {
        error: "The email service is currently unavailable. Please email me directly using the link below.",
      },
      { status: 501 },
    );
  }

  const resend = new Resend(resendKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "The email service is currently experiencing issues. Please email me directly using the link below." },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("Resend Exception:", err);
    return NextResponse.json(
      { error: "The email service is currently experiencing issues. Please email me directly using the link below." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

