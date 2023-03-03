import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(p => this.products = p);
   }


}
