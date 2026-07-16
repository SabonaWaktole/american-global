"use client";

import { hero, stats } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-gradient-hero">
      <Container narrow className="pt-14 pb-10 text-center md:pt-20 md:pb-14">
        <p className="text-sm font-medium text-ink-muted md:text-base">
          {hero.subheadline}
        </p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-ink md:text-7xl md:leading-[1.05]">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-[640px] text-lg text-ink-muted md:text-2xl md:leading-snug">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact" size="large">
            {hero.primaryCta}
          </Button>
          <Button href="#services" variant="secondary" size="large">
            {hero.secondaryCta}
          </Button>
        </div>
      </Container>

      <div className="px-5 sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-3xl ring-1 ring-brand-300/35 shadow-sm">
          <video
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-fallback.jpg"
            aria-label="American Global Partner company overview"
          >
            <source src="/videos/company-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <Container className="pb-20 pt-16 md:pb-28 md:pt-20">
        <dl className="surface-card-feature grid grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:gap-8 md:rounded-3xl md:px-10 md:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-ink-muted md:text-base">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
