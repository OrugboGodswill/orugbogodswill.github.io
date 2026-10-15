import { useEffect, useRef, useState } from "react";
import { profile, about, skills, experience, projects, liveApps, certifications } from "./data.js";
import { art } from "./art.js";

const NAV = [["about", "About"], ["skills", "Skills"], ["experience", "Experience"], ["projects", "Projects"], ["live", "Live apps"], ["certs", "Certifications"]];
const ext = { target: "_blank", rel: "noreferrer" };

export default function App() {
  const [active, setActive] = useState("about");
  const track = useRef(null);

  const toggleTheme = () => {
    const r = document.documentElement;
    const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    r.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", r.dataset.theme); } catch (e) {}
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV.forEach(([id]) => io.observe(document.getElementById(id)));
    return () => io.disconnect();
  }, []);

  const slide = (d) => track.current.scrollBy({ left: d * 360, behavior: "smooth" });

  return (
    <>
      <header>
        <div className="bar">
          <a className="logo" href="#top">godswill<i>.</i>ml</a>
          <nav aria-label="Sections">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>{label}</a>)}
          </nav>
          <button className="tg" onClick={toggleTheme} aria-label="Toggle light and dark theme">◐</button>
        </div>
      </header>

      <div className="grid" id="top">
        <aside className="side">
          <div className="ph"><img src={profile.photo} alt={profile.name} /></div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="bl">{profile.blurb}</p>
          <ul className="soc">
            {profile.socials.map(([l, h]) => <li key={l}><a href={h} {...(h.startsWith("http") ? ext : {})}>{l}</a></li>)}
          </ul>
        </aside>

        <main>
          <section id="about" className="about">
            <h2>About myself</h2>
            {about.map((p, i) => <p key={i} className={i ? "mute" : ""}>{p}</p>)}
          </section>

          <section id="skills">
            <h2>Skills &amp; expertise</h2>
            {skills.map(([label, items, rv]) => (
              <div key={label} className={"mq" + (rv ? " rv" : "")}>
                <small>{label}</small>
                <div className="tr">
                  {[...items, ...items].map((s, i) => <span key={i} aria-hidden={i >= items.length || undefined}>{s}</span>)}
                </div>
              </div>
            ))}
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <ol className="exp">
              {experience.map((e) => (
                <li key={e.title}>
                  <time>{e.when}</time>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                  {e.tags && <ul className="tags">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
                </li>
              ))}
            </ol>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <div className="ptop">
              <span>Strongest first. Scroll sideways.</span>
              <div className="arr">
                <button onClick={() => slide(-1)} aria-label="Previous">←</button>
                <button onClick={() => slide(1)} aria-label="Next">→</button>
              </div>
            </div>
            <div className="track" ref={track} tabIndex={0} aria-label="Projects">
              {projects.map((p) => (
                <article className="card" key={p.title}>
                  <div dangerouslySetInnerHTML={{ __html: art(p.art) }} />
                  <div className="bd">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                    <div className="lk">
                      <a href={p.github} {...ext}>GitHub</a>
                      {p.live && <a href={p.live} {...ext}>Live site</a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="live">
            <h2>Live apps</h2>
            <ul className="live">
              {liveApps.map(([n, d, u]) => (
                <li key={n}><a href={u} {...ext}><i /><div><b>{n}</b><span>{d}</span></div><em>Open</em></a></li>
              ))}
            </ul>
            <a className="all" href="https://github.com/OrugboGodswill?tab=repositories" {...ext}>See all projects on GitHub</a>
          </section>

          <section id="certs">
            <h2>Certifications</h2>
            <ul className="certs">
              {certifications.map(([t, i, u]) => (
                <li key={t}>
                  <a href={u || "#"} {...(u ? ext : { onClick: (e) => e.preventDefault() })}>
                    <b>{t}</b><span>{i}</span><em>View certificate ↗</em>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      <footer>© {new Date().getFullYear()} Godswill Orugbo</footer>
    </>
  );
}
