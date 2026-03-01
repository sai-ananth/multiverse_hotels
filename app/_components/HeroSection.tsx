import Image from "next/image";
import { Navigation } from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram } from "@/lib/icons";
import { socialLinksData } from "@/data/social-links";

type HeroSectionProps = {
  title: string;
  backgroundImage: string;
  id?: string;
};

export function HeroSection({ title, backgroundImage, id }: HeroSectionProps) {
  return (
    <section id={id} className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Navigation />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-32">
        

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold uppercase tracking-[0.15em] text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
          <div className="size-9 p-2 rounded-full bg-muted/30 ">
            <a href={socialLinksData.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-white/80">
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            </a>
          </div>
          <div className="size-9 p-2 rounded-full bg-muted/30 ">
            <a href={socialLinksData.facebook.url} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-white/80">
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
            </a>
          </div>
          <div className="size-9 p-2 rounded-full bg-muted/30 ">
            <a href={socialLinksData.instagram.url} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-white/80">
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>


      <div className="absolute bottom-32 left-0 right-0 z-10 hidden md:block">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end gap-16">
            <div className="text-center text-white">
              <div className="text-xs uppercase tracking-wider">Friendly Commitment</div>
              <div className="mt-2 text-5xl font-bold">80%</div>
            </div>
            <div className="text-center text-white">
              <div className="text-xs uppercase tracking-wider">Dining Experiences</div>
              <div className="mt-2 text-5xl font-bold">86+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

