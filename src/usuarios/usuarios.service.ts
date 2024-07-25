import { Injectable } from '@nestjs/common';
import { Usuario} from 'src/models/usuario';
import { UsuarioDTO } from 'src/models/usuarioDTO';
// a. Registrar un nuevo usuario (Verificar si existe el usuario según el correo ingresado)
// b. Obtener un usuario según su id, en caso de que el usuario no exista devolver el código 404.
// c. Obtener todos los usuarios (excluir la password en la lista )
// d. Eliminar un usuario según su id
@Injectable()
export class UsuariosService {
    /**Arreglo de usuarios registrados.*/
    usuarios: Usuario[] = [];

    /**Agrega un usuario al arreglo de usuarios registrados, siempre y cuando el correo del usuario no esté ya presente en el arreglo.*/
    registrarUsuario(usuario: Usuario): void{
        if(this.usuarios.length > 0){
            if(this.compararCorreos(usuario) == false){
                usuario.id = this.usuarios[this.usuarios.length - 1].id + 1;
            }            
        } else{
            usuario.id = 1;
        }
        this.usuarios.push(usuario);
    }

    /**Retorna true si el correo del usuario ingresado ya existe en el arreglo de usuarios.*/
    compararCorreos(usuario: Usuario): boolean{
        for(let usuarioRegistrado of this.usuarios){
            if(usuario.correoElectronico == usuarioRegistrado.correoElectronico){
                return true;
            }
        }
        return false;
    }

    /**Retorna un arreglo con todos los usuarios registrados, sin las contraseñas.*/
    obtenerUsuarios(): UsuarioDTO[]{
        let arregloUsuariosDTO: UsuarioDTO[] = [];
        for(let usuario of this.usuarios){
            let usuarioDTO: UsuarioDTO = new UsuarioDTO(usuario.id, usuario.nombre, usuario.correoElectronico, usuario.direccion, usuario.historialPedidos);
            arregloUsuariosDTO.push(usuarioDTO);
        }
        return arregloUsuariosDTO;
    }

    /**Retorna el usuario DTO que coincida con el id ingresado.     
     * En caso que no haya coincidencias, retorna null.
     */
    obtenerUsuarioPorId(id: number): UsuarioDTO{
        for(let usuario of this.usuarios){
            if(usuario.id == id){
                let usuarioDTO: UsuarioDTO = new UsuarioDTO(usuario.id, usuario.nombre, usuario.correoElectronico, usuario.direccion, usuario.historialPedidos);
                return usuarioDTO;

            }
        }
        return null;
    }

    /**Elimina del registro el usuario que coincida con el id ingresado.*/
    eliminarUsuarioPorId(id: number): void{
        let idEliminado: number = -1;
        for(let indice: number = 0; indice <= this.usuarios.length; indice++){
            if(this.usuarios[indice].id == id){
                idEliminado = indice;
            }
        }
        if(idEliminado != -1){
            this.usuarios.splice(idEliminado, 1);
        }
    }

}
