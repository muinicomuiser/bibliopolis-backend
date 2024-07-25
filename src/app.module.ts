import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { LibrosController } from './libros/libros.controller';
import { PedidosController } from './pedidos/pedidos.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { LibrosService } from './libros/libros.service';
import { PedidosService } from './pedidos/pedidos.service';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, LibrosController, PedidosController],
  providers: [AppService, UsuariosService, LibrosService, PedidosService],
})
export class AppModule {}
