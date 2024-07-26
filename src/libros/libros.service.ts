import { Injectable } from '@nestjs/common';
import { Libro } from 'src/models/libro';

@Injectable()
export class LibrosService {
    /**Arreglo de libros registrados.*/
    libros: Libro[] = [];

    /**Agrega el libro ingresado al arreglo de libros, siempre y cuando su ISBN no exista en el arreglo.*/
    registrarLibro(libro: Libro): void{
        if(this.libros.length > 0){
            let indiceExistente: number = this.buscarIndicePorIsbn(libro.isbn);
            if(indiceExistente != -1){
                this.libros.push(libro);
            }
        }
        else{
            this.libros.push(libro);
        }
    }
    /**Retorna el libro del arreglo de libros registrados cuyo isbn coincida con el ingresado.      
     * De no haber coincidencias, retorna null.
     */
    obtenerLibroPorIsbn(isbn: string): Libro{
        for(let libro of this.libros){
            if(libro.isbn == isbn){
                return libro;
            }
        }
        return null;
    }

    /**Retorna un arreglo con los libros del registro cuyo autor y/o genero coincidan con los ingresados.       
     * De no definirse autor ni género, retorna el registro completo.
    */
    filtrarAutorGenero(autor?: string, genero?: string): Libro[]{
        if(autor && genero){
            let coincidencias: Libro[] = [];
            coincidencias = this.filtrarAutorGenero(genero);
            coincidencias = this.filtrarPorAutor(autor, coincidencias);
            return coincidencias;
        }
        else if(autor){
            return this.filtrarPorAutor(autor);
        }
        else if(genero){
            return this.filtrarAutorGenero(genero);
        }
        else{
            return this.libros;
        }
    }
    /**Retorna un arreglo de libros, a partir de un arreglo de referencia, cuyo género coincida con el ingresado.       
     * Si no se especifica un arreglo de referencia, usa como refencia el arreglo de libros registrados.
    */
    filtrarPorGenero(genero: string, libros?: Libro[]): Libro[]{
        let coincidencias: Libro[] = [];
        if(libros){
            for(let libro of libros){
                if(libro.autor == genero){
                    coincidencias.push(libro);
                }
            }
        }
        else{
            for(let libro of this.libros){
                if(libro.autor == genero){
                    coincidencias.push(libro);
                }
            }
        }
        return coincidencias;
    }
 
    /**Retorna un arreglo de libros, a partir de un arreglo de referencia, cuyo autor coincida con el ingresado.       
     * Si no se especifica un arreglo de referencia, usa como refencia el arreglo de libros registrados.
    */
    filtrarPorAutor(autor: string, libros?: Libro[]): Libro[]{
        let coincidencias: Libro[] = [];
        if(libros){
            for(let libro of libros){
                if(libro.autor == autor){
                    coincidencias.push(libro);
                }
            }
        }
        else{
            for(let libro of this.libros){
                if(libro.autor == autor){
                    coincidencias.push(libro);
                }
            }
        }
        return coincidencias;
    }

    /**Elimina del registro el libro cuyo ISBN coincida con el ingresado.*/
    eliminarLibroPorIsbn(isbn: string): void{
        let idEliminado: number = this.buscarIndicePorIsbn(isbn);
        if(idEliminado != -1){
            this.libros.splice(idEliminado, 1);
        }
    }

    buscarIndicePorIsbn(isbn: string): number{
        let indiceCoincidencia: number = -1;
        for(let indice: number = 0; indice < this.libros.length; indice++){
            if(this.libros[indice].isbn == isbn){
                indiceCoincidencia = indice;
            }
        }
        return indiceCoincidencia;
    }
    //Agregar método para comparar isbn. Que devuelva el índice, o -1 si no existe.
}
