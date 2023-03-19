import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts() {
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
  }
  getUsers() {
    return [
      { id: 1, name: 'Users 1' },
      { id: 2, name: 'users 2' },
    ];
  }
  getPais() {
    return [
      { id: 1, paises: 'Pais 1' },
      { id: 2, paises: 'Pais 2' },
    ];
  }
  getGenero() {
    return [
      { id: 1, paises: 'Pais 1' },
      { id: 2, paises: 'Pais 2' },
    ];
  }
  getMarca() {
    return [
      { id: 1, paises: 'marca 1' },
      { id: 2, paises: 'marca 2' },
    ];
  }


  createProduct() {
    return { id: 3, name: 'Product 3' };
  }

  createCategory() {
    return { id: 3, name: 'Category 3' };
  }


}
