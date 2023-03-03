import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "products", component: ProductsComponent},
  {path: "products/:id", component: DetailProductComponent},
  { path: "edit/:id", component: EditProductComponent },
  {path: "create", component: CreateProductComponent},
  {path: "add", component: AddComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
