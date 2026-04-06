---
tags: [meli, changelog, desarrollo]
created: 2026-04-02
---

# 🚀 Desarrollo — Changelog

## Información del proyecto

| Campo | Valor |
|-------|-------|
| **Repositorio** | [github.com/mferracani/MELI-UX-Challenge](https://github.com/mferracani/MELI-UX-Challenge) |
| **Deploy** | [meli-ux-challenge.vercel.app](https://meli-ux-challenge.vercel.app/) |
| **Plataforma** | Vercel (auto-deploy desde `main`) |
| **Root Directory** | `web/` |
| **Rama principal** | `main` |

---

## Historial de commits

### `b9354ea` — fix: bridge card full width, remove em-dash from S3 source
- **Fecha:** 2026-04-05
- **Rama:** `narrative-review` → mergeado a `main`
- **Cambios:**
  - ✅ **Puente narrativo** — Card "De la investigación a la solución" llevada a ancho completo del layout (eliminado `max-width: 800px` inline)
  - ✅ **Tabla de supuestos S3** — Eliminado guion largo en "Inferencia del wireframe, no confirmable"
- **Archivos:** `web/index.html`

---

### `5afa8d6` — refactor(narrative): implement full narrative review
- **Fecha:** 2026-04-05
- **Rama:** `narrative-review` → mergeado a `main`
- **Cambios:**
  - ✅ **Hero subtitle** — Reescrito para ser concreto y visual: "una mano libre y 2 segundos de mirada"
  - ✅ **Resumen ejecutivo** — Impacto etiquetado como hipótesis con rangos reales (~45s a ~20s), no porcentajes
  - ✅ **Sección 01 subtitle** — Conectado a la señal real del brief: caída de NPS y patrón compartido
  - ✅ **Meta-etiquetas de citas** (Carlos, Claudia, Pablo, Teresa) — Reescritas para exponer el patrón de IA específico en lugar de necesidades genéricas
  - ✅ **Sección 02 título** — Elevado a "Cuatro dolores, un solo problema" para declarar la tesis central
  - ✅ **Sección 03 subtitle** — Reescrito en primera persona: "Qué pude confirmar, qué tuve que asumir..."
  - ✅ **Puente narrativo** — Nueva sección entre Investigación y Solución que conecta los hallazgos con las decisiones de diseño
  - ✅ **Copiloto subtitle** — Eliminado guion largo separador; reemplazado por punto y frase separada
  - ✅ **Direction card** — "Dirección A —" → "Dirección elegida:" sin guion
  - ✅ **Pain resolution** — Agregada 5ta fila: "Sin visibilidad de progreso"
  - ✅ **HMW cerrados** — Nueva sección "Los HMW, respondidos" con tabla de 4 respuestas explícitas
  - ✅ **Auto-elogio eliminado** — Quitado "Esto demuestra pensamiento de producto real"
  - ✅ **Sección 05 subtitle** — Reescrito: "Cómo se traduce cada decisión en estructura, jerarquía y pantallas concretas"
  - ✅ **Wireframes intro** — Pasado a primera persona: "exploré la estructura..."
  - ✅ **Hi-fi intro** — Reescrito con especificidad: "Las dos pantallas más críticas del flujo"
  - ✅ **Guiones largos** — Eliminados como separadores en todo el texto narrativo visible; reemplazados por dos puntos o puntos seguidos
  - ✅ **KPI sublabel** — Guion → punto para flujo natural
- **Archivos:** `web/index.html`

---

### `4713e91` — fix: remove em-dashes from exec summary, wireframes caption and heading
- **Fecha:** 2026-04-05
- **Rama:** `main`
- **Cambios:**
  - ✅ **Resumen ejecutivo** — Eliminados guiones largos separadores en el campo de impacto
  - ✅ **Caption wireframes** — Ajuste de texto en el caption del user flow
  - ✅ **Subtítulo de sección** — Corrección de guion en heading de wireframes
- **Archivos:** `web/index.html`

---

### `978e947` — feat: v2 iteration — product thinking depth upgrade
- **Fecha:** 2026-04-04
- **Rama:** `feature/v2-iteration` → mergeado a `main`
- **Cambios:**
  - ✅ **Contexto Operativo** — Reemplazo de la persona tradicional por una tarjeta de contexto con constraints reales del repartidor: vehículo, dispositivo, atención, manos libres
  - ✅ **Supuestos Críticos** — Tabla expandida a 6 columnas: Supuesto, Certeza, Fuente, Validación, Riesgo y "Si falla, qué cambia"
  - ✅ **Sección 06 · Alcance** — Nueva sección explícita de qué queda fuera y por qué, con tarjetas scope + insight card de criterio de recorte
  - ✅ **Solución sin drag & drop** — Reemplazado por acciones rápidas "Llevar primero / Hacer después" con callout de trade-off fundamentado
  - ✅ **Diseño Resiliente** — Tarjetas if/else para estados con y sin backend/GPS
  - ✅ **Edge Cases** — Grid comparativo "Hoy (inferido)" vs "Con copiloto"
  - ✅ **Impacto con hipótesis causales** — KPI hero + framework de hipótesis con métricas proxy y lógica causal
  - ✅ **Wireframes v2** — Reemplazadas las 5 pantallas de baja definición por nuevas imágenes; eliminado P3 (En camino) sin imagen disponible
  - ✅ **User Flow actualizado** — Nueva imagen del diagrama completo
  - ✅ **Ajustes de copy** — Eliminados guiones del medio (em dash) para escritura más humana; callout duplicado eliminado; textos a ancho completo del layout
  - ✅ **Navegación** — `nav.js` actualizado para trackear la nueva sección Alcance
- **Archivos:** `web/index.html`, `web/css/components.css`, `web/css/responsive.css`, `web/js/nav.js`, `web/img/user-flow.png`, `web/img/wireframes v2/` (5 pantallas)

---

### `7cb21dc` — feat: reorder sections, footer LinkedIn, user flow real, texto a ancho completo
- **Fecha:** 2026-04-03
- **Rama:** `main`
- **Cambios:**
  - ✅ **Reorden de secciones** — El nuevo orden es: Brief → Problema → Investigar → Solución → **05 · Diseño** → **06 · Impacto** (diseño antes de impacto)
  - ✅ **Footer actualizado** — Se quitó el badge "MELI UX Challenge · 2026" y la nota de iteración. Quedó: nombre, email+teléfono, LinkedIn (`linkedin.com/in/matias-ferracani`)
  - ✅ **User Flow real** — Se convirtió el PDF `User Flow — Ruta Flex_ Copiloto de entregas.pdf` a PNG (3000×713px) con `qlmanage`. Se reemplazó el placeholder por la imagen real en un contenedor con scroll horizontal
  - ✅ **Texto a ancho completo** — Se eliminaron los `max-width: 720px` en los párrafos de la sección diseño
  - ✅ **Route-nav sincronizado** — `nav.js` y los nodos del sidebar actualizados con el nuevo orden
- **Archivos:** `web/index.html`, `web/css/components.css`, `web/css/responsive.css`, `web/js/nav.js`, `web/img/user-flow.png` (nuevo)

---

### `f9cc5a4` — fix: improve contrast on hypothesis notice badge
- **Fecha:** 2026-04-02 19:13
- **Rama:** `main`
- **Cambio:** Mejorado el contraste del badge `.section-notice` en la sección Solución. Pasó de texto gris claro itálica a un pill con fondo naranja sutil, borde, ícono prominente y texto oscuro legible.
- **Archivos:** `web/css/components.css`

---

### `7a868c8` — feat: upgrade portfolio to hiring-panel level
- **Fecha:** 2026-04-02 19:05
- **Rama:** `main`
- **Cambio:** Upgrade completo del portfolio a nivel hiring panel. Incluye:
  - ✅ **Source tags** — 4 categorías (Brief, Inferencia, Benchmark, Supuesto) como pills coloridos en cada bloque de contenido para mostrar la fuente de cada afirmación
  - ✅ **Resumen ejecutivo** — Card above-the-fold con 4 columnas: Señal, Propuesta, Impacto Esperado, Mi Rol
  - ✅ **Reducción de texto** — Párrafos largos convertidos a bullet lists concisas
  - ✅ **Sección 04 · Solución** — "Copiloto de ruta" con:
    - Hypothesis banner (framing de propuesta a validar)
    - Direction card
    - Grid de 5 decisiones concretas de diseño (Lista, Detalle, Progreso, Paquetes, Navegación)
    - Tabla de resolución de pain points (pain → decisión → pantalla)
  - ✅ **Sección 06 · Impacto** (antes 05) —
    - KPI hero (+4 pts NPS)
    - Grid de 4 métricas secundarias
    - Tabla de plan de validación (4 fases)
    - Cards de riesgos y mitigación
    - Closing block azul (Qué cambió / Por qué / Cómo lo mediría)
  - ✅ **Route-nav** actualizado a 7 secciones
  - ✅ **Responsive** rules para todos los nuevos componentes
- **Archivos:** `web/index.html`, `web/css/components.css`, `web/css/responsive.css`, `web/js/nav.js`

---

### `d35e283` — feat: MELI UX Challenge portfolio — Brief, Problema e Investigar
- **Fecha:** 2026-04-02 17:31
- **Rama:** `main`
- **Cambio:** Primera versión del portfolio con 3 secciones principales:
  - ✅ **Hero** con métricas animadas, ilustración y CTA
  - ✅ **01 · Brief** — Contexto, NPS highlight, quotes de usuarios, insight card
  - ✅ **02 · Problema** — Auditoría UX, persona (Marcos), problema formulado, HMW, principios de diseño
  - ✅ **03 · Investigar** — Supuestos, benchmark (6 apps), heurísticas, pains & gains, insights, priorización
  - ✅ **Route-nav** — Sidebar vertical con IntersectionObserver, progreso animado
  - ✅ **Sistema de diseño** — Tokens MELI, Inter font, motion con scroll reveals
  - ✅ **Responsive** — Desktop, tablet (dots only), mobile (nav oculto)
- **Archivos:** Todo el directorio `web/` (HTML, CSS, JS, assets)

---

## Estructura del repositorio

```
MELI/
├── web/                          ← Root para Vercel
│   ├── index.html                ← One-page portfolio
│   ├── css/
│   │   ├── tokens.css            ← Design tokens (colores, tipografía, spacing)
│   │   ├── base.css              ← Reset y estilos base
│   │   ├── components.css        ← Componentes reutilizables
│   │   ├── sections.css          ← Estilos de secciones
│   │   ├── motion.css            ← Animaciones y transiciones
│   │   └── responsive.css        ← Breakpoints (1024, 768, 400)
│   ├── js/
│   │   ├── motion.js             ← IntersectionObserver para reveals
│   │   └── nav.js                ← Route-nav controller
│   ├── img/
│   │   └── user-flow.png         ← Diagrama User Flow (generado desde PDF)
│   └── assets/                   ← Imágenes generadas con AI
├── Armado del challenge/         ← Documentación fuente (Obsidian)
├── Documentación para el armado/ ← Referencias y research
└── Desarrollo — Changelog.md    ← Este archivo
```

---

## Próximos pasos

- [x] **User Flow** — Imagen del diagrama integrada en la sección Diseño
- [x] **Pantallas wireframes v2** — Reemplazadas las 5 pantallas de baja definición
- [x] **Pantallas high-fi** — Insertas las pantallas P1 y P2 en alta definición
- [x] **v2 iteration** — Contexto operativo, supuestos, alcance, diseño resiliente, edge cases, hipótesis de impacto
- [ ] **Wireframe P3 (En camino)** — Agregar imagen a `wireframes v2/` cuando esté lista
- [ ] **Link a Figma** — Actualizar el `href` del botón "Abrir en Figma" con el link real al prototipo
- [ ] **Testing** — Documentar resultados de tests de usabilidad (si aplica)
