## Protocolo ICMP

<div class="custom-quote">ICMP (Internet Control Message Protocol) es un protocolo de red utilizado para enviar mensajes de diagnóstico y control entre dispositivos de red.</div>

Opera en la capa de red (capa 3) del modelo OSI y se utiliza para verificar la conectividad y diagnosticar problemas.

## Funcionamiento del Protocolo ICMP

Para su funcionamiento utiliza herramientas, algunas de las más comunes son:

- **Ping**: Enviar paquetes ICMP Echo Request y recibir respuestas ICMP Echo Reply para medir conectividad y latencia.
- **Traceroute**: Utiliza mensajes ICMP para rastrear la ruta que sigue un paquete a través de la red.


## Tipos de Mensajes ICMP

- **Echo Request/Echo Reply**: Verifican la conectividad entre dos dispositivos.
- **Destination Unreachable**: Indica que un destino no es accesible.
- **Time Exceeded**: Notifica que el TTL (Time to Live) de un paquete ha expirado.
- **Redirect**: Sugerencia de una ruta alternativa para los paquetes.
<br>

## Ventajas de ICMP

- Diagnóstico: Es esencial para detectar y solucionar problemas de red.
- Eficiencia: Opera con sobrecarga mínima.
