"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { hero } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  const VISIBILITY_THRESHOLD = 0.15;

  useEffect(() => {
    const container = videoContainerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    video.muted = false;
    video.volume = 1;

    const playIfVisible = () => {
      if (!videoContainerRef.current || !videoRef.current) return;
      const rect = videoContainerRef.current.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const ratio = Math.max(0, visibleHeight) / rect.height;
      if (ratio >= VISIBILITY_THRESHOLD) {
        videoRef.current.play().catch(() => {});
      }
    };

    const startPlayback = async () => {
      try {
        await video.play();
      } catch {
        /* autoplay may be blocked until user interaction */
      }
    };

    startPlayback();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.intersectionRatio >= VISIBILITY_THRESHOLD) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: [0, VISIBILITY_THRESHOLD, 0.5, 1] }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
    }
    setIsMuted(nextMuted);

    if (!video.paused) return;
    try {
      await video.play();
    } catch {
      /* playback blocked */
    }
  };

  return (
    <section className="bg-gradient-hero">
      <div className="px-5 pt-6 sm:px-10 md:px-14 md:pt-8 lg:px-20">
        <div
          ref={videoContainerRef}
          className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl ring-1 ring-brand-300/35 shadow-sm"
        >
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            loop
            playsInline
            preload="auto"
            poster="/images/hero-fallback.jpg"
            aria-label="American Global Partner — global people connecting with America"
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

      <Container narrow className="pb-20 pt-12 text-center md:pb-28 md:pt-16">
        <h1 className="text-5xl font-semibold tracking-tight text-ink md:text-7xl md:leading-[1.05]">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-[720px] text-lg text-ink-muted md:text-2xl md:leading-snug">
          {hero.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact" size="large">
            {hero.primaryCta}
          </Button>
          <Button href="#benefits" variant="secondary" size="large">
            {hero.secondaryCta}
          </Button>
          <Button href="#process" variant="ghost" size="large">
            {hero.tertiaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
