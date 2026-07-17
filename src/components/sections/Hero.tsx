"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { hero, stats } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      try {
        await video.play();
      } catch {
        /* playback may already be running */
      }
    }
    setIsMuted(nextMuted);
  };

  return (
    <section className="bg-gradient-hero">
      <div className="px-5 pt-6 sm:px-10 md:px-14 md:pt-8 lg:px-20">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl ring-1 ring-brand-300/35 shadow-sm">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
            poster="/images/hero-fallback.jpg"
            aria-label="American Global Partner company overview"
            onVolumeChange={() => {
              if (videoRef.current) {
                setIsMuted(videoRef.current.muted);
              }
            }}
          >
            <source src="/videos/company-hero.mp4" type="video/mp4" />
          </video>

          <button
            type="button"
            onClick={toggleSound}
            className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/55"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            aria-pressed={!isMuted}
          >
            {isMuted ? (
              <>
                <VolumeX size={16} strokeWidth={1.75} />
                Unmute
              </>
            ) : (
              <>
                <Volume2 size={16} strokeWidth={1.75} />
                Mute
              </>
            )}
          </button>
        </div>
      </div>

      <Container narrow className="pb-10 pt-12 text-center md:pb-14 md:pt-16">
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

      <Container className="pb-20 pt-4 md:pb-28 md:pt-8">
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
