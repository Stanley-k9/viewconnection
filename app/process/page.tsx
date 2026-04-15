import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, MessageSquare, Code, Rocket, Headphones } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "We start by understanding your business, goals, and challenges. Through detailed discussions, we identify your requirements and define the project scope.",
    icon: MessageSquare,
    details: [
      "Initial consultation call",
      "Requirements gathering",
      "Business analysis",
      "Project scope definition",
    ],
  },
  {
    number: "02",
    title: "Planning & Design",
    description: "Our team creates a comprehensive project plan, including timelines, milestones, and deliverables. We design the architecture and user experience.",
    icon: CheckCircle,
    details: [
      "Technical architecture design",
      "UI/UX wireframes and mockups",
      "Project timeline and milestones",
      "Resource allocation",
    ],
  },
  {
    number: "03",
    title: "Development",
    description: "Using agile methodologies, we build your solution in iterative sprints. You receive regular updates and have the opportunity to provide feedback throughout.",
    icon: Code,
    details: [
      "Agile sprint development",
      "Regular progress updates",
      "Code reviews and quality checks",
      "Continuous integration",
    ],
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "Rigorous testing ensures your solution works flawlessly. We handle deployment and ensure a smooth launch of your product.",
    icon: Rocket,
    details: [
      "Comprehensive QA testing",
      "Performance optimization",
      "Security audits",
      "Production deployment",
    ],
  },
  {
    number: "05",
    title: "Support & Growth",
    description: "Our partnership continues after launch. We provide ongoing support, maintenance, and help you scale as your business grows.",
    icon: Headphones,
    details: [
      "24/7 technical support",
      "Regular maintenance updates",
      "Performance monitoring",
      "Feature enhancements",
    ],
  },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            How We Work
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Our Process
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            We follow a proven methodology to deliver exceptional software solutions. 
            From initial concept to ongoing support, we are with you every step of the way.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-border md:block" />
            
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                    {/* Step number */}
                    <div className="flex items-start gap-4 md:w-48 md:flex-shrink-0">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-card border border-border">
                        <step.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-5xl font-bold text-muted-foreground/30 md:hidden">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 rounded-lg bg-card p-6 md:p-8 border border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="hidden text-5xl font-bold text-muted-foreground/30 md:block">
                          {step.number}
                        </span>
                        <h2 className="text-2xl font-bold">{step.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card border border-border p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Let&apos;s discuss how we can bring your vision to life with our proven development process.
          </p>
          <div className="mt-8">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
