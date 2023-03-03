import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
id: number = 0;

currentProduct: Product = new Product()

// productList: Product[] = [];

constructor(private service: ProductService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.service.getProductByID(this.id).subscribe(foundProduct => {
        console.log(foundProduct);
        this.currentProduct = foundProduct;
    });
  }

  editProduct(id:number) {
    console.log("Testing"+ id);
    this.service.editProductByID(this.id, this.currentProduct).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products");
    })
  }
}

