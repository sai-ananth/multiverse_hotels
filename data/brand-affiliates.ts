import { withBasePath } from "@/lib/basePath";

export const brandAffiliatesData = {
  title: "OUR BRAND AND AFFILIATES",
  intro: "Multiverse Hotels is growing rapidly, fostering a diverse portfolio of brands that share our commitment to excellence.",
  operatingHotels: [
    {
      name: "Clarion Hotel, Hyderabad",
      description: "This upscale property is independently owned and operated by Multiverse Hotels. It functions under a specialized license from Suba Hotels, the Master Franchisor for Choice Hotels in India.",
      image: withBasePath("/images/clarion-hotels-view.webp")
    },
    {
      name: "Click Hotels, Gachibowli (Opening Soon)",
      description: "A new milestone in our growth, this upcoming project is a direct association between Multiverse Hotels and Suba Hotels. Located in the heart of Hyderabad's tech hub, it is designed to offer smart, high-value stays for the modern professional.",
      image: withBasePath("/images/click-hotels-gachibowli.jpeg")
    }
  ],
  affiliates: [
    {
      name: "Iron Hill Cafe",
      description: "Gourmet experiences."
    },
    {
      name: "Meghavi",
      description: "Wellness and rejuvenation."
    }
  ]
};
