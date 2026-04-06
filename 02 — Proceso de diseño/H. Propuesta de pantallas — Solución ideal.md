
# Propuesta de pantallas — Solución ideal

> Esta documentación corresponde al prototipo visual (wireframes + high-fi). Es la **mejor solución posible**, no el MVP. El scope de MVP está documentado en `F. LANZAR.md`.

---

## Concepto

**"Ruta Flex: Copiloto de entregas"**

Un copiloto que propone, informa y se adapta — respetando que el transportista sabe más sobre su territorio que cualquier algoritmo. El sistema propone. El repartidor decide.

**Dirección visual:** *Pro tool con alma humana.* Alta claridad, densidad funcional, outdoor-ready, one-hand-friendly. Inspiración: control de Revolut, calidez de Nubank, sistema de ML.

---

## Flujo de navegación

```
P0 → P1 → [tap parada] → P2 → [Ya lo entregué] → P1 (actualizado)
P1 → [Ir a siguiente] → P3 → [Llegué] → P2
P1 → [Reorganizar] → P1b (modo drag)
P2 → [No pude entregar] → P2b (problema)
P1 → [+ Agregar] → P5 (parada libre)
P1 → [header tap] → P8 (historial del día)
P3 → [≡ header] → P1b (reorganizar sin salir)
```

---

## Pantallas — Low-fi (wireframes)

### P0 — Inicio de jornada

```
┌─────────────────────────────────┐
│  Status bar                     │
│─────────────────────────────────│
│  ←  Preparar jornada            │
│─────────────────────────────────│
│                                  │
│  ┌──────────────────────────┐   │
│  │  📦  18 paquetes         │   │
│  │      listos para repartir│   │
│  └──────────────────────────┘   │
│                                  │
│  📍 Tu ubicación actual          │
│  Belgrano, CABA                  │
│                                  │
│  ┌──────────────────────────┐   │
│  │  Ruta sugerida           │   │
│  │  15 paradas · ~4h 20min  │   │
│  │  Optimizada por cercanía │   │
│  └──────────────────────────┘   │
│                                  │
│  [ Ver ruta antes de empezar ]   │
│                                  │
│─────────────────────────────────│
│  [ Empezar a repartir  →  ]      │
└─────────────────────────────────┘
```

---

### P1 — Vista de ruta (orden sugerido) ⭐ HIGH-FI

```
┌─────────────────────────────────┐
│  Status bar                     │
│─────────────────────────────────│
│  Hoy · 3 abr     [historial ①] │
│─────────────────────────────────│
│  ████████░░░░░░  5 de 15        │
│─────────────────────────────────│
│  ┌──────────────────────────┐   │
│  │ ✦ Ruta sugerida           │   │
│  │   Seguís este orden y    │   │
│  │   ahorrás ~38 min        │   │
│  │  [Reorganizar]  [Aceptar]│   │
│  └──────────────────────────┘   │
│                                  │
│  ┌──────────────────────────┐   │  ← CARD ACTIVA
│  │ ① ● EN CAMINO            │   │
│  │   Av. Cabildo 1209, 1°B  │   │
│  │   Juan Pérez  ·  📦 2    │   │
│  │   1.2 km  ·  ~5 min      │   │
│  │   [▶ Ir a siguiente]     │   │
│  └──────────────────────────┘   │
│                                  │
│  ┌──────────────────────────┐   │
│  │ ② ○  Thames 456, 3°B     │   │
│  │   María López  ·  📦 1   │   │
│  │   2.3 km  ·  ~9 min      │   │
│  │   💬 "Dejar con portero" │   │
│  └──────────────────────────┘   │
│                                  │
│  ┌──────────────────────────┐   │
│  │ ③ ○  Av. Córdoba 789     │   │
│  │   Carlos Ruiz  ·  📦 3   │   │
│  │   3.1 km  ·  ~12 min     │   │
│  └──────────────────────────┘   │
│                                  │
│  ┌──────────────────────────┐   │  ← PARADA LIBRE
│  │ ✎  Trámite · Banco Prov. │   │
│  │   San Martín 140         │   │
│  │   Agregado por vos       │   │
│  └──────────────────────────┘   │
│                                  │
│  ✓ Entregada: Bulnes 123 — 10:42│
│                                  │
│  [ + Agregar parada libre ]      │
│─────────────────────────────────│
│  🗺 Ruta  |  📦 Paquetes  |  ⋯  │
└─────────────────────────────────┘
```

---

### P1b — Vista de ruta (modo reorganizar) ⭐ HIGH-FI

```
┌─────────────────────────────────┐
│  Status bar                     │
│─────────────────────────────────│
│  [Cancelar]   Reorganizar  [Guardar]
│─────────────────────────────────│
│  Arrastrá para cambiar el orden  │
│                                  │
│  ≡ ①  Av. Cabildo 1209, 1°B    │
│        Juan Pérez  ·  📦 2      │
│        1.2 km · ~5 min          │
│                                  │
│  ≡ ②  Thames 456, 3°B          │
│        María López  ·  📦 1     │
│        ┄ ┄ ┄ ┄ ┄ ┄ ┄ ┄         │  ← drop zone
│                                  │
│  ≡ ③  [dragging...]             │  ← card levantada
│        Av. Córdoba 789           │
│        Carlos Ruiz  ·  📦 3     │
│                                  │
│  ≡ ✎  Trámite · Banco Prov.     │
│                                  │
│  ──────────────────────────────  │
│  💡 Volver al orden sugerido     │
└─────────────────────────────────┘
```

---

### P2 — Detalle de parada ⭐ HIGH-FI

```
┌─────────────────────────────────┐
│  Status bar                     │
│─────────────────────────────────│
│  ← Parada 6 de 15        📞    │
│─────────────────────────────────│
│                                  │
│  Av. Cabildo                    │
│  1209                           │  ← número HERO (40px bold)
│  ┌──────────────────────────┐   │
│  │  Piso 1 · Depto B        │   │  ← tag fondo amarillo
│  └──────────────────────────┘   │
│  Entre Zabala y Céspedes        │
│  Belgrano, C1428, CABA          │
│                                  │
│  ┌──────────── MAPA ──────────┐  │
│  │                            │  │  ← 160px, zoom cuadra
│  │          📍                │  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  👤 Juan Pérez                   │
│     Recibe la entrega            │
│                                  │
│  💬 "Dejar con el portero        │
│      si no hay nadie"            │  ← nota del comprador
│                                  │
│  📦 2 paquetes en esta parada   │
│     PKG-4521 · Electrodoméstico  │
│     PKG-4522 · Accesorio         │
│                                  │
│  ⏱ ETA llegada: ~5 min           │
│─────────────────────────────────│
│  [  Navegar hasta acá  ]         │
│  [  Ya lo entregué  ✓  ]         │
│  [  No pude entregar   ]         │
└─────────────────────────────────┘
```

---

### P2b — Detalle: No pude entregar

```
┌─────────────────────────────────┐
│  ← Parada 6 de 15        📞    │
│─────────────────────────────────│
│  [misma info de dirección]      │
│─────────────────────────────────│
│  ¿Qué pasó con esta entrega?    │
│                                  │
│  ○  No había nadie en casa      │
│  ○  Dirección incorrecta        │
│  ○  El comprador canceló        │
│  ○  No pude acceder al edificio │
│  ○  Otro motivo                 │
│                                  │
│  [      Confirmar problema     ] │
│  [  ← Volver al detalle        ] │
└─────────────────────────────────┘
```

---

### P3 — En camino ⭐ HIGH-FI

```
┌─────────────────────────────────┐
│  Status bar (sobre mapa)        │
│─────────────────────────────────│
│  ← Volver       ≡ Reorganizar  │  ← header flotante
│─────────────────────────────────│
│                                  │
│  ┌─────────────────────────┐    │
│  │                         │    │
│  │     M  A  P  A          │    │  ← 58% pantalla
│  │                         │    │
│  │       [6 de 15]         │    │  ← badge flotante
│  │                         │    │
│  │           📍            │    │
│  └─────────────────────────┘    │
│                                  │
│  ┌── BOTTOM SHEET ─────────┐    │  ← 42% restante
│  │  — — —                  │    │  ← handle
│  │  Próxima parada          │    │
│  │  Av. Cabildo 1209, 1°B  │    │  ← 20px bold
│  │  👤 Juan Pérez           │    │
│  │  📦 2 paquetes  ·  1.2km │   │
│  │  ⏱ ~5 min estimado       │    │
│  │                          │    │
│  │  [  Abrir en Maps/Waze  ]│    │
│  │  [  Llegué  ✓           ]│    │  ← aparece al acercarse
│  └─────────────────────────┘    │
└─────────────────────────────────┘
```

---

### P4 — Confirmación de entrega

```
┌─────────────────────────────────┐
│  ← Parada 6 · Juan Pérez        │
│─────────────────────────────────│
│  ✓ ¿Cómo la entregaste?         │
│                                  │
│  ○  En mano al receptor         │
│  ○  Con vecino / portero        │
│  ○  En buzón / área segura      │
│                                  │
│  📷 Foto de la entrega           │
│  ┌──────────────────────────┐   │
│  │   [  + Sacar foto  ]     │   │
│  └──────────────────────────┘   │
│                                  │
│  ¿Firma del receptor?            │
│  ┌──────────────────────────┐   │
│  │  [área de firma]         │   │
│  └──────────────────────────┘   │
│─────────────────────────────────│
│  [ Confirmar entrega  ✓ ]        │
└─────────────────────────────────┘
```

---

### P5 — Agregar parada libre

```
┌─────────────────────────────────┐
│  ╲  Agregar parada libre        │  ← bottom sheet
│─────────────────────────────────│
│  Tipo                           │
│  ┌────────┐ ┌────────┐ ┌──────┐ │
│  │Trámite │ │ Pausa  │ │Otro  │ │
│  └────────┘ └────────┘ └──────┘ │
│                                  │
│  Dirección (opcional)           │
│  ┌──────────────────────────┐   │
│  │ Ej: Av. Santa Fe 1234   │   │
│  └──────────────────────────┘   │
│                                  │
│  Nota (opcional)                │
│  ┌──────────────────────────┐   │
│  │ Ej: Turno 14hs, piso 3  │   │
│  └──────────────────────────┘   │
│                                  │
│  Insertar en la ruta:           │
│  ○  Ahora (siguiente parada)    │
│  ○  Al final de la ruta         │
│                                  │
│  [ + Agregar a mi ruta ]        │
└─────────────────────────────────┘
```

---

### P6 — Quick action bottom sheet ⭐ HIGH-FI

```
┌─────────────────────────────────┐
│  (fondo atenuado)               │
│                                  │
│  ┌── BOTTOM SHEET ─────────┐    │
│  │  — — —                  │    │
│  │  Av. Córdoba 789        │    │
│  │  Carlos Ruiz · 3 paq.   │    │
│  │  ──────────────────────  │    │
│  │  ⬆  Llevar primero       │    │  ← promueve a #1
│  │  ▶  Iniciar navegación   │    │
│  │  ℹ  Ver detalle completo │    │
│  │  ✎  Agregar nota         │    │
│  │  ──────────────────────  │    │
│  │  [  Cancelar  ]          │    │
│  └─────────────────────────┘    │
└─────────────────────────────────┘
```

---

### P7 — Ruta completada

```
┌─────────────────────────────────┐
│  Status bar                     │
│─────────────────────────────────│
│          🎉                      │
│                                  │
│  ¡Ruta completada!              │
│  Excelente trabajo hoy          │
│                                  │
│  15 entregas  ·  2h 45min       │
│  ████████████████  100%         │
│                                  │
│  ┌──────────────────────────┐   │
│  │  Entregadas:   14        │   │
│  │  Con problema:  1        │   │
│  │  Paradas libres: 2       │   │
│  └──────────────────────────┘   │
│                                  │
│  [ Ver resumen del día  ]        │
│  [ Cerrar jornada       ]        │
└─────────────────────────────────┘
```

---

### P8 — Historial del día

```
┌─────────────────────────────────┐
│  ← Ruta             Hoy, 3 abr │
│─────────────────────────────────│
│  5 de 15 completadas            │
│─────────────────────────────────│
│                                  │
│  ✓ 09:12  Bulnes 123, 2°A       │
│           Ana Gómez · 1 paquete │
│                                  │
│  ✓ 09:44  Av. Rivadavia 4532   │
│           Pedro L. · 2 paquetes │
│                                  │
│  ✗ 10:20  Corrientes 1200       │
│           No había nadie        │
│                                  │
│  ✓ 10:51  Gallo 234, PB        │
│           Julia F. · 1 paquete  │
│                                  │
│  ✓ 11:30  Thames 780, 4°C      │
│           Marcos S. · 3 paq.    │
│                                  │
│  [  Ver todo el historial  ]    │
└─────────────────────────────────┘
```

---

## Sistema visual

### Tipografía

| Token | Size | Weight | Line-height | Uso |
|-------|------|--------|-------------|-----|
| `text-hero` | 40px | 800 | 44px | Número de calle (P2) |
| `text-title` | 22px | 700 | 28px | Dirección principal |
| `text-headline` | 18px | 700 | 24px | Nombre receptor, siguiente parada |
| `text-body-lg` | 16px | 400 | 22px | Info de cards, contenido general |
| `text-body` | 14px | 400 | 20px | Datos secundarios, entre calles |
| `text-label` | 12px | 600 | 16px | Badges, tags, status |
| `text-caption` | 12px | 400 | 16px | Barrio, CP, info terciaria |

Familia: **Proxima Nova** (ML oficial) / fallback: Inter

---

### Color

| Token | Hex | Uso |
|-------|-----|-----|
| `brand-yellow` | `#FFE600` | Marca, tag Piso/Depto, acento mínimo |
| `brand-blue` | `#3483FA` | Links, interactivos, botón secundario |
| `color-success` | `#00A650` | Entregado, progreso completado |
| `color-error` | `#F23D4F` | Error, problema de entrega |
| `color-warning` | `#FF7733` | Alerta de zona, atención |
| `surface-bg` | `#F0F0F0` | Fondo general (mejor contraste en sol) |
| `surface-card` | `#FFFFFF` | Fondo de cards |
| `surface-overlay` | `rgba(0,0,0,0.48)` | Overlay de bottom sheets |
| `text-primary` | `#1A1A1A` | Texto principal |
| `text-secondary` | `#666666` | Texto secundario |
| `text-tertiary` | `#999999` | Captions, info terciaria |
| `border-subtle` | `#E8E8E8` | Divisores, bordes |
| `border-active` | `#3483FA` | Card activa, foco |

**Contraste clave (WCAG):**
- `text-primary` sobre `surface-card`: 14.8:1 ✅ AAA
- `text-secondary` sobre `surface-card`: 5.7:1 ✅ AA
- texto sobre `brand-yellow`: 12.6:1 ✅ AAA

---

### Spacing (base 8px)

| Token | Value | Uso |
|-------|-------|-----|
| `space-4` | 4px | Gaps internos mínimos |
| `space-8` | 8px | Gap entre elementos relacionados |
| `space-12` | 12px | Padding de chips/badges |
| `space-16` | 16px | Padding lateral, padding de cards |
| `space-20` | 20px | Gap entre secciones dentro de card |
| `space-24` | 24px | Gap entre cards en lista |
| `space-32` | 32px | Separación entre secciones |
| `space-48` | 48px | Padding bottom (sobre tab bar) |

---

### Border Radius

| Token | Value | Uso |
|-------|-------|-----|
| `radius-sm` | 4px | Tags inline, badges |
| `radius-md` | 8px | Cards, inputs |
| `radius-lg` | 12px | Bottom sheets, modales |
| `radius-xl` | 16px | Cards destacadas, banners |
| `radius-full` | 9999px | Chips, avatares, pills |

---

### Sombras

| Token | Value | Uso |
|-------|-------|-----|
| `shadow-sm` | `0 1px 4px rgba(0,0,0,0.10)` | Cards en lista |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.15)` | Card activa, bottom sheet |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.20)` | Modales |
| `shadow-drag` | `0 12px 32px rgba(0,0,0,0.28)` | Card siendo arrastrada |

---

## Componentes clave

### ParadaCard

```
Frame: Auto-layout vertical · Padding 16px · Gap 8px
Background: #FFFFFF · Border-radius: 8px · Shadow: shadow-sm

Row 1: [Número orden] [Dirección] [Badge paquetes]
  → número: 24px bold · círculo #3483FA (filled para activa)
  → dirección: 16px regular · 2 líneas máx · truncado
  → badge: chip #F5F5F5 · 12px medium

Row 2: [Nombre receptor] [ETA]
  → receptor: 14px regular · text-secondary
  → ETA: 12px · alineado derecha · text-tertiary

Row 3 (si hay nota): [💬 Nota del comprador]
  → 12px italic · text-secondary · 1 línea · truncado

Row 4 (solo card activa): [▶ Ir a siguiente]
  → text link · 14px bold · brand-blue

Variantes: activa / pendiente / entregada / libre
```

### Handle de drag (≡)

```
Touch target: 56×56px
Visual: 3 líneas · 16px wide · 2px height · 4px gap · color #C0C0C0
Feedback: háptico al iniciar drag · card se levanta shadow-drag
```

### Banner ruta sugerida

```
Padding: 16px · Border-radius: 12px
Background: #FFFBE6 · Borde: 1px solid #FFE600

Contenido: ícono ✦ + texto + [Reorganizar] + [Aceptar]

Estado "Tu orden":
  Background: #F5F5F5 · sin borde amarillo
  Texto: "Tu orden" bold + [Ver sugerida] link gris
```

### Bottom sheet quick action

```
Width: 100% · Border-radius top: 20px · Padding: 20px 16px 32px
Background: #FFFFFF · Shadow-lg
Handle: 4px × 40px · #E0E0E0 · centrado

Header: dirección bold + subtexto receptor/paquetes
Opciones: Row 56px · ícono 20px + texto 16px + chevron
  → "⬆ Llevar primero": azul (acción principal)
  → "▶ Iniciar navegación": negro
  → "ℹ Ver detalle": negro
  → "✎ Agregar nota": negro
```

### Toast de undo

```
Padding: 14px 16px · Border-radius: 8px
Background: #1A1A1A · Shadow-md
Posición: bottom 80px · centrado · slide-up
Texto: "Parada movida al inicio" blanco + "Deshacer" amarillo
Desaparece: 5 segundos · fade-out
```

### Tag Piso/Depto (P2)

```
Padding: 6px 12px · Border-radius: 4px
Background: #FFE600 · Texto: #1A1A1A · 16px bold
Posición: debajo del número hero, como bloque dedicado
```

---

## Estados por pantalla

### P1 — Vista de ruta

| Estado | Descripción |
|--------|-------------|
| Default | Banner "Ruta sugerida" visible · card #1 con borde azul |
| Tu orden | Banner → "Tu orden · Ver sugerida" · sin borde amarillo |
| Modo drag | Header → [Cancelar]/[Guardar] · handles visibles |
| Card dragging | shadow-drag · placeholder punteado · escala 1.03 |
| Drop confirmado | Toast undo 5s · reorden animado 300ms ease-out |
| Parada entregada | Card → estado entregada · progress +1 · siguiente se destaca |
| Empty state | Ilustración + "No tenés entregas pendientes" |

### P2 — Detalle de parada

| Estado | CTAs visibles |
|--------|--------------|
| Pendiente | [Navegar] + [Ya lo entregué] + [No pude entregar] |
| En camino | Badge "En camino" · ETA actualizado · [Llegué] |
| Entregado | → P4 confirmación |
| Problema | → P2b selección de motivo |

### P3 — En camino

| Estado | Comportamiento |
|--------|---------------|
| Lejos | CTA: [Abrir en Maps/Waze] |
| < 500m | Bottom sheet se expande · ETA "~2 min" |
| < 200m | CTA → [Llegué] + vibración |
| Llegó | Transición automática → P2 |

---

## Accesibilidad

- Contraste mínimo 4.5:1 en todos los textos funcionales ✅
- Touch targets mínimo 56px para acciones primarias
- Handle de drag con feedback háptico
- Toast con `role="alert"` para screen readers
- "Llevar primero" como alternativa al drag (no depende de motor skill)
- `prefers-reduced-motion`: desactivar slides, mantener fades
- No depender solo del color: siempre acompañar con ícono o label
- Tipografía mínima 16px para info crítica (lectura en movimiento)

---

## Instrucciones para Figma

### Estructura del archivo

```
📁 Ruta Flex — Copiloto de entregas
│
├── 📄 _Tokens & Styles
│     Color · Text · Effects
│
├── 📄 _Components
│     ParadaCard (4 variantes)
│     QuickActionSheet
│     BannerSugerida (2 estados)
│     ToastUndo
│     ProgressBar
│     TagPisoDepto
│     BottomNav
│     HeaderBar (3 variantes)
│
├── 📄 Wireframes (Low-fi)
│     P0 → P1 → P1b → P2 → P2b → P3 → P4 → P5 → P6 → P7 → P8
│
├── 📄 High-fi: Vista de ruta
│     P1 — Orden sugerido
│     P1b — Modo reorganizar
│
├── 📄 High-fi: Detalle de parada
│     P2 — Default
│
├── 📄 High-fi: En camino
│     P3 — Navegación activa
│
├── 📄 High-fi: Quick Actions
│     P6 — Bottom sheet
│
└── 📄 Prototipo — Flujo completo navegable
```

### Frames

```
Todos los frames: 390 × 844px (iPhone 15 Pro)
Background: #F0F0F0
Grid: 4 columnas · 16px margen · 16px gutter
Clips content: ON
```

### Transiciones para prototipo

| Trigger | Transición | Duración | Easing |
|---------|-----------|---------|--------|
| Tap card → P2 | Push right | 350ms | ease-out |
| Tap [Reorganizar] | Dissolve | 200ms | ease-in-out |
| Tap [Ir a siguiente] → P3 | Push right | 350ms | ease-out |
| Tap [Llegué] → P2 | Push right | 350ms | ease-out |
| Tap [Ya lo entregué] → P1 | Pop | 300ms | ease-in-out |
| Bottom sheet open | Slide up | 300ms | ease-out |
| Bottom sheet close | Slide down | 250ms | ease-in |
| Toast appear | Slide up + fade | 200ms | ease-out |
| Toast dismiss | Fade out | 300ms | ease-in |

---

## Pantallas HIGH-FI prioritarias (para la entrega)

1. **P1 — Vista de ruta (orden sugerido):** la más vista del día, resuelve 3 de 4 pain points
2. **P1b — Modo reorganizar:** demuestra que el control es ciudadano de primera clase
3. **P2 — Detalle de parada:** la más operativa, con dirección en 4 niveles como diferencial
4. **P3 — En camino:** la más visual, demuestra thinking de flujo completo
5. **P6 — Quick action sheet:** se muestra como overlay sobre P1

**Orden de ejecución en Figma:** tokens → componentes → P1 → P2 → P3 → P1b → prototipo
