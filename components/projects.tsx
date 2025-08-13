"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      technologies: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Asthart/comunidad",
      demo: null,
      image: "/social-network-platform.png",
      featured: true,
      category: "Web Application",
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "REST API"],
      github: null,
      demo: "https://antasi.asisurl.cu",
      image: "/business-management-dashboard.png",
      featured: true,
      category: "Enterprise System",
    },
    {
      title: "Módulos Odoo Personalizados",
      description:
        "Desarrollo de módulos personalizados para Odoo que mejoran la productividad y eficiencia operativa de empresas clientes.",
      technologies: ["Python", "Odoo", "XML", "PostgreSQL", "JavaScript"],
      github: null,
      demo: null,
      image: "/odoo-modules-interface.png",
      featured: false,
      category: "ERP Module",
    },
    {
      title: "Aplicaciones Móviles Empresariales",
      description:
        "Desarrollo de aplicaciones móviles para mejorar la comunicación y gestión interna de equipos empresariales.",
      technologies: ["React Native", "JavaScript", "API REST", "SQLite"],
      github: null,
      demo: null,
      image: "/mobile-business-app-interface.png",
      featured: false,
      category: "Mobile App",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("projects.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {t("projects.viewCode")}
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild className="gradient-bg hover:opacity-90 text-white">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t("projects.viewDemo")}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 text-center">Otros Proyectos</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-serif font-bold">{project.title}</h4>
                        <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-muted/50 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="bg-muted/50 text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.github && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="p-2 h-8 w-8 hover:bg-primary/10 hover:text-primary"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="p-2 h-8 w-8 hover:bg-primary/10 hover:text-primary"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
