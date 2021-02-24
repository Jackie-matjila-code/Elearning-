import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/Model/products.model';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
productsList: ProductsModel[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
  }

}
