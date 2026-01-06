import csv
import re
from pathlib import Path
from html import escape as html_escape

CSV_PATH = Path("sponsors.csv")
PROJECT_ROOT = Path(".")

LOGO_DIR = PROJECT_ROOT / "src" / "assets" / "2024" / "sponsors"
OUT_DIR = PROJECT_ROOT / "src" / "pages" / "2024"
LAYOUT_IMPORT = "../../components/SponsorPageLayout.astro"
BACK_HREF = "/archive-sponsors-2024"

LOGO_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif"}

SLUG_ALIASES = {
    "national-quantum-computing-center": "nqcc",
}

def slugify(s: str) -> str:
    s = s.strip().lower()
    s = s.replace("&", "and")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return re.sub(r"-{2,}", "-", s).strip("-")

def strip_numeric_prefix(stem: str) -> str:
    return re.sub(r"^\d+[-_ ]*", "", stem).strip()

def resolve_alias(slug: str) -> str:
    return SLUG_ALIASES.get(slug, slug)

def astro_attr_escape(s: str) -> str:
    """
    Escapes a string so it is safe inside a double-quoted Astro attribute:
      title="..."
    """
    # html_escape handles &, <, >, "
    # Keep apostrophes as-is; double quotes are the important part here.
    return html_escape(s, quote=True)

def build_logo_index() -> dict[str, str]:
    if not LOGO_DIR.exists():
        raise FileNotFoundError(f"Logo directory not found: {LOGO_DIR.resolve()}")

    index: dict[str, str] = {}
    for p in LOGO_DIR.iterdir():
        if not p.is_file():
            continue
        if p.suffix.lower() not in LOGO_EXTS:
            continue

        base = strip_numeric_prefix(p.stem)
        slug = slugify(base)

        if slug in index:
            raise RuntimeError(
                f"Duplicate logo slug '{slug}' for files:\n"
                f"  - {index[slug]}\n"
                f"  - {p.name}"
            )
        index[slug] = p.name

    if not index:
        raise RuntimeError(f"No logo files found in {LOGO_DIR.resolve()}")
    return index

def read_sponsors_from_csv() -> list[dict]:
    if not CSV_PATH.exists():
        raise FileNotFoundError(f"CSV not found: {CSV_PATH.resolve()}")

    sponsors: list[dict] = []
    with CSV_PATH.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        required = {"name", "description", "website", "url"}
        if not reader.fieldnames:
            raise ValueError("CSV has no header row.")
        missing = required - set(h.strip() for h in reader.fieldnames)
        if missing:
            raise ValueError(f"CSV missing columns: {sorted(missing)}")

        for row in reader:
            name = (row.get("name") or "").strip()
            if not name:
                continue

            raw_slug = slugify(name)
            slug = resolve_alias(raw_slug)

            sponsors.append(
                {
                    "name": name,
                    "raw_slug": raw_slug,
                    "slug": slug,
                    "description": (row.get("description") or "").strip(),
                    "website": (row.get("website") or "").strip(),
                }
            )

    if not sponsors:
        raise ValueError("No sponsors found in CSV.")
    return sponsors

def main():
    logo_index = build_logo_index()
    sponsors = read_sponsors_from_csv()

    slugs = [s["slug"] for s in sponsors]
    if len(set(slugs)) != len(slugs):
        dupes = sorted({x for x in slugs if slugs.count(x) > 1})
        raise ValueError(f"Duplicate page slugs after aliasing: {dupes}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for i, s in enumerate(sponsors):
        slug = s["slug"]

        if slug not in logo_index:
            available = ", ".join(sorted(logo_index.keys()))
            raise FileNotFoundError(
                f"No logo found for sponsor '{s['name']}' (slug '{slug}', raw '{s['raw_slug']}').\n"
                f"Available logo slugs: {available}"
            )

        logo_file = logo_index[slug]

        prev_href = f"/2024/{slugs[i-1]}" if i > 0 else None
        next_href = f"/2024/{slugs[i+1]}" if i < len(slugs) - 1 else None

        # Emit *string literals* or null (NOT weird {{"..."}} constructs)
        title_attr = astro_attr_escape(s["name"])
        desc_attr = astro_attr_escape(s["description"])
        website_attr = astro_attr_escape(s["website"])

        prev_prop = f'"{prev_href}"' if prev_href else "null"
        next_prop = f'"{next_href}"' if next_href else "null"

        # If website is blank, omit prop (so layout can render <h2>)
        website_line = f'  website="{website_attr}"\n' if s["website"].strip() else ""

        page = (
f"""---
import SponsorPageLayout from "{LAYOUT_IMPORT}";
import SponsorLogo from "../../assets/2024/sponsors/{logo_file}";
---

<SponsorPageLayout
  title="{title_attr}"
  description="{desc_attr}"
{website_line}  logo={{SponsorLogo}}
  backHref="{BACK_HREF}"
  prevHref={prev_prop}
  nextHref={next_prop}
/>
"""
        )

        out_path = OUT_DIR / f"{slug}.astro"
        out_path.write_text(page, encoding="utf-8")
        print(f"✓ wrote {out_path}")

    print(f"\nDone. Generated {len(sponsors)} pages in {OUT_DIR.resolve()}")

if __name__ == "__main__":
    main()
