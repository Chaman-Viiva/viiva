"use client";

import { useState } from "react";
import contactData from "@/data/contact.json";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {contactData.sectionTitle}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl"
        >
          {contactData.form.fields.map((field) => (
            <div
              key={field.name}
              className={field.type === "textarea" ? "sm:col-span-2" : ""}
            >
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium text-white/90"
              >
                {field.label}
                {field.required && <span className="text-[var(--viiva-red)]">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  rows={4}
                  className="w-full rounded-lg border border-white/20 bg-[var(--viiva-gray)] px-4 py-3 text-white placeholder-white/40 focus:border-[var(--viiva-red)] focus:outline-none focus:ring-1 focus:ring-[var(--viiva-red)]"
                  placeholder={field.label}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="w-full rounded-lg border border-white/20 bg-[var(--viiva-gray)] px-4 py-3 text-white focus:border-[var(--viiva-red)] focus:outline-none focus:ring-1 focus:ring-[var(--viiva-red)]"
                >
                  <option value="">Select...</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="w-full rounded-lg border border-white/20 bg-[var(--viiva-gray)] px-4 py-3 text-white placeholder-white/40 focus:border-[var(--viiva-red)] focus:outline-none focus:ring-1 focus:ring-[var(--viiva-red)]"
                  placeholder={field.label}
                />
              )}
            </div>
          ))}
          <div className="sm:col-span-2">
            <button type="submit" className="btn-primary w-full sm:w-auto">
              {contactData.form.submitLabel}
            </button>
          </div>
          {status === "success" && (
            <p className="sm:col-span-2 text-green-400">
              {contactData.form.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="sm:col-span-2 text-[var(--viiva-red)]">
              {contactData.form.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
