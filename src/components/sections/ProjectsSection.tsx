import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

type ProjectItem = {
  title: string;
  tags: string[];
  description: string;
};

const projects: ProjectItem[] = [
  {
    title: "LUVLUV",
    tags: ["2025", "AI Startup", "Full-stack", "LLM", "Companion AI"],
    description:
      "Architected and developed a full-stack AI companion platform with customizable characters, persistent conversation memory, and dynamically adapted response behavior driven by user preferences.",
  },
  {
    title: "Investment Agent",
    tags: ["2025", "Multi-Agent", "LangGraph", "Finance AI"],
    description:
      "Built an AI-powered investment decision platform with multi-agent workflows, integrating financial data sources and analyst-style reasoning pipelines to generate explainable BUY / SELL / HOLD recommendations.",
  },
];

function ProjectRow({
  project,
  delay = 0,
}: {
  project: ProjectItem;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} y={18}>
      <article className="pt-5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="subsection-title tracking-[-0.03em]">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="body-sm rounded-md bg-slate-200 px-3 py-1 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="body-text mt-3 max-w-[620px]">
          {project.description}
        </p>
      </article>
    </Reveal>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="snap-section border-b border-stone-300">
      <Container className="px-8 md:px-12 xl:px-16">
        <Reveal>
          <div className="mb-8">
            <p className="eyebrow mb-2">Projects</p>
            <h2 className="section-title">Selected Work</h2>
            <p className="body-text mt-3">
              AI products and applied systems I have built across companion AI,
              multi-agent workflows, and production-oriented engineering.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-6 xl:grid-cols-2">
          <ProjectRow project={projects[0]} delay={40} />
          <ProjectRow project={projects[1]} delay={120} />
        </div>
      </Container>
    </section>
  );
}
