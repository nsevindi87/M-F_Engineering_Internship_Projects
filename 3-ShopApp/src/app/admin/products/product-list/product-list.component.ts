import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from '../../../model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private productRepository:ProductRepository){

  }

  getProducts():Product[]{
    return this.productRepository.getProducts();
  }

  deleteProduct(p:any){
    console.log(p);
    
  }
}
