import type { Metadata } from "next";
import ContactForm from "../contact-form";
import { contactEmail } from "../site-content";

export const metadata: Metadata = {
  title: "お問い合わせ | HRTコンサルティング",
  description: "Webサイト制作、SNS運用、ロゴ制作、ブランディングに関するご相談はこちらから。",
};

export default function ContactPage() {
  return (
    <section className="section contact">
      <div className="frame about">
        <div><p className="eyebrow">CONTACT</p><h1 className="page-title">お問い合わせ</h1></div>
        <div className="contact-info rounded-none bg-white p-6 sm:p-8">
          <p>入力内容をお使いのメールアプリに引き継ぎます。メールアプリで内容を確認して送信してください。</p>
          <ContactForm />
          <p>直接メールでのご相談</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
      </div>
    </section>
  );
}