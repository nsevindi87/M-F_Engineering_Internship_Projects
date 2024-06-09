import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from '../services/blog.service';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Injection
  constructor(private blogService:BlogService, public dialog:MatDialog){}

  blogData:Array<any> = []
  pageSize = 8;
  page = 13;//Check pls how first page renders on first paginate.

  ngOnInit():void{
    this.blogService.getPosts().subscribe((res)=>{
      this.blogData = res;
    })
  }

  openDialog(pElement:any, pViewOrUpdate:any){
    const dialogRef = this.dialog.open(BlogDialogComponent,{
      data:{blog:pElement, isUpdate:pViewOrUpdate}
    })
  }
}
