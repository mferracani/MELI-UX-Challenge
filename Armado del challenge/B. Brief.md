## Contexto

### El punto de partida

Envíos Flex es la solución de Mercado Libre para entregas same day y next day operadas por la logística del propio vendedor. En ese modelo, la app no es un complemento: es la herramienta central de trabajo del transportista. Desde ahí consulta sus paradas, identifica al receptor, valida la dirección y confirma cada entrega.

Este es un producto que se usa en contexto de calle: arriba de una moto, entre paradas, con atención fragmentada y ventanas de lectura de apenas unos segundos. Por eso, la calidad de la experiencia no depende solo de qué información existe, sino de cómo se prioriza y en qué momento aparece.

### Qué está pasando

En el último mes, el NPS de la app cayó un 4%. La investigación interna apunta a una causa concreta: los transportistas necesitan más claridad y más contexto sobre la ruta y sobre cada entrega.

Esta señal es relevante por dos motivos:

- Impacta directamente en la eficiencia operativa de la última milla.
- Expone una oportunidad de mejora sin necesidad de sumar funcionalidades complejas.

El problema no parece estar en la falta de features. El problema está en cómo la app organiza, jerarquiza y revela información crítica durante la jornada.

### Qué nos están diciendo los usuarios

Los feedbacks relevados no hablan de pedidos aislados. Hablan de fricciones repetidas en momentos clave del recorrido:

> _"Necesito organizar mis entregas por distancia y proximidad para perder menos tiempo en las mismas."_ — Carlos, 32 años

Carlos está pidiendo eficiencia operativa. Necesita confiar en que el orden de la ruta lo ayuda a avanzar más rápido, no que lo obliga a resolverlo mentalmente.

> _"Cuando el encargado del edificio me pregunta el nombre de quién va a recibir la entrega, nunca me acuerdo dónde encuentro la información."_ — Claudia, 45 años

Claudia no tiene un problema de acceso al dato, sino de visibilidad. La información existe, pero no aparece cuando más la necesita.

> _"Cuando llego a la dirección, muchas veces es difícil encontrar el número de la casa, así que termino llamando directamente al comprador."_ — Pablo, 24 años

Pablo evidencia una fricción de ubicación. Cuando la dirección no se entiende de un vistazo, la app traslada el costo operativo al transportista y al comprador.

> _"Sería genial si en cada parada supiera cuántos productos o paquetes todavía tengo que entregar, así puedo prepararlos con anticipación."_ — Teresa, 58 años

Teresa está pidiendo anticipación. Necesita preparar la entrega antes de llegar, no descubrir la carga en el último segundo.

### Insight clave

Los cuatro feedbacks convergen en una misma lectura: la app ya cuenta con gran parte de la información necesaria, pero no la entrega con la jerarquía adecuada ni en el momento operativo correcto.

No son cuatro problemas distintos. Es un mismo problema de experiencia expresado en distintas etapas del flujo:

- Antes de salir, el transportista necesita confianza en el orden de la ruta.
- Al llegar, necesita identificar rápido al receptor.
- En la cuadra, necesita interpretar la ubicación exacta sin ambigüedad.
- Entre paradas, necesita anticipar cuántos paquetes preparar.

La oportunidad está en rediseñar la experiencia para que la app funcione como un copiloto de ruta, no solo como un listado de datos.

---

## 02 · Definición del problema

### Qué entendemos del producto

Envíos Flex opera dentro de un modelo self-service de última milla. Mercado Libre sostiene la promesa de entrega, el tracking y la confirmación; el vendedor y su transportista ejecutan la operación en la calle.

En ese contexto, la app cumple un rol crítico:

- Es el punto de entrada al flujo diario de entregas.
- Centraliza la información operativa necesaria para avanzar.
- No tiene un reemplazo real dentro del proceso.

Si la experiencia falla, no falla solo una interfaz: se resiente la operación.

### Qué revela la experiencia actual
La experiencia actual deja ver con claridad por qué aparecen estas fricciones.

**En la pantalla "Tus paradas del día":**

- Las paradas se listan, pero no se comunica si están ordenadas por proximidad.
- No se muestra de forma visible ni el nombre del receptor ni la cantidad de paquetes por parada.
- Falta una referencia clara de progreso dentro de la jornada.

**En la pantalla "Detalle de parada":**

- La dirección aparece como un bloque de texto corrido, sin jerarquía entre datos críticos y secundarios.
- La cantidad de paquetes está colapsada detrás de una interacción adicional.
- Los datos del comprador también están escondidos, aunque son necesarios en el momento de la entrega.

La conclusión es consistente: la información existe, pero hoy está escondida, comprimida o mal priorizada.

### Usuario y contexto de uso
Para enmarcar la propuesta, tomamos como referencia un arquetipo representativo del uso real:

**Marcos, 29 años, transportista Flex en AMBA**

- Realiza entre 15 y 25 entregas por jornada.
- Se mueve en moto y consulta la app desde un soporte en el manubrio.
- Usa un Android gama media con pantalla de 6 pulgadas.
- Alterna entre zonas conocidas y barrios nuevos.
- Su principal frustración es perder tiempo buscando datos que deberían estar visibles.
- Su principal objetivo es completar más entregas en menos tiempo.

El contexto de uso refuerza la necesidad de una interfaz extremadamente clara:

- La atención está dividida.
- Muchas interacciones ocurren con una sola mano.
- La pantalla se consulta por períodos muy breves.
- El entorno tiene ruido, movimiento y condiciones de luz variables.

Diseñar para este escenario implica priorizar legibilidad, velocidad de comprensión y mínima fricción.

### Problema formulado

La app Envíos Flex no organiza ni jerarquiza la información de ruta y entrega de forma que el transportista pueda operar con eficiencia y confianza en contexto de calle.

El problema no es la ausencia de información. El problema es la falta de contexto, prioridad y secuencia en cómo esa información se presenta.

### Oportunidad

La oportunidad de diseño es clara: transformar la app en una experiencia de acompañamiento operativo.

Eso implica:

- Comunicar un orden de ruta confiable.
- Hacer visibles los datos del receptor sin búsqueda.
- Destacar la dirección exacta con jerarquía inequívoca.
- Mostrar la carga por parada de forma anticipada.
- Dar visibilidad constante del progreso de la jornada.

Es una mejora con alto potencial porque aprovecha información ya disponible y la convierte en una experiencia más útil, más rápida y más confiable.

### How Might We

**¿Cómo podemos darle al transportista la información que necesita en cada momento de su ruta, sin que tenga que buscarla?**

Preguntas derivadas:

- ¿Cómo construimos confianza en el orden sugerido de entregas?
- ¿Cómo logramos que el nombre del receptor sea visible en el momento exacto de uso?
- ¿Cómo hacemos que la dirección precisa se entienda de un vistazo?
- ¿Cómo damos visibilidad de carga y progreso sin sumar ruido visual?

### Hipótesis de diseño

> Si rediseñamos la experiencia de ruta activa con información progresiva y contextual, donde la ruta esté organizada por proximidad, el receptor sea visible, la dirección tenga jerarquía visual clara y la cantidad de paquetes esté siempre disponible, entonces vamos a reducir fricción operativa, recuperar el NPS perdido y disminuir llamadas al comprador por problemas de ubicación.

### Principios de diseño

Estas decisiones van a guiar la propuesta:

**1. Información en el momento justo.** La interfaz debe acompañar cada etapa de la ruta con el nivel de detalle adecuado.

**2. Cero búsqueda.** Si un dato crítico requiere tocar, scrollear o expandir para encontrarlo, la experiencia falla.

**3. Diseñado para la calle.** La solución debe funcionar en condiciones reales de uso: miradas breves, una mano libre, movimiento y distracciones.

**4. Progreso siempre visible.** La jornada tiene que sentirse controlable, medible y predecible.

**5. Confianza en la ruta.** Si el sistema propone un orden, debe comunicar con claridad por qué ese orden es conveniente.
