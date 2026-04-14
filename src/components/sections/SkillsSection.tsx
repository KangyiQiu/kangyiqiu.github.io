import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

type SkillItem = {
  name: string;
  level: number;
};

type SkillGroup = {
  title: string;
  items: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning / LLM",
    items: [
      { name: "Prompt Engineering", level: 90 },
      { name: "Agent Workflow", level: 88 },
      { name: "PEFT / LoRA", level: 84 },
      { name: "RAG", level: 82 },
      { name: "Transformers", level: 80 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python", level: 92 },
      { name: "FastAPI", level: 88 },
      { name: "SQLModel", level: 83 },
      { name: "REST APIs", level: 87 },
    //   { name: "WebSockets / SSE", level: 80 },
      { name: "MySQL / ChromaDB", level: 78 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", level: 84 },
    //   { name: "React", level: 82 },
      { name: "Next.js", level: 80 },
    //   { name: "Tailwind CSS", level: 82 },
      { name: "React Native", level: 72 },
      { name: "SwiftUI", level: 68 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 72 },
    //   { name: "Linux", level: 80 },
      { name: "Jupyter", level: 90 },
    //   { name: "NumPy / Scientific Stack", level: 86 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay = 0,
}: {
  name: string;
  level: number;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} y={18}>
      <div className="grid grid-cols-[160px_minmax(0,1fr)_64px] items-center gap-4">
        <div className="body-text font-medium">{name}</div>

        <div className="relative h-[6px] overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900"
            style={{
              width: `${level}%`,
              animation: "skillFill 1s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>

        <div className="body-sm text-right">{level}%</div>
      </div>
    </Reveal>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="snap-section border-b border-stone-300">
      <Container className="px-8 md:px-12 xl:px-16">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="eyebrow mb-2">Skills</p>
            <h2 className="section-title">Tech Stack</h2>
            <p className="body-lg mt-3">
              — Knowledge in Software & AI Engineering —
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-16 gap-y-8 xl:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 80}>
              <div>
                <h3 className="subsection-title mb-4">{group.title}</h3>

                <div className="space-y-4">
                  {group.items.map((item, itemIndex) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      delay={groupIndex * 80 + itemIndex * 60}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
