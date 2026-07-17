import { whyAmerica } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function WhyAmerica() {
  return (
    <section id="america" className="bg-gradient-fade-2 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {whyAmerica.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-lg text-ink-muted md:text-xl">
          {whyAmerica.description}
        </p>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyAmerica.points.map((point) => (
            <li key={point.title} className="surface-card px-6 py-8">
              <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
