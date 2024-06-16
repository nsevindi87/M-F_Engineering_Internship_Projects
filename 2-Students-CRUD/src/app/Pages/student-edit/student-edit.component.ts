import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  student!:any;
  studentId!:any;
  isLoading : boolean = false;
  loadingTitle:string="Loading"
  errors:any = [];

constructor(private route: ActivatedRoute, private studentService:StudentService){}

  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get("id");
    this.isLoading = true;
    this.studentService.getStudent(this.studentId).subscribe(res=>{
      console.log(res);
      this.student = res;
      this.isLoading = false;
    })
  }
  updateStudent(){
    var inputData = {
      name:this.student.name,
      course:this.student.course,
      email:this.student.email,
      phone:this.student.phone,
    }
    this.isLoading = true;
    this.studentService.updateStudent(inputData, this.studentId).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert(res)
        this.isLoading = false;
      },
      error:(err)=>{
        this.errors=err
        this.isLoading = false;
      }
    })
  }
}
