"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// ── EDIT YOUR PRICES HERE ─────────────────────────────
const packages = [
  {
    name: "Starter",
    usd: "$100",
    ngn: "₦80,000",
    subtitle: "Basic Store Setup",
    features: [
      "Shopify store setup",
      "Basic theme setup & customization",
      "Homepage design",
      "Up to 5 product uploads",
      "3 essential pages (About, Contact, Catalog)",
      "Mobile-responsive design",
      "Basic product page optimization",
      "1 revision",
    ],
    href: "https://api.whatsapp.com/send/?phone=2347072061258&text=Hi%2C%20I%27m%20interested%20in%20the%20Starter%20Shopify%20package.&type=phone_number&app_absent=0",
  },
  {
    name: "Growth",
    usd: "$225",
    ngn: "₦200,000",
    usdOriginal: "$250",
    ngnOriginal: "₦180,000",
    discount: "10% OFF",
    subtitle: "Conversion-focused growth",
    badge: "Recommended",
    featured: true,
    features: [
      "Everything in Starter",
      "5 essential pages",
      "Up to 30 product uploads",
      "Advanced product page optimization",
      "Conversion-focused design",
      "Trust badges and social proof sections",
      "Advanced mobile optimization",
      "SEO setup",
      "Payment integration",
      "3+ sales plugin integrations",
      "2 rounds of revisions",
    ],
    href: "https://api.whatsapp.com/send/?phone=2347072061258&text=Hi%2C%20I%27m%20interested%20in%20the%20Growth%20Shopify%20package.&type=phone_number&app_absent=0",
  },
  {
    name: "Premium",
    usd: "$400",
    ngn: "₦300,000",
    subtitle: "Complete Shopify Design",
    features: [
      "Everything in Growth",
      "Fully customized Shopify design",
      "50+ product uploads",
      "Advanced conversion optimization",
      "Advanced custom sections",
      "Complete store structure optimization",
      "Advanced SEO foundation",
      "3 rounds of revisions",
      "Post-launch support",
    ],
    href: "https://api.whatsapp.com/send/?phone=2347072061258&text=Hi%2C%20I%27m%20interested%20in%20the%20Premium%20Shopify%20package.&type=phone_number&app_absent=0",
  },
]
// ─────────────────────────────────────────────────────

export default function PricingPage() {
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD")

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">

            {/* Header */}
            <div className="mx-auto max-w-2xl text-center mb-10">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Choose the package that fits your goals.
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                Every project is different. These packages provide a clear starting point for building, improving, and growing your Shopify store.
              </p>
            </div>

            {/* Currency Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-muted rounded-full p-1 gap-1">
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-6 py-2 rounded-full text-sm font-600 transition-all ${
                    currency === "USD"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  USD $
                </button>
                <button
                  onClick={() => setCurrency("NGN")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    currency === "NGN"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  NGN ₦
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-start">
              {packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`group relative flex h-full flex-col rounded-2xl border p-6 md:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${
                    pkg.featured
                      ? "border-primary bg-primary/5 shadow-xl lg:-translate-y-3 lg:hover:-translate-y-4"
                      : "border-border bg-card"
                  }`}
                >
                  {pkg.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      {pkg.badge}
                    </span>
                  )}

                  <h2 className="text-2xl font-bold text-foreground">{pkg.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{pkg.subtitle}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2 flex-wrap">
                    <span className="text-4xl font-bold text-primary">
                      {currency === "USD" ? pkg.usd : pkg.ngn}
                    </span>
                    {currency === "USD" && pkg.usdOriginal && (
                      <span className="text-sm text-muted-foreground line-through">
                        {pkg.usdOriginal}
                      </span>
                    )}
                    {currency === "NGN" && pkg.ngnOriginal && (
                      <span className="text-sm text-muted-foreground line-through">
                        {pkg.ngnOriginal}
                      </span>
                    )}
                  </div>
                  {pkg.discount && (
                    <span className="mt-1 text-sm font-semibold text-primary">
                      {pkg.discount}
                    </span>
                  )}

                  {/* Features */}
                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="mt-8 w-full"
                    variant={pkg.featured ? "default" : "outline"}
                  >
                    <Link href={pkg.href} target="_blank" rel="noopener noreferrer">
                      Get Started →
                    </Link>
                  </Button>
                </article>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}