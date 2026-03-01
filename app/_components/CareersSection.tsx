import { SectionContainer } from "../components/SectionContainer";

type CareerBenefit = {
  title: string;
  description: string;
};

type PartnerInfo = {
  title: string;
  description: string;
};

type CareersSectionProps = {
  multiverseLife: {
    title: string;
    intro: string;
    benefits: CareerBenefit[];
  };
  partnerWithUs: {
    title: string;
    intro: string;
    opportunities: PartnerInfo[];
  };
  id?: string;
};

export function CareersSection({ multiverseLife, partnerWithUs, id }: CareersSectionProps) {
  return (
    <SectionContainer id={id} className="bg-secondary py-16 md:py-24">
      <div className="mb-16">
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {multiverseLife.title}
        </h2>
        
        <p className="mb-8 text-sm leading-relaxed text-foreground md:text-base">
          {multiverseLife.intro}
        </p>
        
        <div className="space-y-4">
          {multiverseLife.benefits.map((benefit, index) => (
            <div key={index}>
              <p className="text-sm leading-relaxed text-foreground">
                <strong>{benefit.title}:</strong> {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          {partnerWithUs.title}
        </h2>
        
        <p className="mb-8 text-sm leading-relaxed text-foreground md:text-base">
          {partnerWithUs.intro}
        </p>
        
        <div className="space-y-2">
          {partnerWithUs.opportunities.map((opportunity, index) => (
            <p key={index} className="text-sm leading-relaxed text-foreground">
              <strong>{opportunity.title}:</strong> {opportunity.description}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
