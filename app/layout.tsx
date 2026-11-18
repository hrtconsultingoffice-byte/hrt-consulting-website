import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader, SiteFooter } from "./site-shell";

export const metadata: Metadata = {
  title: "HRTコンサルティング | Web制作・SNS運用・ブランディング",
  description: "HRTコンサルティングは、美容室や自動車販売店、カーコーティング店などの事業者を対象に、Webサイト制作、SNS運用支援、ロゴ制作、ブランディング支援を行う個人事業です。",
  openGraph: { type: "website", locale: "ja_JP", siteName: "HRT CONSULTING" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ja"><body><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
