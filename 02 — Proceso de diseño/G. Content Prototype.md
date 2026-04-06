# Content Prototype — Envíos Flex: Copiloto de entregas
**Versión:** 1.0
**Fecha:** Abril 2026
**Producto:** App Envíos Flex — Rediseño de ruta activa
**Usuario:** Marcos, transportista Flex, contexto de calle, Android gama media
**Voz:** Directa · Transaccional · Voseo · Estilo Mercado Libre

---

> **Qué es esto:**
> Un content prototype define el lenguaje exacto de cada pantalla antes del diseño visual.
> Permite validar jerarquía de información, claridad del copy y consistencia tonal
> sin invertir tiempo en alta fidelidad.

---

## PRINCIPIOS VERBALES PARA ESTE FLUJO

| Principio | Aplicación concreta |
|-----------|-------------------|
| Información en el momento justo | No mostrar todo a la vez. El texto acompaña la etapa: ruta → parada → entrega |
| Cero búsqueda | Los datos críticos (nombre, dirección, paquetes) están visibles sin tocar nada |
| Diseñado para 2 segundos | Textos cortos, accionables, escaneables en un vistazo |
| Confianza en el sistema | Si la app propone un orden, explica por qué. El transportista no debe dudar |
| Tono operativo, no publicitario | No celebrar, no emocionar artificialmente. Informar y hacer avanzar |

---

## PANTALLA 0 — Inicio de jornada (escaneo)

**Rol en el flujo:** Punto de partida. El transportista ya escaneó los paquetes y está por salir.
**Objetivo del usuario:** Confirmar que todo está listo y empezar con confianza.
**Objetivo del contenido:** Dar certeza, comunicar el estado del sistema, habilitar el arranque.

---

### Bloque: Encabezado de la app
```
Envíos Flex
```
> *Es la marca existente. No se modifica.*

---

### Bloque: Estado del sistema
```
COPY:     Listo para salir
SUB:      Tus paquetes ya están cargados y tu ruta está armada.
```
**Criterio:** "Listo para salir" confirma que el sistema hizo su parte. El transportista no tiene que preguntarse si falta algo. Evitamos "¡Todo listo!" porque el exclamativo suena publicitario.

---

### Bloque: Resumen de carga
```
STAT 1:   18 paquetes
LABEL 1:  escaneados

STAT 2:   15 paradas
LABEL 2:  en tu ruta
```
**Criterio:** Números grandes, labels pequeños. El transportista necesita confirmar la cantidad de un vistazo, no leer una oración.

---

### Bloque: Badge de confianza
```
COPY:     Ruta ordenada por cercanía
```
**Criterio:** Este texto existe para que el transportista no reordene manualmente. Es el primer momento en que comunicamos que el sistema ya optimizó la ruta. Aparece como badge compacto, no como párrafo.

**Alternativa descartada:** "Tu ruta fue optimizada automáticamente" → demasiado largo para el contexto.

---

### Bloque: CTA principal
```
CTA:      Empezar a repartir
```
**Criterio:** Verbo + objeto específico del contexto. "Empezar" marca el inicio de la jornada. "A repartir" evita el genérico "Continuar" o "Aceptar".

**Alternativa:** "Iniciar ruta" → más corto pero más frío, menos natural.

---

### Estado: Sin paquetes asignados (empty state)
```
TÍTULO:   Todavía no tenés paquetes asignados
CUERPO:   Cuando te asignen tu ruta, aparece acá automáticamente.
```

---

## PANTALLA 1 — Vista de ruta (lista de paradas)

**Rol en el flujo:** Pantalla principal durante toda la jornada. El transportista vuelve acá después de cada entrega.
**Objetivo del usuario:** Ver las entregas del día, entender el orden, avanzar a la siguiente parada.
**Objetivo del contenido:** Dar control y visibilidad total de la jornada. Esta pantalla se lee 15–25 veces por día.

---

### Bloque: Header
```
TÍTULO:   Tu ruta
SUBTÍTULO: Lunes 3 de junio
```
**Criterio:** "Tu ruta" → posesivo que personaliza sin exagerar. La fecha contextualiza sin ser redundante. Evitamos "Tus entregas del día" porque es más largo y menos escaneable.

---

### Bloque: Progreso de jornada
```
CONTEO:   3 de 15 entregas
PORCENTAJE: 20% [barra visual verde]
BADGE:    Ordenado por cercanía
```
**Criterio:** "3 de 15 entregas" es más concreto que "12 restantes" — el transportista necesita saber dónde está en el total, no solo cuánto falta. El badge de cercanía se repite desde P0 para reforzar confianza en el sistema.

---

### Label de sección
```
LABEL:    SIGUIENTE PARADA
```
**Criterio:** En mayúsculas compactas como label de sección. Distingue la parada activa del resto de la lista.

---

### Bloque: Card de parada — Siguiente (estado activo)
```
ORDEN:    1
DIRECCIÓN: Av. Cabildo 1209
PISO/DEPTO: Piso 1, Depto B   [tag destacado]
RECEPTOR: Juan Pérez
PAQUETES: 2 paquetes
DISTANCIA: 1.2 km
```
**Criterio:** La dirección corta (sin barrio, sin CP) es suficiente para identificar la parada en la lista. Los datos completos se revelan en la pantalla de detalle. El nombre del receptor es visible sin abrir nada — resuelve directamente el pain #2 (Claudia).

---

### Bloque: Card de parada — Pendiente (estado normal)
```
ORDEN:    2
DIRECCIÓN: Gurruchaga 583
RECEPTOR: María López
PAQUETES: 1 paquete
```
**Criterio:** Sin distancia (no es la siguiente), sin piso/depto (se reserva para cuando sea relevante). Jerarquía reducida para no competir visualmente con la parada activa.

---

### Bloque: Card de parada — Entregada (estado completado)
```
ICONO:    ✓ [círculo verde]
DIRECCIÓN: Corrientes 2140   [texto atenuado]
ESTADO:   Entregado
HORA:     09:22
```
**Criterio:** El estado "Entregado" más la hora dan certeza de lo que ya pasó. El texto atenuado comunica visualmente que esta parada está cerrada. No usamos "Completado" porque "Entregado" es más concreto y más cercano al vocabulario del transportista.

---

### Bloque: CTA sticky
```
CTA:      Ir a siguiente parada
```
**Criterio:** CTA específico, con dirección implícita ("siguiente"). El transportista no tiene que leer para saber que este botón lo lleva a donde necesita ir.

**Estado cuando la ruta se completa:**
```
CTA:      Ver resumen de jornada
```

---

### Bloque: Tab bar
```
TAB 1:    Ruta         [activo]
TAB 2:    Mapa
TAB 3:    Más
```

---

### Estado: Empty — Sin entregas asignadas
```
TÍTULO:   No tenés entregas asignadas
CUERPO:   Cuando te asignen paquetes para el día, aparecen acá.
```

---

### Estado: Error de carga
```
TÍTULO:   No pudimos cargar tu ruta
CUERPO:   Revisá tu conexión e intentá de nuevo.
CTA:      Reintentar
```

---

## PANTALLA 2 — Detalle de parada

**Rol en el flujo:** Se accede al tocar una parada. Es la pantalla de mayor utilidad operativa: tiene todo lo que el transportista necesita para completar la entrega.
**Objetivo del usuario:** Leer la dirección exacta, identificar al receptor, preparar los paquetes, navegar o llamar.
**Objetivo del contenido:** Máxima utilidad, mínimas palabras. Cada bloque resuelve un pain point específico.

---

### Bloque: Navegación
```
BACK:     ← Parada 3
CONTEXTO: de 15 · 1.2 km
ACCIÓN:   Llamar  [botón]
```
**Criterio:** El botón "Llamar" está en el header porque en algunos casos el transportista necesita llamar antes de llegar (ej: edificio con portero). Acceso inmediato sin scroll — resuelve que la acción esté siempre visible.

---

### Bloque: Dirección (HERO — máxima jerarquía)
```
NIVEL 1 (XL, negrita):  Av. Cabildo 1209
NIVEL 2 (tag):          Piso 1, Depto B
NIVEL 3 (regular):      Entre Zabala y Céspedes
NIVEL 4 (pequeño):      Belgrano, C1428, CABA
```
**Criterio:** Cuatro niveles jerárquicos para resolver el pain #3 (Pablo). El número de casa en tipografía extra grande: el transportista en la calle necesita leer esto desde el vehículo o en movimiento. El piso/depto en un tag destacado porque es el dato que más se pierde en el flujo actual. Entre calles como referencia adicional. El barrio y CP como contexto final — menos urgente.

**Regla para datos faltantes:**
- Sin piso/depto: no mostrar el nivel 2 (graceful degradation, no mostrar "N/A")
- Sin entre calles: omitir nivel 3
- Sin CP: mostrar solo barrio

---

### Bloque: Mapa inline
```
ACCESIBILIDAD: Mapa de Av. Cabildo 1209, Belgrano
[El mapa no tiene copy visible, solo el pin y la dirección]
```

---

### Bloque: Receptor
```
LABEL:    Recibe la entrega
NOMBRE:   Juan Pérez
```
**Criterio:** El label "Recibe la entrega" contextualiza el nombre — no es solo un dato, es la persona a quien hay que entregar. Resuelve el pain #2 (Claudia): el nombre está visible sin buscar.

**Si no hay nombre registrado:**
```
NOMBRE:   Destinatario no especificado
```
*No dejarlo vacío — genera confusión.*

---

### Bloque: Paquetes
```
TÍTULO:   2 paquetes en esta parada
ITEM 1:   PKG-4521
ITEM 2:   PKG-4522
```
**Criterio:** El conteo precede a la lista. El transportista primero necesita saber cuántos (para preparar), luego puede ver cuáles. Resuelve el pain #4 (Teresa).

**Si hay 1 paquete:**
```
TÍTULO:   1 paquete en esta parada
```
*No usar "paquetes" en plural para 1 unidad.*

---

### Bloque: Problema contextual
```
LINK:     Hubo un problema con la entrega
```
**Criterio:** Visible pero no prominente — es una acción de excepción, no del flujo principal. Texto neutro que no asume cuál es el problema ni culpa al transportista.

---

### Bloque: CTAs
```
CTA PRIMARIO:   Ya lo entregué
CTA SECUNDARIO: Navegar hasta acá
```
**Criterio:** "Ya lo entregué" usa el pasado compuesto para sonar como confirmación natural del transportista ("ya lo hice"). Es más coloquial y claro que "Confirmar entrega" o "Marcar como entregado".

"Navegar hasta acá" es específico sobre hacia dónde navega — no el genérico "Navegar" o "Abrir mapa".

---

### Estado: Parada en tránsito
```
HEADER MODIFICADO: En camino a parada 3
```

---

### Estado: No pude entregar (modal)
```
TÍTULO:   ¿Qué pasó?
OPCIÓN 1: No había nadie en la dirección
OPCIÓN 2: La dirección no existe o está incorrecta
OPCIÓN 3: El comprador canceló la entrega
OPCIÓN 4: Otro motivo
CTA:      Cancelar
```

---

### Estado: Entregado (success)
```
ÍCONO:    ✓ [grande, verde]
TEXTO:    Entrega registrada
SUB:      Parada 3 de 15 completada.
CTA:      Volver a mi ruta
```
**Criterio:** "Entrega registrada" confirma que el sistema tomó nota — no solo que el transportista tocó el botón. "Volver a mi ruta" en lugar de "Continuar" especifica a dónde va.

---

## PANTALLA 3 — En camino (navegación contextual)

**Rol en el flujo:** Estado intermedio entre dos paradas. El transportista está en tránsito.
**Objetivo del usuario:** Saber adónde va, qué va a encontrar, y prepararse sin tocar la pantalla.
**Objetivo del contenido:** Información pasiva, sin necesidad de interacción. Se lee en un vistazo.

---

### Bloque: Badge de progreso (flotante sobre el mapa)
```
BADGE:    Parada 3 de 15
```
**Criterio:** Mínimo contexto visible siempre. El transportista sabe dónde está en la ruta sin abrir nada.

---

### Bloque: Bottom sheet — Header
```
LABEL:    Próxima parada
```
**Criterio:** "Próxima" indica que aún no llegó — distingue este estado del detalle de parada. Label en mayúsculas compactas para que sea identificable como sección.

---

### Bloque: Bottom sheet — Contenido
```
DIRECCIÓN:  Av. Cabildo 1209, 1°B
RECEPTOR:   Juan Pérez
INFO:       2 paquetes · 1.2 km · ~5 min
```
**Criterio:** La información del bottom sheet permite que el transportista prepare el paquete correcto antes de llegar. "~5 min" con la virgulilla indica estimación, no compromiso. El punto · separa los datos sin usar comas ni paréntesis.

---

### Bloque: CTAs del bottom sheet
```
CTA PRIMARIO:   Llegué  [aparece cuando está a < 200m]
CTA SECUNDARIO: Abrir en Maps
```

**Estado lejos del destino (> 200m):**
```
CTA PRIMARIO: [no visible]
CTA ÚNICO:    Abrir en Maps
```

**Estado llegando (< 200m):**
```
AVISO:        Estás llegando
CTA PRIMARIO: Llegué
CTA SECUNDARIO: Abrir en Maps
```

**Criterio:** El CTA "Llegué" aparece de forma adaptativa. Mostrarlo siempre puede generar confirmaciones accidentales. El aviso "Estás llegando" prepara al transportista antes de que el CTA aparezca.

---

## PANTALLA 4 — Confirmación de entrega

**Rol en el flujo:** Registrar que la entrega se completó. Cierra el loop de cada parada.
**Objetivo del usuario:** Confirmar rápido y volver a la ruta.
**Objetivo del contenido:** Máxima eficiencia. Esta pantalla se usa 15–25 veces por jornada.

---

### Bloque: Header
```
BACK:     ← Confirmar entrega
```

---

### Bloque: Resumen de parada
```
TEXTO:    Parada 3 · Av. Cabildo 1209, 1°B
SUB:      Juan Pérez · 2 paquetes
```
**Criterio:** Contexto mínimo para que el transportista confirme que está entregando lo correcto. No repite toda la información del detalle.

---

### Bloque: Área de firma
```
LABEL:    Firma del receptor  [dentro del área]
HELPER:   Pedile a Juan Pérez que firme acá
```
**Criterio:** El helper text menciona el nombre del receptor — refuerza que el transportista tiene que pedir específicamente a esa persona.

---

### Bloque: Resumen de entrega
```
TEXTO:    2 paquetes entregados · Parada 3 de 15
```

---

### Bloque: CTA
```
CTA:      Confirmar entrega
```
**Alternativa descartada:** "Listo" → demasiado genérico, puede confundirse con otros contextos.

---

### Estado: Sin firma (si es requerida)
```
AVISO:    Necesitás la firma del receptor para confirmar.
```

---

## PANTALLA 5 — Ruta completada

**Rol en el flujo:** Cierre de jornada. Momento de reward.
**Objetivo del usuario:** Cerrar la jornada con sensación de logro y tener acceso al resumen.
**Objetivo del contenido:** Reconocimiento genuino sin exageración. Datos concretos que refuerzan el logro.

---

### Bloque: Mensaje principal
```
TÍTULO:   Ruta completada
SUB:      Terminaste tus 15 entregas del día.
```
**Criterio:** Sin signos de exclamación, sin emojis decorativos. "Terminaste" es un reconocimiento directo y real. Evitamos "¡Felicitaciones! ¡Lo lograste!" porque suena falso en un contexto operativo.

**Alternativa válida:**
```
TÍTULO:   Ruta completada
SUB:      Muy bien, Marcos. 15 de 15 entregas.
```
*Si hay personalización por nombre disponible, esto funciona mejor porque es más personal sin ser excesivo.*

---

### Bloque: Stats de jornada
```
STAT 1:   15    LABEL: entregas
STAT 2:   2h 45m  LABEL: tiempo total
```
**Criterio:** Datos concretos que dan satisfacción real. El transportista puede ver el resultado de su trabajo. Evitamos agregar métricas vacías como "km recorridos" si no tienen impacto en la percepción de logro.

---

### Bloque: CTAs
```
CTA PRIMARIO:   Ver resumen
CTA SECUNDARIO: Cerrar
```
**Criterio:** "Ver resumen" permite acceder al historial del día. "Cerrar" es honesto — no "Volver al inicio" si ya no hay más entregas.

---

## ESTADOS TRANSVERSALES

Estos estados pueden aparecer en múltiples pantallas.

### Error de conectividad
```
BANNER:   Sin conexión. Algunos datos pueden estar desactualizados.
```
**Criterio:** Banner no bloqueante. El transportista puede seguir operando offline con la última información cargada.

### Error de GPS / ubicación
```
AVISO:    No podemos detectar tu ubicación. Activá el GPS para ver la distancia a cada parada.
```

### Sesión expirada
```
TÍTULO:   Tu sesión cerró
CUERPO:   Ingresá de nuevo para continuar con tu ruta.
CTA:      Ingresar
```

### Notificación push — Nuevo paquete asignado
```
PUSH:     Nuevo paquete asignado a tu ruta. Ya está incluido en la parada 7.
```

### Notificación push — Alerta de tiempo
```
PUSH:     Estás a 3 paradas de cumplir tu ventana de entrega.
```

---

## TABLA RESUMEN DE CTAs POR PANTALLA

| Pantalla | CTA Primario | CTA Secundario |
|----------|-------------|----------------|
| 0 · Inicio | Empezar a repartir | — |
| 1 · Vista de ruta | Ir a siguiente parada | Ver mapa |
| 2 · Detalle de parada | Ya lo entregué | Navegar hasta acá |
| 3 · En camino | Llegué | Abrir en Maps |
| 4 · Confirmación | Confirmar entrega | Cancelar |
| 5 · Ruta completada | Ver resumen | Cerrar |

---

## CHECKLIST DE CONSISTENCIA TONAL

- [x] ¿Suena claro y directo?
- [x] ¿El usuario entiende qué pasó y qué hacer en cada pantalla?
- [x] ¿Es consistente con el tono operativo de Mercado Libre?
- [x] ¿Usa voseo natural sin forzar?
- [x] ¿Evita relleno, adjetivación y marketing vacío?
- [x] ¿Cada CTA tiene un verbo de acción específico?
- [x] ¿Los errores explican causa + acción?
- [x] ¿Los empty states guían al usuario?
- [x] ¿Se puede escanear rápido?
- [x] ¿Es accesible y legible para audiencia amplia?
- [x] ¿Se puede implementar directamente en producto?

---

## NOTAS PARA EL DISEÑO VISUAL

1. **Dirección en 4 niveles** → requiere 4 estilos tipográficos distintos en el componente `AddressBlock`.
2. **Badge "Ordenado por cercanía"** → aparece en P0 y P1. Debe ser el mismo componente, mismo texto, misma posición.
3. **"Llegué" aparece condicionalmente** → el diseño debe contemplar el estado sin CTA primario y el estado con CTA primario.
4. **Nombres de receptores** → el sistema debe tener un fallback claro ("Destinatario no especificado") para cuando el dato no está disponible.
5. **Singular/plural en paquetes** → el componente `PackageCounter` debe manejar "1 paquete" / "N paquetes" dinámicamente.
