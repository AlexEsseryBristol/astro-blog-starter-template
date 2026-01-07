import { getImage } from "astro:assets";

type GalleryAssetModule = {
  src: string;
  width: number;
  height: number;
  format?: string;
};

export type CarouselImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

/**
 * Convert a folder-driven `import.meta.glob(..., { eager: true, import: "default" })`
 * result into `astro-carousel` compatible images.
 *
 * The key is to run each module through `getImage()` so the rendered URLs are
 * stable and never end up as `/@fs/...` paths.
 */
export async function buildCarouselImages(
  modules: Record<string, unknown>,
  opts: { maxWidth?: number; format?: "webp" | "png" | "jpeg"; quality?: number } = {}
): Promise<CarouselImage[]> {
  const { maxWidth = 1600, format = "webp", quality = 80 } = opts;

  const entries = Object.entries(modules).sort(([a], [b]) => a.localeCompare(b));

  return Promise.all(
    entries.map(async ([path, asset]) => {
      const mod = asset as GalleryAssetModule;
      const filename = path.split("/").pop() ?? "";

      const alt = filename
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]+/g, " ")
        .trim();

      const processed = await getImage({
        // IMPORTANT: pass the imported module, not a string
        src: asset as any,
        width: Math.min(mod.width ?? maxWidth, maxWidth),
        format,
        quality,
      });

      return {
        src: processed.src,
        alt,
        width: mod.width,
        height: mod.height,
      } satisfies CarouselImage;
    })
  );
}
