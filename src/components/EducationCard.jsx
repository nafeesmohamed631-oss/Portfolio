

export default function EducationCard({ school, detail, years }) {
  return <div className="card"><h3>{school}</h3><p className="meta">{years}</p><p style={{ margin: 0 }}>{detail}</p></div>;
}
