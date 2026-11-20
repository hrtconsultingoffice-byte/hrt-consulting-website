import Link from "next/link";
import Pricing from "./pricing";
import { Arrow } from "./site-shell";
import { services, contactEmail } from "./site-content";

export function AboutSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? PageHeading : "h2";
  return (
    <section id="about" className="section about frame">
      <div><p className="eyebrow">ABOUT</p><Heading>私たちについて</Heading></div>
      <div className="about-content">
        <p className="statement">事業らしさから、<br />伝え方を考える。</p>
        <p>HRTコンサルティングは、美容室、自動車販売店、カーコーティング店など、地域で事業を営む方の情報発信を支援する個人事業です。サービスに込めた思いやお客様に選ばれる理由を整理し、WebサイトやSNS、ロゴに落とし込みます。</p>
        <details className="disclosure" open={standalone || undefined}><summary>事業者情報</summary><dl><dt>屋号</dt><dd>HRTコンサルティング</dd><dt>事業形態</dt><dd>個人事業</dd><dt>事業主</dt><dd>谷本遥叶</dd><dt>対応エリア</dt><dd>全国オンライン対応・東京を中心に対応</dd><dt>所在地</dt><dd>掲載情報は準備中</dd></dl></details>
      </div>
    </section>
  );
}

export function ServiceSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? PageHeading : "h2";
  const ServiceHeading = standalone ? "h2" : "h3";
  return (
    <section id="service" className="section service">
      <div className="frame">
        <p className="eyebrow">SERVICE</p><Heading>サービス</Heading>
        <div className="service-grid grid sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <article key={service.name} className="service-card">
            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"><path d={service.icon} /></svg>
            <p className="service-english">{service.english}</p>
            <ServiceHeading>{service.name}</ServiceHeading><p>{service.copy}</p>
            <details className="disclosure" open={standalone || undefined}><summary>支援内容を見る</summary><p>{service.detail}</p></details>
          </article>)}
        </div>
        <Pricing standalone={standalone} />
        {standalone && <Link href="/contact" className="button page-action">サービスについて相談する <Arrow /></Link>}
      </div>
    </section>
  );
}

export function WorksSection({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? PageHeading : "h2";
  const ProjectHeading = standalone ? "h2" : "h3";
  return (
    <section id="works" className="section compact frame items-start">
      <div><p className="eyebrow">WORKS</p><Heading>制作実績</Heading></div>
      <div className="grid gap-4">
        <article className="pricing-card contact-info border border-[var(--line)]">
          <p className="service-english">WEB DESIGN / NEXT.JS · ポートフォリオ用デモ</p>
          <ProjectHeading className="work-title mt-2 text-lg font-bold">AXIOM PARTNERS</ProjectHeading>
          <p className="mt-2">架空の経営コンサルティング会社を想定したコーポレートサイト。企業理念、事業サービス、お問い合わせフォームを含む6ページを設計・制作しました。</p>
          <a href="/portfolio/axiom-partners">AXIOM PARTNERSのデモサイトを見る <Arrow diagonal /></a>
        </article>
        <article className="pricing-card contact-info border border-[var(--line)]">
          <p className="service-english">WEB DESIGN / GOOGLE SITES</p>
          <ProjectHeading className="work-title mt-2 text-lg font-bold">VECTO</ProjectHeading>
          <a href="https://sites.google.com/view/vect-official/home">VECTOのサイトを見る <Arrow diagonal /></a>
        </article>
        <article className="pricing-card contact-info border border-[var(--line)]">
          <p className="service-english">WEB DESIGN / GOOGLE SITES</p>
          <ProjectHeading className="work-title mt-2 text-lg font-bold">LUMÉ HAIR SALON</ProjectHeading>
          <p className="mt-2">美容室のWebサイト制作サンプル</p>
          <a href="https://sites.google.com/view/lumesalon/home">LUMÉ HAIR SALONのデモサイトを見る <Arrow diagonal /></a>
        </article>
      </div>
    </section>
  );
}

function PageHeading({ children }: { children: string }) {
  return <h1 className="page-title">{children}</h1>;
}

export function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="frame compact">
    <div><p className="eyebrow">CONTACT</p><h2>お問い合わせ</h2></div>
    <div className="contact-info">
      <p>制作や運用について、お気軽にご相談ください。</p>
          <Link href="/contact">お問い合わせフォームへ <Arrow /></Link>
      <p className="mt-2"><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
    </div>
      </div>
    </section>
  );
}