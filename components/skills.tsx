"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Wrench, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.backend"),
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: 90 },
        { name: "Django", level: 85 },
        { name: "SQL", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      title: t("skills.frontend"),
      icon: Globe,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      title: t("skills.tools"),
      icon: Wrench,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Odoo", level: 70 },
      ],
    },
    {
      title: t("skills.databases"),
      icon: Database,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "SQLite", level: 85 },
        { name: "Database Design", level: 80 },
      ],
    },
  ]

  const technologies = [
    "Python",
    "Django",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Docker",
    "Linux",
    "Odoo",
    "REST APIs",
    "XML",
    "JSON",
    "Bootstrap",
    "jQuery",
    "Apache",
    "Nginx",
  ]

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("skills.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-serif font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-8">Tecnologías y Herramientas</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
