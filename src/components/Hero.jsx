import RoleSwitcher from './RoleSwitcher';

export default function Hero() {
  return (
    <header className="hero" id="top"><div className="wrap">
      <RoleSwitcher />
      <h1>Mohamed<span>Nafees R</span></h1>
      <p>Pre-final year B.Tech Information Technology student at National Engineering College, building practical, user-friendly web apps with React and Node.js.</p>
      <div className="btns">
        <a className="btn primary" href="#projects">See my projects</a>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
    </div></header>
  );
}
