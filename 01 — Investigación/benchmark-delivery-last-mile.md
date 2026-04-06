

## 2. Lectura general del benchmark

### Hallazgo 1

Las apps LATAM como **PeYa Rider** y **Soy Rappi** son buenas referencias para:

- disponibilidad / turnos,
- aceptacion de pedidos,
- pagos e historial,
- tono y familiaridad regional.

Pero no son las mejores referencias para resolver el problema principal de Flex, porque ese problema es mas cercano a **ruta multi-parada + detalle operativo por entrega**.

### Hallazgo 2

Las referencias mas potentes para el rediseño son:

- **Amazon Flex** para flujo de reparto multi-stop,
- **Onfleet Driver** para detalle de tarea y proof of delivery,
- **Circuit / Spoke** para comunicar ruta optimizada y control del recorrido.

### Hallazgo 3

Tu propia documentacion interna de Mercado Libre ya marca una tension clave: **forzar el orden de ruta genera rechazo**. Eso coincide con soluciones maduras como Onfleet, que incluso permiten configurar si el conductor puede o no salirse del orden sugerido.

Recomendacion de producto:

- mostrar **orden sugerido por cercania**,
- explicar por que ese orden es conveniente,
- pero no tratar la ruta como un recorrido completamente rigido.

## 3. Benchmark por producto

| Producto | Lo mas util para Flex | Lo que conviene copiar | Lo que conviene evitar |
|---|---|---|---|
| **PeYa Rider** | Flujo de rider LATAM | disponibilidad, pagos, ayuda, seguimiento de entregas | usarlo como referencia principal de multi-parada |
| **Soy Rappi** | Logica de ordenes paso a paso | control en tiempo real, historial, cupos | interfaz demasiado cargada para contexto glanceable |
| **Amazon Flex** | Reparto multi-parada puro | secuencia de entregas, escaneo, soporte en ruta | complejidad operativa excesiva para el MVP |
| **Onfleet Driver** | Tarea / parada / POD | detalle claro, contacto, navegacion externa, evidencia de entrega | tono enterprise demasiado frio si se copia literal |
| **Circuit / Spoke** | Ruta optimizada | lista ordenada, ETA, prioridades, reordenamiento | llevar a Flex a una app "planner" en vez de copiloto |
| **Uber Driver** | Siguiente accion super prominente | hero card, CTA dominante, lectura en 2 segundos | exceso de foco en oferta/earnings si se traslada tal cual |

## 4. Pantallas a benchmarkear si solo vas a mirar 5

### A. Inicio de jornada / disponibilidad

Referencias:

- **PeYa Rider**
- **Soy Rappi**
- **Uber Driver**

Que mirar:

- como muestran estado online / offline,
- como resuelven disponibilidad,
- como priorizan el CTA principal,
- cuanto ruido meten alrededor del mapa.

Impacto en Flex:

- la home de Flex no deberia arrancar con un dashboard abstracto;
- deberia arrancar con una **accion principal clarisima**: empezar ruta / ver siguiente parada.

### B. Ruta del dia / lista operativa

Referencias:

- **Amazon Flex**
- **Circuit / Spoke**
- **Onfleet**

Que mirar:

- orden visual de paradas,
- progreso,
- distancia o ETA,
- jerarquia entre siguiente parada y resto de la lista.

Impacto en Flex:

- la pantalla "Tus paradas del dia" tiene que dejar de ser solo una lista;
- necesita un bloque hero para **proxima parada** y abajo una lista secundaria del resto.

### C. Detalle de parada

Referencias:

- **Onfleet Driver**
- **Amazon Flex**

Que mirar:

- como separan direccion, contacto, notas y prueba de entrega,
- como integran navegacion externa,
- si el dato mas importante esta visible sin expandir.

Impacto en Flex:

- el nombre del receptor no puede quedar detras de un accordion;
- piso, depto, referencias y cantidad de paquetes tienen que estar visibles en la capa base.

### D. En camino

Referencias:

- **Uber Driver**
- **Onfleet Driver**
- **PeYa Rider**

Que mirar:

- CTA principal,
- uso del mapa como contexto y no como protagonista,
- lectura de 1-2 segundos.

Impacto en Flex:

- conviene una pantalla con **destino + receptor + paquetes + abrir navegacion**;
- no conviene una vista full-map como home principal.

### E. Cierre / prueba de entrega / incidencia

Referencias:

- **Onfleet Driver**
- soporte de **Onfleet Proof of Delivery**

Que mirar:

- foto,
- firma,
- barcode,
- ID,
- failed delivery.

Impacto en Flex:

- tu documentacion marca que el estado **"No pude entregar"** todavia esta flojo;
- esta es una de las mejores oportunidades para diferenciar madurez del caso.

## 5. Decisiones concretas para la propuesta de Flex

### 5.1 Lista de ruta

Patron recomendado:

- encabezado con progreso: `8 de 20 entregas`,
- bloque hero de siguiente parada,
- chips visibles: receptor, paquetes, distancia/ETA,
- subtitulo explicando el criterio: `orden sugerido por cercania`,
- resto de paradas en lista comprimida.

### 5.2 Detalle de parada

Orden recomendado:

1. receptor,
2. direccion exacta,
3. piso / depto / referencias,
4. paquetes en esa parada,
5. CTA de navegacion,
6. contacto / ayuda / incidencia.

### 5.3 Navegacion

Patron recomendado:

- mapa pequeno o inline,
- destino textual enorme,
- CTA unico y dominante: `Abrir en Google Maps` o `Abrir en Waze`,
- bloque secundario con receptor y paquetes.

### 5.4 Incidencias

Patron recomendado:

- CTA secundario persistente: `No pude entregar`,
- sheet con 3 motivos base:
  - no habia nadie,
  - direccion incorrecta,
  - paquete danado / problema con el paquete,
- luego captura minima de evidencia si aplica.

## 6. Lo que NO copiaria

- No copiaria una experiencia **map-first** como eje principal.
- No copiaria dashboards cargados con demasiados KPIs.
- No copiaria flows donde el conductor tenga que expandir bloques para encontrar datos criticos.
- No copiaria una automatizacion rigida del recorrido sin margen de autonomia.

## 7. Galeria rapida de pantallas

La idea de esta seccion es que tengas referencias visuales a mano mientras armas Figma. Algunas imagenes salen de mirrors publicos de App Store / Play Store; abajo tambien dejo el link oficial de cada app.

### PeYa Rider

Pantallas:

- [App Store](https://apps.apple.com/us/app/pedidosya-rider/id1612663454)
- [Google Play](https://play.google.com/store/apps/details?id=com.logistics.rider.pedidosya)
- [Mirror con screenshots](https://appadvice.com/app/pedidosya-rider/1612663454)

![PeYa Rider 1](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/df/1b/3f/df1b3fef-11b5-97cc-d1fc-abc3d390890e/Pedidosya_-_iOS_-_Size_2_-_02.jpg/750x750bb.jpeg)

![PeYa Rider 2](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/70/01/eb/7001eb53-3254-2c51-d40a-e18d56494a18/Pedidosya_-_iOS_-_Size_2_-_01.jpg/750x750bb.jpeg)

### Soy Rappi

Pantallas:

- [Google Play](https://play.google.com/store/apps/details?id=com.rappi.storekeeper)
- [Mirror con screenshots](https://www.appbrain.com/app/soy-rappi-s%C3%A9-un-repartidor/com.rappi.storekeeper)

![Soy Rappi 1](https://lh3.googleusercontent.com/6iuq7waKl0dYt3AU1bAEq6jJEFSGCZhYBJxxjN_7hG4te1_zKWs5DH-1GUauBAvAcJB8Pdwd_Sbt8wneFf3LgOw%3Dh200-rw)

### Amazon Flex

Pantallas:

- [App Store](https://apps.apple.com/us/app/amazon-flex/id1454725763)
- [Google Play](https://play.google.com/store/apps/details?id=com.amazon.flex.rabbit)
- [Mirror con screenshots](https://appadvice.com/app/amazon-flex/1454725763)

![Amazon Flex 1](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f8/16/0c/f8160c23-8841-3bb0-232c-319abb063f8e/325107fe-1b1b-4d44-b2ed-957f8380229f_Deliver_Smiles-EN-US-55.png/750x750bb.jpeg)

![Amazon Flex 2](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/79/03/f8/7903f829-76f5-b942-4381-68632c44a027/6da31242-7a17-4b6f-af9d-a591b83f6f07_Grow_With_Amazon-EN-US-55.png/750x750bb.jpeg)

### Onfleet Driver

Pantallas:

- [App Store](https://apps.apple.com/us/app/onfleet-driver/id1084013403)
- [Google Play](https://play.google.com/store/apps/details?id=com.onfleet.driver.app)
- [Mirror con screenshots](https://appadvice.com/app/onfleet-driver/1084013403)
- [Proof of Delivery oficial](https://support.onfleet.com/hc/en-us/articles/10348848090644-Proof-of-Delivery)

![Onfleet 1](https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/cc/eb/71/cceb71a1-06ef-65ce-bfb0-fa8d4836c7bd/6b29a3bf-1af5-463e-98b9-8b018270f0ac_Frame_1.png/750x750bb.jpeg)

![Onfleet 2](https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/3b/aa/fb/3baafb83-3ab5-8cc4-fb36-c818327328a7/43238f69-83f4-4a64-82cd-7b41186aa3d4_Frame_2.png/750x750bb.jpeg)

### Circuit / Spoke

Pantallas:

- [App Store](https://apps.apple.com/us/app/spoke-circuit-route-planner/id1198232244)
- [Google Play](https://play.google.com/store/apps/details?id=com.underwood.route_optimiser)
- [Mirror con screenshots](https://appadvice.com/app/circuit-route-planner/1198232244)

![Circuit 1](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/74/39/e8/7439e89a-2335-7506-fbf5-b8d87618f952/dd98fb06-8977-47b7-a038-900789d5e84d_iOS_01_Driver_5.5_UK.jpg/750x750bb.jpeg)

![Circuit 2](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/68/d8/58/68d85832-f828-c8cf-fb08-bf2825c8ac6f/80d8f483-277b-4528-acb5-1bc2e1ada083_iOS_02_Driver_5.5_UK.jpg/750x750bb.jpeg)

### Uber Driver

Pantallas:

- [Guia oficial del driver app](https://www.uber.com/us/en/drive/driver-app/)
- [App Store](https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792)
- [Mirror con screenshots](https://appadvice.com/app/uber-driver-drive-deliver/1131342792)

![Uber Driver 1](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/6d/4f/43/6d4f4322-09de-d242-84e3-e186eb7e06a4/0cb5f7cd-bc62-4dea-8e85-4ff512652a01_SS01.png/750x750bb.jpeg)

![Uber Driver 2](https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/df/e3/1a/dfe31a5d-7890-cdaa-7c18-242ae7a6d832/66cea36e-18ab-40b9-b201-ea9828c91254_SS02.png/750x750bb.jpeg)

## 8. Recomendacion final

Si tuviera que resumir el benchmark en una direccion de diseño:

**Flex deberia parecerse menos a una app de delivery consumer y mas a un mix entre Onfleet + Circuit + Uber, con sensibilidad LATAM de PeYa / Rappi.**

Traducido a UI:

- **Circuit** para comunicar orden y progreso,
- **Onfleet** para detalle operativo y cierre,
- **Uber** para claridad de siguiente accion,
- **PeYa / Rappi** para familiaridad regional y tono.

## 9. Fuentes

### Documentacion local

- `Armado del challenge/B. Brief.md`
- `Armado del challenge/C. Definición del problema.md`
- `Armado del challenge/D. Investigar.md`
- `Armado del challenge/E. Validar.md`
- `Documentación para el armado/Investigación del producto, operación y ecosistema logístico.md`
- `Documentación para el armado/Cómo un grupo de motoqueros nos ayudó a diseñar una app.md`

### Fuentes externas revisadas

- PeYa Rider en [Google Play](https://play.google.com/store/apps/details?id=com.logistics.rider.pedidosya) y [App Store](https://apps.apple.com/us/app/pedidosya-rider/id1612663454)
- Soy Rappi en [Google Play](https://play.google.com/store/apps/details?id=com.rappi.storekeeper)
- Amazon Flex en [Google Play](https://play.google.com/store/apps/details?id=com.amazon.flex.rabbit) y [App Store](https://apps.apple.com/us/app/amazon-flex/id1454725763)
- Onfleet Driver en [Google Play](https://play.google.com/store/apps/details?id=com.onfleet.driver.app), [App Store](https://apps.apple.com/us/app/onfleet-driver/id1084013403), [Driver App](https://onfleet.com/driver-app), [Proof of Delivery](https://onfleet.com/proof-of-delivery), [Driver Settings](https://support.onfleet.com/hc/en-us/articles/10228814951060-Driver-App-Settings)
- Circuit / Spoke en [Google Play](https://play.google.com/store/apps/details?id=com.underwood.route_optimiser) y [App Store](https://apps.apple.com/us/app/spoke-circuit-route-planner/id1198232244)
- Uber Driver en [App Store](https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792) y [guia oficial](https://www.uber.com/us/en/drive/driver-app/)
