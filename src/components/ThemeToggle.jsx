import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  useEffect(() => { document.documentElement.setAttribute("data-theme", dark ? "dark" : "light"); }, [dark]);
  return <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">{dark ? "Light" : "Dark"}</button>;
}
