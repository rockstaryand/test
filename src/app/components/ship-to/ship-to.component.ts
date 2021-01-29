import { Component, OnInit } from '@angular/core';

interface consigneeDetails {
  consignee: String;
  phone: Number;
  address: String;
 
  email: String;

}

@Component({
  selector: 'app-ship-to',
  templateUrl: './ship-to.component.html',
  styleUrls: ['./ship-to.component.css']
})
export class ShipToComponent implements OnInit {

  shipTo: consigneeDetails[]= [
    {
      consignee: "Tom Hanks",
      phone: 923413616,
      address: "44 6 London Heights",
      email: "Tomhanks@gmail.co.za"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
