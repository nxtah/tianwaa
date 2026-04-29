import type { Content, ContentSection } from "@/lib/content-types";

async function parseJsonResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function readContent(): Promise<Content> {
  const response = await fetch("/api/content", {
    method: "GET",
    cache: "no-store",
  });

  return parseJsonResponse<Content>(response);
}

export async function getSection<K extends ContentSection>(
  section: K
): Promise<Content[K]> {
  const response = await fetch(`/api/content/${section}`, {
    method: "GET",
    cache: "no-store",
  });

  return parseJsonResponse<Content[K]>(response);
}

export async function updateSection<K extends ContentSection>(
  section: K,
  data: Content[K]
): Promise<void> {
  const response = await fetch(`/api/content/${section}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
