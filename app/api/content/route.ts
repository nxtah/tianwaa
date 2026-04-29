import { NextResponse } from "next/server";
import { readContent } from "@/lib/db";

export async function GET() {
  try {
    const content = await readContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json(
      { error: "Failed to read content" },
      { status: 500 }
    );
  }
}
