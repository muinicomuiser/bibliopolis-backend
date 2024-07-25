// ● isbn: ISBN del libro, obligatorio, único)
//      isbn: registro numérico de una publicación
//      código país - código editor - número artículo - dígito control

export class Libro{
    isbn: string;   //Lo consideraré string, para después dividirlo según los guiones si es necesario usarlo como number.
    titulo: string;
    editorial: string;
    genero: string;
    precio: number;
    descripcion: string;
    imagen: string;     //url
    strok: number;
}