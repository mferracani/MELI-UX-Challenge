Qué validar primero
1. **¿La ruta auto-ordenada genera confianza o desconfianza?** → Si el transportista no confía en el orden, no lo sigue y la feature pierde valor.
2. **¿La jerarquía de información del detalle de parada es la correcta?** → ¿Dirección primero y nombre después, o al revés?
3. **¿El transportista entiende el contador de paquetes sin explicación?** → ¿Es intuitivo o confuso?

## 5.2 Plan de validación liviano

|Fase|Método|Participantes|Qué valida|Duración|
|---|---|---|---|---|
|1|Test de usabilidad remoto (prototipo Figma)|5 transportistas Flex activos|Flujo completo: ¿puede completar una entrega sin ayuda?|30 min c/u|
|2|Test de "primer vistazo" (5 seg)|8 transportistas|¿Qué info ven primero en cada pantalla? ¿Es la correcta?|10 min c/u|
|3|Entrevista contextual (ride-along)|3 transportistas|Validar supuestos de contexto de uso (celular, mano, mirada)|2 horas c/u|
|4|A/B en producción (post-lanzamiento)|Grupo control vs. tratamiento|NPS, tiempo promedio por entrega, tasa de llamadas al comprador|2-4 semanas|

## 5.3 Escenarios de test

**Escenario 1 — Inicio de ruta:** "Acabás de cargar 18 paquetes en la moto. Abrís la app. ¿Qué hacés primero? ¿Hacia dónde vas?"

- Criterio de éxito: El transportista entiende el orden de la ruta y identifica la primera parada en <10 seg.

**Escenario 2 — Llegada a edificio:** "Llegaste a un edificio. El portero te pregunta a nombre de quién es. ¿Dónde encontrás esa info?"

- Criterio de éxito: Encuentra el nombre del receptor en <5 seg sin navegar a otra pantalla.

**Escenario 3 — Dirección difícil:** "La dirección dice Av. Cabildo 1209. Necesitás saber el piso y depto. ¿Dónde lo ves?"

- Criterio de éxito: Identifica piso/depto/entre calles en la pantalla de detalle en <5 seg.

**Escenario 4 — Preparar paquetes:** "Vas camino a la siguiente parada. ¿Cuántos paquetes tenés que entregar ahí?"

- Criterio de éxito: Identifica el número de paquetes antes de llegar, sin abrir detalle.

## 5.4 Métricas UX y de negocio

|Métrica|Tipo|Target|
|---|---|---|
|NPS de la app|Negocio|Recuperar los 4 puntos perdidos (mínimo)|
|Tiempo por entrega (promedio)|Operativa|Reducción de 10-15%|
|Tasa de llamadas al comprador|Operativa/CX|Reducción de 20%+|
|Task completion rate (test de usabilidad)|UX|>90% sin errores|
|Time to first action (inicio de ruta)|UX|<10 segundos|
|SUS score (System Usability Scale)|UX|>75|
|Entregas completadas/día por transportista|Negocio|Aumento de 5-10%|

## 5.5 Riesgos de adopción

- **Resistencia al cambio:** Transportistas acostumbrados a la UI actual pueden rechazar el rediseño. Mitigación: onboarding ligero (tooltip en primer uso) + no eliminar funcionalidades existentes.
- **Orden de ruta no óptimo percibido:** Si el algoritmo propone un orden que no coincide con la intuición del transportista, pierde confianza. Mitigación: permitir reordenar manualmente (v2) + mostrar "ordenado por cercanía".
- **Datos de dirección incompletos:** Si la dirección no tiene piso/depto, la jerarquía visual queda vacía. Mitigación: diseñar para el caso de dato faltante (graceful degradation).

## 5.6 Cómo iterar si la hipótesis falla

- Si la ruta auto-ordenada no genera confianza → pivotar a vista de mapa con clusters por zona (Dirección B).
- Si la jerarquía de info del detalle no funciona → test de card sorting para reordenar bloques.
- Si el contador de paquetes no se entiende → simplificar a "X paquetes" sin icono, solo texto.
- Si el NPS no se recupera → el problema puede no ser de UI sino de performance/velocidad/crashes → investigar métricas técnicas.