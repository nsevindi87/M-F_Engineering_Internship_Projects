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

    getCategory(id:any):Category | undefined{
        return this.categories.find(i => i.id === id);
    }

    getCategories():Category[]{
        return this.categories;
    }

    saveCategory(category:Category){
        if(category.id==null || category.id==""){
            this.restService.addCategory(category).subscribe(p=>this.categories.push(p))
        }else{
            this.restService.updateCategory(category).subscribe(p=>{
                this.categories.splice(this.categories.findIndex(p=>p.id==category.id),1,category)
            })
        }
    }

    deleteCategory(category:Category){
        this.restService.deleteCategory(category).subscribe(p=>{
            this.categories.splice(this.categories.findIndex(p=>p.id==category.id),1)})
    }

}