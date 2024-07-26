import { Controller, Get, Post, Param, Delete, Body, Res } from '@nestjs/common';
import { Usuario } from 'src/models/usuario';
import { UsuarioDTO } from 'src/models/usuarioDTO';
import { UsuariosService } from './usuarios.service';
import { Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly servicioUsuarios: UsuariosService){}
    /**Registrar un usuario nuevo.*/
    @Post()
    registrarUsuario(@Body() usuario: Usuario): void{
        this.servicioUsuarios.registrarUsuario(usuario);
    }
    
    /**Obtener usuario según su id.     
     * Asumiendo que debe ir sin la contraseña.     
     * De no encontrar coincidencias, responder con 404.
    */
    @Get(':id')
    obtenerUsuarioPorId(@Param('id') id: number, @Res() response: Response): void{
        let usuarioPorId = this.servicioUsuarios.obtenerUsuarioPorId(id);
        if(usuarioPorId){
            response.status(200).send(usuarioPorId);
        }
        else{
            response.status(404).send({mensaje: "Usuario no encontrado."});
        }
    }

    /**Obtener todos los usuarios.*/
    @Get()
    obtenerUsuarios(): UsuarioDTO[]{
        return this.servicioUsuarios.obtenerUsuarios();
    }

    /**Eliminar usuario según su id. */
    @Delete(':id')
    eliminarUsuarioPorId(@Param('id') id: number): void{
        this.servicioUsuarios.eliminarUsuarioPorId(id);
    }

}
