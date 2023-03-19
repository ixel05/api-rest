import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Post('products')
  createProduct() {
    return this.appService.createProduct();
  }
  @Get('users')
  getUsers(){
    return this.appService.getUsers
    ();
  }
  // @Get('pais')
  // getPais(){
  //   return this.appService.getPais
  //   ();
  // }
  // @Get('genero')
  // getGenero(){
  //   return this.appService.getGenero
  //   ();
  // }
  // @Get('categoria')
  // getCategoria(){
  //   return this.appService.getCategoria
  //   ();
  // }
  // @Get('marca')
  // getMarca(){
  //   return this.appService.getMarca
  //   ();
  // }
}
