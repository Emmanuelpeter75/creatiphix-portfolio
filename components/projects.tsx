import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
            Projects That Drive Results
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Explore some of the Shopify stores we have built and optimized for brands across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 text-xs font-medium text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-sm font-bold text-foreground bg-amber-100 border border-amber-300 rounded-lg px-3 py-2 mb-6">
                  Please note that these are Demo stores. The access password is{" "}
                  <span className="text-primary">emmy</span>.
                </p>
                {project.link !== "#" ? (
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Store
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled>
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Ready to build your own success story?</p>
          <Button size="lg" asChild>
            <Link href="/pricing">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}