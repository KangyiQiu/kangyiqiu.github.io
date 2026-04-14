import { IconGithub, IconLinkedIn, IconMail } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/data/site";

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(isMailto
        ? {}
        : { target: "_blank", rel: "noreferrer" })}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 transition hover:bg-slate-700"
    >
      {children}
    </a>
  );
}

export default function ContactSocials() {
  return (
    <div className="mt-8 text-center">
      <p className="body-text">
        Prefer email?{" "}
        <a href={`mailto:${siteConfig.email}`} className="link-accent">
          {siteConfig.email}
        </a>
      </p>

      <p className="body-text mt-3">
        GitHub:{" "}
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="link-accent"
        >
          {siteConfig.githubUrl}
        </a>
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <SocialButton href={siteConfig.linkedinUrl} label="LinkedIn">
          <IconLinkedIn className="h-5 w-5 text-slate-100" />
        </SocialButton>

        <SocialButton href={siteConfig.githubUrl} label="GitHub">
          <IconGithub className="h-5 w-5 text-slate-100" />
        </SocialButton>

        <SocialButton href={`mailto:${siteConfig.email}`} label="Email">
          <IconMail className="h-5 w-5 text-slate-100" />
        </SocialButton>
      </div>
    </div>
  );
}
