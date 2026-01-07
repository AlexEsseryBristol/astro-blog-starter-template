// src/data/previous-sponsors.ts
/**
 * Folder-driven sponsor logo list for the homepage "Previous Sponsors" section.
 * This mirrors the original behaviour: take all logos in /src/assets/2025/sponsors,
 * merge with metadata in /src/content/sponsors/2025sponsors.json (optional URLs/names),
 * and expose a stable, render-ready array.
 */
import sponsorsMeta from "../content/sponsors/2025sponsors.json";
import { buildSponsorItems, type SponsorMetaMap } from "../lib/sponsor-items";

// Vite requires a static glob string.
const sponsorModules = import.meta.glob("../assets/2025/sponsors/*.{avif,webp,png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

const meta = sponsorsMeta as SponsorMetaMap;

export const previousSponsors = buildSponsorItems(sponsorModules, meta);
