

export default function Section({ id, title, children }) {
  return <section id={id}><div className="wrap"><h2>{title}</h2>{children}</div></section>;
}
