

export default function Certifications() {
  const certs = ["Technical English for Engineers", "The Joy of Computing Using Python", "Introduction to Internet of Things"];
  return <div className="card"><h3>NPTEL certifications</h3><ul className="list">{certs.map(c => <li key={c}>{c}</li>)}</ul></div>;
}
