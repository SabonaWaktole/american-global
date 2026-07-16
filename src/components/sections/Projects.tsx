import Image from "next/image";
import { projects } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section id="projects" className="bg-gradient-fade-3 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Featured projects
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-lg text-ink-muted md:text-xl">
          Government-backed renewable energy infrastructure worldwide.
        </p>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="surface-card-soft overflow-hidden !rounded-3xl !p-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={480}
                height={360}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="border-t border-brand-200/30 px-6 py-6">
                <p className="text-sm text-ink-muted">{project.location}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
