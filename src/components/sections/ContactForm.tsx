"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const finalSubject = subject || `Message from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="body-text mb-2 block font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="body-text w-full border-0 border-b border-stone-300 bg-transparent px-0 outline-none placeholder:text-slate-400 focus:border-slate-900"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="body-text mb-3 block font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="body-text w-full border-0 border-b border-stone-300 bg-transparent px-0 outline-none placeholder:text-slate-400 focus:border-slate-900"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="body-text mb-3 block font-medium">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="body-text w-full border-0 border-b border-stone-300 bg-transparent px-0 outline-none placeholder:text-slate-400 focus:border-slate-900"
            placeholder="What would you like to talk about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="body-text mb-3 block font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="body-text w-full resize-none border-0 border-b border-stone-300 bg-transparent px-0 outline-none placeholder:text-slate-400 focus:border-slate-900"
            placeholder="Tell me about your idea, question, or collaboration."
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-dark mt-4 w-full px-8 py-5"
      >
        Send Inquiry
      </button>
    </form>
  );
}
