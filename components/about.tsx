"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Trophy, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  const achievements = [
    {
      icon: Trophy,
      title: t("about.achievement1"),
      description: "International Collegiate Programming Contest",
    },
    {
      icon: Award,
      title: t("about.achievement2"),
      description: "Universidad de Las Tunas",
    },
    {
      icon: GraduationCap,
      title: t("about.achievement3"),
      description: "Rendimiento académico excepcional",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 gradient-text">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* About Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">{t("about.description")}</p>
              </div>

              {/* Education Card */}
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-bold mb-2">{t("about.education")}</h3>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary">{t("about.degree")}</h4>
                        <p className="text-muted-foreground">{t("about.university")}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {t("about.period")}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-center lg:text-left">{t("about.achievements")}</h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="border-accent/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
