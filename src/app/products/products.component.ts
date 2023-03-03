import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = ""
  constructor(private service: ProductService) { }
  

  ngOnInit(): void {
    this.service.getProducts().subscribe(p => this.products = p);
   }

   deleteProduct(id:number){
    console.log("Testing"+ id);
   this.service.deleteProductByID(id).subscribe(response => {
  console.log(response);
  this.ngOnInit();
   })
}

searchProduct(){
  this.service.searchProduct(this.searchTerm).subscribe(p => this.products = p);
}

sortName(){
  this.service.sortName().subscribe(p => this.products = p);
}

sortPrice(){
  this.service.sortPrice().subscribe(p => this.products = p);
}
}