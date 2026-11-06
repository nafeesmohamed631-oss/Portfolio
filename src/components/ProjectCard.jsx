import Tag from './Tag';

export default function ProjectCard({ title, stack, points, link }) {
  return (
    <article className="card project">
      <h3>{title}</h3>
      <ul>{points.map(p => <li key={p}>{p}</li>)}</ul>
      <ul className="tags">{stack.map(s => <Tag key={s}>{s}</Tag>)}</ul>
      {link && <p style={{ marginBottom: 0 }}><a href={link}>View on GitHub</a></p>}
    </article>
  );
}
