'use client';

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/90 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center p-1.5">
            <Image 
              src={isScrolled ? withBasePath("/logo.svg") : withBasePath("/logo-white.svg")}
              alt="Multiverse Hotels Logo" 
              width={40} 
              height={40}
              className="h-full w-full"
            />
          </div>
          <div className={`${isScrolled ? 'text-primary-foreground' : 'text-white'}`}>
            <div className="text-xs font-semibold uppercase tracking-wider">Multiverse</div>
            <div className="text-xs uppercase tracking-wide">Hotels</div>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Button  variant={'ghost'}
            onClick={() => scrollToSection('hero')}
            className={`text-sm transition-colors ${
              isScrolled ? 'text-primary-foreground hover:text-primary-foreground/80' : 'text-white hover:text-white/80'
            }`}
          >
            Home
          </Button>
          <Button  variant={'ghost'}
            onClick={() => scrollToSection('about')}
            className={`text-sm transition-colors ${
              isScrolled ? 'text-primary-foreground hover:text-primary-foreground/80' : 'text-white hover:text-white/80'
            }`}
          >
            About
          </Button>
          <Button  variant={'ghost'}
            onClick={() => scrollToSection('careers')}
            className={`text-sm transition-colors ${
              isScrolled ? 'text-primary-foreground hover:text-primary-foreground/80' : 'text-white hover:text-white/80'
            }`}
          >
            Careers
          </Button>
          <Button  variant={'ghost'}
            onClick={() => scrollToSection('footer')}
            className={`text-sm transition-colors ${
              isScrolled ? 'text-primary-foreground hover:text-primary-foreground/80' : 'text-white hover:text-white/80'
            }`}
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}
