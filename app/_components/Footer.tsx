import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram } from "@/lib/icons";
import { socialLinksData } from "@/data/social-links";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

type FooterProps = {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  id?: string;
};

export function Footer({ contact, id }: FooterProps) {
  return (
    <footer id={id} className="bg-primary">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-tight text-primary-foreground">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-foreground">{contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary-foreground mt-0.5" />
                <div>
                  <a href={`mailto:${contact.email}`} className="text-sm text-foreground hover:underline">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">{contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-tight text-primary-foreground">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a 
                href={socialLinksData.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
              </a>
              <a 
                href={socialLinksData.facebook.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
              </a>
              <a 
                href={socialLinksData.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-start justify-start lg:justify-end">
            <div className="text-left lg:text-right">
              <div className="mb-2 flex justify-start lg:justify-end">
                <div className="h-16 w-16 flex items-center justify-center p-3">
                  <Image 
                    src={withBasePath("/logo.svg")} 
                    alt="Multiverse Hotels Logo" 
                    width={64} 
                    height={64}
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="text-xl font-bold uppercase tracking-tight text-primary-foreground">
                Multiverse
              </div>
              <div className="text-xl font-bold uppercase tracking-tight text-primary-foreground">
                Hotels
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-foreground/20 pt-8 text-center">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} Multiverse Hotels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
