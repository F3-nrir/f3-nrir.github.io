# Luis Miguel González - Portfolio Personal

Portfolio personal de Luis Miguel González Domínguez, desarrollador de software especializado en backend.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Modo Oscuro/Claro**: Toggle para cambiar entre temas
- **Bilingüe**: Soporte para español e inglés
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- **SEO Optimizado**: Metadatos y estructura optimizada para buscadores
- **Rendimiento**: Construido con Next.js para máxima velocidad

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Playfair Display & Source Sans Pro
- **Theme**: next-themes
- **TypeScript**: Para tipado estático

## 📦 Instalación Local

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/F3-nrir/f3-nrir.github.io.git
cd f3-nrir.github.io
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Despliegue en GitHub Pages

### Configuración Automática con GitHub Actions

1. **Sube todos los archivos** a tu repositorio f3-nrir.github.io

2. **Configura GitHub Pages**:
   - Ve a **Settings > Pages** en tu repositorio
   - En **Source**, selecciona **"GitHub Actions"** (no "Deploy from a branch")

3. **Haz push a main**:
\`\`\`bash
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin main
\`\`\`

4. **El workflow se ejecutará automáticamente** y tu sitio estará disponible en https://f3-nrir.github.io

### Verificación del Despliegue

- Ve a la pestaña **Actions** en tu repositorio para ver el progreso
- Una vez completado, tu portafolio estará live en tu dominio de GitHub Pages
- Los cambios futuros se desplegarán automáticamente al hacer push a main

## 📁 Estructura del Proyecto

\`\`\`
├── .github/workflows/     # GitHub Actions para despliegue automático
├── app/                   # App Router de Next.js
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales
├── components/           # Componentes React
│   ├── ui/              # Componentes de UI reutilizables
│   ├── header.tsx       # Navegación principal
│   ├── hero.tsx         # Sección hero
│   ├── about.tsx        # Sección sobre mí
│   ├── skills.tsx       # Habilidades técnicas
│   ├── experience.tsx   # Experiencia laboral
│   ├── projects.tsx     # Proyectos destacados
│   ├── contact.tsx      # Información de contacto
│   └── footer.tsx       # Pie de página
├── public/              # Archivos estáticos
├── .nojekyll           # Deshabilita Jekyll en GitHub Pages
└── lib/                # Utilidades y configuración
\`\`\`

## 🎨 Personalización

### Colores
Los colores principales se definen en `app/globals.css`:
- **Primary**: Cyan-800 (#164e63)
- **Accent**: Lime-500 (#84cc16)
- **Neutrals**: Blancos, grises y negros

### Tipografía
- **Headings**: Playfair Display (serif)
- **Body**: Source Sans Pro (sans-serif)

### Contenido
El contenido se gestiona a través del sistema de traducciones en `components/language-provider.tsx`.

## 📱 Características Responsivas

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navegación Móvil**: Menú hamburguesa para pantallas pequeñas
- **Imágenes Optimizadas**: Responsive y optimizadas para web

## 🌐 SEO y Rendimiento

- **Meta Tags**: Configurados para redes sociales y buscadores
- **Open Graph**: Soporte para Facebook, Twitter, etc.
- **Sitemap**: Generado automáticamente
- **Lighthouse Score**: Optimizado para máximo rendimiento

## 📞 Contacto

- **Email**: f3nrir.v2@gmail.com
- **Teléfono**: +53 55886613
- **LinkedIn**: [luis-miguel-gonzalez-dominguez](https://linkedin.com/in/luis-miguel-gonzalez-dominguez)
- **GitHub**: [F3-nrir](https://github.com/F3-nrir)

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados © 2025 Luis Miguel González Domínguez.

---

**Construido con ❤️ usando Next.js y Tailwind CSS**

