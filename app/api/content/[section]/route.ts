import { NextRequest, NextResponse } from "next/server";
import { readContent, updateSection } from "@/lib/db";
import type { ContentSection } from "@/lib/content-types";

const contentSections = new Set<ContentSection>([
  "hero",
  "programs",
  "why_us",
  "testimonials",
  "blog",
  "gallery",
  "settings",
]);

function isContentSection(section: string): section is ContentSection {
  return contentSections.has(section as ContentSection);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  try {
    const { section } = await params;
    const content = await readContent();
    if (!isContentSection(section)) {
      return NextResponse.json(
        { error: "Section not found" },
        { status: 404 }
      );
    }
    const sectionContent = content[section];

    if (!sectionContent) {
      return NextResponse.json(
        { error: "Section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(sectionContent);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read content" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ section: string }> }
) {
  try {
    const { section } = await params;
    const data = await request.json();
    const content = await readContent();
    if (!isContentSection(section)) {
      return NextResponse.json(
        { error: "Section not found" },
        { status: 404 }
      );
    }

    if (!content[section]) {
      return NextResponse.json(
        { error: "Section not found" },
        { status: 404 }
      );
    }

    await updateSection(section, data);

    return NextResponse.json({
      success: true,
      message: "Content updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}
