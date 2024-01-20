import api from "@/api";
import { linkSync } from "fs";
import Link from "next/link";

export default async function Home() {
  const caseStudies = await api.caseStudy.list();

  return (
    <article className="grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-8">
      {caseStudies.map((caseStudy) => (
        <Link key={caseStudy.id} href={`/${caseStudy.id}`}>
          <hgroup className="grid gap-2">
            <img
              alt={caseStudy.title}
              src={caseStudy.hero_image}
              height={256}
              className="w-full object-cover"
            />
            <h2 className="text-xl font-bold">{caseStudy.title}</h2>
            <p className="opacity-80">{caseStudy.teaser}</p>
          </hgroup>
        </Link>
      ))}
    </article>
  );
}
