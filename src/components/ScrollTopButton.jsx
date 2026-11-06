import { useState, useEffect } from 'react';

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return <button className="icon-btn top" onClick={() => window.scrollTo({ top: 0 })} aria-label="Back to top">Top</button>;
}
