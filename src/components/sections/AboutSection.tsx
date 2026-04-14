import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

function AboutCenterGraphic() {
    return (
      <div className="relative mx-auto translate-x-2 translate-y-1 flex h-[360px] w-[360px] items-center justify-center">
        {/* 外层很浅的圆圈 */}
        <div className="absolute h-[320px] w-[320px] rounded-full border border-slate-200/90" />
        <div className="absolute h-[262px] w-[262px] rounded-full border border-slate-200/80" />
        <div className="absolute h-[204px] w-[204px] rounded-full border border-sky-100/90" />
  
        {/* 连接线：偏向左右信息块 */}
        <div className="absolute left-[48px] top-[112px] h-px w-[92px] rotate-[22deg] bg-slate-300" />
        <div className="absolute right-[52px] top-[112px] h-px w-[88px] -rotate-[32deg] bg-slate-300" />
        <div className="absolute left-[72px] bottom-[106px] h-px w-[86px] -rotate-[18deg] bg-slate-300" />
        <div className="absolute right-[68px] bottom-[98px] h-px w-[92px] rotate-[28deg] bg-slate-300" />
  
        {/* 小圆点 */}
        <div className="absolute left-[42px] top-[72px] h-4 w-4 rounded-full bg-slate-900 shadow-[0_0_0_6px_rgba(14,165,233,0.08)]" />
        <div className="absolute right-[42px] top-[104px] h-3.5 w-3.5 rounded-full bg-slate-400" />
        <div className="absolute left-[66px] bottom-[95px] h-3.5 w-3.5 rounded-full bg-slate-500" />
        <div className="absolute right-[58px] bottom-[78px] h-4 w-4 rounded-full bg-slate-900 shadow-[0_0_0_6px_rgba(56,189,248,0.08)]" />
  
        {/* 中心发光底 */}
        <div className="absolute h-[138px] w-[138px] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.18),rgba(15,23,42,0)_72%)] blur-xl" />
  
        {/* 中心 LogoQ 风格主体 */}
        {/* 中心 LogoQ（无背景版） */}
        <div className="relative z-10 flex h-[140px] w-[140px] items-center justify-center">
        <svg
            viewBox="0 0 100 100"
            className="h-[90px] w-[90px]"
            fill="none"
        >
            {/* 外框 Q */}
            <path
            d="M15 15 H75 V75 H15 Z"
            stroke="#0f172a"   // 👈 黑色（slate-900）
            strokeWidth="10"
            strokeLinejoin="miter"
            />

            {/* 内部空心 */}
            <rect
            x="30"
            y="30"
            width="30"
            height="30"
            fill="white"      // 👈 背景色（跟页面一致）
            />

            {/* Q 的斜腿 */}
            <path
            d="M55 55 L85 85"
            stroke="#0f172a"
            strokeWidth="10"
            strokeLinecap="square"
            />
        </svg>
        </div>
  
        {/* 底部说明文字 */}
        <div className="absolute bottom-[78px] left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="graphic-caption">ML × SYSTEMS</div>
        </div>
      </div>
    );
  }

function InfoLabel({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="text-right">
      <div className="subsection-label">{label}</div>
      <div className="body-text mt-1">{value}</div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="snap-section border-b border-stone-300">
      <Container className="px-8 md:px-12 xl:px-16">
        <Reveal>
          <div className="mb-8">
            <p className="eyebrow mb-2">About</p>
            <h2 className="section-title">Background & Focus</h2>
            <p className="body-text mt-4 max-w-4xl">
            I work on machine learning systems, LLMs, and building practical AI products.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-y-8 xl:grid-cols-[1.15fr_0.9fr_0.95fr] xl:gap-x-10">
          {/* Left Column */}
          <div className="space-y-8">
            <Reveal delay={40}>
              <div>
                <h3 className="subsection-label mb-3">Education</h3>

                <div className="space-y-3">
                  <div>
                    <div className="body-text font-semibold">
                      Georgia Institute of Technology
                    </div>
                    {/* <div className="body-text mt-1 text-slate-700">
                      College of Computing
                    </div> */}
                    <div className="body-text">
                      Master of Science in Computer Science (MSCS)
                    </div>
                  </div>

                  <div>
                    <div className="body-text font-semibold">Peking University</div>
                    {/* <div className="body-text mt-1 text-slate-700">
                      School of Electronics Engineering and Computer Science
                    </div> */}
                    <div className="body-text">
                      Bachelor of Computer Science
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h3 className="subsection-label mb-3">
                  Research & Technical Interests
                </h3>
                <ul className="body-text space-y-2">
                  {/* <li>Machine Learning Systems</li> */}
                  <li>LLMs</li>
                  <li>AI Engineering & Deployment</li>
                  <li>NLP and Representation Learning</li>
                  <li>Efficient Inference</li>
                  {/* <li>Technical Writing and Knowledge Sharing</li> */}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
            <div>
                <h3 className="subsection-label mb-3">
                Publications
                </h3>

                <div className="body-text space-y-2">
                <a
                    href="https://arxiv.org/abs/2409.10760"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition hover:text-slate-900"
                >
                    {/* Semantics-Preserving Emoji Recommendation with LLMs */}
                    Emoji Recommendation with LLMs (BigData 2024)
                </a>

                <a
                    href="https://ieeexplore.ieee.org/document/9712544"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition hover:text-slate-900"
                >
                    {/* Heterogeneous Memory Architecture for AIoT (ASP-DAC) */}
                    Memory Architecture for AIoT (ASP-DAC 2022)
                </a>
                </div>
            </div>
            </Reveal>
          </div>

          {/* Center Graphic */}
          <div className="flex items-center justify-center">
            <Reveal delay={90}>
              <AboutCenterGraphic />
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between gap-8">
            <Reveal delay={60}>
              <InfoLabel
                label="Current Focus"
                value="LLM Systems · Applied AI · Full-stack Development"
              />
            </Reveal>

            <Reveal delay={160}>
              <InfoLabel
                label="Tech Stack"
                value="15+ Languages & Frameworks"
              />
            </Reveal>

            <Reveal delay={210}>
              <InfoLabel
                label="Work Themes"
                value="AI Products · Agents · Full-stack Systems"
              />
            </Reveal>
            
            <Reveal delay={110}>
            <InfoLabel
                label="Dev Experience"
                value="2+ Years"
            />
            </Reveal>

            <Reveal delay={260}>
            <InfoLabel
                label="Website Visitors"
                value="10K+"
            />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
