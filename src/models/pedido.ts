// ● id: identificador único del pedido, generado automáticamente
// ● usuario: usuario que realizó el pedido
// ● fechaPedido:fecha en la que se realizó el pedido
// ● estado: estado actual del pedido: "pendiente", "en proceso", "enviado", "entregado"
// ● total: precio total del pedido (Calculado)
// ● items: lista de ítems que componen el pedido
import { Usuario } from "./usuario";
import { ItemPedido } from "./itemPedido";
export class Pedido{
    id: number;     //identificador único del pedido, generado automáticamente
    usuario: Usuario;
    fechaPedido: Date;
    estado: string; //"pendiente", "en proceso", "enviado", "entregado"
    total: number;  //precio total, calculado
    items: ItemPedido[] //lista de ítems que componen el pedido
}