import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SidebarNav from "@/components/layout/SidebarNav";
import LeftVisual from "@/components/layout/LeftVisual";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 左侧深色视觉区：40% */}
      <div className="fixed left-0 top-0 h-screen w-[40%]">
        <LeftVisual />
        <SidebarNav />
      </div>

      {/* 右侧内容区：60% */}
      <div className="ml-[40%] w-[60%] bg-stone-100">
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}