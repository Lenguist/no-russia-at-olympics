import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Not configured" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL;
    const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

    const tasks: Promise<unknown>[] = [];

    // Add to Resend audience/contacts list
    if (AUDIENCE_ID) {
      tasks.push(
        resend.contacts.create({
          email,
          audienceId: AUDIENCE_ID,
          unsubscribed: false,
        })
      );
    }

    // Notify campaign owner
    if (NOTIFICATION_EMAIL) {
      tasks.push(
        resend.emails.send({
          from: "No Russia at Paralympics <onboarding@resend.dev>",
          to: NOTIFICATION_EMAIL,
          subject: `New subscriber: ${email}`,
          text: `New subscriber signed up at no-russia-at-olympics.vercel.app\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
        })
      );
    }

    await Promise.all(tasks);

    return NextResponse.json({ message: "Subscribed" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
