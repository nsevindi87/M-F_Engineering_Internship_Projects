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

  saveStudent(pInputData:object): Observable<any>{
    return this.httpClient.post("http://localhost:3000/students", pInputData);
  }
}
