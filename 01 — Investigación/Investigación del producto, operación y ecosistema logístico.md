
## Resumen ejecutivo

Envíos Flex es una modalidad logística dentro de Mercado Libre que permite que el propio vendedor (o un proveedor de última milla contratado por él) realice entregas rápidas en su zona, típicamente “en el día” (same_day) o “al día siguiente” (next_day), bajo reglas de promesa, capacidad, seguimiento y confirmación integradas a la plataforma. 

A nivel técnico, Flex forma parte del stack de “Mercado Envíos 2 (ME2)” y aparece como un _logistic type_“self_service”, distinto de opciones como “drop_off”, “cross_docking” o “fulfillment”. 

El modelo cumple una función estratégica: acelerar el last mile con una red híbrida. En una descripción institucional se lo presenta como una forma de integrar a la red logística la “distribución de los vendedores cuando la tienen bien resuelta”, explicitando que la ejecución de la entrega puede estar del lado del seller, pero con control de promesa y trazabilidad del lado del marketplace. 

En costos y pricing, la ayuda oficial (Argentina) describe un esquema donde el comprador paga el total del envío y el vendedor recibe una bonificación equivalente al total de la tarifa (para ciertos escenarios/zonas), y aclara que la tarifa de Flex puede ser mayor o menor que lo acordado con el proveedor de logística del vendedor (riesgo de “gap” entre tarifa plataforma y costo real de reparto). Además, se anunciaron cambios en tarifas/bonificaciones “desde el 12 de marzo” de 2026 (Argentina), demostrando que el esquema es dinámico y sujeto a actualizaciones. 

En métricas públicas, MercadoLibre, Inc. reporta aceleración de entregas “same & next day” y tiempos de entrega a nivel de red (no aislados por Flex). Por ejemplo, en Q3 2025 se reportan 172.9 millones de envíos same & next day (métrica corporativa). Para Flex específicamente, la evidencia más directa en presentaciones públicas aparece en 2021: “Flex… over 9% of penetration” en Q2 2021 y “high single digits penetration” en Q3 2021. 

## Qué es y para qué sirve

En contenido oficial para vendedores (ej. Uruguay), se define Flex como el servicio que permite realizar envíos en el día en tu ciudad usando vehículos propios o el servicio de entregas que prefieras. Esto lo diferencia de modelos donde el marketplace asigna un carrier y el vendedor solo despacha en un punto de entrega. 

En la documentación para desarrolladores, Flex se describe como un servicio donde el seller gestiona el envío “on their own, seven days a week”, y donde se integran promesas _same day_ o _next day_ para mejorar plazos y aumentar “market penetration”. Esto posiciona a Flex como un mecanismo de orquestación (promesa/configuración/seguimiento) encima de la logística que el seller ya puede operar. 

Un rasgo estructural es la dependencia de una app operativa: la documentación técnica indica que la app de Envios Flex es necesaria para escanear entregas y completar rutas, pero “no está disponible para integraciones”, lo cual limita escenarios donde un 3PL quiera reemplazarla por completo con su propia app (y obliga a adaptar procedimientos). 

## Funcionamiento operativo y flujo logístico

### Flujo de punta a punta

Un contenido oficial para sellers describe el proceso operativo en términos de preparación del paquete, escaneo y confirmación:

- Preparar paquetes y etiquetarlos con un código QR.
- Entregar los paquetes al transportista (propio o tercero).
- El transportista descarga la app de Envíos Flex, escanea paquetes y realiza el reparto.
- En la entrega, el comprador firma en la app y luego el vendedor recibe el dinero de la venta (en el caso de ese contenido, menciona acreditación en Mercado Pago con una demora específica). 

La documentación de API complementa esto mostrando que el sistema depende de parámetros que moldean la promesa y el _gating_ de pedidos: ventana de entrega (same_day/next_day), rangos horarios, hora de corte (_cutoff_) y capacidad (límite). 

mermaid

Copiar

```
flowchart TD
  A[Compra] --> B[Elegibilidad Flex + promesa same_day/next_day]
  B --> C[Vendedor prepara paquete + etiqueta (QR)]
  C --> D[Transportista recibe paquetes]
  D --> E[Escaneo en app Envíos Flex]
  E --> F[Estado en camino + seguimiento]
  F --> G[Entrega]
  G --> H[Firma/confirmación en app]
  H --> I[Estado entregado + liberación de fondos]
  I --> J[Impacto en métricas de cumplimiento/reputación]
```

El flujo sintetiza la secuencia descrita para vendedores (QR, escaneo, firma) y la estructura de configuración (ventana/cutoff/capacidad) provista por la API. 

### Elegibilidad y activación

En fuentes oficiales para vendedores se repiten criterios de base:

- Reputación **amarilla o verde**.
- Tener activo **Envíos de Mercado Libre** en publicaciones (ME2).
- Contar con **servicio de entregas particulares** (propio o terceros).
- Ofrecer envíos en el mismo día o al siguiente (al menos lunes a viernes).
- Tener la dirección de envíos dentro de la zona de cobertura. 

La documentación técnica agrega condiciones de “usuario de prueba” compatibles con esa lógica (ME2 activo, reputación amarilla/verde, dirección en área de cobertura) y describe que se debe activar Flex para la cuenta antes de poder operar endpoints y recibir órdenes. 

En el flujo de activación descrito para sellers (Uruguay), Flex puede activarse desde un portal de activación o desde publicaciones con Envíos de Mercado Libre eligiendo “Ofrecer envíos en el día”; además, se indica que el seller puede elegir el día de inicio para preparar la operación, lo que sugiere que la activación tiene un estado “programable” y no necesariamente instantáneo. 

### Configuración operativa: horarios, cutoff y capacidad

A nivel de API, existe un endpoint para establecer ventana de entrega, rangos horarios, hora de corte y límite de envíos. Se exponen explícitamente campos como:

- `delivery_window`: valores posibles `same_day`o `next_day`.
- `delivery_ranges.[week|saturday|sunday]`: `from`, `to`, `capacity`, `cutoff`. 

Una restricción no menor: la documentación aclara que la API “solo soporta el mismo valor” de capacidad para semana/sábado/domingo. Para sellers con demanda muy distinta en fin de semana, esto puede forzar decisiones de _capacity planning_ menos finas (o un workaround operativo). 

En contenidos locales para sellers también aparece el concepto de “capacidad diaria” con defaults. En Colombia, por ejemplo, se documenta una capacidad por defecto de 30 entregas diarias y la posibilidad de modificarla desde la configuración del panel. 

### Cobertura geográfica publicada y expansión de zonas

La documentación para desarrolladores publica una lista explícita de áreas habilitadas por país y aclara que la dirección del seller debe ser compatible con alguna de esas áreas. Además, se expone un endpoint para “expandir” cobertura por zona. 

La siguiente tabla resume las áreas publicadas en docs (pueden cambiar con el tiempo; el reporte no asume un país por defecto y reporta lo que está documentado). 

|País (site)|Áreas de cobertura publicadas en docs|Observaciones operativas relevantes|
|---|---|---|
|Argentina|AMBA; Córdoba|El listado de la app en Google Play (orientado a AR) indica “por ahora” disponibilidad para sellers de CABA, GBA y Ciudad de Córdoba.|
|Brasil|São Paulo; Rio de Janeiro; Brasília; Belo Horizonte; Porto Alegre; Salvador; Curitiba|En ME2, Flex se mapea a “self_service” en MLB (disponibilidad por sitio).|
|México|Ciudad de México (Valle de México); Mérida|En una página de envíos (MX) se menciona que el seller decide hasta qué hora ofrecer “en el día” y puede optar por next-day (fuente accesible vía snippet).|
|Chile|Santiago; Valparaíso|En ME2, Flex figura como “self_service” (MLC).|
|Colombia|Bogotá; Medellín; Cali|Se documentan prácticas como capacidad diaria default (30) y modificación en panel.|
|Uruguay|Montevideo; Canelones|Contenido local describe operación (QR/escaneo/firma) y menciona expansión de cobertura.|
|Perú|Lima (área metropolitana)|Disponible según docs para desarrolladores.|
|Ecuador|Quito|Disponible según docs para desarrolladores.|

### Pricing: tarifas, bonificaciones y quién asume el costo real de la entrega

En ayuda oficial (Argentina) se expresa el principio de “tarifa → bonificación”: el comprador paga el total del envío y el vendedor recibe una bonificación equivalente al total de la tarifa (ejemplo: “Tarifas… en Buenos Aires”). 

Otra página de ayuda (Argentina) agrega un matiz operativo clave: “Cuando vendas, tendrás una bonificación para que puedas pagar el costo de la entrega” y advierte que “la tarifa de Envíos Flex podría ser mayor o menor” que la que el vendedor acuerde con su proveedor (logística propia/tercerizada). Este punto introduce un riesgo económico real: si el courier cobra más que la bonificación, el seller absorbe el delta; si cobra menos, el seller captura margen (o reinvierte en servicio). 

En marzo de 2026 se comunicaron “cambios en las tarifas de Envíos Flex desde el 12 de marzo” (Argentina), lo que sugiere revisiones periódicas del esquema de bonificaciones y/o escenarios (p. ej., cuándo se bonifica total vs parcial, y su relación con envíos gratis). Dado que el contenido completo no es accesible por bloqueo, el reporte se limita a lo visible públicamente vía snippet y recomienda tratarlo como una política actualizable. 

## Integraciones y requisitos de implementación

### Encaje en Mercado Envíos y herramientas nativas

En el modelo ME2, “Flex (self_service)” es un tipo logístico disponible solo en ciertos sitios (por ejemplo: MLA, MLB, MLC, MCO, MLU, según ME2). Esta taxonomía es crítica si se integra vía API porque determina el _routing_ del envío y los recursos disponibles. 

Dentro de ME2, las APIs estándar de envíos incluyen recursos para consultar envíos y obtener etiquetas (por ejemplo, `shipment_labels` en PDF o ZPL). En la práctica de Flex, el etiquetado (incluyendo QR) aparece como parte del flujo operativo (preparación + etiqueta) para habilitar el escaneo en la app. 

### APIs específicas de Flex: configuración, cobertura y operación

La documentación de Flex expone endpoints orientados a:

- Consultar suscripciones de Flex (y el `service_id`asociado), y diferenciar casos donde también existe Turbo (dos suscripciones). 
- Consultar configuración (vía GraphQL) incluyendo address, `delivery_window`, `delivery_ranges`, zonas y precios por zona (estructura `price` con moneda/centavos). 
- Setear ventanas/rangos/cutoff/capacidad (endpoint “delivery custom”). 
- Expandir cobertura por zona (endpoint de coverage/zone). 
- Identificar el “driver code” asignado a un envío (endpoint `/assignment`), útil para auditoría de cambios de conductor durante el proceso. 

Dos restricciones técnicas relevantes para implementadores: (1) se menciona un límite de 1000 RPM para requests a recursos de Flex; (2) la app es necesaria para completar rutas, pero “no está disponible para integraciones”, lo cual limita automatizaciones completas de última milla desde terceros. 

### Integraciones de terceros: partners, ERPs y 3PLs

Aunque la app operativa es el “punto de ejecución”, existen integraciones satélite que automatizan creación/seguimiento de envíos Flex y sincronización de estados.

- En el Centro de Partners de Mercado Libre, Moovadescribe una integración que ofrece tracking en tiempo real y cambios de estado automáticos, y que permite crear envíos Flex “de manera automática y en un solo clic”. 
- VTEX anunció en 2025 una funcionalidad para que clientes VTEX puedan activar modalidades “Envíos Flex” y “Envíos Turbo”, aclarando que Mercado Libre decide qué cuentas pueden usar estas modalidades y que habilitan entregas el mismo día o “en hasta tres horas” (esto último suele asociarse a Turbo). 
- Un help doc de UpSeller muestra que el flujo de configuración (tiempos, límite y zonas) puede gestionarse desde un ERP, lo cual sugiere que la UI del ecosistema replica los conceptos de la API (cutoff/capacity/zones). 

Como inferencia, estas integraciones suelen cubrir: (a) “configuración” de Flex, (b) sincronización de estados, y (c) reporting operativo; pero siguen dependiendo de la app de Flex para escaneo, secuenciación de ruta y confirmación final. 

### Requisitos operativos para sellers

A partir de las fuentes oficiales y la estructura de configuración, los requisitos operativos típicos para ejecutar Flex con calidad son:

- Operar una ventana real de entregas (same_day o next_day) con hora límite y capacidad consistente con la demanda. 
- Estandarizar preparación y etiquetado (QR) para lograr trazabilidad por escaneo. 
- Contar con un transportista que use la app para escaneo y cierre de entrega (firma). 
- Gestionar el riesgo económico de “tarifa vs costo del courier”, especialmente si los costos de reparto se mueven más rápido que las bonificaciones. 

## Experiencia de usuario en web y mobile

### App móvil de repartidor

La app “Envíos Flex” (Android) se presenta como una herramienta para quien realiza entregas. El listing en Google Play indica que, “por ahora”, el servicio está disponible para sellers de CABA, GBA y Ciudad de Córdoba (Argentina) y que permite “entregar productos con tu propio vehículo” y “seguir toda la ruta”. 

A partir de capturas del listing, se observan pantallas y CTAs consistentes con el flujo operativo:

- Pantalla de escaneo con CTA **“Empezar a repartir”**(para iniciar el flujo de escaneo/armado de entregas). 
- Lista de entregas “en el listado” con acciones como **“Voy para allá”** y un botón **“Mapa”** (indicando navegación/ordenamiento). 
- UI para avisar al comprador “estás en camino”, con estado **“En camino”** asociado a un destino. 

![Central de aprendizaje](https://images.openai.com/static-rsc-1/MneYkR12hH-k-CN6v4u0_10Q9y0ttyt8B5w54yxtkK8_nPNSWhNYckMEeaOsAdB04Mi0ak3NxOe4NbX1gq121vjndGwwvDZCDylLxeq_8xNU4_HAtbLK3qY3AwLuHUKpSwcInuhE164_wUjUVJWAXw)![Central de aprendizaje](https://images.openai.com/static-rsc-1/3dLUCE89GPVOzA-MnIj8gyPh6YvYL3s0-WdjTTnX79lb042pZsHonxDz28-EQRA7yUt_tNALujqOtNn9TYv6CmbuK8npQhWT-KjsPI92LKBt_TiTlxXSOhtYoFZ-r7QYEYKOWlpOXsbIFeXPqB7PHg)

### UI web para sellers: activación y configuración

En contenido oficial para sellers (Uruguay), se describe un camino de activación desde publicaciones: en publicaciones con Envíos de Mercado Libre se selecciona “Ofrecer envíos en el día” y se puede activar/desactivar cuando se quiera. También se menciona que el seller puede elegir el día en que comienza a ofrecer envíos en el día. 

En términos de configuración, las fuentes visibles muestran que la UI (ya sea nativa o vía ERP) se estructura alrededor de parámetros: tiempos/ventanas, límite (capacidad) y zonas de cobertura. Por ejemplo, UpSeller indica explícitamente “Configura tiempos, límite y zonas” como paso de configuración y menciona el filtro “Llega hoy” como resultado de activar Flex (impacto de UX en buyer-side). 

En la capa técnica, esa UI se corresponde con la estructura de la API (delivery_window, ranges, cutoff, capacity, zones). Como inferencia, esto permite mapear componentes de UI esperables:

- Selector de modalidad: same_day vs next_day.
- Selector de horario de entrega (from/to) y hora límite (cutoff).
- Campo de capacidad diaria.
- Selector de zonas (posiblemente por barrios/zonas) con precios/bonificaciones asociados. 

## Métricas y KPIs públicos

### KPIs de red logística (corporativos) relevantes para entender el rol de Flex

En reportes corporativos recientes, MercadoLibre, Inc. enfatiza métricas de velocidad que se benefician de una mezcla de fulfillment, cross-docking y Flex (además de otras iniciativas). En el Investor Relations site se indica, por ejemplo, “Delivered in 48 hours” como KPI (muestra 66% en la vista “in-app experience”), y “items shipped” LTM; también afirma que 95% de paquetes se entregan vía su propia red (métrica corporativa). 

En el Earnings Presentation de Q3 2025 se reportan explícitamente “Same & Next Day Shipments (MM)” llegando a **172.9 millones** en Q3 2025, con crecimiento YoY y commentary sobre penetración en “FAST shipments”. Estas métricas no segregan Flex, pero sí describen el “mercado” de velocidad donde Flex funciona como palanca. 

En el conference call script de 4Q 2020 (logística corporativa), se destacan mejoras de lead time y crecimiento de envíos; también se menciona la expansión de “Places” y el lanzamiento de iniciativas aéreas, reforzando que la red logística se comporta como un portafolio multi-modal (Flex incluido como una de esas capas). 

### Datos públicos de adopción de Flex (cuando están disponibles)

La atribución directa a Flex aparece en materiales de 2021:

- Q2 2021 (Investor Presentation): “Flex gained importance… reaching over 9% of penetration” y se enmarca dentro de “Managed network” (incluye Fulfillment, Cross Docking & Flex). 
- Q3 2021 (Investor Presentation): “Flex kept its importance… remaining in high single digits penetration”, y se reporta que “Over half of our shipments were delivered in the same day or next day” (métrica global). 

La ausencia de desglose específico en reportes 2024–2025 sugiere que, en reporting público reciente, Flex se comunica más como componente de la promesa de velocidad total, y menos como métrica individual (al menos en las piezas revisadas). 

### KPIs operativos que Flex introduce (derivados de diseño de sistema)

Aunque el reporte no dispone de un dashboard público unificado por país, la propia estructura de configuración sugiere KPIs que el sistema necesita para operar:

- **Cumplimiento vs cutoff**: porcentaje de órdenes despachadas/entregadas dentro de ventana same_day/next_day.
- **Utilización de capacidad**: órdenes asignadas vs capacidad definida.
- **Cobertura efectiva**: pedidos atendidos dentro de zonas habilitadas.
- **Trazabilidad**: tasa de escaneo y confirmación (firma) como criterios de completitud operativa. 

Estas métricas no son “public data” en sí mismas, pero se infieren como necesarias porque los endpoints existen y porque el flujo operativo depende de esos eventos. 

## Beneficios, limitaciones, comparaciones y consideraciones legales

### Beneficios y propuestas de valor

Para sellers, Flex ofrece beneficios explícitos en contenido de vendedores: “destacate por tus entregas” y posibilidad de aparecer en filtros asociados a velocidad (“Llega hoy”), lo cual apunta a un incentivo de ranking/conversión. 

Para compradores, el beneficio se expresa como reducción de tiempo de entrega con trazabilidad: UI de notificación “En camino” y confirmación de entrega (firma) sugieren un nivel de visibilidad superior a un envío “fuera de plataforma” sin integración. 

Para la plataforma, Flex permite escalar velocidad “apoyándose” en logística existente del seller. Esto es coherente con la descripción institucional de integrar distribución “cuando [los sellers] la tienen bien resuelta” y con el framing técnico de “self_service” dentro de ME2. 

### Limitaciones y riesgos

El riesgo más evidente es económico: la tarifa/bonificación de Flex puede no coincidir con el costo real del courier que contrate el vendedor. Esto genera exposición a inflación/costos de combustible/salarios y a renegociaciones con proveedores. 

A nivel técnico-operativo, hay restricciones de integrabilidad: la app es necesaria para escaneo y rutas, pero no está disponible para integraciones, lo que limita la “automatización total” por parte de 3PLs y fuerza procesos híbridos. 

También existe un riesgo de performance: Flex es una promesa rápida; fallas (capacidad mal configurada, cutoff irreal, operación sin suficiente flota) impactan directamente en experiencia del comprador y, por diseño, en métricas internas. La existencia de parámetros de capacidad/cutoff y de endpoints de configuración refuerza que esas variables son “sensibles” para el SLA. 

### Comparación con otras opciones de envío de Mercado Libre

La documentación de ME2 lista tipos logísticos y dónde aplican. La tabla de abajo resume diferencias funcionales (no captura todos los matices comerciales como tarifas exactas por país, que varían y cambian). 

|Opción (ME2)|Quién ejecuta el last mile|Infraestructura requerida|Promesa típica|Rastreo/estados|Comentarios|
|---|---|---|---|---|---|
|Flex (self_service)|Seller o su proveedor|Flota propia/tercerizada + app de Flex|Same-day o next-day (configurable)|Integrado (escaneo + confirmación)|App requerida; no disponible para integraciones completas.|
|Drop off (Mercado Envíos)|Carrier integrado|El seller imprime etiqueta y despacha en correo/punto|Multi-día (según carrier)|Integrado vía carrier|Tipo ME2 “drop_off”.|
|Cross docking / colecta|Red del marketplace + carrier|Seller entrega en hubs / colecta programada|Más rápido que drop off (según red)|Integrado|Tipo ME2 “cross_docking”.|
|Fulfillment (Full)|Marketplace|Stock en FCs|Alta velocidad + escala|Integrado|Tipo ME2 “fulfillment”.|
|Turbo|(Derivación de Flex)|Requiere Flex activo (según docs)|En VTEX se menciona “hasta tres|
### Comparación con competidores y alternativas externas

A nivel conceptual, Flex se parece a modelos de “fulfillment ejecutado por el merchant” o “crowdsourced last mile”, pero con integración de marketplace. Comparativas útiles:

- Frente a Amazon FBA (Fulfillment by Amazon): FBA implica que Amazon almacena, recoge, empaqueta y envía (y normalmente gestiona devoluciones/atención), mientras que Flex deja inventario y ejecución de entrega en el seller (con app y tracking de plataforma). 
- Frente a Amazon Flex (programa de conductores): Amazon Flex se describe como un esquema donde repartidores entregan paquetes con su propio vehículo usando una app; Flex de Mercado Libre usa una app de conducción/escaneo para completar rutas, pero su “contratación” y operación de flota se articula por el seller (no como marketplace laboral abierto en la misma forma), y está atado a la promesa de envíos del marketplace. 
- Frente a couriers locales “sin integración”: un courier puede ofrecer same-day, pero Flex agrega: promesa visible en el marketplace, eventos de estado, confirmación de entrega (firma) y potencial preferencia en listados (filtro “Llega hoy”). 

Como contraste de marketplace de importación, Temupublica tiempos de entrega esperados y un esquema de tracking que suele depender de transportistas terceros, con lógica distinta (internacional, aduana, etc.). Esto es útil para contextualizar que Flex opera en el extremo opuesto: hiper-local y de velocidad. 

### Consideraciones legales y de protección al consumidor en América Latina

Este apartado no sustituye asesoría legal; resume principios comunes y ejemplos por jurisdicción. Dado que Flex compromete plazos de entrega más estrictos, el riesgo legal suele aumentar si el cumplimiento falla (publicidad engañosa, incumplimiento de condiciones ofrecidas, reclamos por demoras, etc.). 

Ejemplos relevantes por país (cuando hay fuente oficial disponible):

- En Argentina, la Ley 24.240 (Defensa del Consumidor) establece deberes de información y protección al consumidor; guías públicas de organismos de defensa del consumidor resaltan derecho a información clara y la posibilidad de revocar aceptación en compras online dentro de plazos específicos. 
- En México, PROFECO publica guías sobre compras en línea que incluyen derechos como desistimiento en un plazo (según el material consultado) y garantías en compras online. 
- En Brasil, el gobierno (Ministerio de Justicia) refuerza el “direito de arrependimento” (derecho de arrepentimiento) aplicable a compras online bajo el Código de Defensa del Consumidor (CDC). 
- En Colombia, la Ley 1480 de 2011 (Estatuto del Consumidor) establece el marco general de protección del consumidor; en comercio electrónico destacan figuras como el retracto (según interpretaciones y textos normativos). 

Implicación práctica para Flex: si la promesa “llega hoy”/same-day se publica como parte de la oferta, el seller debe alinear capacidad, cutoff y proveedores para minimizar casos de incumplimiento. Esto reduce tanto el costo reputacional en plataforma como la exposición a reclamos de consumo. 

2018-11Lanzamientoreportado en prensa"Mercado EnvíosFlex" en Argentina2020-03En materialescorporativos seacelerainversión/logística ymejora lead time(contexto de red)2021-06Presentación Q22021Flex supera 9% depenetración(managed networkincluye Flex)2021-09Presentación Q32021Flex se mantiene en"high single digits"de penetración2023-12Docs de APIespecificancobertura por país +endpoints deconfiguración(Flex/Turbo)2025-10VTEX anunciaactivaciónFlex/Turbo paracuentas elegibles(same day / hasta 3horas)2026-03Ayuda (AR)comunica cambiosentarifas/bonificaciones"desde el 12 demarzo"Hitos documentados de Envíos Flex (según fuentes públicas)

Mostrar código

Hitos con fuentes: lanzamiento en 2018 reportado por prensa; penetración y contexto de red en presentaciones 2021; disponibilidad/cobertura y endpoints en documentación técnica 2023; integración VTEX 2025; cambios tarifarios 2026 (snippet).