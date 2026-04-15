import { Code, Globe, Smartphone, Database, Cloud, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built from the ground up to meet your unique business requirements and workflows.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Modern, scalable web applications using cutting-edge technologies that deliver exceptional user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that engage your customers on the go.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Robust database architecture and management systems that ensure your data is secure, accessible, and scalable.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Cloud-native solutions and migrations that provide flexibility, scalability, and cost-effective operations.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive security assessments and implementations to protect your digital assets from threats.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">What We Do</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Software Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our expertise spans the full spectrum of software development. We deliver end-to-end solutions that transform your business operations.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:bg-secondary/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
