import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import AwardsPartnerships from "@/components/AwardsPartnerships";
import FeaturedInsights from "@/components/FeaturedInsights";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Leadership from "@/components/Leadership";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <AwardsPartnerships />
      <FeaturedInsights />
      <Stats />
      <TechStack />
<Leadership />
        <section className="section-padding border-t border-white/10">
          <div className="container-narrow text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready To Get Started
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Connect with us to explore how we can deliver exceptional IT
              solutions tailored to your needs.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Get in Touch
            </Link>
          </div>
        </section>
        <ContactForm />
    </main>
  );
}
