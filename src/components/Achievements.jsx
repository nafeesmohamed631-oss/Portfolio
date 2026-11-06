import Section from './Section';
import Certifications from './Certifications';

export default function Achievements() {
  const events = ["Kalasalingam Academy of Research and Education – Coding Competition",
    "Government College of Engineering – Coding Competition",
    "PSG College – Thooral Hackathon",
    "Ramco Institute of Technology – Hackathon"];
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid">
        <div className="card"><h3>Participation</h3><ul className="list">{events.map(e => <li key={e}>{e}</li>)}</ul></div>
        <Certifications />
      </div>
    </Section>
  );
}
