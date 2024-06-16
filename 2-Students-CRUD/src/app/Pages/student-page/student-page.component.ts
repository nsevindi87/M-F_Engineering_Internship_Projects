import { Component } from '@angular/core';
import { StudentService, StudentResponse } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  constructor (private studentService:StudentService){}
  students!:StudentResponse;
}
