import { ProductsModel } from 'src/app/Model/products.model';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems = [
  // {id:1, productId:1, title:'HP Elitebook E840', qty:4, price:5000},
  // {id:2, productId:2, title:'Dell Inspiron N15R', qty:1, price:9000},
];

cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: ProductsModel) => {
     this.addProductToCart(product);
    });

  }

  addProductToCart(product: ProductsModel){
    this.cartItems.push({
      id: product.id,
      title: product.title,
      qty: 1,
      price: product.price
    });
        this.cartTotal = 0;
        this.cartItems.forEach(item =>{
       this.cartTotal += (item.qty * item.price);
     });
  }

}
