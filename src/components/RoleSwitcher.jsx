import { useState, useEffect } from 'react';

export default function RoleSwitcher() {
  const roles = ["Web developer", "React learner", "Problem solver", "IT student"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return <div className="role" aria-live="off">{roles[i]}</div>;
}
