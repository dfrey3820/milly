"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Security Analyst",
  "SOC Analyst Trainee",
  "Incident Responder",
  "Threat Detection Enthusiast",
  "SIEM Monitoring",
];

export default function TypedRole() {
  const [text, setText] = useState("");

  useEffect(() => {
    let r = 0;
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = ROLES[r];
      i = deleting ? i - 1 : i + 1;
      setText(current.slice(0, i));

      let delay = deleting ? 45 : 90;
      if (!deleting && i === current.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && i === 0) {
        deleting = false;
        r = (r + 1) % ROLES.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="hero-role">
      <span className="cursor-prompt">&gt;</span>
      <span>{text}</span>
      <span className="cursor">_</span>
    </p>
  );
}
