import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/60 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}
