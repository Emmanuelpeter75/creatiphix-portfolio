import { ShoppingCart, Package, Search, ClipboardCheck, Megaphone, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: ShoppingCart,
    title: "Shopify Website Design",
    description: "We craft stunning, high-converting Shopify stores tailored to your brand. Our custom designs focus on user experience and seamless checkout flows that turn visitors into paying customers.",
  },
  {
    icon: Package,
    title: "Dropshipping Websites",
    description: "Launch your dropshipping empire with our automated, ready-to-sell store setups. We integrate reliable suppliers and optimize your product pages for maximum conversions from day one.",
  },
  {
    icon: Search,
    title: "SEO Specialist",
    description: "Dominate organic search results with our proven e-commerce SEO strategies. We optimize your product pages, store architecture, and content to drive sustainable, free traffic to your store.",
  },
  {
    icon: ClipboardCheck,
    title: "Store Audits",
    description: "Get a comprehensive analysis of your store&apos;s performance with actionable insights. Our deep-dive reviews identify conversion bottlenecks and UI/UX improvements to boost your sales.",
  },
  {
    icon: Megaphone,
    title: "Ads Marketing",
    description: "Scale your e-commerce sales with data-driven paid advertising strategies. From Facebook to Google Ads, we create and manage campaigns that deliver measurable ROI and growth.",
  },
  {
    icon: RefreshCw,
    title: "Store Redesign",
    description: "Redesign your store for maximum sales and a modern layout. We revamp outdated designs into sleek, high-converting storefronts that reflect your brand and captivate customers.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Complete E-commerce Solutions for Your Shopify Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to launch, grow, and scale your online store—all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
