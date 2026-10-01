// Turns source photos dropped into public/images into responsive WebP variants
// plus a tiny blurred placeholder, and records them in the manifest the image
// loader reads. Run after adding or replacing a photo: `pnpm images`.
//
// Incremental: only photos whose originals are present are (re)generated, so
// originals can be deleted afterwards. Existing optimised images are kept, and
// a manifest entry is dropped only when its WebP files have been deleted.
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import sharp from "sharp";

const SRC_DIR = "public/images";
const OUT_DIR = join(SRC_DIR, "optimized");
const MANIFEST = "src/content/image-manifest.json";
const WIDTHS = [640, 960, 1280, 1920];
const QUALITY = 72;

const slug = (file) =>
  file
    .slice(0, -extname(file).length)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

await mkdir(OUT_DIR, { recursive: true });

const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, "utf8")) : {};
const outputs = await readdir(OUT_DIR);
const files = (await readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
let before = 0;
let after = 0;

for (const file of files) {
  const input = sharp(join(SRC_DIR, file)).rotate();
  const { width, height } = await input.metadata();
  const { size } = await stat(join(SRC_DIR, file));
  const name = slug(file);
  const widths = [...new Set([...WIDTHS.filter((w) => w < width), width])];

  // Clear this photo's previous variants so a smaller replacement leaves no strays.
  const stale = outputs.filter((o) => new RegExp(`^${name}-\\d+\\.webp$`).test(o));
  await Promise.all(stale.map((o) => rm(join(OUT_DIR, o))));

  for (const w of widths) {
    const { size: outSize } = await input
      .clone()
      .resize({ width: w })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(join(OUT_DIR, `${name}-${w}.webp`));
    if (w === width) after += outSize;
  }
  before += size;

  const blur = await input.clone().resize({ width: 16 }).webp({ quality: 40 }).toBuffer();
  manifest[`/images/${file}`] = {
    base: `/images/optimized/${name}`,
    width,
    height,
    widths,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };
  console.log(`${file} -> ${name}-{${widths.join(",")}}.webp`);
}

for (const [src, entry] of Object.entries(manifest)) {
  const missing = entry.widths.some((w) => !existsSync(`public${entry.base}-${w}.webp`));
  if (missing) {
    delete manifest[src];
    console.log(`Removed ${src} from the manifest: its optimised files are gone.`);
  }
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(MANIFEST, `${JSON.stringify(sorted, null, 2)}\n`);

console.log(
  files.length
    ? `\n${files.length} new or updated: ${Math.round(before / 1024)} KB of originals -> ` +
        `${Math.round(after / 1024)} KB at full width. You can delete the originals now.`
    : `\nNo new photos in ${SRC_DIR}; existing optimised images left as they are.`,
);
console.log(`${Object.keys(sorted).length} images in the manifest.`);
