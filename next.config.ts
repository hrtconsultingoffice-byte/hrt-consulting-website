import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import type { NextConfig } from "next";

const archive = join(process.cwd(), "axiom-partners-site.tar.gz");
const demoDirectory = join(process.cwd(), "public", "portfolio", "axiom-partners");

if (existsSync(archive) && !existsSync(join(demoDirectory, "index.html"))) {
  mkdirSync(demoDirectory, { recursive: true });
  execFileSync("tar", ["-xzf", archive, "-C", demoDirectory]);
}

const origin = "https://hrt-consulting-website.vercel.app";
const pages = ["/", "/about", "/service", "/works", "/contact"];

const config: NextConfig = {
  async rewrites() {
    const demo = "/portfolio/axiom-partners";
    return [
      { source: demo, destination: demo + "/index.html" },
      { source: demo + "/:page(about|service|approach|news|contact)", destination: demo + "/:page.html" },
      { source: demo + "/news/:article([a-z0-9-]+)", destination: demo + "/news/:article.html" },
    ];
  },
  async headers() {
    return pages.map((page) => ({
      source: page,
      headers: [{ key: "Link", value: `<${origin}${page}>; rel="canonical"` }],
    }));
  },
};

export default config;