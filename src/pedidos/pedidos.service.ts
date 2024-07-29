import { Injectable } from '@nestjs/common';
import { Pedido } from 'src/models/pedido';
import { ItemPedido } from 'src/models/itemPedido';

@Injectable()
export class PedidosService {
    pedidos: Pedido[] = [];

    agregarItem(item: ItemPedido): void{
        
    }
}
