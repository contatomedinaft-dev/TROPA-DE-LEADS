import manifest from "./image-manifest.json";

// Loader para exportação estática: escolhe entre as versões geradas por scripts/optimize-images.mjs.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const name = src.replace(/^\//, "").replace(/\.[a-z]+$/i, "");
  const widths = (manifest as Record<string, number[]>)[name];
  if (!widths) return src;
  const w = widths.find((x) => x >= width) ?? widths[widths.length - 1];
  return `/_img/${name}-${w}.webp`;
}
