/**
 * Build a list of {id, text} entries from Portable Text h2 blocks.
 * Mirrors the slugify rule used inside PortableText.astro so the TOC
 * anchors line up with the rendered <h2 id="…"> ids.
 */
export interface TocEntry {
  id: string;
  text: string;
}

interface Span {
  text?: string;
}
interface Block {
  _type?: string;
  style?: string;
  children?: Span[];
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function buildToc(
  blocks: unknown,
  level: "h2" | "h3" = "h2",
): TocEntry[] {
  if (!Array.isArray(blocks)) return [];
  return (blocks as Block[])
    .filter((b) => b?._type === "block" && b.style === level)
    .map((b) => {
      const text = (b.children || [])
        .map((c) => c.text || "")
        .join("")
        .trim();
      return { id: slugify(text), text };
    })
    .filter((e) => e.id && e.text);
}
