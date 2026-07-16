import { trustPartners } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function TrustedBy() {
  return (
    <section
      className="border-y border-line py-6"
      aria-label="Partnerships and standards"
    >
      <Container>
        <p className="text-center text-sm leading-loose text-ink-muted">
          {trustPartners.join(" · ")}
        </p>
      </Container>
    </section>
  );
}
