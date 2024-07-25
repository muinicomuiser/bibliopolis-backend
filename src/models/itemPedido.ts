import { Libro } from "./libro"
export class ItemPedido{
    libro: Libro;   //libro que forma parte del pedido
    cantidad: number;   //cantidad de libros del mismo tipo en el pedido
}