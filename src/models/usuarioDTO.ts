import { Pedido } from "./pedido";
export class UsuarioDTO{
    id: number;
    nombre: string;
    correoElectronico: string;
    direccion: string;
    historialPedidos: Pedido[];     //historialPedidos: lista de pedidos realizados por el usuario
    constructor(id: number, nombre: string, correoElectronico: string, direccion: string, historialPedidos: Pedido[]){
        this.id = id;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.direccion = direccion;
        this.historialPedidos = historialPedidos;
    }
}
