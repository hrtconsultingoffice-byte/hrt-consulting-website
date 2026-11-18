"use client";

import { useState, type FormEvent } from "react";
import { contactEmail, services } from "./site-content";

export default function ContactForm() {
  const [draft, setDraft] = useState("");

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`【HRTサイト】${data.get("topic")}`);
    const body = encodeURIComponent(
      [`お名前：${data.get("name")}`, `メールアドレス：${data.get("email")}`, "", "ご相談内容", data.get("message")].join("\r\n"),
    );
    const href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setDraft(href);
    window.location.href = href;
  }

  return (
    <form className="inquiry-form" onSubmit={prepareDraft}>
      <label>お名前（必須）<input name="name" autoComplete="name" required maxLength={80} /></label>
      <label>メールアドレス（必須）<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>ご相談の種類<select name="topic" defaultValue="その他"><option>その他</option>{services.map(({ name }) => <option key={name}>{name}</option>)}</select></label>
      <label>ご相談内容（必須）<textarea name="message" rows={6} maxLength={500} required aria-describedby="message-limit" /></label>
      <p id="message-limit" className="pricing-note">500文字まで入力できます。</p>
      <button className="button" type="submit">メール作成画面を開く</button>
      {draft && <p role="status" className="pricing-note">メールアプリで内容を確認して送信してください。<a className="underline" href={draft}>メールアプリを開き直す</a></p>}
    </form>
  );
}