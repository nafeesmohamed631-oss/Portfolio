import Section from './Section';
import SkillGroup from './SkillGroup';
import Languages from './Languages';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="card">
        <SkillGroup name="Programming" items={["C", "C++", "Java (basics)"]} />
        <SkillGroup name="Web and mobile" items={["React.js (basics)", "Node.js (basics)", "Flutter (basics)"]} />
        <SkillGroup name="Python frameworks" items={["Django (basics)", "Flask (basics)"]} />
        <Languages />
      </div>
    </Section>
  );
}
