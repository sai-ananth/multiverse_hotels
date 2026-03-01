import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "card";
  id?: string;
};

export function SectionContainer({
  children,
  className = "",
  background = "default",
  id,
}: SectionContainerProps) {
  const bgClass = {
    default: "bg-background",
    muted: "bg-muted",
    card: "bg-card",
  }[background];

  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
