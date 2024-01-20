import api from "@/api";
import Link from "next/link";

export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const caseStudy = await api.caseStudy.fetch(Number(id));

  return (
    <article className="grid gap-8">
      <Link href="/" className="opacity-80">
        ← Back to list
      </Link>
      <hgroup className="grid gap-8">
        <h2 className="text-5xl font-medium">{caseStudy.title}</h2>
        <img
          alt={caseStudy.title}
          src={caseStudy.hero_image}
          height={256}
          className="w-full object-cover h-[256px]"
        />
      </hgroup>
      {caseStudy.sections.map((section, index) => (
        <section className="grid" gap-2 key={String(index)}>
          {section.title ? (
            <h3 className="text-lg font-bold">{section.title}</h3>
          ) : null}
          <section className="grid gap-4">
            {section.body_elements.map((element, index) =>
              typeof element === "string" ? (
                <p key={index}>{element}</p>
              ) : (
                <img
                  key={index}
                  alt={section.title || caseStudy.title}
                  height={320}
                  className="w-full object-cover"
                  src={element.image_url}
                />
              )
            )}
          </section>
        </section>
      ))}
    </article>
  );
}
