import Section from './Section';
import EducationCard from './EducationCard';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid">
        <EducationCard school="B.Tech Information Technology, National Engineering College, Kovilpatti" years="2024 – 2028" detail="CGPA: 7.76 / 10" />
        <EducationCard school="Masood Thaika Higher Secondary School, Kadayanallur" years="2022 – 2024" detail="Marks: 530 / 600" />
      </div>
    </Section>
  );
}
