import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,200,180,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,200,180,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
          <Terminal className="h-4 w-4 text-accent" />
          <span className="text-sm text-muted-foreground">South Africa&apos;s Premier Software Partner</span>
        </div>
        
        <h1 className="max-w-4xl text-balance text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Building Digital Solutions{" "}
          <span className="text-muted-foreground">That Drive Growth</span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-pretty text-center text-lg text-muted-foreground sm:text-xl">
          We craft custom software, web applications, and digital products that transform businesses. 
          From concept to deployment, we deliver excellence.
        </p>
        
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2" asChild>
            <a href="#contact">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">
              View Our Services
            </a>
          </Button>
        </div>
        
        <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-8 border-t border-border/40 pt-12 sm:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-bold sm:text-4xl">50+</p>
            <p className="mt-1 text-sm text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold sm:text-4xl">98%</p>
            <p className="mt-1 text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold sm:text-4xl">5+</p>
            <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold sm:text-4xl">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
