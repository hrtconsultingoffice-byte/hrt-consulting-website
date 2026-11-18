import Link from "next/link";
const navigation = [
  ["HOME", "/"], ["ABOUT", "/about"], ["SERVICE", "/service"],
  ["WORKS", "/works"], ["CONTACT", "/contact"],
];
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={diagonal ? "M6 18 18 6M8 6h10v10" : "M3 12h17m-6-6 6 6-6 6"} /></svg>;
}

function Brand() {
  return <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true">H</span><span>HRT <small>CONSULTING</small></span></Link>;
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const NavigationLink = mobile ? "a" : Link;
  return navigation.map(([label, href]) => <NavigationLink key={label} href={href} className={label === "CONTACT" ? "nav-contact" : undefined}>{label}{label === "CONTACT" && <Arrow diagonal />}</NavigationLink>);
}

export function SiteHeader() { return <><a className="skip" href="#main">本文へ移動</a>
      <header id="top" className="header">
        <div className="frame flex items-center justify-between">
          <Brand />
          <nav aria-label="メインナビゲーション" className="desktop-nav"><NavLinks /></nav>
          <details className="mobile-nav">
            <summary>メニュー <span aria-hidden="true">☰</span></summary>
            <nav aria-label="モバイルナビゲーション"><NavLinks mobile /></nav>
          </details>
        </div>
      </header></>; }
export function SiteFooter() { return <footer className="footer"><div className="frame flex flex-wrap items-center justify-between gap-5"><Brand /><small>© HRT CONSULTING</small><a className="to-top" href="#top" aria-label="ページ先頭へ">↑</a></div></footer>; }