import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function ContactSection() {
  return (
    <section id="contact" className="snap-section border-b border-stone-300">
      <Container className="px-8 md:px-12 xl:px-16">
        <Reveal>
          <div className="max-w-5xl">
            <p className="eyebrow mb-2">Contact</p>
            <h2 className="section-title">Collaboration</h2>

            <p className="body-text mt-3">
              Let’s build something meaningful together — whether it is AI
              engineering, research collaboration, product ideas, or technical
              discussion.
            </p>

            <ContactForm />
            <ContactSocials />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
