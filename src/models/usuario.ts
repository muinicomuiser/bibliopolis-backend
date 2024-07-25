// Usuario:
// ● id: identificador único del usuario, generado automáticamente
// ● nombre: nombre del usuario
// ● correoElectronico: correo electrónico del usuario, único
// ● contrasena: String contraseña del usuario
// ● direccion: String dirección de envío del usuario
// ● historialPedidos: lista de pedidos realizados por el usuario
import { Pedido } from "./pedido";
export class Usuario{
    id: number;
    nombre: string;
    correoElectronico: string;
    contrasena: string;
    direccion: string;
    historialPedidos: Pedido[];     //historialPedidos: lista de pedidos realizados por el usuario
}