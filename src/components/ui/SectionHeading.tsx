import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl md:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
