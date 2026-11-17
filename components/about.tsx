import { CheckCircle, Target, Rocket, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is focused on driving measurable growth for your store.",
  },
  {
    icon: Rocket,
    title: "Growth-Focused",
    description: "We build stores designed to scale with your business as you expand.",
  },
  {
    icon: Users,
    title: "Partner Approach",
    description: "We work alongside you as true partners invested in your success.",
  },
]

const highlights = [
  "Custom Shopify store design tailored to your brand",
  "Conversion rate optimization for maximum sales",
  "SEO strategies that drive organic traffic",
  "Ongoing support and maintenance",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              About Creatiphix Design
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              We Help Brands Build & Grow Profitable Shopify Stores
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              At Creatiphix Design, we specialize in creating high-converting Shopify stores that turn visitors into loyal customers. With years of experience in e-commerce development, we understand what it takes to build an online store that not only looks stunning but also drives real business results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Our team combines strategic thinking with technical expertise to deliver end-to-end solutions. From initial concept and design to launch and ongoing optimization, we handle every aspect of your e-commerce journey so you can focus on what matters most, growing your brand.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Why Brands Choose Us
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">3+</p>
                  <p className="text-xs md:text-sm text-primary-foreground/80">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">5+</p>
                  <p className="text-xs md:text-sm text-primary-foreground/80">Stores Built</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">100%</p>
                  <p className="text-xs md:text-sm text-primary-foreground/80">Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
