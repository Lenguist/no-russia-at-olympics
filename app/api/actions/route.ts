import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const KEY = "stats";

export async function GET() {
  const [actionTakers, totalActions, pageViews, uniqueVisitors, twitterClicks, instagramClicks, tiktokClicks] =
    await Promise.all([
      redis.hget<number>(KEY, "actionTakers"),
      redis.hget<number>(KEY, "totalActions"),
      redis.hget<number>(KEY, "pageViews"),
      redis.hget<number>(KEY, "uniqueVisitors"),
      redis.hget<number>(KEY, "byAction:platform_twitter"),
      redis.hget<number>(KEY, "byAction:platform_instagram"),
      redis.hget<number>(KEY, "byAction:platform_tiktok"),
    ]);

  return NextResponse.json({
    actionTakers: actionTakers || 0,
    totalActions: totalActions || 0,
    pageViews: pageViews || 0,
    uniqueVisitors: uniqueVisitors || 0,
    twitterClicks: twitterClicks || 0,
    instagramClicks: instagramClicks || 0,
    tiktokClicks: tiktokClicks || 0,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, isFirstAction, increment } = body;

    if (!action || typeof action !== "string") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    if (action === "page_view") {
      await redis.hincrby(KEY, "pageViews", 1);
    } else if (action === "unique_visit") {
      await redis.hincrby(KEY, "uniqueVisitors", 1);
    } else if (increment) {
      await redis.hincrby(KEY, `byAction:${action}`, 1);
    } else {
      const pipeline = redis.pipeline();
      if (isFirstAction) pipeline.hincrby(KEY, "actionTakers", 1);
      pipeline.hincrby(KEY, "totalActions", 1);
      pipeline.hincrby(KEY, `byAction:${action}`, 1);
      await pipeline.exec();
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
