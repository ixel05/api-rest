import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { GeneroModule } from './genero/genero.module';
import { PaisesModule } from './paises/paises.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MarcasModule } from './marcas/marcas.module';

@Module({
  imports: [MenuModule, GeneroModule, PaisesModule, CategoriasModule, MarcasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
