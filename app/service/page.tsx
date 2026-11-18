import type { Metadata } from "next";
import { ServiceSection } from "../sections";
export const metadata: Metadata = { title: "サービス・料金 | HRTコンサルティング", description: "Webサイト制作、SNS運用支援、ロゴ制作、ブランディング支援の詳細と料金。" };
export default function ServicePage() { return <ServiceSection standalone />; }