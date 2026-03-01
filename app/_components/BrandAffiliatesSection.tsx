import Image from "next/image";
import { SectionContainer } from "../components/SectionContainer";

type Hotel = {
  name: string;
  description: string;
  image: string;
};

type Affiliate = {
  name: string;
  description: string;
};

type BrandAffiliatesSectionProps = {
  title: string;
  intro: string;
  operatingHotels: Hotel[];
  affiliates: Affiliate[];
  id?: string;
};

export function BrandAffiliatesSection({
  title,
  intro,
  operatingHotels,
  affiliates,
  id,
}: BrandAffiliatesSectionProps) {
  return (
    <SectionContainer id={id} className="bg-primary py-16 md:py-24">
      <div className="mb-8">
        <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight text-primary-foreground md:text-4xl">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-foreground md:text-base">
          {intro}
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mb-6 text-lg font-bold text-foreground">
          Operating & Partner Hotels
        </h3>

        {operatingHotels.map((hotel, index) => (
          <div key={index} className="mb-12">
            <p className="mb-6 text-sm leading-relaxed text-foreground">
              <strong>{hotel.name}:</strong> {hotel.description}
            </p>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold text-foreground">Affiliates</h3>
        <ul className="list-inside space-y-2">
          {affiliates.map((affiliate, index) => (
            <li key={index} className="text-sm text-foreground">
              <strong>{affiliate.name}:</strong> {affiliate.description}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
