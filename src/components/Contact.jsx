import Section from './Section';
import ContactForm from './ContactForm';
import { LINKS, PHONE } from '../data';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid">
        <div>
          <a className="contact-link" href={"tel:" + PHONE.replace(/\s/g, "")}>{PHONE}</a>
          {LINKS.email && <a className="contact-link" href={"mailto:" + LINKS.email}>{LINKS.email}</a>}
          {LINKS.github && <a className="contact-link" href={LINKS.github}>GitHub</a>}
          {LINKS.linkedin && <a className="contact-link" href={LINKS.linkedin}>LinkedIn</a>}
          {LINKS.leetcode && <a className="contact-link" href={LINKS.leetcode}>LeetCode</a>}
          <p className="meta">18/43, Ayyapuram North Street, Kadayanallur, Tenkasi</p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
