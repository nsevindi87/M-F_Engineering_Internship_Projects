import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { RestService } from './rest.service';

@Injectable()
export class OrderRepository{
    private orders : Order[] = [];

    constructor(private restService: RestService){
        this.restService.getOrders().subscribe(orders=>this.orders = orders)
    }

    getOrders():Order[]{
        return this.orders;
    }

    saveOrder(order:Order):Observable<Order>{
        return this.restService.saveOrder(order);
    }

}