import Image from "next/image";
import { SectionContainer } from "../components/SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@/lib/icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

type Testimonial = {
  rating: number;
  text: string;
  name: string;
  location: string;
  avatar: string;
};

type Stat = {
  value: string;
  label: string;
};

type TestimonialsSectionProps = {
  title: string;
  description: string;
  image: string;
  stats: Stat[];
  testimonials: Testimonial[];
  id?: string;
};

export function TestimonialsSection({
  title,
  description,
  image,
  stats,
  testimonials,
  id,
}: TestimonialsSectionProps) {
  return (
    <SectionContainer id={id} className="bg-secondary py-16 md:py-24">
      <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
        TESTIMONIALS
      </div>

      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        <div className="flex items-end">
          <p className="text-sm leading-relaxed text-foreground">
            {description}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="relative mb-8 aspect-[4/3] overflow-hidden">
            <Image
              src={image}
              alt="Testimonials"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-xs uppercase tracking-wider text-foreground">
                  {stat.label}
                </div>
                <div className="text-5xl font-bold text-foreground">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-primary-foreground/20 bg-white p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon={i < testimonial.rating ? faStarSolid : faStar} 
                    className="h-4 w-4 text-yellow-500" 
                  />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-foreground">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                  {testimonial.avatar && (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
