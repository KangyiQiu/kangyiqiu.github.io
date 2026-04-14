type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="body-text mt-3 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}
