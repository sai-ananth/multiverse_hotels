import Image from "next/image";
import { SectionContainer } from "../components/SectionContainer";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type JourneySectionProps = {
  title: string;
  features: Feature[];
  centerImage: string;
  id?: string;
};

export function JourneySection({ title, features, centerImage, id }: JourneySectionProps) {
  return (
    <SectionContainer id={id} className="bg-primary py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 flex flex-col justify-between">
          {features.slice(0, 2).map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="border border-primary-foreground/20 p-8 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={centerImage}
              alt="Journey center image"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-between">
          {features.slice(2, 4).map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index + 2}
                className="border border-primary-foreground/20 p-8 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
