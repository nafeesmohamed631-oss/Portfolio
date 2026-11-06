

export default function SkillGroup({ name, items }) {
  return <div className="skill-row"><strong>{name}</strong><span>{items.join(", ")}</span></div>;
}
