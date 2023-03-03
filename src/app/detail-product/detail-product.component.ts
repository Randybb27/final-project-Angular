import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
id: number = 0;

currentProduct: Product = new Product()

productList: Product[] = [];

  constructor(private productService: ProductService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.productService.getProductByID(this.id).subscribe(foundProduct => {
        console.log(foundProduct);
        this.currentProduct = foundProduct;
    });
}

}
