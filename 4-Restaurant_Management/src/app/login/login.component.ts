import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue!:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((u:any)=>
        u.email === this.formValue.value.email && 
        u.password === this.formValue.value.password
      )
      
      if(user){
          alert("Successfully logged in")
          this.router.navigate(['restaurant'])
        }else{
          alert("User not found with these credentials")
        }
      }
      ,err=>{
        alert("Something went wrong")
    })
  }

}
