import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/solutions", "/about", "/approach", "/future-energy", "/contact"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/solutions" ? 0.9 : 0.7,
  }));
}
