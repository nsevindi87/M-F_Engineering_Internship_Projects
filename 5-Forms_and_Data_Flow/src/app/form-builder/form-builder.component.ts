import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  constructor(private fb:FormBuilder){}

  myFbForm = this.fb.group({
    firstname: ["",Validators.required],
    lastname:[""],
    address:this.fb.group({
      street:[""],
      city:[""]
    })
  })

  handleNewSubmit(){
    console.log(this.myFbForm.value);
    
  }
}
