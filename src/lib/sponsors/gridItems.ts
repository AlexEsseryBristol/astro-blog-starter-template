export type AssetModule = { src: string; width: number; height: number; format?: string };

export function basenameNoExt(p: string) {
  const file = p.split("/").pop() ?? "";
  return file.replace(/\.[^.]+$/, "");
}

export function humanizeFromFilename(stem: string) {
  const noPrefix = stem.replace(/^\d+[-_ ]*/, "");
  return noPrefix.replace(/[-_]+/g, " ").trim();
}

export function normalizeInternalHref(href?: string) {
  if (!href) return undefined;
  const v = href.trim();
  if (!v) return undefined;
  return v.replace(/^https?:\/\/www\.careers-in-quantum\.com/i, "");
}

export function buildSponsorGridItems<TMeta extends { name?: string; href?: string }>(
  modules: Record<string, unknown>,
  metaMap: Record<string, TMeta>,
) {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => {
      const stem = basenameNoExt(path);
      const fallbackName = humanizeFromFilename(stem);
      const m = metaMap[stem] ?? ({} as TMeta);

      const name = (m.name?.trim() || fallbackName).trim();
      const url = normalizeInternalHref(m.href);

      return {
        key: stem,
        src: mod as AssetModule,
        name,
        url,
      };
    });
}

export function buildAttendingGridItems<TMeta extends { name: string; url?: string }>(
  modules: Record<string, unknown>,
  metaMap: Record<string, TMeta>,
) {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => {
      const stem = basenameNoExt(path);
      const m = metaMap[stem] ?? ({ name: humanizeFromFilename(stem) } as TMeta);

      return {
        key: stem,
        src: mod as AssetModule,
        name: m.name,
        url: m.url,
      };
    });
}
