import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscribers.json");

async function readSubscribers(): Promise<{ email: string; date: string }[]> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubscribers(subs: { email: string; date: string }[]) {
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2));
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const subscribers = await readSubscribers();

    if (subscribers.some((s) => s.email === email)) {
      return NextResponse.json({ message: "Already subscribed" });
    }

    subscribers.push({ email, date: new Date().toISOString() });
    await writeSubscribers(subscribers);

    return NextResponse.json({ message: "Subscribed" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
