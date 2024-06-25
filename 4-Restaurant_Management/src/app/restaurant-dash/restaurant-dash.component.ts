import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})

export class RestaurantDashComponent implements OnInit {
  allRestaurantData:any;
  formValue!:FormGroup;
  page:number=1;
  totalLength:any;
  restaurantModelObj:RestaurantData = new RestaurantData;
  showAdd!:boolean;
  showBtn!:boolean;
  userFilter:any = {name:''}

  constructor(private api:ApiService, private fb:FormBuilder){}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name:["", Validators.required],
      email:["", Validators.required],
      mobile:["", Validators.required],
      address:["", Validators.required],
      services:["", Validators.required]
    });

    this.getAllRes()
    
  }

  getAllRes(){
    this.api.getRestaurant().subscribe((res:any)=>{
    this.allRestaurantData = res;
    console.log(this.allRestaurantData);
    })
  }

  clickAddreso(){
    this.formValue.reset()
    this.showAdd = true,
    this.showBtn = false
  }

  addResto(){
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;
    this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
      alert(res);
      this.formValue.reset();
      this.getAllRes();
    },error =>{
      alert("Something went wrong!")
    }
    )
  }

  deleteResto(data:any){
    if(confirm("Are you sure want to delete records?"))
    this.api.deleteRestaurant(data.id).subscribe(res=>{
      alert(res);
      this.getAllRes();
    })
  }

  onEditRes(data:any){
    this.restaurantModelObj.id = data.id;
    this.showAdd = false;
    this.showBtn = true;

    this.formValue.controls["services"].setValue(data.services);
    this.formValue.controls["address"].setValue(data.address);
    this.formValue.controls["email"].setValue(data.email);
    this.formValue.controls["mobile"].setValue(data.mobile);
    this.formValue.controls["name"].setValue(data.name);
  }

  updateRes(){
    this.restaurantModelObj.name = this.formValue.value.name;
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;
    this.api.updateRestaurant(this.restaurantModelObj, this.restaurantModelObj.id).subscribe(res=>{
      alert(res);
      this.formValue.reset();
      this.getAllRes();
    },error =>{
      alert("Something went wrong!")
    })
  }

  logout(){
    alert("Logged Out!")
  }
}
