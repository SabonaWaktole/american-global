import { processSteps } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Process() {
  return (
    <section id="process" className="bg-gradient-fade-4 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          How It Works
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-lg text-ink-muted md:text-xl">
          A clear, five-step path from first connection to long-term partnership.
        </p>
      </Container>

      <Container className="mt-16">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.step} className="surface-card px-6 py-8">
              <p className="text-sm font-medium text-accent">Step {step.step}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
