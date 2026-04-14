import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

const blogTopics = [
  {
    title: "ML & LLM Basics",
    description:
      "Notes on model fundamentals, tokenization, fine-tuning, and core ML ideas.",
  },
  {
    title: "Systems & Engineering",
    description:
      "Thoughts on backend design, APIs, agent workflows, and practical AI building.",
  },
  {
    title: "AI Tools & News",
    description:
      "Things I notice while exploring new tools, trends, and updates in AI.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="snap-section border-b border-stone-300">
      <Container className="px-8 md:px-12 xl:px-16">
        <Reveal>
          <div className="mb-2">
            <p className="eyebrow mb-2">Blog</p>
            <h2 className="section-title">Writing & Notes</h2>
            <p className="body-text mt-4 max-w-4xl">
              This blog is mainly a place where I record what I am learning,
              thinking about, and exploring in machine learning, AI engineering,
              and related topics.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl">
          <Reveal delay={40}>
            <div className="pt-4">
              <h3 className="subsection-title mb-5 tracking-[-0.02em]">
                Featured Topics
              </h3>

              <div className="space-y-3">
                {blogTopics.map((topic, index) => (
                  <Reveal key={topic.title} delay={index * 80}>
                    <div className="group relative pl-0 transition-all duration-300 hover:pl-4">
                      {/* hover 竖线 */}
                      <span className="absolute left-0 top-1 h-0 w-[3px] rounded-full bg-slate-900 opacity-0 transition-all duration-300 group-hover:h-[56px] group-hover:opacity-100" />

                      <div className="transition-transform duration-300 group-hover:translate-x-1">
                        <h4 className="text-[18px] md:text-[19px] font-semibold tracking-[-0.01em] text-slate-900">
                          {topic.title}
                        </h4>
                        <p className="body-text mt-1 max-w-4xl">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={220}>
                <div className="mt-8">
                  <a
                    href={siteConfig.blogUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dark inline-flex items-center justify-center rounded-xl px-8 py-4"
                  >
                    Visit My Blog
                  </a>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}