import { partnerBenefits } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function PartnerBenefits() {
  return (
    <section id="benefits" className="bg-gradient-fade-3 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {partnerBenefits.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-lg text-ink-muted md:text-xl">
          {partnerBenefits.description}
        </p>
      </Container>

      <Container className="mt-16">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {partnerBenefits.items.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                "px-6 py-8",
                index % 2 === 0 ? "surface-card" : "surface-card-soft"
              )}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100/80 text-accent">
                <Icon name={item.icon} size={22} />
              </div>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
