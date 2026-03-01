import { SectionContainer } from "../components/SectionContainer";
import { Button } from "@/components/ui/button";

type MissionSectionProps = {
  title: string;
  description: string;
  id?: string;
};

export function MissionSection({ title, description, id }: MissionSectionProps) {
  return (
    <SectionContainer id={id} className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        
        <p className="mb-8 text-sm leading-relaxed text-foreground md:text-base">
          {description}
        </p>
      </div>
    </SectionContainer>
  );
}
