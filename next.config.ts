import type { NextConfig } from "next";

// Site 100% estático: gera a pasta "out" (HTML/CSS/JS/imagens), hospedável em Cloudflare Pages, Vercel etc.
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  trailingSlash: true,
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
};

export default nextConfig;
