import ThemeToggle from './ThemeToggle';
import { SECTIONS } from '../data';

export default function Navbar() {
  return (
    <nav><div className="wrap">
      <a className="brand" href="#top">Nafees Portfolio Website</a>
      <div className="links">{SECTIONS.map(s => <a key={s} href={"#" + s}>{s[0].toUpperCase() + s.slice(1)}</a>)}</div>
      <ThemeToggle />
    </div></nav>
  );
}
