import type { Metadata } from "next";
import { AboutSection } from "../sections";
export const metadata: Metadata = { title: "私たちについて | HRTコンサルティング", description: "HRTコンサルティングの理念と事業者情報。谷本遥叶が運営し、東京を中心に全国オンラインで対応します。" };
export default function AboutPage() { return <AboutSection standalone />; }