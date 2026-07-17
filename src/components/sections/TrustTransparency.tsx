import { trustTransparency } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function TrustTransparency() {
  return (
    <section id="trust" className="bg-gradient-fade-6 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {trustTransparency.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-lg text-ink-muted md:text-xl">
          {trustTransparency.description}
        </p>
      </Container>

      <Container className="mt-16">
        <ul className="mx-auto max-w-3xl space-y-4">
          {trustTransparency.disclosures.map((item) => (
            <li
              key={item}
              className="surface-card px-6 py-4 text-base leading-relaxed text-ink-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
