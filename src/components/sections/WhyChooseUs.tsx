import { whyChooseUs } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyChooseUs() {
  const pillars = whyChooseUs.slice(0, 3);

  return (
    <section className="bg-ink py-24 text-white md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-4">
            <p className="text-sm text-white/50">What defines us</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Built on institutional discipline
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              Government agreements, ESG alignment, and transparent reporting —
              from first conversation to final distribution.
            </p>
          </ScrollReveal>

          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8">
            {pillars.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <article>
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
