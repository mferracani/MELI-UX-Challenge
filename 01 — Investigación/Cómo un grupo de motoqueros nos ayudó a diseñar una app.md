https://medium.com/mercadolibre-ux/c%C3%B3mo-un-grupo-de-motoqueros-nos-ayud%C3%B3-a-dise%C3%B1ar-una-app-89907e31a673

Bueno, no son los de la foto, pero se los pueden imaginar más o menos así: tatuaje más, tatuaje menos, jóvenes, viejos, tímidos, extrovertidos, impacientes… todos distintos. Lo importante es que se pasan el día recorriendo la ciudad de Buenos Aires, en moto, entregando paquetes.

Exactamente lo que estábamos buscando.

### ¿De qué estás hablando, Willis?

En Mercado Libre queremos ofrecer envíos más rápidos y una mejor experiencia a nuestros usuarios. Para eso estamos diseñando (entre otras cosas) una app para motoqueros.

**¿Para qué sirve?** Si el comprador está en CABA, puede elegir la opción de _envíos en el día_ en nuestro sitio. Los vendedores le dan los paquetes a sus motoqueros. Ellos los escanean con la app y salen a repartirlos.

Sí, la idea es bien sencilla. Los envíos se hacen en el día (un envío por correo dentro de CABA puede demorar casi una semana) y tienen seguimiento.

Ahora, ¿qué hace la app exactamente?

### La posta está en los detalles

Nos juntamos con todos los equipos (diseño, contenido, research, producto, desarrollo, comercial) y pensamos: ¿qué necesitamos para que esto funcione?

- _Un escáner de QR, para leer las etiquetas,_
- _un listado de direcciones para entregar los paquetes,_
- _un mapa para mostrar esas direcciones,_
- _la posibilidad de firmar en la app al recibir el paquete,_
- _poder diferenciar los paquetes ya entregados de los que no._

Dentro de estos _workshops_, la app empezó a tomar forma. Y nosotros seguimos sumando puntos a la lista. Nuestro entusiasmo estaba ahí, bien arriba. ¿Por qué detenernos acá si tenemos la tecnología y las posibilidades para hacer tanto más?

> - ¿Y si armamos un recorrido automáticamente?  
> - ¡Sí! ==Podemos== ubicar al motoquero con GPS y ordenar los paquetes por distancia.  
> - Podemos trackearlo y avisarle al comprador el minuto exacto en el que llega.  
> - ¿Y si mejor al comprador le mostramos en vivo por dónde está yendo la moto?

Sí, sí, sí a todo. Queríamos todo esto, y mucho más. Bajamos todas las ideas a wireframes y armamos los prototipos para poder testearlos.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1000/1*z3US2d2Nd_0xvPPCs3hWuA.png)

Algunas ideas para los primeros prototipos

### La hora de la verdad: llamen a los motoqueros

Listos los prototipos. Ya podemos empezar a testear. Veamos qué opinan los motoqueros de la aplicación…

> ¿Para qué quiero una app? Si los paquetes los voy a entregar igual.

Uuffff, empezamos bien.

> Todo muy lindo, pero mientras estoy manejando no puedo mirar el mapa. Engancho el celu en el casco, y la gallega de Google Maps me dice por dónde ir.

Ok, bien, podemos trabajar con eso.

> ¿Y yo me tengo que quedar parado en la calle, con la moto llena de paquetes, completando todos estos datos?

Eeehh…Pasemos a ver qué opinan sobre el recorrido obligatorio:

> - Si tengo un paquete muy grande o muy valioso, lo voy entregar primero.  
> - A veces me mandan a hacer trámites, los voy intercalando en el recorrido.  
> - Yo el mapa de CABA ya lo tengo en la cabeza. Mirá por donde me manda esto. Si paso por ahí, me afanan todo.

**¿Qué pasó?** En nuestro afán por querer brindar la mejor experiencia de compra, estábamos diseñando una app que no le servía a los usuarios.

[](https://medium.com/plans?source=promotion_paragraph---post_body_banner_rabbit_hole_scribble--89907e31a673---------------------------------------)

Resumiendo: vamos a tener que revisar un montón de cosas.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1000/1*K5t2XcRbC_vbu42MZu4ixw.png)

Uno de los (muchos) workshops de revisión

### Error, recalculando…

Nuestro usuario final es el comprador, sí. Pero el usuario de la app es el motoquero. ¿Cómo diseñar la app para brindarle la mejor experiencia posible a ambos? Revisemos algunas propuestas:

- **¿El recorrido tiene que ser obligatorio?** Hmm, no. Podríamos recomendar un recorrido pero darle la flexibilidad para hacer el que quiera.
- **¿Si no sabemos el recorrido, cómo le avisamos al comprador que el paquete está por llegar?** Los envíos son en el día. Si avisamos en el momento que sale la moto, ya van a saber que llega en las próximas horas.
- **¿Podemos aumentar la precisión de este aviso?** Sí. El motoquero podría avisar que está yendo a una dirección específica. No sería obligatorio, pero si lo hace va a perder menos tiempo al momento de hacer la entrega.
- **¿Necesitamos el mapa en la app?** Por el momento no podemos competir con la experiencia de los motoqueros en la calle o con “la gallega” (de Google). ¿Pero qué tal si les permitimos exportar las direcciones a Google Maps? Así, si necesitan un mapa, no las tienen que cargar una por una.
- **Algunos motoqueros expresaron irritación por tener que completar muchos pasos. Entorpece su dinámica y en algunos barrios incluso es peligroso. ¿Podemos simplificar el flujo?** Sí, de hecho algunas de las preguntas que les hacemos las podríamos contestar nosotros. Por ejemplo, en lugar de que tenga que avisar que salió a repartir, lo detectamos automáticamente cuando la moto empieza a moverse.

Así, poco a poco, fuimos desmenuzando todo el feedback que recibimos y nos pusimos a iterar.

Simplificamos la app para facilitar su uso. Establecimos reglas más flexibles. **Queremos darle una herramienta a los motoqueros que los ayude en su trabajo y que no los limite.** Pero ¡ojo!, también definimos qué requisitos consideramos obligatorios para darle una buena experiencia al comprador. Por ejemplo, los paquetes se tienen que escanear sí o sí, para poder avisarle al cliente que están en camino.

De esta forma encontramos un balance entre los usuarios de la app (los motoqueros) y los usuarios finales del servicio (los compradores).

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1000/1*gtP0S3TTwyMsQgMZhbl4SA.png)

Algunas pantallas de la v1

### ¿Próximos pasos?

Iterar, iterar, iterar. Esto recién empieza. La app no lleva ni una semana en la calle. Tenemos que ver qué funciona, y ver qué falla. Queremos expandirnos a otras ciudades y a otros países. Nos queda mucho por aprender, mucho por mejorar ¡y seguramente mucho por rehacer!