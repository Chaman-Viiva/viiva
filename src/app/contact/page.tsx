import type { Metadata } from "next";
import siteData from "@/data/site.json";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact | ${siteData.company.name} — Get In Touch`,
  description: "Get in touch with Viiva Smart IT Solutions. Let's talk business.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Ready To Get Started
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Connect with us to explore how we can deliver exceptional IT
            solutions tailored to your needs.
          </p>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
