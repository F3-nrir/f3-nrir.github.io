"use client"

import { Button } from "@/components/ui/button"
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/F3-nrir",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/luis-miguel-gonzalez-dominguez",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:f3nrir.v2@gmail.com",
      label: "Email",
    },
  ]

  const quickLinks = [
    { key: "nav.about", href: "about" },
    { key: "nav.skills", href: "skills" },
    { key: "nav.experience", href: "experience" },
    { key: "nav.projects", href: "projects" },
    { key: "nav.contact", href: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white font-serif font-bold">
                  LMG
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold">Luis Miguel González</h3>
                  <p className="text-sm text-muted-foreground">Backend Developer</p>
                </div>
              </div>
              <p className="text-foreground/80 max-w-md leading-relaxed">
                Desarrollador apasionado por crear soluciones tecnológicas innovadoras. Especializado en backend con
                experiencia en desarrollo web y sistemas empresariales.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-9 h-9 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold mb-4">Navegación</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.key)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">Las Tunas, Cuba</p>
                <a
                  href="mailto:f3nrir.v2@gmail.com"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  f3nrir.v2@gmail.com
                </a>
                <a href="tel:+5355886613" className="block text-muted-foreground hover:text-primary transition-colors">
                  +53 55886613
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Luis Miguel González.</span>
              <span>{t("footer.rights")}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{t("footer.built")}</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>usando Next.js & Tailwind CSS</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="w-8 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
