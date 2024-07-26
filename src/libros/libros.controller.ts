import { Controller, Get, Post, Delete, Body, Param, Query, Res} from '@nestjs/common';
import { Libro } from 'src/models/libro';
import { LibrosService } from './libros.service';
import { Response } from 'express';

//// a. crear un nuevo libro, debe verificar que el ISBN no exista.
//// b. Obtener un libro según su ISBN
//// c. Obtener todas los libros y permitir filtrar por autor y/o género (Si no se envían
//      los filtros de autor o género debe devolver todos los libros,)
//// d. Eliminar un libro según su ISBN

@Controller('libros')
export class LibrosController {    
    constructor(private readonly servicioLibros: LibrosService){}
    
    /**Registra un libro nuevo, siempre y cuando su ISBN no coincida con el de algún libro ya registrado.*/
    @Post()
    registrarLibro(@Body() libro: Libro): void{
        this.servicioLibros.registrarLibro(libro);
    }

    /**Retorna el libro del registro cuyo ISBN coincida con el ingresado.*/
    @Get(':isbn')
    obtenerLibroPorIsbn(@Param('isbn') isbn: string, @Res() response: Response): void{
        let libroPorIsbn = this.servicioLibros.obtenerLibroPorIsbn(isbn);
        if(libroPorIsbn){
            response.status(200).send(libroPorIsbn);
        }
        else{
            response.status(404).send({mensaje: "Usuario no encontrado."});
        }
    }

    /**Retorna todos los libros del registro cuyo género y/ autor coincida con los ingresados.      
     * De no definirse parámetros, retorna el registro completo.
     */
    @Get()
    obtenerLibrosFiltrados(@Query('genero') genero?: string, @Query('autor') autor?: string): Libro[]{
        return this.servicioLibros.filtrarAutorGenero(genero, autor);
    }

    /**Elimina un libro según su ISBN.*/
    @Delete(':isbn')
    eliminarLibroPorIsbn(@Param('isbn') isbn: string): void{
        this.servicioLibros.eliminarLibroPorIsbn(isbn);
    }
}
