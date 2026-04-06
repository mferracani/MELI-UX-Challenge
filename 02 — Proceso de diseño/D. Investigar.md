Supuestos críticos a validar

|#|Supuesto|Tipo|Riesgo si falla|
|---|---|---|---|
|S1|Los transportistas prefieren un orden sugerido por proximidad vs. elegir su propio orden|Comportamiento|Si prefieren control total, el auto-sort genera rechazo|
|S2|El nombre del receptor es dato que la app ya tiene disponible por envío|Dato técnico|Si no está, la feature no se puede implementar|
|S3|La dirección enriquecida (piso/depto/entre calles) existe como dato estructurado|Dato técnico|Si es texto libre, la jerarquía visual se complica|
|S4|Los transportistas manejan entre 10-30 entregas por jornada (rango operativo)|Contexto|Si es mucho más, la UI de lista necesita paginación/filtros|
|S5|El transportista usa el celular montado en el vehículo (no en la mano mientras maneja)|Contexto de uso|Afecta tamaño de UI y modo de interacción|

## 4.2 Dudas abiertas

- ¿El algoritmo de ruteo por proximidad ya existe en backend o hay que proponerlo?
- ¿Qué porcentaje de entregas son en edificios vs. casas? (Cambia el peso del pain de "portero/receptor")
- ¿Los transportistas son mayormente independientes o empleados del vendedor? (Cambia motivación)
- ¿Hay entregas con múltiples paquetes para un mismo destinatario? ¿O siempre 1 paquete = 1 parada?
- ¿El wireframe del brief es la UI actual real o es una simplificación para el challenge?

## 4.3 Benchmark funcional

|App / Producto|Patrón relevante|Aplicación a Flex|
|---|---|---|
|**Google Maps (turn-by-turn)**|Navegación paso a paso con siguiente maniobra prominente|La "siguiente parada" como elemento hero de la UI|
|**Waze**|Info contextual en ruta (gasolineras, alertas) sin interrumpir navegación|Datos de parada visibles sin cambiar de pantalla|
|**Amazon Flex (driver app)**|Lista de entregas con ruta optimizada, escaneo, y progreso visible|Benchmark directo: cómo manejan lista + ruta + progreso|
|**Rappi / PedidosYa (driver)**|Card de "próximo pedido" con dirección, nombre y contador|Patrón de card de entrega con info key visible|
|**Circuit (Route Planner)**|Optimización de ruta para repartidores independientes, drag to reorder|Referencia para cómo comunicar "ruta optimizada"|
|**Onfleet**|Dashboard de entregas con estados, ETA, y notas por parada|Referencia enterprise para campo operations|

## 4.4 Heurísticas UX relevantes

1. **Visibilidad del estado del sistema (Nielsen #1):** Progreso de ruta, estado de cada entrega, paquetes restantes.
2. **Coincidencia sistema-mundo real (Nielsen #2):** Usar lenguaje de transporte ("parada", "ruta", "entregar"), no jerga técnica.
3. **Reconocimiento sobre recuerdo (Nielsen #6):** No hacer que el transportista recuerde datos — mostrarlos siempre.
4. **Diseño estético y minimalista (Nielsen #8):** Solo info relevante al momento operativo, nada decorativo.
5. **Ley de Miller:** No más de 5-7 elementos de info en cada vista para no saturar.
6. **Ley de Fitts:** CTAs grandes y accesibles para uso con una mano o en movimiento.

## 4.5 Proto-persona: El transportista Flex

**"Marcos" — Transportista Flex, 29 años, CABA**

- Trabaja para un vendedor mediano de electrodomésticos pequeños.
- Hace entre 15-25 entregas diarias en zona AMBA.
- Usa una moto con soporte de celular en el manubrio.
- Su celular es gama media Android (pantalla 6.1").
- Conoce bien las zonas principales pero a veces le tocan barrios nuevos.
- Su mayor frustración: perder tiempo buscando departamentos o esperando que le confirmen el nombre.
- Motivación: terminar rápido para maximizar entregas/día.
- Nivel digital: medio. Usa apps de navegación, WhatsApp, redes sociales. No es técnico.

**Contexto de uso crítico:**

- Opera con una mano, la otra en el manubrio o cargando paquetes.
- Mira la pantalla 2-3 segundos entre acciones.
- Muchas veces con sol directo (necesita contraste alto).
- Ruido ambiente alto (no depender de audio).

## 4.6 Mapa de Pains y Gains

### Pains (del brief + inferidos)

|Pain|Fuente|Severidad|
|---|---|---|
|No saber el orden óptimo → pierde tiempo|Brief (Carlos)|Alta|
|No encontrar nombre del receptor → fricción con portero|Brief (Claudia)|Alta|
|No ver número de casa/piso/depto → debe llamar al comprador|Brief (Pablo)|Alta|
|No saber paquetes por parada → no puede preparar|Brief (Teresa)|Media-Alta|
|No tener sentido de progreso → ansiedad|Inferido|Media|
|Tener que alternar entre app Flex y app de navegación → complejidad|Inferido|Media|
|Info de dirección en texto largo sin estructura → difícil de escanear|Inferido del wireframe|Alta|

### Gains (esperados con la solución)

|Gain|Impacto|
|---|---|
|Ruta optimizada → menos km, menos tiempo|Eficiencia operativa directa|
|Nombre visible sin buscar → entrega fluida en edificios|Reduce fricción interpersonal|
|Dirección estructurada → llega al punto sin llamar|Reduce llamadas, mejora experiencia comprador|
|Contador de paquetes → prepara antes de llegar|Reduce tiempo en parada|
|Progreso visible → sensación de control|Satisfacción, menor ansiedad|

## 4.7 Insights inferidos

> **Insight 1:** Los 4 pain points no son problemas independientes — son síntomas de un problema de arquitectura de información. La app tiene los datos pero no los presenta en el momento y con la jerarquía correcta.

> **Insight 2:** El contexto de uso (calle, una mano, mirada rápida) exige un diseño que funcione como "glanceable UI" — si no se entiende en 2-3 segundos, falla.

> **Insight 3:** El wireframe del brief muestra que "Datos comprador" está colapsado detrás de un chevron en el detalle de parada. Ese dato debería ser lo primero visible, no lo último accesible.

> **Insight 4:** No hay progreso visible en el wireframe actual. El transportista no sabe "llevo 8 de 20" — eso genera incertidumbre sobre su jornada.

## 4.8 Oportunidades priorizadas

|Prioridad|Oportunidad|Razón|
|---|---|---|
|P0|Dirección estructurada con jerarquía visual|Resuelve pain #3, reduce llamadas, impacto inmediato|
|P0|Nombre de receptor prominente en detalle de parada|Resuelve pain #2, cambio de UI puro|
|P0|Ruta ordenada por proximidad (con indicación visual)|Resuelve pain #1, diferencial fuerte|
|P1|Contador de paquetes por parada + progreso global|Resuelve pain #4, agrega contexto operativo|
|P2|Integración directa con navegación externa|Reduce fricción de alternancia entre apps|
|P2|Barra de progreso de jornada|Reduce ansiedad, mejora percepción|
