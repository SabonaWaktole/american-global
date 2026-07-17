import { audience, globalVision } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function GlobalVision() {
  return (
    <section id="vision" className="bg-gradient-fade-1 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {globalVision.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {globalVision.description}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {globalVision.secondary}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <p className="text-center text-base font-medium text-ink">
            {globalVision.platformIntro}
          </p>
          <ul className="mt-8 space-y-4">
            {globalVision.platformItems.map((item) => (
              <li
                key={item}
                className="surface-card-soft px-6 py-4 text-base leading-relaxed text-ink-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card-feature mx-auto mt-12 max-w-3xl px-6 py-5">
          <p className="text-sm leading-relaxed text-ink-muted">
            {globalVision.dreamsNote}
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {audience.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {audience.description}
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {audience.groups.map((group) => (
              <li
                key={group}
                className="rounded-full border border-brand-200/50 bg-white/70 px-4 py-2 text-sm text-ink-muted"
              >
                {group}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
