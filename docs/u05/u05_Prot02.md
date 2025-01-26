# Protocolo DNS 

<div class="custom-quote">DNS (Domnain Name System) es un protocolo esencial para el funcionamiento de las redes, ya que traduce nombres de dominio, como www.google.com, en direcciones IP, como 142.250.186.78, que los dispositivos utilizan para comunicarse en una red.</div>

Este sistema permite que los usuarios puedan acceder a servicios en Internet de manera intuitiva, sin tener que recordar complejas direcciones IP.

El objetivo principal del DNS es facilitar la resolución de nombres de dominio en direcciones IP y viceversa, optimizando la conectividad y simplificando el acceso a recursos en la red.

## Breve Historia.

Durante los años 70 y principios de los 80, en sistemas operativos como UNIX, las combinaciones de direcciones IP-nombres de dominio se introducían directamente en el **archivo hosts**, que tenía el inconveniente de requerir actualizaciones constantes a medida que las redes crecían. 

Más tarde, sistemas operativos como Windows heredaron esta funcionalidad, ubicando el archivo en */Windows/system32/drivers/etc/hosts*. 

Sin embargo, con la adopción del protocolo DNS en los años 90, la resolución de nombres se automatizó, haciendo que el uso del *archivo hosts*, aunque sigue existiendo en sistemas Windows, sea actualmente casi testimonial.

## Funcionamiento

El protocolo DNS opera de manera jerárquica, involucrando varios tipos de servidores que trabajan en conjunto para resolver las consultas realizadas por los clientes.

El proceso típico incluye los siguientes pasos:

1. **Consulta del cliente al servidor DNS local**: Cuando un usuario introduce un nombre de dominio en su navegador, el sistema operativo del dispositivo envía una consulta al servidor DNS configurado, generalmente proporcionado por el ISP.
2. **Resolución iterativa o recursiva**: Si el servidor DNS local no tiene la dirección solicitada en su caché, actúa como intermediario y realiza consultas iterativas o recursivas a otros servidores DNS hasta obtener la respuesta.
3. **Jerarquía de servidores DNS**:
   - *Servidores raíz*: Apuntan a los servidores TLD (Top-Level Domain).
   - *Servidores TLD*: Gestionan dominios de nivel superior, como .com, .org, .es.
   - *Servidores autoritativos*: Contienen la información final sobre un dominio específico.
4. **Respuesta al cliente**: Una vez resuelto el nombre de dominio, el servidor DNS local devuelve la dirección IP correspondiente al cliente, que puede entonces iniciar la comunicación con el servidor deseado.

<br><br>

## Ejemplo práctico

1. Un usuario introduce www.marca.es en su navegador.
2. El cliente DNS del sistema operativo consulta al servidor DNS configurado (por ejemplo, 8.8.8.8 de Google).
3. Si la respuesta no está en caché, el servidor consulta a servidores raíz, TLD y autoritativos.
4. Finalmente, el cliente recibe la dirección IP 104.26.7.250 y puede establecer la conexión.
