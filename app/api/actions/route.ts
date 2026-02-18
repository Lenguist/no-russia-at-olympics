import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const ACTIONS_FILE = path.join("/tmp", "actions.json");

interface ActionsData {
  actionTakers: number;
  totalActions: number;
  byAction: Record<string, number>;
}

async function readData(): Promise<ActionsData> {
  try {
    const data = await fs.readFile(ACTIONS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return { actionTakers: 0, totalActions: 0, byAction: {} };
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
  });
}

export async function POST(request: Request) {
  try {
    const { action, isFirstAction } = await request.json();

    if (!action || typeof action !== "string") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const data = await readData();
    if (isFirstAction) data.actionTakers += 1;
    data.totalActions += 1;
    data.byAction[action] = (data.byAction[action] || 0) + 1;
    await writeData(data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
