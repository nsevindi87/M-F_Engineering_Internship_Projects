import { Component } from '@angular/core';
import { StudentService, StudentResponse } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  constructor (private studentService:StudentService){}
  students!:StudentResponse[];
  isLoading:Boolean = false;
  ngOnInit(){
    this.getStudentLists();
  }

  getStudentLists(){
    this.isLoading=true;
    this.studentService.getStudents().subscribe((res:any)=>{
      console.log(res);
      this.students = res;
      this.isLoading = false;
    })
  }

  deleteStudent(event:any, studentId:number){
    if(confirm("Are you sure?")){
      event.target.innerText  = "Deleting...";
      this.studentService.deleteStudent(studentId).subscribe((res:any)=>{
        this.getStudentLists()
        alert(res)
      })
    }

  }
}
