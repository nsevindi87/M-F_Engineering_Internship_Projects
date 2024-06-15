import { Component } from '@angular/core';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  name!:string;
  course!:string;
  email!:string;
  phone!:string;

  saveStudent(){
    var inputData = {
      name:this.name,
      course:this.course,
      email:this.email,
      phone:this.phone,
    }
  }

}
