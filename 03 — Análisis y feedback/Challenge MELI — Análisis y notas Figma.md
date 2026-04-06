# Challenge MELI — Envíos Flex: Análisis y Notas de Diseño

**Fecha:** 2026-04-05
**Challenge:** Rediseñando la experiencia de ruta en Envíos Flex
**Estado:** En proceso de refinamiento

---

## Diagnóstico narrativo

### El insight central

Los 4 pain points del brief (orden de ruta, nombre del destinatario, dirección precisa, cantidad de paquetes) no son problemas independientes. Son **síntomas de un único problema de arquitectura de información**: los datos ya existen en la app, pero no están jerarquizados ni entregados en el momento operativo correcto.

Este insight es el eje de toda la solución y debería ser el protagonista de la narrativa, no un bullet más entre otros hallazgos.

### Por qué la solución se sentía desconectada del problema

La entrega tiene un arco narrativo claro (brief → research → solución), pero falta un **puente explícito** entre el diagnóstico y las decisiones de diseño. El evaluador tiene que hacer el trabajo mental de conectar cada dolor con cada pantalla.

Tres cosas específicas generaban esa desconexión:

1. **No hay momento de transición.** Se pasa de Research (sección 03) a Proposed Solution (sección 04) sin una frase directa tipo: "Los 4 dolores son un solo problema de IA → mi solución es reorganizar la información por momento de uso → esto se traduce en 5 decisiones concretas."

2. **Las decisiones de diseño abren con el "qué", no con el "por qué".** Hoy dicen "Stop List: auto-ordenada por proximidad...". Deberían abrir con el dolor que resuelven: "Carlos pierde tiempo organizando entregas → Stop List auto-ordenada por proximidad."

3. **Los HMW desaparecen.** Se plantean en la sección 02 y nunca más se mencionan. El evaluador espera ver cada HMW respondido explícitamente en la solución.

---

## Fortalezas (no tocar)

- **El reframe del problema** — pasar de "faltan features" a "la info está mal jerarquizada" demuestra pensamiento de producto senior.
- **Los design principles** — "Zero search" y "Diseñado para la calle" son concretos, testeables y conectados al contexto real.
- **La sección de Friction Design** — contemplar offline, edificios sin portero, compradores ausentes es un diferenciador real que pocos candidatos alcanzan.
- **El framework de métricas con proxy metrics** — la lógica "si las proxy mejoran pero NPS no, el problema está en otro lado" muestra madurez analítica.

---

## Debilidades a corregir

- El insight #1 necesita jerarquía visual propia — es la tesis central, no un ítem de lista.
- Falta el puente narrativo entre diagnóstico y solución.
- Cada decisión de diseño debería abrir con la cita del usuario o el dolor, no con la descripción funcional.

---

## Notas creadas en Figma (Low-Fi)

Las siguientes notas fueron colocadas debajo de cada wireframe en la página "Flujo Low-Fi" para explicitar la conexión problema → solución.

### Happy Path

#### P0 — Inicio de jornada
> **Dolor:** El transportista no tiene visibilidad de su jornada al comenzar. No sabe cuántas paradas tiene, cuántos paquetes lleva, ni cuánto tiempo le tomará. Esto genera ansiedad e impide planificación.
>
> **Solución:** Briefing de inicio con resumen operativo — cantidad de paradas, paquetes totales y tiempo estimado. El principio "Progreso siempre visible" arranca desde el minuto cero.
>
> **Conexión con el problema de IA:** La información existía pero no se presentaba al inicio. Esta pantalla establece el contexto antes de la acción.

#### P1 — Vista de ruta (HUB)
> **Dolor (Carlos):** "Necesito organizar mis entregas por distancia y proximidad para perder menos tiempo." No sabe el orden óptimo → pierde tiempo y kilómetros.
>
> **Solución:** Lista auto-ordenada por proximidad + banner "Ruta sugerida" con tiempo estimado ahorrado. Barra de progreso "X de Y entregas" siempre visible. Badge con nombre del destinatario y cantidad de paquetes en cada card, sin necesidad de abrir el detalle.
>
> **Principio aplicado:** "Confianza en el ruteo" — si el sistema sugiere un orden, debe explicar por qué.

#### P1b — Acciones rápidas
> **Dolor:** El reordenamiento por drag & drop requiere precisión motora sostenida, incompatible con el contexto (una mano, guantes, movimiento en moto).
>
> **Solución:** Dos acciones rápidas — "Hacer primero" y "Hacer después" — cubren el 80% de los casos de reordenamiento con un solo tap. Mantiene el control del transportista sin exigir destreza fina.
>
> **Decisión de diseño:** Drag & drop diferido a v2, condicionado a validación en campo. Priorizar lo operable en contexto real sobre lo convencionalmente esperado.

#### P2 — Detalle de parada
> **Dolor (Pablo):** "Cuando llego a la dirección, muchas veces es difícil encontrar el número de la casa, así que termino llamando al comprador."
> **Dolor (Claudia):** "Nunca me acuerdo dónde encuentro el nombre de quién recibe."
>
> **Solución:** Dirección en 4 niveles jerárquicos (calle + número hero + piso/depto + entre calles). Nombre del destinatario prominente con ícono de persona. Mapa inline. Sección "Paquetes en esta parada" expandible.
>
> **Principio aplicado:** "Zero search" — si un dato requiere tocar o scrollear, la experiencia falló.

#### P4 — Confirmar entrega
> **Dolor:** No hay un cierre claro de la entrega. La fricción aquí se multiplica x15-25 entregas/día.
>
> **Solución:** Flujo de confirmación minimalista — quién recibió + foto/firma + confirmar. Opciones claras para entrega exitosa vs. "No pude entregar". Sin pasos innecesarios.
>
> **Principio aplicado:** "Diseñado para la calle" — una mano libre, ventanas de 2-3 segundos. Cada tap extra es tiempo real perdido multiplicado por cada parada del día.

#### P5 — Jornada completada
> **Dolor:** No hay visibilidad de progreso durante la jornada. El transportista no sabe "completé 8 de 20" → genera incertidumbre y ansiedad.
>
> **Solución:** Resumen de cierre con métricas de la jornada — entregas completadas, tiempo total, incidencias. Sensación de logro y control.
>
> **Principio aplicado:** "Progreso siempre visible" — la jornada debe sentirse controlable y predecible, desde el inicio (P0) hasta este cierre.

#### P2b — No pude entregar (asistido)
> **Dolor:** El transportista espera sin referencia de tiempo, o se va sin registrar. Tiempo perdido sin feedback.
>
> **Solución:** Flujo asistido con motivos predefinidos + campo opcional. Timer visible de espera. Sugerencia proactiva: "¿Nadie en casa? Reportar o dejar en lugar seguro."
>
> **Conexión:** Contempla el unhappy path sin abandonar al transportista. El sistema guía incluso cuando la entrega falla.

### Edge Cases

#### P2c — Dirección sin número
> **Dolor (Pablo):** Cuando la dirección no tiene número visible, la jerarquía de 4 niveles se rompe.
>
> **Solución:** Degradación elegante — muestra "S/N" como hero + nota del comprador prominente ("Casa azul frente a la plaza"). Si no hay nota, ofrece CTA de contacto como fallback.
>
> **Diseño resiliente:** La pantalla funciona con datos completos o incompletos. Nunca muestra "N/A" — omite niveles faltantes sin romper la jerarquía visual.

#### P3 — En camino (GPS impreciso)
> **Dolor:** El GPS impreciso hace que el transportista no sepa si llegó. El botón adaptivo "Llegué" depende de geolocalización que puede fallar.
>
> **Solución:** Si GPS preciso (<200m), el botón cambia automáticamente. Si es impreciso, "Llegué" está siempre disponible como acción manual + banner sutil.
>
> **Diseño resiliente:** La experiencia funciona con y sin GPS preciso. El sistema no bloquea al usuario por una limitación técnica.

#### P3b — Sin conexión
> **Dolor:** Sin conexión, la app no carga. El transportista queda ciego en medio de la ruta, sin poder registrar entregas.
>
> **Solución:** Ruta cacheada al inicio de la jornada. Opera offline con datos locales y sincroniza al reconectar. Banner: "Sin conexión — trabajando con tu última ruta."
>
> **Diseño resiliente:** El copiloto de ruta funciona incluso cuando la infraestructura falla. Demuestra pensamiento sistémico.

---

## Próximos pasos

- [ ] Reforzar el puente narrativo en la web del challenge (sección de transición entre Research y Solution)
- [ ] Hacer que cada decisión de diseño abra con el dolor/cita del usuario
- [ ] Elevar el insight #1 a título de sección en vez de bullet
- [ ] Agregar cierre de HMW → respuesta en la solución
- [ ] Revisar las notas en Figma y ajustar si es necesario
