import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-green-300 border-t-2">
      <div className="container flex items-center justify-center px-8 sm:px-12 md:px-24 lg:px-32 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Barbers</h3>
            <p className="text-sm text-foreground">
              Professional Mens Barbing Salon
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaTwitter, link: siteConfig.links.twitter },
                { icon: FaFacebook, link: siteConfig.links.facebook },
                { icon: FaInstagram, link: siteConfig.links.instagram },
              ].map(({ icon: Icon, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              {[
                "Hot Shave",
                "Hair Coloring",
                "Beard Trimming and Styling",
                "Haircuts with Different Styles and Shapes",
                "Hair Treatments",
                "Styling for Special Occasions",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: siteConfig.contact.phone },
                { icon: Mail, text: siteConfig.contact.email },
                { icon: MapPin, text: siteConfig.contact.address },
              ].map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-foreground">
              Subscribe to our newsletter for tips and special offers.
            </p>
            <form className="flex flex-col gap-2">
              <Input type="email" placeholder="Your email" className="w-full" />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
</div>
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maxim Barbers. All rights reserved.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            {[
              ["Privacy Policy", "/privacy-policy"],
              ["Terms of Service", "/terms-of-service"],
              ["Sitemap", "/sitemap.xml"],
            ].map(([title, href], index) => (
              <Link
                key={index}
                href={href}
                className="text-sm hover:text-primary transition-colors"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      
    </footer>
  );
}
