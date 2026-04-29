"use server";

import fs from "fs";
import path from "path";
import type { Content } from "@/lib/content-types";

const contentPath = path.join(process.cwd(), "data", "content.json");

export async function readContent(): Promise<Content> {
  try {
    const data = fs.readFileSync(contentPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading content:", error);
    throw error;
  }
}

export async function writeContent(content: Content): Promise<void> {
  try {
    fs.writeFileSync(contentPath, JSON.stringify(content, null, 2));
  } catch (error) {
    console.error("Error writing content:", error);
    throw error;
  }
}

export async function getSection<K extends keyof Content>(
  section: K
): Promise<Content[K]> {
  const content = await readContent();
  return content[section];
}

export async function updateSection<K extends keyof Content>(
  section: K,
  data: Content[K]
): Promise<void> {
  const content = await readContent();
  content[section] = data;
  await writeContent(content);
}
