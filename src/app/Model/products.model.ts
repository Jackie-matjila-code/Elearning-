export class ProductsModel{
  id: number;
  title: string;
  price: number;
  imageUrl: string;

  constructor(id, title ='', price = 0, imageUrl='https://images-na.ssl-images-amazon.com/images/I/61PGMP8d5PL._SX425_.jpg'){
     this.id = id;
     this.title = title;
     this.price = price;
     this.imageUrl = imageUrl;
  }
}
