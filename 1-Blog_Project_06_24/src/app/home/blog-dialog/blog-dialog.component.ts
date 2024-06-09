import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent {
  isUpdate:boolean = false;
  imageUrl:string="";
  title:string="";
  body:string="";
  commentData:any;

  form = new FormGroup({
    title:new FormControl(null,[Validators.required]),
    body:new FormControl(null,[Validators.required]),
  })

  constructor(
    private commentServices:CommentService,
    @Inject(MAT_DIALOG_DATA) 
    private data:any, 
    private dialogRef:MatDialogRef<BlogDialogComponent>){
    if(data.isUpdate){
      this.isUpdate = true
      this.form.patchValue({
        title:data.blog.title,
        body:data.blog.body
      })
    }else{
      this.imageUrl=data.blog.imageId.toString();
      this.title=data.blog.title;
      this.body=data.blog.body;
    }
  }

  ngOnInit():void{
    this.commentServices.getComments().subscribe((res)=>{
    this.commentData = res.filter((x: { postId: any; })=>x.postId == this.data.blog.id)
    })
  }

  close(){
    this.dialogRef.close()
  }

  onSubmit(){
    
  }

}
