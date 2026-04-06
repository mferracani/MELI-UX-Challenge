**Problema funcional:** La app Envíos Flex no organiza ni prioriza la información de ruta y entregas de forma que el transportista pueda operar con eficiencia y confianza en contexto de calle.


**Problema de experiencia:** El transportista tiene que "cazar" información que debería estar disponible de forma inmediata: busca el nombre del receptor, no entiende el orden óptimo, no ve el número de casa hasta que está perdido, y no sabe cuántos paquetes preparar antes de llegar.


**Problema de negocio:** La caída de 4% en NPS indica insatisfacción creciente. Si no se resuelve, riesgo de: mayor rotación de transportistas, entregas más lentas (impacto en promesa same-day), más llamadas al comprador (fricción), y deterioro del cumplimiento operativo.

## 3.2 How Might We (HMW)

- **HMW principal:** ¿Cómo podemos darle al transportista la información correcta en cada momento de su ruta, sin que tenga que buscarla?
- HMW secundarios:
    - ¿Cómo podemos que el transportista confíe en que el orden de entregas es el más eficiente?
    - ¿Cómo hacemos que los datos del receptor y la ubicación exacta sean lo primero que ve al acercarse a una parada?
    - ¿Cómo le damos visibilidad de su progreso y carga restante sin interrumpir su flujo?

## 3.3 Hipótesis de diseño

> Si rediseñamos la experiencia de ruta activa con información progresiva y contextual — donde la ruta se auto-organiza por proximidad, los datos del receptor son prominentes en el detalle de parada, la ubicación exacta tiene jerarquía visual máxima, y el conteo de paquetes pendientes es siempre visible — entonces reduciremos la fricción operativa, mejoraremos el NPS en al menos 4 puntos (recuperando la caída), y reduciremos las llamadas al comprador por problemas de ubicación.

## 3.4 Necesidades principales del transportista (User Needs)

|#|Necesidad|Momento del flujo|Pain point del brief|
|---|---|---|---|
|1|Saber el orden óptimo de mis entregas sin tener que calcularlo|Inicio de ruta|Organizar por distancia/proximidad|
|2|Ver el nombre del receptor de un vistazo, sin navegar|Al llegar a la parada / al interactuar con portero|Encontrar rápido el nombre|
|3|Entender la ubicación exacta (piso, depto, entre calles) sin ambigüedad|Navegando al destino y al llegar|Ubicación exacta / número de casa|
|4|Saber cuántos paquetes preparar antes de llegar a la parada|En tránsito entre paradas|Cuántos paquetes faltan por parada|
|5|Sentir progreso y control sobre mi jornada|Durante toda la ruta|Implícito (eficiencia percibida)|

## 3.5 Jobs To Be Done (JTBD)

**Job principal:**

> Cuando estoy haciendo mi ruta de entregas Flex, quiero tener toda la información relevante organizada y accesible según el momento en el que estoy, para poder completar mis entregas rápido, sin errores y sin estrés.

**Sub-jobs:**

1. _Planificar:_ "Cuando empiezo mi jornada, quiero ver mis entregas en el orden más eficiente para no perder tiempo dando vueltas."
2. _Identificar:_ "Cuando llego a un edificio, quiero saber inmediatamente a nombre de quién es la entrega para poder comunicarme con el portero sin demora."
3. _Ubicar:_ "Cuando estoy en la dirección, quiero ver claramente el piso, depto y referencias para encontrar el lugar sin tener que llamar al comprador."
4. _Preparar:_ "Cuando voy camino a la siguiente parada, quiero saber cuántos paquetes entregar ahí para tenerlos listos antes de llegar."

## 3.6 Principios de diseño para este caso

1. **Información en el momento justo (progressive disclosure):** No mostrar todo de golpe. Revelar datos según la etapa operativa: ruta > parada > entrega.
2. **Cero búsqueda:** Los datos críticos (nombre, dirección exacta, paquetes) deben ser visibles sin tocar, scrollear ni navegar.
3. **Diseño para el contexto de calle:** Tipografía grande, contraste alto, áreas de toque amplias. El transportista mira la pantalla 2-3 segundos entre movimientos.
4. **Progreso siempre visible:** Un indicador constante de "dónde estoy en mi ruta" reduce ansiedad y da sensación de control.
5. **Confianza en la ruta:** Si el sistema propone un orden, debe comunicar por qué (proximidad), para que el transportista no dude ni reordene manualmente.

## 3.7 Mapa de oportunidad

```
Problema raíz: Falta de información contextual en ruta
│
├── Oportunidad 1: Ruta auto-organizada por proximidad
│   ├── Impacto: Alto (ahorra tiempo real, pain #1)
│   └── Esfuerzo: Medio (requiere algoritmo de ruteo)
│
├── Oportunidad 2: Detalle de parada con receptor prominente
│   ├── Impacto: Alto (resuelve pain #2, reduce interacciones)
│   └── Esfuerzo: Bajo (es diseño de UI, no lógica nueva)
│
├── Oportunidad 3: Dirección enriquecida con jerarquía visual
│   ├── Impacto: Alto (resuelve pain #3, reduce llamadas)
│   └── Esfuerzo: Bajo-Medio (depende de datos existentes)
│
├── Oportunidad 4: Contador de paquetes por parada + global
│   ├── Impacto: Medio-Alto (resuelve pain #4, mejora preparación)
│   └── Esfuerzo: Bajo (dato ya disponible en el sistema)
│
└── Oportunidad 5: Barra de progreso de ruta
    ├── Impacto: Medio (reduce ansiedad, sensación de control)
    └── Esfuerzo: Bajo (UI pura)
```

## 3.8 Direcciones de solución posibles

### Dirección A: "Copiloto de ruta" (recomendada)

Rediseño centrado en la ruta como eje narrativo. La app se comporta como un copiloto: muestra la siguiente parada con toda la info necesaria, organiza por proximidad, y permite avanzar linealmente sin ir y volver entre pantallas. Progreso siempre visible.

### Dirección B: "Mapa primero"

La experiencia principal es un mapa con todos los puntos, y desde el mapa se accede al detalle. Es visual pero puede ser difícil de operar en contexto de calle (mapas requieren atención visual prolongada, zoom, etc.).

### Dirección C: "Dashboard de jornada"

Una vista tipo tablero con métricas de la jornada (entregas hechas, pendientes, tiempo estimado) y acceso a la lista. Más informativa pero menos operativa — agrega un paso antes de la acción.

## 3.9 Recomendación: Dirección A — "Copiloto de ruta"

**Justificación:**

- Es la que más directamente resuelve los 4 pain points sin agregar complejidad.
- El patrón "siguiente parada" es familiar en apps de navegación (Waze, Google Maps turn-by-turn) — baja curva de aprendizaje.
- Permite progressive disclosure natural: ruta completa → siguiente parada → detalle → entrega.
- El mapa no desaparece, se integra como componente dentro del detalle de parada (no como pantalla principal).
- Compatible con uso en contexto de calle: flujo lineal, mínimo tapping.

## 3.10 Propuesta de MVP conceptual

**MVP = 3 pantallas core + 1 flujo:**

1. **Lista de ruta optimizada** (pantalla principal): entregas ordenadas por proximidad, con progreso visible, nombre de receptor y paquetes por parada siempre visibles.
2. **Detalle de parada** (antes de llegar / al llegar): dirección enriquecida con piso/depto/entre calles en jerarquía alta, nombre del receptor prominente, mapa inline, conteo de paquetes en esa parada.
3. **Navegación en camino**: estado "en camino" con dirección destino, nombre receptor, paquetes, y CTA de navegación externa (Google Maps / Waze).

**Fuera del MVP (v2+):** Reordenamiento manual con drag, estimación de tiempo por parada, historial de entregas del día, notas del comprador, foto de entrega inline.