"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      company: "ASI S.U.R.L.",
      position: t("experience.position"),
      period: t("experience.period"),
      location: "Las Tunas, Cuba",
      current: true,
      description: t("experience.description"),
      achievements: [
        t("experience.achievement1"),
        t("experience.achievement2"),
        t("experience.achievement3"),
        t("experience.achievement4"),
      ],
      technologies: ["Python", "Django", "Odoo", "PostgreSQL", "HTML/CSS", "JavaScript", "Docker"],
      website: "https://antasi.asisurl.cu",
    },
  ]

  const projects = [
    {
      title: "Red Social Empresarial",
      period: "09/2024 - 02/2025",
      description:
        "Desarrollo de una plataforma de colaboración interna para empresas, facilitando la comunicación y colaboración en proyectos de innovación.",
      technologies: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
      github: "https://github.com/Asthart/comunidad",
      achievements: [
        "Implementación de sistema de autenticación y autorización",
        "Desarrollo de módulos de colaboración y gestión de proyectos",
        "Integración con sistemas existentes de la empresa",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("experience.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("experience.subtitle")}</p>
          </div>

          {/* Work Experience */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-bold">{exp.position}</h3>
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <span>{exp.company}</span>
                            {exp.website && (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        {exp.current && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {t("experience.current")}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">{t("experience.achievements")}</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">Proyectos Personales</h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="border-accent/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-serif font-bold mb-1">{project.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {project.period}
                        </div>
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver en GitHub
                        </a>
                      )}
                    </div>

                    <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <h5 className="font-semibold mb-2 text-sm">Logros principales:</h5>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-accent/10 text-accent hover:bg-accent/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
