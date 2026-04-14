import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center border-b border-stone-300"
    >
      <Container className="max-w-none px-8 md:px-12 xl:px-16">
        <div className="max-w-4xl">
          <p className="eyebrow mb-3">Home</p>

          <h1 className="hero-title">Hi, I’m Kangyi Qiu</h1>

          <p className="subtitle-text mt-4">
            ML Engineer / Software Engineer / AI Engineer / Full Stack Engineer
          </p>

          <p className="body-text mt-5 max-w-3xl">
            I build machine learning systems and explore LLM applications with
            a focus on practical AI products. I’m currently open to work, so if
            you are hiring or interested in collaborating, feel free to reach
            out by email.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Reveal delay={50} y={18}>
              <a
                href="#projects"
                className="btn-dark inline-flex items-center justify-center min-w-[210px] rounded-xl px-8 py-5"
              >
                See My Work
              </a>
            </Reveal>

            <Reveal delay={180} y={18}>
              <a
                href={siteConfig.blogUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-light inline-flex items-center justify-center min-w-[210px] rounded-xl px-8 py-5"
              >
                Visit Blog
              </a>
            </Reveal>
          </div>
        </div>
      </Container>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 transition-colors hover:text-stone-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        aria-label="Scroll to About section"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}