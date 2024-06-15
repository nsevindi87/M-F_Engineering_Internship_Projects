import { Component } from '@angular/core';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  constructor(private studentService:StudentService){}

  name!:string;
  course!:string;
  email!:string;
  phone!:string;

  isLoading : boolean = false;
  loadingTitle:string="Loading"
  errors:any = [];

  saveStudent(){
    this.isLoading=true;
    this.loadingTitle="Saving"
    var inputData = {
      name:this.name,
      course:this.course,
      email:this.email,
      phone:this.phone,
    }


    this.studentService.saveStudent(inputData).subscribe({
      next:(res:any)=>{
        console.log(res,"response");
        
        this.name="";
        this.course="";
        this.email="";
        this.phone="";
        
        this.isLoading=false;
      },
      error:(err:any)=>{
        this.errors = err.error.errors;
        this.isLoading=false;
        console.log(err.error.errors,"error");
      }
    });
  }

}
