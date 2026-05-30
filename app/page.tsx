import MatrixRain from "@/components/MatrixRain";
import Nav from "@/components/Nav";
import TypedRole from "@/components/TypedRole";
import Stat from "@/components/Stat";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

const SKILLS = [
  { icon: "🛡️", title: "Alert Triage", desc: "Prioritizing and investigating security alerts to separate signal from noise." },
  { icon: "🚨", title: "Incident Response", desc: "Structured investigation, containment, and documentation of security events." },
  { icon: "📊", title: "SIEM Monitoring", desc: "Continuous monitoring of logs and events to detect suspicious activity early." },
  { icon: "🌐", title: "Network Fundamentals", desc: "Solid grasp of protocols, traffic patterns, and network-level threat indicators." },
  { icon: "🔍", title: "Threat Detection", desc: "Identifying anomalies and indicators of compromise across systems and data." },
  { icon: "⚙️", title: "Process Improvement", desc: "Refining workflows and documentation to strengthen team efficiency." },
  { icon: "📝", title: "Documentation", desc: "Clear, audit-ready records that support escalation and root-cause analysis." },
  { icon: "💻", title: "UI/UX & Tech Support", desc: "Web platform troubleshooting with a focus on availability and reliability." },
];

const EXPERIENCE = [
  {
    date: "Apr 2025 – Present",
    badge: "Current",
    title: "Administrative Assistant",
    org: "Kanga Studio Nairobi · Ikigai, Westlands",
    bullets: [
      <>Manage digital systems and client data with strict confidentiality — reduced record errors by <strong>20%</strong>.</>,
      <>Monitor website functionality and investigate technical issues — cut downtime by <strong>30%</strong>.</>,
      <>Document workflows and operational procedures, improving incident reporting accuracy.</>,
      <>Coordinate with internal teams and clients — improving response efficiency by <strong>25%</strong>.</>,
    ],
  },
  {
    date: "Jan 2020 – Aug 2024",
    title: "UI/UX Designer",
    org: "Digital Steps Creatives · Remote",
    bullets: [
      <>Provided technical support for WordPress and web platforms — lowered repeat incidents by <strong>18%</strong>.</>,
      <>Identified configuration weaknesses and usability risks affecting availability and security.</>,
      <>Collaborated with developers via clear documentation — improved issue resolution by <strong>22%</strong>.</>,
      <>Applied structured problem-solving to support root-cause analysis.</>,
    ],
  },
  {
    date: "Jan 2018 – Jan 2023",
    title: "Agent (Data Operations)",
    org: "Sama Kenya Limited · Sameer Business Park",
    bullets: [
      <>Analyzed high-volume datasets with <strong>98% accuracy</strong>, escalating anomalies per procedure.</>,
      <>Reduced recurring errors by <strong>25%</strong> through investigation and documentation.</>,
      <>Maintained detailed records — improved compliance and audit readiness by <strong>20%</strong>.</>,
      <>Consistently achieved <strong>95%+</strong> performance scores in a fast-paced environment.</>,
    ],
  },
];

export default function Home() {
  return (
    <>
      <MatrixRain />
      <Nav />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="hero-greeting">$ whoami</p>
              <h1>
                <span className="glitch" data-text="Milly Munala">
                  Milly Munala
                </span>
              </h1>
              <TypedRole />
              <p className="hero-tagline">
                Aspiring Security Analyst defending digital systems through{" "}
                <span className="accent">alert triage</span>,{" "}
                <span className="accent">threat detection</span>, and{" "}
                <span className="accent">incident response</span>.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">
                  Initiate Contact
                </a>
                <a href="#experience" className="btn btn-ghost">
                  View Experience
                </a>
              </div>
              <div className="hero-meta">
                <span>● Nairobi, Kenya</span>
                <span>● Available for SOC roles</span>
              </div>
            </div>

            <Reveal as="div" className="terminal">
              <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">~/milly/profile.sh</span>
              </div>
              <div className="terminal-body">
                <p>
                  <span className="prompt">milly@soc</span>:
                  <span className="path">~</span>$ cat status.json
                </p>
                <pre>{`{
  "role": "Security Analyst",
  "location": "Nairobi, KE",
  "training": "Cyber Shujaa - SOC",
  "focus": [
    "SIEM Monitoring",
    "Incident Response",
    "Alert Triage"
  ],
  "status": "🟢 ONLINE"
}`}</pre>
                <p>
                  <span className="prompt">milly@soc</span>:
                  <span className="path">~</span>${" "}
                  <span className="blink">_</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2 className="section-title">
            <span className="hash">#</span> about_me
          </h2>
          <div className="about-grid">
            <Reveal className="card">
              <p>
                I&apos;m a security-focused professional pivoting into the SOC world. With a
                foundation in <strong>web development</strong>, hands-on experience in{" "}
                <strong>data operations</strong>, and active{" "}
                <strong>Security Operations Center Analyst training at Cyber Shujaa</strong>,
                I bring an analytical mindset to threat detection and digital defense.
              </p>
              <p>
                My journey from UI/UX and administrative work has sharpened my eye for
                anomalies, attention to detail, and ability to document and escalate
                effectively — all critical skills in the SOC trenches.
              </p>
            </Reveal>
            <div className="stats">
              <Stat target={98} label="data accuracy" />
              <Stat target={30} label="downtime reduced" />
              <Stat target={25} label="faster response" />
              <Stat target={7} suffix="+" label="years experience" />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title">
            <span className="hash">#</span> skill_set
          </h2>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <Reveal key={s.title} className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <h2 className="section-title">
            <span className="hash">#</span> experience.log
          </h2>
          <div className="timeline">
            {EXPERIENCE.map((e) => (
              <Reveal key={e.title} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-date">{e.date}</span>
                    {e.badge && <span className="timeline-badge">{e.badge}</span>}
                  </div>
                  <h3>{e.title}</h3>
                  <h4>{e.org}</h4>
                  <ul>
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <h2 className="section-title">
            <span className="hash">#</span> education &amp; certs
          </h2>
          <div className="edu-grid">
            <Reveal className="edu-card highlight">
              <span className="edu-tag">Jan – Apr 2026</span>
              <h3>SOC Analyst Certification</h3>
              <p>Cyber Shujaa · Online Training</p>
              <p className="edu-desc">
                Hands-on Security Operations Center training covering SIEM, threat
                detection, and incident response workflows.
              </p>
            </Reveal>
            <Reveal className="edu-card">
              <span className="edu-tag">May 2018</span>
              <h3>Cybersecurity Awareness</h3>
              <p>HP LIFE Certification</p>
              <p className="edu-desc">
                Foundational cybersecurity principles and best practices.
              </p>
            </Reveal>
            <Reveal className="edu-card">
              <span className="edu-tag">Jan 2015 – 2016</span>
              <h3>Diploma in Web Development</h3>
              <p>Naitobits Trust · Nairobi</p>
              <p className="edu-desc">
                Technical foundation in web technologies that powers system-level
                troubleshooting today.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">
            <span className="hash">#</span> establish_connection
          </h2>
          <div className="contact-wrap">
            <div className="contact-info">
              <p className="contact-intro">
                Ready to bring an analytical, security-first mindset to your SOC team.
                Let&apos;s connect.
              </p>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">✉</span>
                  <a href="mailto:millyayuma7@gmail.com">millyayuma7@gmail.com</a>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+254720704137">+254 720 704 137</a>
                </li>
                <li>
                  <span className="contact-icon">🔗</span>
                  <a
                    href="https://www.linkedin.com/in/milly-munala/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/milly-munala
                  </a>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Milly Munala · Built with curiosity &amp; caffeine ☕</p>
        <p className="footer-meta">Secure by digital steps creatives · Nairobi 🇰🇪</p>
      </footer>
    </>
  );
}
