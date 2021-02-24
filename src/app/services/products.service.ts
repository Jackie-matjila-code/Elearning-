import { ProductsModel } from './../Model/products.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductsModel[] = [
  new ProductsModel(1,'Packet Bell', 4000),
  new ProductsModel(2,'HP Elitebook E840', 5000),
  new ProductsModel(3,'Lenovo', 6000),
  new ProductsModel(4,'HP Elitebook E840R', 7000),
  new ProductsModel(5,'Acer', 8000),
  new ProductsModel(6,'Dell Inspiron N15R', 9000),
  ]

  constructor() { }

  getProducts():ProductsModel[]{
    return this.products;
  }
}
