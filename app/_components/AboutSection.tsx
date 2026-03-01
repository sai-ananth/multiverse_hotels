import Image from "next/image";
import { SectionContainer } from "../components/SectionContainer";
import { type LucideIcon, HandPlatterIcon, ConciergeBellIcon, Building2Icon, LightbulbIcon } from "lucide-react";

type AboutSectionProps = {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  id?: string;
};

export function AboutSection({ titleLine1, titleLine2, description, image, id }: AboutSectionProps) {
  const features: Array<{ icon: LucideIcon; label: string }> = [
    { icon: LightbulbIcon, label: "INITIATIVES" },
    { icon: HandPlatterIcon, label: "TREATMENTS" },
    { icon: ConciergeBellIcon, label: "EXPERIENCES" },
    { icon: Building2Icon, label: "HOSPITALITY" },
  ];

  return (
    <SectionContainer id={id} className="bg-primary py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {titleLine1}
        </h2>
        <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {titleLine2}
        </h2>
      </div>
      
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt="Click Hotels Building"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="flex flex-col justify-start">
          <p className="mb-8 text-sm leading-relaxed text-foreground md:text-base">
            {description}
          </p>
          
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center border border-primary-foreground/20 p-6 text-center"
                  >
                    <IconComponent className="mb-3 h-10 w-10 text-primary-foreground" /> 
                    <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      {feature.label}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
