import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  currentProduct: Product = new Product()
  
  constructor(private service: ProductService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    console.log("Testing");
    this.service.addProduct(this.currentProduct).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products");
    })
  }
}

