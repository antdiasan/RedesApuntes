# PROTOCOLO DHCP

El **DHCP** (Dynamic Host Configuration Protocol) es un protocolo de red que opera en un modelo cliente-servidor. 

<div class="custom-quote">Su propósito principal es **asignar automáticamente configuraciones IP** a los dispositivos de una red, eliminando la necesidad de configuraciones manuales.</div>

Es un protocolo esencial para redes dinámicas y escalables.


## Funcionamiento

El proceso DHCP consta de cuatro fases principales, conocidas como **DORA**:

1. Discover, 
2. Offer,
3. Request,
4. Acknowledgment.


### DHCP-DISCOVER:

El cliente DHCP (host) busca un servidor DHCP disponible en la red. Para ello el cliente envía un mensaje de broadcast utilizando la dirección IP 0.0.0.0 como origen (porque aún no tiene IP asignada) y 255.255.255.255 como destino.

Este mensaje se emite a nivel de capa 2 (enlace de datos), enviando la dirección MAC del cliente.
 
### DHCP-OFFER:

El servidor DHCP escucha el mensaje *DHCP-Discover* que envió el cliente y responde con un mensaje *DHPC-Offer*, que incluye:

- Dirección IP propuesta.
- Máscara de subred.
- Puerta de enlace predeterminada (gateway).
- Dirección de servidor DNS.
- Tiempo de concesión de la dirección IP (lease time).


Este mensaje también se envía en broadcast para que llegue al cliente, ya que el cliente aún no tiene dirección IP asignada.


### DHCP-REQUEST

El cliente acepta la configuración ofrecida por el servidor. Respondiendo con este mensaje, con el que indica que aceptala dirección IP ofrecida.

Si hay varios servidores DHCP en la red, este mensaje también sirve para notificar a los demás servidores que su oferta no fue aceptada.
 

### DHCP-ACKNOWLEDGMENT (ACK)

Su propósito es confirmar la asignación de la dirección IP al cliente.

Para ello el servidor DHCP envía este mensaje confirmando que la dirección IP ha sido asignada al cliente.

En este punto, el cliente ya puede usar la dirección IP y completar su configuración.

<br><br>

## Mensajes del protocolo DHCP

Los principales son:

- **Discover**: Emitido por el cliente para localizar servidores DHCP.
- **Offer**: Respuesta del servidor, ofreciendo una configuración IP.
- **Request**: Solicitud del cliente aceptando una oferta específica.
- **ACK**: Confirmación del servidor asignando la configuración al cliente.
- **NAK**: (Negative Acknowledgment): Emitido por el servidor si la configuración solicitada no está disponible.
- **Release**: Enviado por el cliente para liberar una dirección IP antes de que expire el tiempo de concesión.
- **Inform**: Emitido por un cliente que ya tiene una dirección IP, solicitando solo información adicional como DNS o gateway.
 

## Funcionamiento en el modelo OSI

- **Capa de Aplicación**: DHCP opera en esta capa como un protocolo de configuración.
- **Capa de Transporte**: Puerto 67 para el servidor DHCP y Puerto 68 para el cliente DHCP.
<br><br>

## Ventajas de DHCP

- **Automatización**: Simplifica la configuración de dispositivos en redes grandes.
- **Escalabilidad**: Maneja cientos o miles de direcciones IP dinámicamente.
- **Flexibilidad**: Permite asignar configuraciones personalizadas basadas en políticas (por ejemplo, según dirección MAC).
- **Optimización**: Reduce errores humanos al evitar configuraciones manuales.
<br><br>

## Relación con otros protocolos

- **ARP** (ADDRESS RESOLUTION PROTOCOL): Después de recibir la configuración, el cliente puede enviar un mensaje ARP para verificar que la dirección IP asignada no esté en uso.
- **BOOTP** (BOOTSTRAP PROTOCOL): DHCP está basado en BOOTP, pero lo extiende para admitir asignaciones dinámicas y configuraciones adicionales.
