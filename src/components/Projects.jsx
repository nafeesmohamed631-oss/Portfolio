import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid">{PROJECTS.map(p => <ProjectCard key={p.title} {...p} />)}</div>
    </Section>
  );
}
