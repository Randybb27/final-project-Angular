import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 
  getProducts() {
    return this.http.get<Product[]>(this.dataSource);
  }
dataSource: string ="http://localhost:3000/Baseball_Bats"

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataSource);
}

getProductByID(id: number): Observable<Product> {
  return this.http.get<Product>(this.dataSource + "/" + id);
}

createNewProduct(newProduct: Product): Observable<Product>{
  return this.http.post<Product>(this.dataSource, newProduct);
}

editProductByID(id: number, edittedProduct: Product): Observable<Product> {
  return this.http.put<Product>(this.dataSource + "/" + id, edittedProduct);
}

deleteProductByID(id: number): Observable<Product> {
  return this.http.delete<Product>(this.dataSource + "/" + id);

}

addProduct(edittedProduct: Product): Observable<Product> {
  return this.http.post<Product>(this.dataSource + "/", edittedProduct);
}

searchProduct(searchTerm: string): Observable<Product[]> {
  return this.http.get<Product[]>(this.dataSource + "?q=" + searchTerm);
}

sortName(): Observable<Product[]> {
  return this.http.get<Product[]>(this.dataSource + "?_sort=productName&_order=asc");
}

sortPrice(): Observable<Product[]> {
  return this.http.get<Product[]>(this.dataSource + "?_sort=price&_order=asc");
}
}
