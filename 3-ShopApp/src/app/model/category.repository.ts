import { Injectable, OnInit } from "@angular/core";
import { RestService } from './rest.service';
import { Category } from './category.model';

@Injectable()

export class CategoryRepository implements OnInit{
    private categories: Category[] = [];

    constructor(private restService: RestService){
        this.restService.getCategories().subscribe(categories=>this.categories = categories)
    }

    ngOnInit(){
    }

    getCategory(id:number):Category | undefined{
        return this.categories.find(i => i.id === id);
    }

    getCategories():Category[]{
        return this.categories;
    }

}