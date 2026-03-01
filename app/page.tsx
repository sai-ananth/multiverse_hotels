import type { Metadata } from "next";
import { HeroSection } from "./_components/HeroSection";
import { AboutSection } from "./_components/AboutSection";
import { BrandAffiliatesSection } from "./_components/BrandAffiliatesSection";
import { AmenitiesGrid } from "./_components/AmenitiesGrid";
import { MissionSection } from "./_components/MissionSection";
import { JourneySection } from "./_components/JourneySection";
import { CareersSection } from "./_components/CareersSection";
import { Footer } from "./_components/Footer";
import { Sparkles, MapPin, Backpack, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { heroData } from "@/data/hero";
import { aboutData } from "@/data/about";
import { amenitiesData } from "@/data/amenities";
import { brandAffiliatesData } from "@/data/brand-affiliates";
import { missionData } from "@/data/mission";
import { journeyData } from "@/data/journey";
import { careersData } from "@/data/careers";
import { footerData } from "@/data/footer";

export const metadata: Metadata = {
  title: "Multiverse Hotels | Luxury Accommodation Beyond the Ordinary",
  description: "Experience luxury redefined at Multiverse Hotels. Discover unparalleled comfort and elegance across 50+ countries with world-class amenities and personalized service.",
};

export default function Home() {

  const iconMap: Record<string, LucideIcon> = {
    Sparkles,
    MapPin,
    Backpack,
    UtensilsCrossed,
  };

  const journeyFeatures = journeyData.features.map((feature: { icon: string; title: string; description: string }) => ({
    ...feature,
    icon: iconMap[feature.icon] || Sparkles,
  }));

  return (
    <main>
      <HeroSection
        id="hero"
        title={heroData.title}
        backgroundImage={heroData.backgroundImage}
      />

      <AboutSection
        id="about"
        titleLine1={aboutData.titleLine1}
        titleLine2={aboutData.titleLine2}
        description={aboutData.description}
        image={aboutData.image}
      />

       <AmenitiesGrid
        id="amenities"
        title={amenitiesData.title}
        subtitle={amenitiesData.subtitle}
        image={amenitiesData.image}
        philosophyPoints={amenitiesData.philosophyPoints}
      />
      
      <BrandAffiliatesSection
        id="brands"
        title={brandAffiliatesData.title}
        intro={brandAffiliatesData.intro}
        operatingHotels={brandAffiliatesData.operatingHotels}
        affiliates={brandAffiliatesData.affiliates}
      />

      <MissionSection
        id="mission"
        title={missionData.title}
        description={missionData.description}
      />

      <JourneySection
        id="journey"
        title={journeyData.title}
        features={journeyFeatures}
        centerImage={journeyData.centerImage}
      />

      {/* might be needed in the future */}
      {/* <TestimonialsSection
        id="testimonials"
        title={testimonialsData.title}
        description={testimonialsData.description}
        image={testimonialsData.image}
        stats={testimonialsData.stats}
        testimonials={testimonialsData.testimonials}
      /> */}

      <CareersSection
        id="careers"
        multiverseLife={careersData.multiverseLife}
        partnerWithUs={careersData.partnerWithUs}
      />

      <Footer
        id="footer"
        contact={footerData.contact}
      />
    </main>
  );
}
