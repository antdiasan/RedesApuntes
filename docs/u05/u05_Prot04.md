# Protocolo BOOTP

<div class="custom-quote">BOOTP (Bootstrap Protocol) es un protocolo de red diseñado para asignar configuraciones básicas de red a dispositivos cliente en el arranque.</div>

Es el precursor del DHCP y opera en un modelo cliente-servidor.

## Funcionamiento

1. **Solicitud BOOTP**: El cliente solicita su configuración al servidor. Para ello el cliente envía un mensaje BOOTP en broadcast para localizar un servidor.
2. **Respuesta BOOTP**: El servidor proporciona los parámetros de red solicitados. Los parámetros serán:
   - Dirección IP asignada.
   - Máscara de subred.
   - Dirección de gateway predeterminada.
   - Dirección del servidor DNS.



## Limitaciones del BOOTP

- Estático: A diferencia del DHCP, no soporta asignaciones dinámicas.
- Rigidez: Los dispositivos deben ser configurados previamente en el servidor.
