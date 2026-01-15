// src/lib/sponsor-items.ts
export type AssetModule = { src: string; width: number; height: number; format?: string };

export type SponsorGridItem = {
  key: string;
  src: AssetModule;
  name: string;
  url?: string;
};

export type SponsorMeta = { name?: string; href?: string };
export type SponsorMetaMap = Record<string, SponsorMeta>;

export type AttendingMeta = { name: string; url?: string };
export type AttendingMetaMap = Record<string, AttendingMeta>;

function basenameNoExt(p: string) {
  const file = p.split("/").pop() ?? "";
  return file.replace(/\.[^.]+$/, "");
}

function humanizeFromFilename(stem: string) {
  const noPrefix = stem.replace(/^\d+[-_ ]*/, "");
  return noPrefix.replace(/[-_]+/g, " ").trim();
}

function normalizeHref(href?: string) {
  if (!href) return undefined;
  const v = href.trim();
  if (!v) return undefined;
  return v;
}

export function buildSponsorItems(
  modules: Record<string, unknown>,
  metaMap: SponsorMetaMap
): SponsorGridItem[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => {
      const stem = basenameNoExt(path);
      const fallbackName = humanizeFromFilename(stem);
      const m = metaMap[stem] ?? {};
      const name = (m.name?.trim() || fallbackName).trim();
      const url = normalizeHref(m.href);

      return {
        key: stem,
        src: mod as AssetModule,
        name,
        url,
      };
    });
}

export function buildAttendingItems(
  modules: Record<string, unknown>,
  metaMap: AttendingMetaMap
): SponsorGridItem[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => {
      const slug = basenameNoExt(path);
      const m = metaMap[slug] ?? { name: humanizeFromFilename(slug) };

      return {
        key: slug,
        src: mod as AssetModule,
        name: m.name,
        url: normalizeHref(m.url),
      };
    });
}
