import { useState } from 'react';
import { PHONE_RAW } from '../data';

export default function ContactForm() {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const send = () => {
    const text = encodeURIComponent("Hi Nafees, I’m " + (name || "reaching out") + ". " + msg);
    window.open("https://wa.me/" + PHONE_RAW + "?text=" + text, "_blank", "noopener");
  };
  return (
    <div className="card">
      <h3>Send a quick message</h3>
      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" aria-label="Your name" />
        <textarea rows="4" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Your message" aria-label="Your message" />
        <button className="btn primary" onClick={send} disabled={!msg.trim()} style={{ cursor: "pointer", font: "inherit", fontWeight: 600 }}>Send on WhatsApp</button>
      </div>
    </div>
  );
}
