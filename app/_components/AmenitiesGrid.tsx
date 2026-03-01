import Image from "next/image";
import { SectionContainer } from "../components/SectionContainer";
import { Button } from "@/components/ui/button";

type PhilosophyPoint = {
  title: string;
  description: string;
};

type AmenitiesGridProps = {
  title: string;
  subtitle?: string;
  image: string;
  philosophyPoints: PhilosophyPoint[];
  id?: string;
};

export function AmenitiesGrid({ title, subtitle, image, philosophyPoints, id }: AmenitiesGridProps) {
  return (
    <SectionContainer id={id} className="bg-secondary py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image}
            alt="The Multiverse Experience"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          
          {subtitle && (
            <p className="mb-8 text-sm leading-relaxed text-foreground md:text-base">
              {subtitle}
            </p>
          )}
          
          <div className="mb-8 space-y-6">
            {philosophyPoints.map((point, index) => (
              <div key={index}>
                <p className="text-sm leading-relaxed text-foreground md:text-base">
                  <strong>{point.title}</strong> {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
