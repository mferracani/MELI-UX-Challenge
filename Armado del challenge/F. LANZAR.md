
## Definición de MVP

**MVP = "Ruta inteligente v1"**

Incluye:

- Lista de entregas ordenada por proximidad con indicador visual de orden
- Progreso de ruta visible (X de Y entregas)
- Card de parada con: nombre de receptor visible, dirección estructurada, paquetes por parada
- Detalle de parada con: dirección enriquecida (calle, número, piso, depto, entre calles), mapa inline, nombre receptor prominente, paquetes en esta parada, CTA "Ir" (abre navegación) y CTA "Ya lo entregué"
- Pantalla de "en camino" con info de próxima parada
- Banner de ruta sugerida colapsable: muestra el beneficio cuantificado ("Ahorrás ~38 min") sin bloquear el flujo. Aparece una sola vez por jornada. El sistema propone, el repartidor decide.
- Quick action "Llevar primero": tap en cualquier parada → bottom sheet con opción de promover al #1 del listado en 2 taps. Confirmación con undo de 5 segundos. Para el caso de paquetes valiosos, urgentes o de criterio propio.
- Modo reorganizar: drag & drop con handles de 56×56px (apto para guantes / movimiento). Entrada desde el banner o desde el header. Opción "Volver al orden sugerido" siempre visible. El orden del usuario persiste durante toda la jornada.
- Estado diferenciado "Tu orden" vs "Ruta sugerida": si el repartidor reorganizó, el header lo refleja sin juzgar. Sin advertencias ni mensajes de "la ruta no es óptima".
- Paradas libres (trámites, pausas): el repartidor puede agregar paradas propias (tipo Trámite / Pausa / Otro) con dirección y nota libres. Son ítems de primera clase en la lista, reordenables igual que las entregas.
- Acceso rápido al reorden desde la pantalla "En camino": ícono de lista editable en el header, sin volver a la lista principal.

No incluye (v2+):

- Estimación de tiempo por parada
- Foto de entrega inline
- Notas del comprador
- Historial del día
- Optimización de ruta en tiempo real (re-routing)

## 6.2 Roadmap por fases

|Fase|Alcance|Timeframe estimado|Dependencias|
|---|---|---|---|
|**v1 — MVP**|Ruta ordenada + detalle enriquecido + progreso + paquetes por parada + control manual (quick action, drag & drop, paradas libres)|4-6 semanas de desarrollo|Algoritmo de ruteo por proximidad, datos de dirección estructurados|
|**v1.1 — Quick wins**|Filtro "solo pendientes", dark mode, historial del día|2-3 semanas post-v1|Feedback de v1|
|**v2 — Inteligencia**|ETA por parada, sugerencia de hora óptima, notas del comprador visibles|6-8 semanas|Datos de tráfico, modelo predictivo|
|**v3 — Autonomía**|Foto de entrega inline, chat con comprador, re-routing en vivo|8-12 semanas|Integración con sistema de mensajería, GPS continuo|

## 6.3 Dependencias y riesgos

|Dependencia|Riesgo|Mitigación|
|---|---|---|
|Algoritmo de proximidad en backend|Si no existe, el MVP pierde su feature principal|Proponer orden basado en geolocalización secuencial (más simple)|
|Datos de dirección estructurados (piso/depto)|Si vienen como texto libre, la jerarquía visual falla|Parser de dirección + fallback a texto completo|
|Adopción por transportistas|Cambio de UI puede generar fricción inicial|Rollout gradual + onboarding contextual|
|Performance en celulares gama media|App pesada = experiencia degradada|Optimizar renderizado de mapa, lazy loading|

## 6.4 Métricas de seguimiento post-lanzamiento

|Métrica|Frecuencia|Owner sugerido|
|---|---|---|
|NPS de la app|Mensual|Product|
|Tiempo promedio por entrega|Semanal|Operations|
|Tasa de llamadas transportista → comprador|Semanal|CX|
|Entregas/día/transportista|Semanal|Operations|
|Tasa de adopción de ruta sugerida (% que sigue el orden)|Semanal|Product|
|Crash rate / errores en flujo de entrega|Diario|Engineering|
|CSAT de compradores (entregas Flex)|Mensual|CX|

## 6.5 Narrativa de impacto

> "Envíos Flex mueve millones de paquetes con una promesa de velocidad que depende de miles de transportistas operando en la calle. Cuando esos transportistas pierden tiempo buscando información que la app debería darles, toda la cadena se degrada: entregas más lentas, más llamadas, más frustración, menos NPS. Nuestra propuesta transforma la app en un copiloto inteligente: organiza la ruta, muestra lo que importa cuando importa, y le devuelve al transportista la sensación de control. El resultado esperado: recuperar el NPS perdido, reducir tiempos de entrega, y escalar la red Flex con una experiencia que atrae y retiene transportistas."

## 6.6 Trade-offs asumidos

|Decisión|Lo que ganamos|Lo que perdemos/postergamos|
|---|---|---|
|Ruta sugerida como propuesta, no como mandato|El sistema propone, el repartidor decide. Control total sin fricción (quick action + drag & drop). Respeta el conocimiento territorial, criterios de seguridad y agenda propia del transportista.|Mayor complejidad de desarrollo vs. lista estática. El beneficio de la optimización puede ser ignorado si el repartidor siempre reorganiza.|
|Mapa como componente (no como pantalla principal)|Flujo lineal, menos carga cognitiva|Visibilidad global de todos los puntos|
|Solo 3 pantallas en high-fi|Foco en lo que importa para el challenge|No mostrar estados secundarios (error, vacío, etc.)|
|No incluir chat con comprador|Alcance acotado, MVP realista|Reducción parcial de llamadas (sigue dependiendo de teléfono)|

---

# 7. PROPUESTA DE SOLUCIÓN INTEGRADA

## Nombre: "Ruta Flex — Copiloto de entregas"

## 7.1 Flujo principal propuesto

```
[Inicio de jornada]
    → El transportista escanea paquetes y la app arma la ruta
    
[Vista de ruta] (PANTALLA 1 — HIGH-FI)
    → Lista de paradas ordenadas por proximidad
    → Progreso visible: "3 de 18 entregas"
    → Cada card muestra: #orden, dirección corta, nombre receptor, # paquetes
    → CTA: "Empezar ruta" o "Ir a siguiente parada"
    
[En camino] (PANTALLA 3 — HIGH-FI)
    → Banner con: dirección destino, nombre receptor, paquetes
    → CTA: "Navegar" (abre Maps/Waze)
    → Al llegar: transición automática o manual a detalle
    
[Detalle de parada] (PANTALLA 2 — HIGH-FI)
    → Dirección enriquecida: calle + número GRANDE, piso/depto, entre calles
    → Mapa inline con pin
    → Nombre del receptor: visible y prominente
    → Paquetes en esta parada: "2 paquetes"
    → CTAs: "Llamar" | "Ya lo entregué"
    → Al entregar: vuelve a vista de ruta (siguiente parada)
    
[Post-entrega]
    → Se actualiza la lista, avanza el progreso
    → Siguiente parada se destaca
    → Ciclo se repite hasta última entrega
    
[Ruta completada]
    → Resumen: entregas completadas, tiempo, felicitación
```

## 7.2 Resolución de los 4 pain points

|Pain point|Solución específica|Pantalla donde se resuelve|
|---|---|---|
|**Organizar por distancia/proximidad**|Lista auto-ordenada por proximidad geográfica. Banner "Ruta sugerida" con beneficio cuantificado. El repartidor puede aceptar, reorganizar con drag & drop, o usar "Llevar primero" para casos puntuales. El orden del sistema es una propuesta, no una imposición.|Vista de ruta (P1)|
|**Encontrar rápido nombre del receptor**|Nombre visible en la card de la lista (sin abrir detalle). En detalle de parada: nombre como segundo elemento después de dirección, con ícono de persona y tipografía bold.|Vista de ruta (P1) + Detalle (P2)|
|**Ubicación exacta (número de casa)**|Dirección descompuesta visualmente: calle + número en tipografía XL, piso/depto en línea separada destacada, entre calles como referencia, mapa inline con zoom al punto.|Detalle de parada (P2)|
|**Paquetes por parada**|Badge de paquetes visible en cada card de la lista ("2 📦"). En detalle: sección "Paquetes en esta parada" con conteo y lista breve. Progreso global siempre visible.|Vista de ruta (P1) + Detalle (P2)|

## 7.3 Arquitectura mínima de navegación

```
Tab Bar (3 ítems):
├── Ruta (vista principal — lista de paradas)  ← Pantalla HIGH-FI #1
├── Mapa (vista de todos los puntos en mapa)
└── Más (config, ayuda, perfil)

Desde Ruta:
├── Tap en parada → Detalle de parada  ← Pantalla HIGH-FI #2
│   ├── CTA "Navegar" → abre app externa
│   ├── CTA "Llamar" → teléfono
│   └── CTA "Ya lo entregué" → flujo de confirmación → vuelve a Ruta
│
└── CTA "Ir a siguiente" → En camino  ← Pantalla HIGH-FI #3
    └── Al llegar → Detalle de parada
```

---

# 8. FLUJO LOW-FI RECOMENDADO

## Pantalla 0: Inicio de jornada (escaneo)

- **Objetivo:** Confirmar paquetes cargados y empezar ruta
- **Contenido:** Resumen "18 paquetes escaneados, 15 paradas", CTA "Armar ruta"
- **CTA:** "Empezar a repartir"
- **Estado:** Pre-ruta
- **Razón:** Punto de partida del flujo. Ya existe en la app actual (no es foco del rediseño, pero ancla el flujo).

## Pantalla 1: Vista de ruta (lista de paradas) ⭐ HIGH-FI

- **Objetivo:** Ver todas las entregas del día organizadas por proximidad, con progreso
- **Contenido:**
    - Header: "Tu ruta de hoy" + fecha
    - Progreso: "3 de 15 entregas" + barra
    - Badge: "Ordenado por cercanía"
    - Lista de cards de parada:
        - Número de orden (1, 2, 3…) — reordenable
        - Dirección corta (Av. Cabildo 1209)
        - Nombre receptor (Juan Pérez)
        - Paquetes (📦 2)
        - Estado (Pendiente / En camino / Entregado)
        - Tap en card → bottom sheet con "⬆ Llevar primero" / "▶ Iniciar navegación" / "ℹ Ver detalles"
    - Siguiente parada destacada (card expandida o con borde de color)
    - Paradas libres (trámites, pausas) como ítems diferenciados con ícono propio
    - Botón "＋ Agregar parada libre" al pie de la lista
- **Modo reorganizar:** drag & drop con handles de 56×56px. Acceso desde el banner o desde header. "Volver al orden sugerido" siempre visible pero no prominente.
- **CTA principal:** "Ir a siguiente parada"
- **CTA secundario sticky en bottom:** "Ver mapa"
- **Estados:** Con entregas pendientes / Todas entregadas / Sin entregas
- **Razón:** Es la pantalla más usada del día. Resuelve pain #1 (orden), #2 (nombre visible), #4 (paquetes visible). Debe ser impecable.

## Pantalla 2: Detalle de parada ⭐ HIGH-FI

- **Objetivo:** Dar toda la info necesaria para completar la entrega en esta parada
- **Contenido:**
    - Header: "Parada 3 de 15" + botón "Llamar"
    - Bloque dirección:
        - Calle + número: **Av. Cabildo 1209** (tipografía XL)
        - Piso/Depto: **Piso 1, Depto B** (tipografía L, color destacado)
        - Entre calles: Entre Zabala y Céspedes (tipografía M, color secundario)
        - Barrio, CP: Belgrano, C1428 (tipografía S, color terciario)
    - Mapa inline con pin (⅓ de pantalla)
    - Bloque receptor:
        - Ícono persona + **Juan Pérez** (bold, grande)
    - Bloque paquetes:
        - "2 paquetes en esta parada" + mini lista (ID de paquete)
- **CTA principal:** "Ya lo entregué" (full width)
- **CTA secundario:** "Navegar" (abre app externa) | "Llamar" (icono en header)
- **Estados:** Pendiente / En camino / Problema (no encontré) / Entregado
- **Razón:** Resuelve pain #2 (nombre), #3 (ubicación exacta), #4 (paquetes). Es la pantalla de máxima utilidad operativa.

## Pantalla 3: En camino (navegación contextual) ⭐ HIGH-FI

- **Objetivo:** Mostrar info clave de la siguiente parada mientras el transportista está en tránsito
- **Contenido:**
    - Mapa grande (⅔ de pantalla) con ruta trazada al siguiente punto
    - Card inferior flotante (bottom sheet):
        - "Próxima parada" label
        - Dirección: **Av. Cabildo 1209, 1°B**
        - Receptor: **Juan Pérez**
        - Paquetes: **📦 2 paquetes**
        - Distancia/tiempo estimado: "1.2 km · ~5 min"
    - Progreso mini: "3 de 15"
- **CTA principal:** "Llegué" (cuando está cerca)
- **CTA secundario:** "Abrir en Maps/Waze"
- **Estados:** En tránsito / Llegando (cerca del punto) / Llegó (GPS detecta cercanía)
- **Razón:** Resuelve la transición entre paradas. Permite al transportista prepararse (sabe paquetes y receptor) sin tener que tocar la pantalla. La info está visible de un vistazo.

## Pantalla 4: Confirmación de entrega

- **Objetivo:** Registrar que la entrega se completó
- **Contenido:** Firma del comprador (ya existe) + resumen de qué se entregó
- **CTA:** "Confirmar entrega"
- **Estado:** Post-entrega → vuelve a P1 con siguiente parada destacada
- **Razón:** Cierra el loop. Ya existe en la app; se mantiene similar.

## Pantalla 5: Ruta completada

- **Objetivo:** Cierre de jornada / celebración
- **Contenido:** "¡Ruta completada! 15 entregas · 2h 45min" + resumen visual
- **CTA:** "Ver resumen" o "Cerrar"
- **Razón:** Reward moment. Genera satisfacción y cierre emocional.

---

# 9. 3 PANTALLAS HIGH-FI RECOMENDADAS

---

## PANTALLA 1: Vista de ruta (Lista de paradas del día)

### Objetivo

Ser el centro de operaciones del transportista: mostrar todas las entregas organizadas por proximidad, con info clave visible sin abrir nada, y progreso de jornada siempre presente.

### Jerarquía visual (de arriba abajo)

1. **Header:** "Tu ruta · Lunes 3 de junio" (título + fecha)
2. **Barra de progreso:** "5 de 18 entregas" + barra visual (verde para completadas)
3. **Banner de ruta sugerida (colapsable):** "Ruta sugerida · Seguir este orden te ahorra ~38 min" con CTAs [Reorganizar] y [Aceptar]. Si el repartidor reorganizó, el banner se reemplaza por "Tu orden · [Ver sugerida]". Solo aparece una vez por jornada.
4. **Card de SIGUIENTE PARADA (destacada):**
    - Borde izquierdo color primario (amarillo Mercado Libre: `#FFE600`) o highlight de fondo
    - Número de orden: "1" en círculo
    - Dirección: "Av. Cabildo 1209, 1°B" (bold, 16px)
    - Nombre receptor: "Juan Pérez" (medium, 14px, ícono persona)
    - Paquetes: "📦 2" (badge)
    - Distancia: "1.2 km" (caption, color secundario)
    - Flecha/chevron para ir al detalle
5. **Cards de paradas siguientes (lista scrolleable):**
    - Mismo formato pero sin highlight
    - Paradas entregadas: tachadas o en gris con check verde
6. **Bottom sticky CTA:** "Ir a siguiente parada" (botón primario full width)
7. **Tab bar:** Ruta (activo) | Mapa | Más

### Bloques / componentes sugeridos

- **Header bar:** custom con título + fecha
- **Progress bar:** linear, con texto "X de Y" + porcentaje visual
- **Banner de sugerencia:** colapsable, con estado "Tu orden" / "Ruta sugerida"
- **Parada card (componente reutilizable):**
    - Layout: handle drag (≡) | número orden | bloque info (centro) | chevron/badge (derecha)
    - Variantes: activa (next), pendiente, en camino, entregada, parada libre
    - Tap → bottom sheet: "⬆ Llevar primero" / "▶ Iniciar navegación" / "ℹ Ver detalles"
- **Bottom sheet de acciones:** componente con opciones contextuales por tipo de parada
- **Toast de undo:** confirmación de acción + deshacer en 5 segundos
- **Sticky bottom CTA:** botón primario
- **Tab bar:** 3 ítems con íconos

### Contenido exacto sugerido (copy)

- Título: "Tu ruta"
- Subtítulo: "Lunes 3 de junio"
- Progreso: "5 de 18 entregas"
- Banner (orden sugerido): "Ruta sugerida · Seguir este orden te ahorra ~38 min"
- Banner (orden propio): "Tu orden · Ver sugerida"
- Card parada activa:
    - "1" (número)
    - "Av. Cabildo 1209, 1°B" (dirección)
    - "Juan Pérez" (receptor)
    - "📦 2 paquetes"
    - "1.2 km"
- CTA: "Ir a siguiente parada"
- Tab: "Ruta" · "Mapa" · "Más"

### Microcopy sugerido

- Banner de sugerencia: "Ruta sugerida · Seguir este orden te ahorra ~38 min" (propone sin imponer)
- Estado orden propio: "Tu orden" (valida la decisión del repartidor, sin juicio)
- Toast de reorden: "Parada movida al inicio · Deshacer" (confirma sin interrumpir)
- Parada entregada: "Entregado ✓" (en verde)
- Sin entregas: "No tenés entregas pendientes" (estado vacío)

### Estados relevantes

- **Default (orden sugerido):** Lista con entregas pendientes, banner "Ruta sugerida" visible, siguiente parada destacada
- **Orden propio:** Banner reemplazado por "Tu orden · Ver sugerida", handles de drag sutilmente visibles
- **Modo reorganizar activo:** Header con [Cancelar] / [Guardar], todos los ítems con handle grande, "Volver al orden sugerido" al pie
- **Progreso avanzado:** Varias entregadas (grises con check), pocas pendientes
- **Ruta completada:** Todas con check, CTA cambia a "Ver resumen"
- **Empty state:** "Todavía no tenés entregas asignadas" (con ilustración)

### Accesibilidad / usabilidad

- Contraste mínimo 4.5:1 en textos sobre fondo
- Cards con min-height de 72px para área de toque
- Número de orden: usar color + forma (no solo color) para distinguir estados
- Scrolleable con momentum, sin paginación

### Por qué mostrar esta pantalla en la entrevista

Es la pantalla más vista del día — el transportista vuelve a ella después de cada entrega. Resuelve directamente el pain #1 (orden por proximidad) y muestra parcialmente #2 (nombre) y #4 (paquetes). Demuestra capacidad de diseñar una lista compleja con jerarquía visual clara, estados múltiples y progressive disclosure.

---

## PANTALLA 2: Detalle de parada

### Objetivo

Dar al transportista toda la información que necesita para completar una entrega específica: ubicación exacta, datos del receptor, paquetes, y acciones rápidas.

### Jerarquía visual (de arriba abajo)

1. **Header:** "← Parada 3" + badge "de 15" + botón "Llamar" (ícono teléfono, alineado a derecha)
2. **Bloque de dirección (HERO — máxima jerarquía):**
    - Calle + número: **"Av. Cabildo 1209"** (bold, 22-24px)
    - Piso y departamento: **"Piso 1, Depto B"** (medium, 16px, con fondo highlight suave amarillo o tag)
    - Entre calles: "Entre Zabala y Céspedes" (regular, 14px, color `#616161`)
    - Barrio y CP: "Belgrano, C1428, CABA" (regular, 12px, color `#939393`)
3. **Mapa inline:** ~150-170px de altura, con pin en la dirección, zoom al nivel de cuadra
4. **Card de receptor:**
    - Ícono de persona + **"Juan Pérez"** (bold, 16px)
    - Subtexto: "Recibe la entrega" (caption)
5. **Card de paquetes:**
    - **"2 paquetes en esta parada"** (bold)
    - Mini lista: "📦 PKG-4521 · Electrodoméstico" / "📦 PKG-4522 · Accesorio"
6. **Footer con CTAs:**
    - Primario: **"Ya lo entregué"** (botón full width, verde `#1AB065` o primario)
    - Secundario: **"Navegar"** (botón outline, abre Maps)

### Bloques / componentes

- **Back header** con título de parada y acción de llamar
- **Address block:** componente custom con 4 niveles de tipografía
- **Map embed:** componente de mapa estático o interactivo
- **Info card (receptor):** ícono + texto
- **Info card (paquetes):** ícono + conteo + lista expandible
- **Dual CTA footer:** primario + secundario

### Contenido exacto sugerido

- Header: "Parada 3" + "de 15"
- Dirección línea 1: "Av. Cabildo 1209"
- Dirección línea 2: "Piso 1, Depto B"
- Dirección línea 3: "Entre Zabala y Céspedes"
- Dirección línea 4: "Belgrano, C1428, CABA"
- Receptor: "Juan Pérez"
- Paquetes: "2 paquetes en esta parada"
- CTA 1: "Ya lo entregué"
- CTA 2: "Navegar hasta acá"

### Microcopy

- Si no hay piso/depto: mostrar "Casa" o "Planta baja" (nunca dejar vacío)
- Si no hay entre calles: omitir la línea (graceful degradation)
- Tooltip en primer uso: "Toda la info de la dirección está acá para que no tengas que buscar"

### Estados relevantes

- **Default:** Pendiente de entrega
- **En camino:** Header muestra "En camino a parada 3"
- **Problema:** CTA alternativo "No pude entregar" → opciones (no había nadie, dirección incorrecta, etc.)
- **Entregado:** Pantalla cambia a confirmación (check verde + resumen)

### Accesibilidad / usabilidad

- Dirección: calle+número en tipografía extra grande (22-24px bold) para lectura rápida en contexto de calle
- Piso/Depto: usar highlight visual (fondo amarillo claro o tag) para que no se pierda
- Botón "Llamar" siempre accesible desde el header (no requiere scroll)
- Mapa: interacción mínima (no requiere zoom para entender ubicación)

### Por qué mostrar esta pantalla en la entrevista

Es la que más directamente resuelve los pain points #2 (nombre) y #3 (ubicación exacta). Demuestra dominio de jerarquía visual, estructura de información, y diseño contextual. El detalle de dirección en 4 niveles es el diferencial más visible vs. el wireframe original donde todo es texto plano.

---

## PANTALLA 3: En camino (navegación contextual)

### Objetivo

Dar contexto de la próxima parada mientras el transportista está en tránsito, permitiendo prepararse sin interactuar mucho con la pantalla.

### Jerarquía visual (de arriba abajo)

1. **Header:** Título "En camino" + ícono de lista editable (≡ reorganizar) en el extremo derecho. Tap directo al modo drag & drop sin salir de esta pantalla.
2. **Mapa grande:** ~60% de pantalla. Muestra la ruta desde ubicación actual hasta siguiente parada. Pin de destino con número de parada.
3. **Bottom sheet (card flotante inferior):**
    - Label: "Próxima parada" (caption, color terciario)
    - Dirección: **"Av. Cabildo 1209, 1°B"** (bold, 18px)
    - Receptor: "👤 Juan Pérez" (medium, 14px)
    - Paquetes + distancia: "📦 2 paquetes · 1.2 km · ~5 min" (regular, 14px)
4. **Mini progreso:** "Parada 3 de 15" (badge flotante sobre el mapa, esquina superior)
5. **CTA en bottom sheet:** "Llegué" (cuando está cerca) / "Abrir en Maps" (para navegación full)

### Bloques / componentes

- **Map view:** ocupa la mayor parte de pantalla
- **Floating progress badge:** sobre el mapa
- **Bottom sheet card:** info de próxima parada
- **CTA adaptativo:** cambia según proximidad

### Contenido exacto sugerido

- Progreso badge: "3 de 15"
- Label: "Próxima parada"
- Dirección: "Av. Cabildo 1209, 1°B"
- Receptor: "Juan Pérez"
- Info: "📦 2 paquetes · 1.2 km · ~5 min"
- CTA: "Abrir en Maps" → cambia a "Llegué" cuando está a <200m

### Microcopy

- Cuando se acerca: "Estás llegando" (transición suave)
- CTA adaptativo: "Abrir en Maps" (lejos) → "Llegué" (cerca)
- Tooltip primer uso: "Te mostramos los datos de tu próxima parada para que prepares los paquetes"

### Estados relevantes

- **En tránsito:** Mapa con ruta + bottom sheet con info
- **Llegando (< 200m):** CTA cambia a "Llegué", bottom sheet se expande ligeramente
- **Llegó:** Transición a Detalle de parada (P2)

### Accesibilidad / usabilidad

- Bottom sheet no debe cubrir más del 35% de pantalla para dejar mapa útil
- Info de paquetes visible sin expandir (el transportista necesita preparar mientras maneja/camina)
- CTA "Llegué" debe ser grande (min 48px alto) porque se usa en movimiento
- Modo oscuro del mapa si es contexto nocturno (nice to have)

### Por qué mostrar esta pantalla en la entrevista

Es la más diferencial respecto al wireframe del brief (que no tiene este estado). Demuestra pensamiento de flujo completo (no solo pantallas sueltas), diseño contextual avanzado (info progresiva según momento), y resolución del pain #4 (paquetes visibles antes de llegar). Visualmente es la más impactante por la combinación mapa + datos.

---

# 10. GUÍA PARA FIGMA

## Qué wireframear (low-fi)

Armar las 6 pantallas del flujo en baja fidelidad (rectángulos grises, texto básico, sin estilos):

1. Inicio de jornada (escaneo) — rápido, referencial
2. Vista de ruta — estructura de lista + progreso + card
3. Detalle de parada — bloques de dirección + receptor + paquetes + mapa
4. En camino — mapa + bottom sheet
5. Confirmación de entrega — firma + resumen
6. Ruta completada — resumen + celebración

**Tiempo estimado: 2-3 horas.** Usar auto layout en Figma para que los bloques sean reposicionables.

## Qué diseñar en alta (high-fi)

Las 3 pantallas del punto anterior. Foco total en:

- Vista de ruta (P1): jerarquía de lista, estados de cards, progreso
- Detalle de parada (P2): dirección enriquecida en 4 niveles, mapa, receptor
- En camino (P3): mapa + bottom sheet con info contextual

**Tiempo estimado: 1 día cada una = 3 días.**

## Sistema visual recomendado

### Paleta de colores Mercado Libre

- **Amarillo ML:** `#FFE600` (acentos, highlights, brand)
- **Azul ML:** `#3483FA` (links, íconos informativos)
- **Background:** `#EEEEEE` (fondo general body)
- **Cards:** `#FFFFFF` (fondo de tarjetas)
- **Texto primario:** `#333333`
- **Texto secundario:** `#666666`
- **Texto terciario:** `#999999`
- **Success (entregado):** `#00A650`
- **Error (problema):** `#F23D4F`
- **Dividers:** `#EEEEEE`

> **Nota:** Estos colores son los del ecosistema Mercado Libre (Andes design system). Si tenés acceso al Andes, usalo. Si no, estos hex son una aproximación muy cercana basada en la web pública de ML.

### Tipografía

- **Font:** Proxima Nova (la oficial de ML) o Inter como fallback
- **Tamaños sugeridos:**
    - Título de pantalla: 20px bold
    - Dirección principal: 22-24px bold
    - Subtítulos/secciones: 16px semibold
    - Body/info: 14px regular
    - Caption/terciario: 12px regular
    - Badge/tag: 12px medium

### Espaciado

- Padding lateral de pantalla: 16px (estándar ML mobile)
- Gap entre cards: 8px
- Padding interno de cards: 16px
- Border radius de cards: 8px (estándar ML)

### Componentes clave a construir

1. **ParadaCard** (componente con variantes: next/pending/delivering/delivered)
2. **AddressBlock** (4 niveles tipográficos)
3. **ReceiverBadge** (ícono + nombre)
4. **PackageCounter** (ícono + número)
5. **ProgressBar** (barra + texto)
6. **BottomSheet** (para pantalla En Camino)
7. **StickyFooterCTA** (botón primario full width)

## Estructura recomendada del archivo Figma

```
📁 UX Challenge — Envíos Flex
├── 📄 Cover (nombre, rol, fecha)
├── 📄 Problema & Oportunidad (resumen visual del brief + insight)
├── 📄 Personas & Contexto (proto-persona + contexto de uso)
├── 📄 Flujo Low-Fi (wireframes conectados con flechas)
├── 📄 Pantalla 1 — Vista de ruta (high-fi + anotaciones)
├── 📄 Pantalla 2 — Detalle de parada (high-fi + anotaciones)
├── 📄 Pantalla 3 — En camino (high-fi + anotaciones)
├── 📄 Resolución de Pain Points (tabla visual: pain → solución → pantalla)
├── 📄 Next Steps & Roadmap (visual del roadmap por fases)
└── 📄 Cierre (narrativa de impacto)
```

## Tips para la defensa en vivo

1. **Empezá por el problema, no por la solución.** "El NPS cayó 4%. Investigamos. Encontramos esto." (30 seg)
2. **Mostrá que entendiste a la persona.** Describí al transportista, su contexto, sus frustraciones. (1 min)
3. **Presentá la propuesta como respuesta directa a los pain points.** "Para cada problema, tenemos una decisión de diseño." (2 min)
4. **Recorré el flujo en baja primero** (1 min), luego zoomear en las 3 pantallas en alta (3-4 min).
5. **En cada pantalla, explicá:** qué pain resuelve, qué decisión de diseño tomaste, y por qué. (1 min por pantalla)
6. **Cerrá con impacto esperado y next steps.** "Esperamos recuperar el NPS y reducir llamadas. V2 incluiría..." (1 min)
7. **Total: 10-12 minutos de presentación.** Dejá tiempo para preguntas.

**Preguntas que te pueden hacer y cómo responderlas:**

| Pregunta                                                     | Respuesta sugerida                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "¿Cómo sabés que el orden por proximidad es lo que quieren?" | "Carlos lo pide explícitamente en el brief. Además, es el patrón estándar en apps de ruteo como Circuit y Onfleet. Propondría validar con un A/B: orden sugerido vs. manual."                                                                                                       |
| "¿Qué pasa si la dirección no tiene piso/depto?"             | "Diseñé para degradación elegante: si no hay piso, se muestra 'Planta baja' o se omite la línea. La estructura funciona con 2, 3 o 4 niveles."                                                                                                                                      |
| "¿Cómo medirías el éxito?"                                   | "Primero NPS (recuperar los 4 puntos). Luego: tasa de llamadas al comprador (reducción del 20%), tiempo por entrega, y adopción de ruta sugerida."                                                                                                                                  |
| "¿Por qué no pusiste el mapa como pantalla principal?"       | "Porque en contexto de calle, una lista lineal es más escaneable que un mapa con clusters. El mapa está como componente en el detalle y como pantalla secundaria en la tab. Además, el mapa requiere más atención visual, lo cual es riesgoso para un transportista en movimiento." |
| "¿Qué dejarías para después?"                                | "Chat con comprador, estimación de tiempo por parada, foto de entrega inline, y re-routing en tiempo real. El control manual —drag & drop y 'Llevar primero'— sí está en el MVP, porque los transportistas nos dijeron explícitamente que necesitan decidir ellos la ruta según seguridad, criterio propio, y agenda. Si lo dejábamos para v2, el sistema los alienaba desde el día uno."                                                                                                   |
|                                                              |                                                                                                                                                                                                                                                                                     |
