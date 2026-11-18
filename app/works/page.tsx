import type { Metadata } from "next";
import { WorksSection } from "../sections";
export const metadata: Metadata = { title: "制作実績 | HRTコンサルティング", description: "HRTコンサルティングのWebサイト制作実績。Google Sitesで制作したVECTOをご紹介します。" };
export default function WorksPage() { return <WorksSection standalone />; }