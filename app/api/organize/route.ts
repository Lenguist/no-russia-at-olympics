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
      from: "No Russia at Paralympics <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL,
      subject: `Organizer request: ${email}`,
      text: `Someone wants to help organize the campaign.\n\nEmail: ${email}\nSocial profile: ${social}\n\nWhy they want to organize:\n${why}\n\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json({ message: "Submitted" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
