const basic = [
  ["ロゴデザイン", "33,000", "2案・修正2回／PNG等"],
  ["名刺デザイン", "11,000", "両面1種類／印刷費別"],
  ["ショップカード", "11,000", "両面1種類／印刷費別"],
  ["Instagram 初期設計", "22,000", "プロフィール・ハイライト・テンプレート"],
  ["Instagram 投稿画像6枚", "22,000", "画像6枚・キャプション"],
  ["簡易Webサイト", "55,000", "Google Sites等／最大5ページ"],
];

const plans = [
  ["LIGHT", "ライト", "29,800", ["フィード月4投稿", "キャプション制作", "デザイン統一", "簡易月次レポート"]],
  ["STANDARD", "スタンダード", "49,800", ["月8投稿（リール最大2本）", "ストーリーズ画像月4枚", "投稿管理・月次分析", "オンライン打合せ月1回"]],
  ["PREMIUM", "プレミアム", "79,800", ["月12投稿（リール最大4本）", "ストーリーズ画像月8枚", "競合投稿分析・詳細報告", "オンライン打合せ月2回"]],
] as const;

export default function Pricing({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h2" : "h3";
  const PlanHeading = standalone ? "h3" : "h4";
  return (
    <div className="pricing" id="pricing">
      <section aria-labelledby="basic-pricing">
        <Heading className="pricing-heading" id="basic-pricing">単発制作の基本料金</Heading>
        <p className="pricing-note">税込参考価格です。印刷費・広告費・有料素材費等は別途かかります。</p>
        <dl className="pricing-grid grid sm:grid-cols-2 lg:grid-cols-3">
          {basic.map(([name, price, scope]) => (
            <div className="pricing-card" key={name}>
              <dt>{name}</dt>
              <dd className="price">{price}<small>円</small></dd>
              <dd className="pricing-note">{scope}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-labelledby="instagram-pricing">
        <Heading className="pricing-heading" id="instagram-pricing">Instagram運用の月額プラン</Heading>
        <p className="pricing-note">投稿頻度と運用範囲に合わせて、3つのプランからお選びいただけます。</p>
        <div className="pricing-grid grid md:grid-cols-3">
          {plans.map(([english, name, price, features]) => (
            <article className="pricing-card" key={english}>
              <p className="service-english">{english}</p>
              <PlanHeading className="plan-heading">{name}</PlanHeading>
              <p className="price">{price}<small>円 / 月</small></p>
              <ul className="plan-features">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="pricing-note plan-note">画像・動画素材は原則としてご提供いただきます。リールは提供素材を使った短尺編集です。撮影・DM対応・広告運用・交通費はプラン料金の対象外です。</p>
      </section>
    </div>
  );
}