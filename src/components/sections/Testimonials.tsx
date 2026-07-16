import { testimonials } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className="bg-gradient-fade-5 py-20 md:py-28">
      <Container narrow>
        <figure className="surface-card-feature px-8 py-12 text-center md:rounded-3xl md:px-14 md:py-16">
          <blockquote className="text-xl leading-relaxed text-ink md:text-3xl md:leading-snug">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-base text-ink-muted">
            <cite className="not-italic font-medium text-ink">
              {testimonial.author}
            </cite>
            {" · "}
            {testimonial.role}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
