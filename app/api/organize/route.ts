import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email, why, social } = await request.json();

    if (!email || !why || !social) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL) {
      return NextResponse.json({ error: "Not configured" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.NOTIFICATION_EMAIL as string,
      subject: `Organizer request: ${email}`,
      html: `<p><strong>Organizer request</strong> from no-russia-at-olympics.vercel.app</p><p><strong>Email:</strong> ${email}</p><p><strong>Social profile:</strong> <a href="${social}">${social}</a></p><p><strong>Why they want to organize:</strong></p><p>${why.replace(/\n/g, "<br>")}</p><p><small>Time: ${new Date().toISOString()}</small></p>`,
    });

    return NextResponse.json({ message: "Submitted" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
