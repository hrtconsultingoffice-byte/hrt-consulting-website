import type { Metadata } from "next";
import { WorksSection } from "../sections";
export const metadata: Metadata = { title: "制作実績 | HRTコンサルティング", description: "HRTコンサルティングのWebサイト制作実績。AXIOM PARTNERSのポートフォリオ用デモサイトや、Google Sitesで制作したサイトをご紹介します。" };
export default function WorksPage() { return <WorksSection standalone />; }