# Luis Miguel González - Portafolio Personal

Portafolio profesional de Luis Miguel González Domínguez, desarrollador de software especializado en backend con experiencia en Python, Django y soluciones empresariales.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- **SEO Friendly**: Optimizado para motores de búsqueda
- **Accesibilidad**: Cumple con estándares WCAG
- **PWA Ready**: Funcionalidad de aplicación web progresiva

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 📱 Secciones

- **Hero**: Presentación principal con información destacada
- **Sobre Mí**: Información personal y profesional
- **Experiencia**: Trayectoria laboral detallada
- **Educación**: Formación académica y logros
- **Proyectos**: Showcase de proyectos principales
- **Habilidades**: Competencias técnicas y blandas
- **Contacto**: Formulario y información de contacto

## 🏆 Logros Destacados

- 2º Lugar ICPC Caribeño 2022 (Equipo YesReturn)
- Título de Oro en Ingeniería Informática
- Premio al Mérito Científico
- Experiencia en desarrollo empresarial

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   \`\`\`bash
   git clone https://github.com/F3-nrir/f3-nrir.github.io.git
   cd f3-nrir.github.io
   \`\`\`

2. **Instalar dependencias**
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecutar en modo desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Abrir en el navegador**
   \`\`\`
   http://localhost:5173
   \`\`\`

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run deploy` - Desplegar a GitHub Pages

## 📦 Deployment en GitHub Pages

### Configuración Automática

El proyecto incluye GitHub Actions para deployment automático:

1. **Push a main branch** activa el deployment automáticamente
2. **Build process** ejecuta `npm run build`
3. **Deploy** publica en GitHub Pages

### Configuración Manual

1. **Configurar GitHub Pages**
   - Ve a Settings > Pages
   - Source: GitHub Actions
   - Branch: gh-pages

2. **Configurar dominio personalizado (opcional)**
   - Agregar CNAME file con tu dominio
   - Configurar DNS records

## 🎨 Personalización

### Colores

El proyecto usa una paleta de colores personalizada definida en `tailwind.config.js`:

- **Primary**: #2563eb (Azul profesional)
- **Accent**: #0ea5e9 (Cyan vibrante)
- **Neutral Light**: #f8fafc (Gris claro)
- **Neutral Dark**: #334155 (Slate oscuro)

### Tipografía

- **Headings**: Space Grotesk (Moderno y técnico)
- **Body**: DM Sans (Legible y profesional)

### Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y enlaces optimizados para touch

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **Bundle Size**: Minimizado y optimizado
- **Image Optimization**: Formatos modernos y lazy loading

## 🔧 Mantenimiento

### Actualizar Información Personal

1. **Datos personales**: Editar en `src/components/Hero.jsx`
2. **Experiencia**: Actualizar en `src/components/Experience.jsx`
3. **Proyectos**: Modificar en `src/components/Projects.jsx`
4. **Habilidades**: Ajustar en `src/components/Skills.jsx`

### Agregar Nuevos Proyectos

\`\`\`jsx
// En src/components/Projects.jsx
const newProject = {
  title: "Nombre del Proyecto",
  description: "Descripción detallada...",
  image: "/project-image.png",
  technologies: ["Tech1", "Tech2"],
  // ... más propiedades
}
\`\`\`

## 📞 Contacto

- **Email**: f3nrir.v2@gmail.com
- **LinkedIn**: [luis-miguel-gonzalez-dominguez](https://linkedin.com/in/luis-miguel-gonzalez-dominguez)
- **GitHub**: [F3-nrir](https://github.com/F3-nrir)
- **Ubicación**: Las Tunas, Cuba

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ por Luis Miguel González Domínguez**
