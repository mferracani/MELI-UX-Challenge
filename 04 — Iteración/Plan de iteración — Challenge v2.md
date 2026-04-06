# Plan de Iteración — Challenge Envíos Flex v2

**Fecha:** Abril 2026
**Objetivo:** Convertir una entrega sólida en una entrega diferencial.
**Criterio de éxito:** Que cada decisión de diseño pueda defenderse ante un evaluador de producto senior de MELI sin que la respuesta sea "porque así se hace" o "porque es best practice".

---

## Diagnóstico rápido del estado actual

| Dimensión | Estado actual | Lo que falta |
|-----------|--------------|-------------|
| Problem framing | Fuerte — buen replanteamiento del brief | Separar hipótesis de afirmaciones. Hacer explícito qué asumís vs. qué sabés |
| Research | Benchmark sólido, pero evidencia "blanda" | Faltan artefactos duros: auditoría anotada del wireframe actual, matriz de supuestos con riesgo |
| Decisiones de diseño | Bien fundamentadas en happy path | Drag & drop contradice el contexto. Falta justificación de por qué ese patrón y no otro |
| Edge cases | Solo happy path + 4 errores genéricos | Faltan edge cases operativos reales de última milla |
| Métricas | KPIs listados, sin baseline ni lógica causal | No hay forma de probar que el problema era IA y no otra causa |
| Scope | Implícito | No hay declaración explícita de qué NO resolvés y por qué |
| Dependencias técnicas | Mencionadas como riesgo | No están integradas en las decisiones de diseño |

---

## EJE 1 — Evidencia más creíble

**Problema:** La persona/arquetipo (Marcos) se siente decorativo. Los insights son claros pero no tienen "peso" de evidencia. El evaluador puede pensar "esto lo inventaste".

### Acciones concretas

**1.1 · Auditoría anotada del wireframe actual**
- Tomar el wireframe del brief y anotarlo visualmente con señalamientos concretos: "Este dato está colapsado detrás de un chevron", "Acá no hay indicación de orden", "El nombre del receptor no es visible".
- Esto reemplaza a los párrafos descriptivos de "Qué revela la experiencia actual" con un artefacto visual que el evaluador puede ver en 5 segundos.
- **Dónde va:** En la sección "Problema" del portfolio, como imagen anotada antes de la definición del problema.

**1.2 · Tabla de supuestos con nivel de certeza**
- Convertir la tabla de "Supuestos críticos a validar" (que ya tenés en E. Validar) en algo más duro:

| Supuesto | Tipo | Certeza | Fuente | Si falla, qué cambia |
|----------|------|---------|--------|---------------------|
| La dirección viene como dato estructurado | Técnico | Baja — no lo puedo confirmar | Inferencia del wireframe | La jerarquía de 4 niveles se degrada a texto plano con parsing |
| El algoritmo de proximidad existe | Técnico | Desconocida | No hay dato en el brief | Sin algoritmo, el MVP pierde su feature principal. Fallback: orden manual |
| Los transportistas prefieren orden sugerido | Comportamiento | Media — Carlos lo pide, pero es 1 dato | Brief (1 quote) | Si prefieren control total, el banner de sugerencia se invierte: el default es "tu orden" |

- **Dónde va:** En la sección de investigación, reemplazando o complementando la tabla actual de supuestos.

**1.3 · Eliminar o reducir la proto-persona**
- Marcos cumple su función como ancla de contexto, pero hoy ocupa demasiado espacio para lo que aporta. La información relevante (gama media, una mano, 2-3 seg de atención, moto) puede ir como constraints de diseño, no como ficha de persona.
- **Acción:** En el portfolio web, convertir la persona en un bloque compacto de "Contexto de uso" con los constraints operativos clave, no la biografía.

---

## EJE 2 — Revisar decisiones que contradicen el contexto

**Problema:** Drag & drop y automatismos por proximidad son decisiones que requieren justificación explícita frente al contexto de calle.

### Acciones concretas

**2.1 · Rediseñar el modelo de reorden para v1**
- **Decisión propuesta:** En MVP, el reorden se resuelve con dos acciones simples:
  - "Llevar primero" (quick action en bottom sheet — ya lo tenés)
  - "Hacer después" (manda la parada al final de la cola)
- El drag & drop se mueve a v2 con la justificación: "Requiere precisión motora sostenida que no es compatible con el contexto de calle. Para v1, las dos acciones rápidas cubren el 80% de los casos de reorden sin exigir coordinación fina."
- **Impacto en el Figma:** P1b (modo reorganizar) se simplifica o se convierte en un flujo de bottom sheet con opciones de posición.
- **Impacto en la defensa:** En vez de defender drag & drop en calle (posición débil), defendés por qué elegís un modelo más simple para v1 y cuándo escalarías (posición fuerte).

**2.2 · Hacer explícito el trade-off de "ruta sugerida"**
- La ruta auto-organizada por proximidad suena bien, pero dependés de que exista un algoritmo backend. En la entrega actual esto está como "dependencia". Proponemos reframearlo como una decisión de diseño con fallback:
  - **Si hay algoritmo:** La app muestra "Ruta sugerida · Ahorrás ~38 min" (como ya lo tenés).
  - **Si no hay algoritmo:** La app muestra las paradas en el orden en que fueron asignadas, con la opción de "Ordenar por cercanía" que usa la geolocalización del dispositivo para hacer un sort simple (no ruteo real, solo distancia en línea recta).
- **Dónde va:** En la sección de solución, como nota de "Diseño resiliente: cómo funciona con y sin backend".

**2.3 · Revisar el CTA "Llegué" por proximidad GPS**
- El flujo propone que "Llegué" aparece cuando el GPS detecta <200m. Pero en contexto real el GPS urbano tiene error de 10-50m, y en edificios altos o calles angostas puede ser peor. Documentar qué pasa cuando el GPS dice que llegó pero no llegó, o cuando el transportista llegó pero el GPS no lo detecta.
- **Acción:** Agregar en P3 un estado "GPS impreciso" donde el CTA "Llegué" está siempre disponible (como secundario) además del adaptativo. Documentar la decisión.

---

## EJE 3 — Hipótesis medibles, no promesas

**Problema:** "Recuperar los 4 puntos de NPS" es una promesa, no una hipótesis. "Reducir llamadas un 20%" no tiene baseline.

### Acciones concretas

**3.1 · Reformular métricas como hipótesis con estructura**

Para cada métrica:

| Métrica | Baseline (estimado) | Hipótesis | Cómo validar | Por qué debería moverse |
|---------|---------------------|-----------|--------------|------------------------|
| Tiempo entre abrir detalle y confirmar entrega | ~45 seg (estimado: incluye buscar datos) | Reducir a ~20 seg | A/B test, analytics de sesión | Si la info está visible sin buscar, el tiempo de resolución baja |
| Tasa de uso del botón "Llamar" por parada | Alta (inferida del pain #3) | Reducir 30%+ | Analytics pre/post | Si la dirección se entiende de un vistazo, no necesita llamar |
| Tasa de tap en "Datos comprador" (UI actual) | Alta (dato colapsado) | Desaparece como interacción | Comparativa pre/post | Si el dato ya es visible, nadie lo busca |
| NPS de la app | Baseline - 4 puntos (dato del brief) | Recuperar 2-4 puntos en 8 semanas | Survey mensual | El NPS cayó por insatisfacción con la app; si la experiencia mejora, debería recuperarse parcialmente |
| Entregas/día/transportista | ~20 (estimado del brief) | Aumento de 5-10% | Data operativa | Menos tiempo buscando info = más entregas completadas |

**Clave:** Las 3 primeras métricas son las que prueban que el problema era de arquitectura de información. El NPS es el norte, pero las proxy son la evidencia.

**3.2 · Agregar "Por qué debería moverse" a cada KPI**
- En el portfolio web, cada métrica necesita una línea que explique la lógica causal: "Esta métrica debería moverse porque [mi decisión de diseño X] cambia [el comportamiento Y]".
- Esto convierte las métricas de "lista de KPIs" a "framework de medición" — mucho más senior.

---

## EJE 4 — Edge cases operativos

**Problema:** El flujo se siente limpio en happy path pero no demuestra que pensaste en la realidad de la calle.

### Acciones concretas

**4.1 · Documentar 3-4 edge cases operativos reales y cómo la app responde**

| Situación | Qué pasa hoy (inferido) | Qué propone el copiloto |
|-----------|------------------------|------------------------|
| **Dirección sin numeración visible** (barrio informal, zona nueva) | El transportista llama al comprador | P2 muestra la nota del comprador prominente ("Casa azul frente a la plaza"). Si no hay nota, sugiere "¿Necesitás contactar al comprador?" con CTA directo a llamar |
| **Comprador ausente, no contesta** | El transportista espera o se va sin registrar | Timer de espera visible en P2: "Esperando hace 3 min". Después de 5 min, la app sugiere "¿No hay nadie? Podés reportar el problema o dejar en lugar seguro" |
| **GPS impreciso en zona urbana densa** | El CTA "Llegué" no aparece, o aparece antes de tiempo | "Llegué" siempre disponible como acción manual. El adaptativo por GPS es un plus, no un gate. Banner sutil "Tu ubicación puede no ser precisa" |
| **Sin señal / modo offline** | La app no carga | La ruta se cachea al inicio de la jornada. En offline, el transportista puede operar con datos locales y sincronizar cuando vuelva la conexión. Banner "Sin conexión — trabajando con tu última ruta" |
| **Edificio sin portero, comprador en piso alto** | El transportista no sabe cómo acceder | Si hay instrucciones de acceso del comprador ("Timbre 3B, esperar"), se muestran prominentes en P2. Si no hay, CTA "Llamar" sigue siendo el fallback principal |

**4.2 · Elegir 2 de estos edge cases para mostrar visualmente**
- Recomiendo: "Dirección sin numeración + nota del comprador" y "Sin conexión / modo offline".
- No necesitan ser pantallas high-fi completas — pueden ser un estado de P2 con variantes, o una nota en el flujo.
- **Dónde van:** En la sección de diseño del portfolio, después del happy path, como "Diseño para la fricción" o "Cuando el happy path falla".

---

## EJE 5 — Recorte explícito

**Problema:** No está claro qué NO resolvés. Un buen recorte comunica madurez de producto.

### Acciones concretas

**5.1 · Agregar sección "Fuera de alcance — y por qué"**

| Qué no resuelvo | Por qué |
|-----------------|---------|
| Optimización algorítmica real de rutas | Requiere backend de ruteo que no puedo confirmar que existe. Mi propuesta funciona con o sin él |
| Disponibilidad y estructura de datos de dirección | Es una dependencia de datos, no de diseño. Diseño para el caso ideal y para el degradado |
| Integración con sistema de Maps (routing en vivo) | Complejidad técnica alta, scope de v3. El MVP usa deep link a Google Maps/Waze |
| Chat con comprador | Requiere integración con sistema de mensajería. El MVP resuelve con "Llamar" |
| Excepciones logísticas (devoluciones, paquetes dañados, reagendamiento) | Flujos que requieren research operativo profundo. El MVP cubre entrega exitosa + "no pude entregar" |
| Métricas reales — solo propongo framework | No tengo acceso a datos de producción. Planteo hipótesis con baseline estimado, no promesas |

**5.2 · Integrar el recorte en la narrativa**
- En la defensa oral y en el portfolio, el recorte no va al final como disclaimer — va junto a la propuesta de solución: "Elegí resolver X porque [razón]. Dejé fuera Y porque [razón]."

---

## Orden de ejecución sugerido

| # | Acción | Impacto | Esfuerzo | Dónde impacta |
|---|--------|---------|----------|---------------|
| 1 | Reformular drag & drop → acciones simples (2.1) | 🔴 Alto — elimina la contradicción más visible | Medio — requiere ajustar P1b y docs | Figma + portfolio + defensa |
| 2 | Agregar edge cases operativos (4.1 + 4.2) | 🔴 Alto — diferencial vs. otros candidatos | Medio — 2 estados + documentación | Figma + portfolio |
| 3 | Métricas como hipótesis, no promesas (3.1 + 3.2) | 🔴 Alto — cambia la percepción de seniority | Bajo — es reescritura, no diseño nuevo | Portfolio + docs |
| 4 | Recorte explícito (5.1 + 5.2) | 🟡 Medio-Alto — comunica madurez | Bajo — es una sección nueva de texto | Portfolio + defensa |
| 5 | Auditoría anotada del wireframe actual (1.1) | 🟡 Medio — reemplaza evidencia blanda | Bajo — es una imagen anotada | Portfolio |
| 6 | Tabla de supuestos con certeza (1.2) | 🟡 Medio — fortalece investigación | Bajo — ya tenés los supuestos, solo falta la estructura | Portfolio + docs |
| 7 | Compactar persona → constraints de uso (1.3) | 🟢 Bajo — ajuste de peso narrativo | Bajo | Portfolio |
| 8 | Fallback de ruta sin algoritmo (2.2) | 🟡 Medio — demuestra pensamiento resiliente | Bajo — es documentación | Docs + defensa |
| 9 | GPS impreciso — "Llegué" siempre disponible (2.3) | 🟡 Medio — coherencia con contexto real | Bajo — es un estado de P3 | Figma + docs |

---

## Preguntas de entrevista para las que ahora tenés que tener respuesta

1. "¿Por qué el reorden es con acciones simples y no con drag & drop?"
   → "Porque diseñé para contexto de calle: una mano, mirada de 2-3 segundos, movimiento. Drag & drop requiere precisión motora sostenida que no es compatible. Las dos acciones ('Llevar primero' y 'Hacer después') cubren el 80% de los escenarios de reorden con un tap. El drag queda para v2 cuando podamos validar en campo que los transportistas lo necesitan y que funciona con guantes."

2. "¿Qué pasa si la dirección viene como texto libre?"
   → "Diseñé para el caso ideal (4 niveles) y para el degradado. Si el dato es texto libre, aplico parsing básico para separar calle/número y muestro el resto como bloque. La jerarquía visual se reduce pero sigue siendo mejor que el bloque plano actual."

3. "¿Cómo sabés que el NPS cayó por arquitectura de información y no por otra cosa?"
   → "No lo sé con certeza — es mi hipótesis. Pero diseñé métricas proxy que la aislarían: si el tiempo de resolución por parada baja y la tasa de llamadas al comprador baja, eso prueba que el problema era de acceso a la información. Si esas métricas no se mueven pero el NPS tampoco sube, el problema es otro."

4. "¿Qué pasa cuando el transportista llega y no hay nadie?"
   → "En la versión actual, probablemente pierde tiempo esperando y luego busca cómo reportar. En mi propuesta, P2 incluye un timer visible de espera y después de 5 minutos sugiere las opciones de resolución. No resuelvo el problema operativo de fondo (que el comprador no esté), pero sí reduzco el tiempo muerto del transportista."
