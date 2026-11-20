import type { NextConfig } from "next";

const origin = "https://hrt-consulting-website.vercel.app";
const pages = ["/", "/about", "/service", "/works", "/contact"];

const config: NextConfig = {
  async headers() {
    return pages.map((page) => ({
      source: page,
      headers: [{ key: "Link", value: `<${origin}${page}>; rel="canonical"` }],
    }));
  },
};

export default config;