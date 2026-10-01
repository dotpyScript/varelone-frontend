"use client";

import manifest from "../content/image-manifest.json";

type LoaderArgs = { src: string; width: number; quality?: number };
type Optimized = { base: string; widths: number[] };

const optimized: Record<string, Optimized> = manifest;

export default function imageLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 70));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    return url.toString();
  }
  // Photos in /public/images are pre-sized to WebP by `pnpm images`; serve the
  // smallest variant that covers the requested width.
  const entry = optimized[src];
  if (entry) {
    const w = entry.widths.find((x) => x >= width) ?? entry.widths[entry.widths.length - 1];
    return `${entry.base}-${w}.webp`;
  }
  // Other local assets in /public are served as-is.
  return src;
}
