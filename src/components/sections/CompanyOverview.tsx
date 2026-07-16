import Image from "next/image";
import { companyOverview, missionVision, whyChooseUs } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function CompanyOverview() {
  const highlights = whyChooseUs.slice(0, 3);
  const cardStyles = ["surface-card-soft", "surface-card", "surface-card-soft"];

  return (
    <section id="overview" className="bg-gradient-fade-1 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl md:leading-tight">
              {companyOverview.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {companyOverview.description}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {companyOverview.secondary}
            </p>
            <div className="surface-card-feature mt-8 px-6 py-5">
              <p className="text-lg leading-relaxed text-ink">
                {missionVision.mission}
              </p>
            </div>
          </div>

          <Image
            src="/images/overview.jpg"
            alt="Renewable energy infrastructure development"
            width={800}
            height={560}
            className="w-full rounded-3xl object-cover ring-1 ring-brand-300/25 shadow-sm"
          />
        </div>

        <ul className="mt-20 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <li key={item.title} className={cn(cardStyles[index], "px-6 py-8")}>
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
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
