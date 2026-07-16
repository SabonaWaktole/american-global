import { industries } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="bg-light py-24 md:py-[120px]">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Powering the Global Energy Transition"
            description="We develop and connect investors to renewable energy projects across solar, wind, hydro, biomass, and energy storage sectors worldwide."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.title} delay={index * 60}>
              <div className="rounded-3xl border border-border/40 bg-white p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl font-semibold text-text-primary">
                  {industry.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {industry.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
