import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const token = import.meta.env.SANITY_API_READ_TOKEN;

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  useCdn: !token,
  apiVersion: "2025-05-01",
  token,
  perspective: "published",
});

const builder = imageUrlBuilder(client);

/**
 * Build a Sanity image URL. Always pass through the builder so hotspot/crop
 * are respected. Returns null when no source is provided so the caller can
 * collapse the slot (no broken-image rendering).
 */
export function urlFor(source: unknown) {
  if (!source) return null;
  return builder
    .image(source as any)
    .auto("format")
    .fit("max");
}
