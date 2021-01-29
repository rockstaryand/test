import { Component, OnInit } from '@angular/core';

interface orderDetails {
  customerId: Number;
  currentDate: String;
  invoiceNumber: String;
  invoiceDate: String;

}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderData: orderDetails[]= [
    {
      customerId: 913384,
      currentDate: "01/12/2021",
      invoiceNumber: "Rain-93548",
      invoiceDate: "02/12/2021"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
