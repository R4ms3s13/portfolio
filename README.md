# Ramses Medina — Portfolio

Portafolio personal construido con Next.js, TypeScript y Framer Motion. Sitio de una sola página, altamente animado, que presenta mi experiencia real como Software Engineer en desarrollo backend y blockchain.

**Live demo:** _pendiente de despliegue_

## Características

- **Hero interactivo** con fondo de partículas en canvas que reacciona al cursor, blobs animados y texto con gradiente.
- **Cursor personalizado** con efecto de arrastre (lerp) sobre elementos interactivos.
- **Animaciones on-scroll** con Framer Motion (`whileInView`) en cada sección.
- **Experiencia integrada con proyectos**: cada empleo se muestra junto a los proyectos reales realizados dentro de él, con stack tecnológico y enlaces en vivo.
- **Skills** con barras de progreso animadas.
- **Diseño responsive**, glassmorphism y bordes con glow, tema oscuro por defecto.
- **Contacto directo** vía WhatsApp con mensaje prellenado, email y LinkedIn.
- **Stack por categoría** en la sección "Sobre mí", incluyendo herramientas de QA (Postman, Jest).

## Stack técnico

| Categoría | Tecnología |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animación | Framer Motion |
| Iconografía | lucide-react, react-icons |
| Fuentes | Space Grotesk, Sora (next/font) |

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx      # Metadata, fuentes, overlays globales
│   ├── page.tsx        # Composición de secciones
│   └── globals.css     # Tema, gradientes, animaciones CSS
├── components/
│   ├── Hero.tsx         # Sección de bienvenida
│   ├── ParticleField.tsx# Fondo de partículas en canvas
│   ├── CustomCursor.tsx # Cursor personalizado
│   ├── Navbar.tsx        # Navegación fija
│   ├── TechMarquee.tsx   # Marquee infinito de tecnologías
│   ├── About.tsx         # Perfil y stack por categoría
│   ├── Experience.tsx    # Experiencia laboral + proyectos anidados
│   ├── Skills.tsx        # Barras de habilidades y aptitudes
│   ├── Education.tsx     # Formación académica, cursos e idiomas
│   ├── Contact.tsx       # WhatsApp, email, LinkedIn, GitHub
│   ├── Reveal.tsx         # Wrapper de animación al hacer scroll
│   └── SectionHeading.tsx # Encabezado reutilizable por sección
└── lib/
    └── data.ts          # Fuente única de verdad: perfil, experiencia, skills
```

Todo el contenido (perfil, experiencia, skills, educación) vive en `src/lib/data.ts`, así que actualizar el CV del sitio es cuestión de editar un solo archivo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Licencia

Uso personal — código disponible como referencia.
