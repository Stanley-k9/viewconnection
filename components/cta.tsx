import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t border-border/40 bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(100,200,180,0.1),transparent_50%)]" />
          
          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Something Amazing?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let&apos;s discuss your project and explore how we can help bring your vision to life with cutting-edge software solutions.
              </p>
            </div>
            
            <div className="flex flex-col items-start justify-center gap-4 sm:flex-row lg:justify-end">
              <Button size="lg" className="gap-2">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
