type TableProps = { title: string; columns: string[]; rows: string[][]; heading: "h2" | "h3"; note?: string };

function PriceTable({ title, columns, rows, heading: Heading, note }: TableProps) {
  return (
    <section>
      <Heading className="pricing-heading">{title}</Heading>
      <div className="overflow-x-auto border border-[var(--line)] bg-white" tabIndex={0} role="region" aria-label={title}>
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead className="bg-[var(--paper)]">
            <tr>{columns.map((column) => <th className="px-4 py-3" key={column} scope="col">{column}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map(([name, ...values]) => (
              <tr className="border-t border-[var(--line)]" key={name}>
                <th className="px-4 py-3 align-top font-semibold" scope="row">{name}</th>
                {values.map((value, index) => <td key={index} className={`px-4 py-3 align-top ${index === 0 && columns[1] === "料金" ? "whitespace-nowrap font-semibold" : ""}`}>{value}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="pricing-note mt-3">{note}</p>}
    </section>
  );
}

export default function Pricing({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h2" : "h3";
  return (
    <div className="pricing" id="pricing">
      <div>
        <Heading className="pricing-heading">サービス料金表</Heading>
        <p className="pricing-note">2026年11月20日制定・すべて税込価格</p>
      </div>
      <PriceTable heading={Heading} title="Webサイト制作" columns={["プラン", "料金", "制作内容", "修正"]} rows={[
        ["STARTER", "59,800円", "1ページ・テンプレートベース", "2回"],
        ["STANDARD", "149,800円", "最大5ページ・オリジナルデザイン", "3回"],
        ["PREMIUM", "298,000円〜", "最大10ページ・高度な個別設計", "4回"],
      ]} note="全プランでスマートフォン対応。納期目安はプランに応じて1〜8週間。基本SEO設定はSTANDARD以上で対応します。" />
      <PriceTable heading={Heading} title="Instagram制作・運用支援" columns={["プラン", "料金", "サービス内容"]} rows={[
        ["LIGHT", "29,800円／月", "画像投稿4本・投稿文作成。投稿データの納品のみ。"],
        ["STANDARD", "59,800円／月", "画像投稿8本・投稿代行・簡易分析"],
        ["PREMIUM", "99,800円／月", "画像投稿8本・ショート動画2本・投稿代行・詳細分析・月1回の打ち合わせ"],
      ]} note="1アカウントあたりの月額料金です。撮影・広告運用・DM対応は別料金です。" />
      <PriceTable heading={Heading} title="ロゴ・グラフィックデザイン" columns={["サービス", "料金", "制作内容"]} rows={[
        ["ロゴ LIGHT", "19,800円", "初稿1案・修正2回"],
        ["ロゴ STANDARD", "39,800円", "初稿2案・修正3回"],
        ["ロゴ PREMIUM", "79,800円", "初稿3案＋簡易ガイド・修正4回"],
        ["名刺デザイン", "14,800円", "両面"],
        ["ショップカードデザイン", "14,800円", ""],
        ["SNSプロフィール設計", "19,800円", ""],
        ["ブランドデザイン一式", "149,800円〜", ""],
      ]} note="印刷代、商標調査・登録費用は別途かかります。" />
      <PriceTable heading={Heading} title="Webサイト保守・更新" columns={["プラン", "料金", "サービス内容"]} rows={[
        ["BASIC", "4,980円／月", "稼働確認・軽微な修正月1回"],
        ["STANDARD", "9,800円／月", "修正月2回・バックアップ確認・簡易報告"],
        ["PREMIUM", "19,800円／月", "修正月4回・アクセス分析・改善提案"],
      ]} note="1回の修正は原則30分以内の軽作業です。サーバー・ドメイン費用は別途かかります。" />
      <div>
        <details className="disclosure">
          <summary>オプションサービスの料金を見る</summary>
          <PriceTable heading={Heading} title="オプションサービス" columns={["サービス", "料金"]} rows={[
            ["Webページ追加", "19,800円〜／ページ"], ["LP制作", "79,800円〜"],
            ["Webサイト文章作成", "5,500円〜／ページ"], ["SNS画像投稿追加", "5,500円／本"],
            ["ショート動画追加", "14,800円〜／本"], ["Webサイト軽微修正", "5,500円〜／回"],
            ["アクセス分析レポート", "9,800円／回"], ["追加オンライン打ち合わせ", "5,500円／30分"],
          ]} />
        </details>
        <details className="disclosure">
          <summary>共通の契約条件を見る</summary>
          <PriceTable heading={Heading} title="共通の契約条件" columns={["項目", "条件"]} rows={[
            ["初回相談・見積もり", "無料"], ["見積もり有効期限", "30日"],
            ["Web制作のお支払い", "着手時50％・納品前50％"], ["SNS運用のお支払い", "月額前払い"],
            ["SNS運用の契約期間", "初回3か月・以降月次更新"], ["制作開始", "契約・入金・必要素材受領後"],
            ["大幅な仕様変更", "別途見積もり"], ["納品後の不具合修正", "制作起因の不具合は原則30日間無償"],
            ["外部サービス・素材費", "原則別途"],
          ]} note="まとめてご提出いただいた修正指示を1回として数えます。途中解約・返金・著作権・個人情報の取扱いは、正式な契約書で定めます。" />
        </details>
      </div>
    </div>
  );
}
