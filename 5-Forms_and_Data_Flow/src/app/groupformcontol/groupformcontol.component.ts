import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-groupformcontol',
  templateUrl: './groupformcontol.component.html',
  styleUrls: ['./groupformcontol.component.css']
})
export class GroupformcontolComponent {
  profilename:any;
  profilelastname:any;

  myProfile = new FormGroup({
    firstname: new FormControl(""),
    lastname : new FormControl("")
  })

  handleSubmit(){
    console.log(this.myProfile.value);
    this.profilename = this.myProfile.value.firstname;
    this.profilelastname = this.myProfile.value.lastname;
  }

  /* Nested Group Form */
  myBigProfile=new FormGroup({
    firstname:new FormControl(""),
    lastname: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl("")
    })
  })

  handleSubmit2(){
    console.log(this.myBigProfile.value);
  }

  updateProfile(){
    this.myBigProfile.patchValue({
      firstname:"Suschi",
      address:{
        city:"Patagonya"
      }
    })
  }
}
