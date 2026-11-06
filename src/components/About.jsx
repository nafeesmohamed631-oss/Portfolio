import Section from './Section';
import Fact from './Fact';

export default function About() {
  return (
    <Section id="about" title="About me">
      <p style={{ maxWidth: "62ch" }}>I’m an Information Technology student from Kadayanallur, Tenkasi. I enjoy modern web technologies, solving problems, and turning ideas into efficient, real-world applications while I keep improving my technical skills.</p>
      <div className="facts">
        <Fact value="7.76" label="CGPA out of 10" />
        <Fact value="2" label="Full projects built" />
        <Fact value="4" label="Coding contests and hackathons" />
        <Fact value="3" label="NPTEL courses completed" />
      </div>
    </Section>
  );
}
