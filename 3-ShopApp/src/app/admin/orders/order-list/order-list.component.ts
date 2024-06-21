import { Component } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from '../../../model/order.repository';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  constructor(private orderRepository:OrderRepository){ }
  
  getOrders():Order[]{
    return this.orderRepository.getOrders();
  }
}
