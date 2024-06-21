import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from '../../../model/product.repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
 public editing:boolean=false;

 public product: Product | undefined = new Product(0, "", 0);

 constructor(private activeRoute:ActivatedRoute, private repository:ProductRepository, private router:Router){
  this.editing = activeRoute.snapshot.params["mode"]=="edit";
  if(this.editing){
    this.product = repository.getProduct(activeRoute.snapshot.params["id"])
  }
 }

save(form:NgForm){
  this.repository.saveProduct(this.product)
  this.router.navigateByUrl("/admin/main/products")

}
 
}
