import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
    public id?:number| null;
    public name?:string| null;
    public address?:string| null;
    public city?:string| null;
    public phone?:string| null;
    public email?:string| null;
    public isSent:boolean =false;

    constructor(public cart:Cart){
        
    }

    clearOrder(){
        this.id=null;
        this.name = this.address = this.city=this.phone=this.email=null;
        this.isSent = false;
    }
}