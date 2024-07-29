import { Controller } from '@nestjs/common';
// a. crear un nuevo pedido
    // i. La fechaPedido debe ser igual a la fecha actual del sistema
    // ii. El total se debe calcular en base al precio de cada libro en el pedido y su
    // cantidad.
    // iii. Se debe validar que exista stock para cada uno de los libros en el pedido.
// b. Obtener un pedido según su Id
// c. Obtener todos los pedidos y permitir filtrar por estado y/o usuario
// d. Modificar el estado de un pedido según su id
    // i. Si el estado actual del pedido es "pendiente" solo debe permitir el valor "en proceso"
    // ii. Si el estado actual del pedido es "en proceso" solo debe permitir el valor "enviado"
    // iii. Si el estado actual del pedido es "enviado", sólo debe permitir el valor "entregado"
    // iv. Si el estado actual del pedido es "entregado" no se puede modificar 
    // v. Si no debe devolver el 400 con el mensaje “estado incorrecto”
@Controller('pedidos')
export class PedidosController {}
