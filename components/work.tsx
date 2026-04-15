import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A scalable online marketplace handling 10,000+ daily transactions",
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "Patient management solution for a network of 15 clinics",
  },
  {
    title: "Logistics Tracking App",
    category: "Mobile Development",
    description: "Real-time fleet tracking with route optimization",
  },
  {
    title: "Financial Dashboard",
    category: "Data Analytics",
    description: "Business intelligence platform with automated reporting",
  },
]

export function Work() {
  return (
    <section id="work" className="border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Our Work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Projects That Make an Impact
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;ve helped businesses across industries transform their operations with innovative software solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:bg-secondary/30"
            >
              <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6" />
              </div>
              <div className="mb-4 inline-block rounded-full bg-secondary px-3 py-1">
                <span className="text-xs font-medium text-muted-foreground">{project.category}</span>
              </div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-muted-foreground">{project.description}</p>
              <div className="mt-6 h-32 rounded-lg bg-secondary/50 sm:h-40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
