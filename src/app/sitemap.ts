import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { abs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: abs("/"), lastModified: now, priority: 1 },
    { url: abs("/servicos/"), lastModified: now, priority: 0.9 },
    ...services.map((s) => ({ url: abs(`/servicos/${s.slug}/`), lastModified: now, priority: 0.8 })),
    { url: abs("/contato/"), lastModified: now, priority: 0.6 },
  ];
}
