"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(132,204,22,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">{t("hero.greeting")}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                <span className="gradient-text">Luis Miguel</span>
                <br />
                <span className="text-foreground">González</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-primary font-semibold">
                {t("hero.title")}
              </h2>
              <p className="text-lg text-accent font-medium">{t("hero.subtitle")}</p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gradient-bg hover:opacity-90 transition-opacity text-white font-semibold px-8 py-3"
              >
                {t("hero.cta")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                {t("hero.contact")}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://github.com/F3-nrir" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href="https://linkedin.com/in/luis-miguel-gonzalez-dominguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary"
              >
                <a href="mailto:f3nrir.v2@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 max-w-sm w-full bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
              <div className="text-center space-y-6">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-serif font-bold shadow-lg">
                  LMG
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold">Luis Miguel González</h3>
                  <p className="text-primary font-medium">Backend Developer</p>
                  <p className="text-sm text-muted-foreground">Las Tunas, Cuba</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">f3nrir.v2@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium">+53 55886613</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href="/cv-luis-miguel-gonzalez.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("about")}
          className="w-10 h-10 p-0 rounded-full hover:bg-primary/10"
        >
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
