import Container from "./Container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-300 py-8">
      <Container>
        <div className="body-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={siteConfig.blogUrl} target="_blank" rel="noreferrer">
              Blog
            </a>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}