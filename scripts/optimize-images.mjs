// Gera versões responsivas (WebP) das imagens de public/ em public/_img/.
// Necessário porque a exportação estática não tem o otimizador de imagens do Next.
// Uso: npm run images   (rode de novo sempre que adicionar ou trocar uma imagem)
import sharp from "sharp";
import { mkdirSync, readdirSync, writeFileSync, rmSync } from "node:fs";
import { extname, basename } from "node:path";

const SRC = "public";
const OUT = "public/_img";
const WIDTHS = [256, 384, 640, 750, 828, 1080, 1200, 1920];
const EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const file of readdirSync(SRC)) {
  const ext = extname(file).toLowerCase();
  if (!EXT.has(ext)) continue;
  const name = basename(file, ext);
  const meta = await sharp(`${SRC}/${file}`).metadata();
  const widths = [...new Set([...WIDTHS.filter((w) => w < meta.width), meta.width])].sort((a, b) => a - b);
  for (const w of widths) {
    await sharp(`${SRC}/${file}`)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, alphaQuality: 90, effort: 5 })
      .toFile(`${OUT}/${name}-${w}.webp`);
  }
  manifest[name] = widths;
  console.log(name, widths.join(", "));
}
writeFileSync("src/lib/image-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
