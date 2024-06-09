import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Injection
  constructor(private blogService:BlogService){}

  blogData:Array<any> = []
  pageSize = 8;
  page = 13;

  ngOnInit():void{
    this.blogService.getPosts().subscribe((res)=>{
      this.blogData = res;
    })
  }
}
