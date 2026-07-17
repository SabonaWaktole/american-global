import Image from "next/image";
import { sustainablePortfolio } from "@/data/content";
import { Container } from "@/components/ui/Container";

const sectorImages = [
  "/images/solar.jpg",
  "/images/overview.jpg",
  "/images/hero-fallback.jpg",
  "/images/overview.jpg",
];

export function SustainablePortfolio() {
  return (
    <section id="portfolio" className="bg-gradient-fade-5 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {sustainablePortfolio.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-lg text-ink-muted md:text-xl">
          {sustainablePortfolio.description}
        </p>
        <p className="mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-ink-muted">
          {sustainablePortfolio.hierarchyNote}
        </p>
      </Container>

      <Container className="mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          {sustainablePortfolio.sectors.map((sector, index) => (
            <article
              key={sector.title}
              className="surface-card-soft overflow-hidden !rounded-3xl !p-0"
            >
              <Image
                src={sectorImages[index]}
                alt={sector.title}
                width={640}
                height={360}
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
              <div className="border-t border-brand-200/30 px-6 py-6">
                <h3 className="text-lg font-semibold text-ink">{sector.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  {sector.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
