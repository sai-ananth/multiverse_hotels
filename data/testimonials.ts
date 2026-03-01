import { withBasePath } from "@/lib/basePath";

export const testimonialsData = {
  title: "WHAT OUR GUESTS ARE SAYING",
  description: "Discover the experiences of our valued guests who have found comfort, elegance, and unforgettable memories at Multiverse Hotels.",
  image: withBasePath("/images/testimonials.webp"),
  stats: [
    {
      value: "300+",
      label: "Global Guests Welcomed"
    },
    {
      value: "85%",
      label: "Eco-Friendly Initiatives"
    }
  ],
  testimonials: [
    {
      rating: 5,
      text: "From the moment we arrived, everything was flawless. The staff went above and beyond to make our stay memorable. The room was elegant, the dining exceptional, and the spa experience truly rejuvenating.",
      name: "Name",
      location: "Hyderabad",
      avatar: ""
    },
    {
      rating: 4,
      text: "From the moment we arrived, everything was flawless. The staff went above and beyond to make our stay memorable. The room was elegant, the dining exceptional, and the spa experience truly rejuvenating.",
      name: "Name",
      location: "Hyderabad",
      avatar: ""
    }
  ]
};
