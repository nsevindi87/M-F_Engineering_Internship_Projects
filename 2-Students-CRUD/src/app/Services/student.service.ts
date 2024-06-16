import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StudentResponse{
  id:number
  name:string
  course:string
  email:string
  phone:string
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  getStudents(){
    return this.httpClient.get("http://localhost:3000/students");
  }

  getStudent(studentId:any){
    return this.httpClient.get(`http://localhost:3000/students/${studentId}`);
  }

  saveStudent(pInputData:object): Observable<any>{
    return this.httpClient.post("http://localhost:3000/students", pInputData);
  }

  updateStudent(inputData:object, studentId:number){
    return this.httpClient.put(`http://localhost:3000/students/${studentId}`, inputData);
  }

}
