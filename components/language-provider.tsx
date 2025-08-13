"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.greeting": "Hola, soy",
    "hero.title": "Desarrollador Backend",
    "hero.subtitle": "Transformando ideas en soluciones tecnológicas",
    "hero.description":
      "Desarrollador junior apasionado por la tecnología, especializado en backend con experiencia en Python, Django y desarrollo web. Siempre dispuesto a aprender y crecer profesionalmente.",
    "hero.cta": "Ver mi trabajo",
    "hero.contact": "Contactar",

    // About Section
    "about.title": "Conoce mi historia",
    "about.subtitle": "Desarrollador de software con pasión por la tecnología",
    "about.description":
      "Soy un desarrollador junior con una sólida formación en Ingeniería Informática y experiencia práctica en desarrollo backend. Mi enfoque se centra en crear soluciones eficientes y escalables, siempre buscando aprender nuevas tecnologías y mejorar mis habilidades.",
    "about.education": "Educación",
    "about.degree": "Ingeniero Informático",
    "about.university": "Universidad de Las Tunas",
    "about.period": "2021 - 2025",
    "about.achievements": "Logros destacados",
    "about.achievement1": "2º lugar en ICPC Caribeño (2022)",
    "about.achievement2": "Título de Oro y Premio al Mérito Científico",
    "about.achievement3": "Eximido de defensa de tesis por rendimiento académico",

    // Skills Section
    "skills.title": "Habilidades Técnicas",
    "skills.subtitle": "Tecnologías y herramientas que domino",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Herramientas",
    "skills.databases": "Bases de Datos",

    // Experience Section
    "experience.title": "Experiencia Laboral",
    "experience.subtitle": "Mi trayectoria profesional",
    "experience.current": "Actual",
    "experience.company": "ASI S.U.R.L.",
    "experience.position": "Desarrollador",
    "experience.period": "Enero 2024 - Presente",
    "experience.description":
      "Desarrollo y mantenimiento de aplicaciones web, participación en decisiones de infraestructura tecnológica, y creación de módulos personalizados para Odoo.",
    "experience.achievements": "Logros principales:",
    "experience.achievement1": "Desarrollo del sitio web oficial de la empresa",
    "experience.achievement2": "Creación de aplicaciones móviles y módulos Odoo",
    "experience.achievement3": "Participación en proyectos para clientes externos",
    "experience.achievement4": "Mejora de eficiencia y seguridad del sistema informático",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Algunos de mis trabajos más importantes",
    "projects.viewCode": "Ver código",
    "projects.viewDemo": "Ver demo",
    "projects.project1.title": "Red Social Empresarial",
    "projects.project1.description":
      "Plataforma de colaboración interna para empresas, desarrollada con Django. Facilita la comunicación y colaboración en proyectos de innovación.",
    "projects.project1.tech": "Django, Python, HTML/CSS, JavaScript",
    "projects.project2.title": "Sistema de Gestión Web",
    "projects.project2.description":
      "Aplicación web completa para gestión empresarial con módulos personalizados y integración con sistemas existentes.",
    "projects.project2.tech": "Python, Django, PostgreSQL, Docker",

    // Contact Section
    "contact.title": "Contacto",
    "contact.subtitle": "Hablemos sobre tu próximo proyecto",
    "contact.description": "Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.",
    "contact.email": "Correo electrónico",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.built": "Construido con",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.title": "Backend Developer",
    "hero.subtitle": "Transforming ideas into tech solutions",
    "hero.description":
      "Junior developer passionate about technology, specialized in backend with experience in Python, Django and web development. Always eager to learn and grow professionally.",
    "hero.cta": "View my work",
    "hero.contact": "Contact me",

    // About Section
    "about.title": "Get to know my story",
    "about.subtitle": "Software developer with passion for technology",
    "about.description":
      "I'm a junior developer with solid training in Computer Engineering and practical experience in backend development. My focus is on creating efficient and scalable solutions, always seeking to learn new technologies and improve my skills.",
    "about.education": "Education",
    "about.degree": "Computer Engineer",
    "about.university": "University of Las Tunas",
    "about.period": "2021 - 2025",
    "about.achievements": "Key achievements",
    "about.achievement1": "2nd place in Caribbean ICPC (2022)",
    "about.achievement2": "Gold Title and Scientific Merit Award",
    "about.achievement3": "Exempted from thesis defense due to academic performance",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.subtitle": "Technologies and tools I master",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.tools": "Tools",
    "skills.databases": "Databases",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",
    "experience.current": "Current",
    "experience.company": "ASI S.U.R.L.",
    "experience.position": "Developer",
    "experience.period": "January 2024 - Present",
    "experience.description":
      "Development and maintenance of web applications, participation in technological infrastructure decisions, and creation of custom Odoo modules.",
    "experience.achievements": "Main achievements:",
    "experience.achievement1": "Development of the company's official website",
    "experience.achievement2": "Creation of mobile applications and Odoo modules",
    "experience.achievement3": "Participation in projects for external clients",
    "experience.achievement4": "Improvement of efficiency and security of the IT system",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of my most important work",
    "projects.viewCode": "View code",
    "projects.viewDemo": "View demo",
    "projects.project1.title": "Enterprise Social Network",
    "projects.project1.description":
      "Internal collaboration platform for companies, developed with Django. Facilitates communication and collaboration on innovation projects.",
    "projects.project1.tech": "Django, Python, HTML/CSS, JavaScript",
    "projects.project2.title": "Web Management System",
    "projects.project2.description":
      "Complete web application for business management with custom modules and integration with existing systems.",
    "projects.project2.tech": "Python, Django, PostgreSQL, Docker",

    // Contact Section
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk about your next project",
    "contact.description": "I'm always open to new opportunities and collaborations. Don't hesitate to contact me.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.built": "Built with",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    document.documentElement.lang = newLanguage
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
