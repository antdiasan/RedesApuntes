# Protocolo ARP

<div class="custom-quote">ARP (Address Resolution Protocol) es un protocolo de red utilizado para mapear direcciones IP a direcciones MAC dentro de una red local.
<br>
Su propósito es permitir que un dispositivo que conoce la dirección IP de destino descubra la dirección MAC correspondiente.</div>

Opera en la capa de enlace de datos (capa 2) del modelo OSI y es esencial para que los dispositivos en una red puedan comunicarse correctamente.

## Funcimiento del Protocolos ARP

El dispositivo que quiere enviar el mensaje conoce la dirección IP del destino, pero no su MAC, y como ambos están en la misma red local, los mensajes se envían con direcciones MAC. 

Por lo que el dispositivo origen envía un mensaje **ARP Request** en broadcast, preguntando: *¿Quién tiene esta dirección IP? Dime tu MAC*.

El dispositivo con esa dirección IP responde con un **ARP Reply**, proporcionando su dirección MAC al origen.


## Tablas ARP

Su propósito es almacenar temporalmente las relaciones **IP - MAC** para evitar enviar solicitudes ARP repetidas.

Para ello *cada dispositivo mantiene una tabla ARP*, donde asocia direcciones IP con direcciones MAC.

Las entradas en esta tabla tienen un tiempo de vida limitado y se eliminan si no se utilizan durante un período específico.
<br>
<p align="center">
  <img src="/img/protocoloARP.png" alt="protocolo ARP" width="400px" />
</p>
<br>

 
## Mensajes ARP

- **ARP Request**: Enviado en broadcast para preguntar por la dirección MAC asociada a una dirección IP.
- **ARP Reply**: Respuesta unicast enviada por el dispositivo que tiene la dirección IP solicitada, proporcionando su dirección MAC.


## Ventajas del protocolo ARP

- Simplicidad: Es un protocolo directo y eficiente en redes locales.
- Interoperabilidad: Funciona con cualquier protocolo de red que utilice direcciones IP (como IPv4).
