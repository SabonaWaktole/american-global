import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
  narrow?: boolean;
}

export function Container({
  children,
  className,
  as: Component = "div",
  id,
  narrow = false,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full px-5 sm:px-10 md:px-14 lg:px-20",
        narrow ? "max-w-[980px]" : "max-w-[1440px]",
        className
      )}
    >
      {children}
    </Component>
  );
}
