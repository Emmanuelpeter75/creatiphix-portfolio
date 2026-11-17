import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            E-commerce & Shopify Experts
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
            Build, Optimize & Scale Your{" "}
            <span className="text-primary">Shopify Store</span> for Maximum Revenue
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            From custom store design to SEO optimization and paid advertising, we provide end-to-end e-commerce solutions that transform browsers into loyal customers.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base px-8">
              <Link 
                href="/pricing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8">
              <Link 
                href="https://api.whatsapp.com/send/?phone=2347072061258&text=Hi%2C+I+would+like+to+get+a+free+audit+for+my+Shopify+store.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Store Audit
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Trusted by e-commerce brands worldwide</p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-xs text-muted-foreground">Stores Designed</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground">Store Audit Completed</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
