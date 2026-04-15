import Link from "next/link"
import { Code2, Linkedin, Twitter, Github } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Custom Software", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">View Connection</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Building digital solutions that drive growth for businesses across South Africa and beyond.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} View Connection. All rights reserved. | Proudly South African
          </p>
        </div>
      </div>
    </footer>
  )
}
