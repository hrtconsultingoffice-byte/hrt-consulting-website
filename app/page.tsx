import Image from "next/image";
import { Arrow } from "./site-shell";
import { AboutSection, ServiceSection, WorksSection, ContactSection } from "./sections";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo">
          <Image src="/marunouchi.webp" alt="" fill preload sizes="(max-width: 760px) 100vw, 70vw" />
          <span className="photo-caption">丸の内をイメージした生成画像</span>
        </div>
        <div className="frame hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">HRT CONSULTING</p>
            <h1 id="hero-title">事業の価値を、<br />伝わるかたちに。</h1>
            <p className="hero-description">Webサイト、SNS、ロゴ、ブランディング。<br />あなたの事業らしさを見つめ、<br className="desktop-break" />お客様に届く表現を、一緒につくります。</p>
            <a href="#service" className="button">サービスを見る <Arrow /></a>
          </div>
        </div>
        <a href="#about" className="scroll-link"><span aria-hidden="true">↓</span> SCROLL</a>
      </section>
      <AboutSection />
      <ServiceSection />
      <WorksSection />
      <ContactSection />
    </>
  );
}
