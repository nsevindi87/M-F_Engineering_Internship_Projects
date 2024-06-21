import { Component } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  constructor(private Repository:CategoryRepository){

  }

  getCategories():Category[]{
    return this.Repository.getCategories();
  }

  deleteCategory(category:Category){
    this.Repository.deleteCategory(category)
  }
}
