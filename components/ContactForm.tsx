"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const msg = (data.get("msg") as string)?.trim() ?? "";

    const body = encodeURIComponent(`Hi Milly,\n\n${msg}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    window.location.href = `mailto:millyayuma7@gmail.com?subject=${subject}&body=${body}`;

    setStatus("✓ Opening your email client...");
    setTimeout(() => {
      setStatus("");
      form.reset();
    }, 4000);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" required placeholder="Your name" />
      </div>
      <div className="form-row">
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" required placeholder="you@domain.com" />
      </div>
      <div className="form-row">
        <label htmlFor="msg">message</label>
        <textarea id="msg" name="msg" rows={5} required placeholder="What's on your mind?" />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Transmission →
      </button>
      <p className="form-status">{status}</p>
    </form>
  );
}
