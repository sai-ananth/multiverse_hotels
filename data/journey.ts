import { withBasePath } from "@/lib/basePath";

export const journeyData = {
  title: "YOUR JOURNEY BEGINS AT MULTIVERSE",
  centerImage: withBasePath("/images/journey-begins.webp"),
  features: [
    {
      icon: "Sparkles",
      title: "Luxury Initiatives",
      description: "Eco-conscious stays with green energy, local sourcing, and waste-free programs."
    },
    {
      icon: "MapPin",
      title: "Room Technology",
      description: "Control lighting, temperature, and services with just a touch for ultimate comfort."
    },
    {
      icon: "Backpack",
      title: "Adventure & Excursions",
      description: "Guided tours, cultural trips, and outdoor adventures unique to each destination."
    },
    {
      icon: "UtensilsCrossed",
      title: "Dining Experiences",
      description: "Enjoy curated menus crafted by world-class chefs, paired with exquisite wines."
    }
  ]
};
