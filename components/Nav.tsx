"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <a href="#home" className="brand" onClick={close}>
        <span className="brand-bracket">&lt;</span>milly.munala
        <span className="brand-bracket">/&gt;</span>
      </a>
      <nav>
        <ul className={`nav-links ${open ? "open" : ""}`} onClick={close}>
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#education">education</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((o) => !o)}
      >
        ☰
      </button>
    </header>
  );
}
