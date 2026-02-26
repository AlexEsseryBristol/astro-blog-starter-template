import type { ImageMetadata } from "astro";

export type LogoMetaMap = Record<
  string,
  {
    name: string;
    url?: string;
  }
>;

export function buildLogoMap(
  modules: Record<string, ImageMetadata>,
  meta: LogoMetaMap
) {
  const map: Record<
    string,
    {
      src: string; // <- change from ImageMetadata to string
      alt: string;
      url?: string;
    }
  > = {};

  for (const path in modules) {
    const filename = path.split("/").pop()!;
    const key = filename.replace(/\.[^.]+$/, "").toLowerCase();

    const metadata = meta[key];
    if (!metadata) continue;

    const mod = modules[path];
    // Astro ImageMetadata has a .src property if using astro:assets
    map[key] = {
      src: typeof mod === "string" ? mod : mod.src, // <- ensure it's a string
      alt: `${metadata.name} Logo`,
      url: metadata.url,
    };
  }

  return map;
}