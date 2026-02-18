import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const ACTIONS_FILE = path.join("/tmp", "actions.json");

interface ActionsData {
  actionTakers: number;
  totalActions: number;
  pageViews: number;
  uniqueVisitors: number;
  byAction: Record<string, number>;
}

async function readData(): Promise<ActionsData> {
  try {
    const data = await fs.readFile(ACTIONS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return {
      actionTakers: 0,
      totalActions: 0,
      pageViews: 0,
      uniqueVisitors: 0,
      byAction: {},
    };
  }
}

async function writeData(data: ActionsData) {
  await fs.writeFile(ACTIONS_FILE, JSON.stringify(data));
}

export async function GET() {
  const data = await readData();
  return NextResponse.json({
    actionTakers: data.actionTakers,
    totalActions: data.totalActions,
    pageViews: data.pageViews || 0,
    uniqueVisitors: data.uniqueVisitors || 0,
    twitterClicks: data.byAction["platform_twitter"] || 0,
    instagramClicks: data.byAction["platform_instagram"] || 0,
    tiktokClicks: data.byAction["platform_tiktok"] || 0,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, isFirstAction, increment } = body;

    if (!action || typeof action !== "string") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const data = await readData();

    if (action === "page_view") {
      data.pageViews = (data.pageViews || 0) + 1;
    } else if (action === "unique_visit") {
      data.uniqueVisitors = (data.uniqueVisitors || 0) + 1;
    } else if (increment) {
      // Raw increment — no deduplication (used for platform clicks)
      data.byAction[action] = (data.byAction[action] || 0) + 1;
    } else {
      // Deduplicated action
      if (isFirstAction) data.actionTakers += 1;
      data.totalActions += 1;
      data.byAction[action] = (data.byAction[action] || 0) + 1;
    }

    await writeData(data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
