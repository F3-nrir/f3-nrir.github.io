import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Luis Miguel González - Desarrollador Backend",
  description:
    "Portfolio personal de Luis Miguel González Domínguez, desarrollador de software especializado en backend con experiencia en Python, Django, y tecnologías web.",
  keywords: "desarrollador, backend, python, django, cuba, programador, software",
  authors: [{ name: "Luis Miguel González Domínguez" }],
  creator: "Luis Miguel González Domínguez",
  openGraph: {
    title: "Luis Miguel González - Desarrollador Backend",
    description: "Portfolio personal de desarrollador de software",
    url: "https://f3-nrir.github.io",
    siteName: "Luis Miguel González Portfolio",
    locale: "es_ES",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${sourceSans.style.fontFamily};
  --font-sans: ${sourceSans.variable};
  --font-serif: ${playfair.variable};
}
        `}</style>
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
