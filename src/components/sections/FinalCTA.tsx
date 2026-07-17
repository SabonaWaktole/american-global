import { contact, finalCta } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-gradient-fade-7 py-20 md:py-28">
      <Container narrow className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl md:leading-tight">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-lg text-ink-muted md:text-xl">
          {finalCta.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${contact.email}`} size="large">
            {finalCta.primaryCta}
          </Button>
          <Button href={contact.phoneHref} variant="secondary" size="large">
            {finalCta.secondaryCta}
          </Button>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="surface-card mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-8 py-8 text-center text-base text-ink-muted md:flex-row md:gap-12 md:px-10">
          <p>
            {contact.address}, {contact.city} {contact.zip}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="text-accent transition-colors hover:text-accent-hover"
          >
            {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="text-accent transition-colors hover:text-accent-hover"
          >
            {contact.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
