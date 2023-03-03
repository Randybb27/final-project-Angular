import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

newProduct: Product = new Product ();

  constructor(private productService: ProductService, router: Router) { }

  createNewProduct() {
    this.productService.createNewProduct(this.newProduct).subscribe(response => {
        console.log(response);
        // this.productService.navigate(|"products|");
    });
}

  ngOnInit(): void {
  }

}
