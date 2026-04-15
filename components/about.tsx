import { CheckCircle2 } from "lucide-react"

const values = [
  "Client-focused approach to every project",
  "Agile methodology for rapid delivery",
  "Transparent communication throughout",
  "Quality assurance at every step",
  "Long-term partnership mindset",
  "Continuous innovation and learning",
]

export function About() {
  return (
    <section id="about" className="border-t border-border/40 bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-accent">About NexaSoft</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Where Deep Tech Meets Business Vision
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a collective of passionate developers, designers, and strategists bound together by our love for technology and our commitment to delivering exceptional digital solutions.
            </p>
            <p className="mt-4 text-muted-foreground">
              Based in South Africa, we understand the unique challenges and opportunities of the African market while bringing world-class technical expertise to every project we undertake.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission is to empower businesses with software that not only meets their current needs but scales with their growth and adapts to changing market demands.
            </p>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Our Core Values</h3>
            <ul className="mt-6 space-y-4">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
