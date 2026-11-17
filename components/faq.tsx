import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What do I need to provide before we start?",
    answer: "You'll need to provide your brand details, products, content, images, and any specific requirements. I'll guide you through everything needed to get started.",
  },
  {
    question: "How long does it take to complete a Shopify store?",
    answer: "Most projects take between 5–14 days, depending on the package, store size, and project requirements.",
  },
  {
    question: "How do you work?",
    answer: "Discuss → We talk about your goals and requirements. Plan → I create the structure and strategy for your store. Design & Build → I develop the store and add the required features. Review → You review the work and request revisions. Launch → Your store is finalized and ready to go live.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes. Each package includes a specific number of revision rounds, allowing you to request changes and refinements before the project is finalized.",
  },
  {
    question: "Can I request a custom package?",
    answer: "Yes. If your project doesn't fit the listed packages, you can contact me and we'll discuss a custom solution based on your specific needs.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-border bg-background px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
