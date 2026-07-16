import { services } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="bg-gradient-fade-2 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          What we offer
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-lg text-ink-muted md:text-xl">
          Secure, high-yield renewable energy opportunities backed by government
          agreements and structured for long-term partners.
        </p>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.id}
              className={cn(
                "px-6 py-8 md:px-8",
                index % 2 === 0 ? "surface-card" : "surface-card-soft"
              )}
            >
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
