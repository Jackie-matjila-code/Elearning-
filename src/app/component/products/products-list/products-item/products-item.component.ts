import { MessengerService } from './../../../../services/messenger.service';
import { ProductsModel } from './../../../../Model/products.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

@Input() productItem: ProductsModel;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem);
  }
}
