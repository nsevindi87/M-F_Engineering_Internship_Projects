import { Component } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from "../model/product.model";
import { Category } from '../model/category.model';
import { Cart } from '../model/cart.model';
import { Router } from "@angular/router";

@Component({
    selector:"shop",
    templateUrl:"shop.component.html",
    
})

export class ShopComponent{

    public selectedCategory:Category|null = null;
    public productsPerPage = 10;
    selectedPage = 1;


    constructor(
        private productRepository:ProductRepository,
        private categoryRepository: CategoryRepository,
        private cart: Cart,
        private router:Router,
    ){}

    get products():Product[]{
        let index = (this.selectedPage-1) * this.productsPerPage
        return this.productRepository.getProducts(this.selectedCategory).slice(index, index+ this.productsPerPage)
    }

    get categories():Category[]{
        return this.categoryRepository.getCategories()
    }

    changeCategory(newCategory:Category|null){
        this.selectedCategory = newCategory;
    }

    changePage(p:number){
        this.selectedPage = p
    }

    get pageNumbers():number[]{
        return Array(
            Math.ceil(this.productRepository
                .getProducts(this.selectedCategory).length/this.productsPerPage)
        ).fill(0)
        .map((a,i)=>i+1);
    }

    addProductToCart(product:Product){
        this.cart.addItem(product)
        this.router.navigateByUrl("/cart")
    }
}