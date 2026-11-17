import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                Ready to Launch Your E-commerce Empire?
              </h3>
              <p className="mt-2 text-primary-foreground/80">
                {"Let's build a Shopify store that drives real results."}
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="shrink-0"
            >
              <Link 
                href="/pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Project
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo.png"
              alt="Creatiphix Design"
              width={48}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 text-center md:text-left max-w-xs">
              Crafting high-converting Shopify stores and e-commerce solutions that drive growth and revenue.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col items-center md:items-start gap-2">
              <Link href="#services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Services
              </Link>
              <Link href="#testimonials" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Link 
                href="https://web.facebook.com/profile.php?id=61569988424898" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="https://www.instagram.com/creatiphix_d/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://x.com/creatiphix_d/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Creatiphix Design Studio. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            Powered by Creativity & Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
