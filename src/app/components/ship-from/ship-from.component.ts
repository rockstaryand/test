import { Component, OnInit } from '@angular/core';

interface Shipfrom {
  warehouseName: String;
  phoneNumber: Number;
  address: String;
  website: String;
}

@Component({
  selector: 'app-ship-from',
  templateUrl: './ship-from.component.html',
  styleUrls: ['./ship-from.component.css']
})
export class ShipFromComponent implements OnInit {

  shipFromData: Shipfrom[] = [
    {
      warehouseName: "Pascan Warehouse",
      phoneNumber: 555890359,
      address: "116 Upper Berveley, Beach Road",
      website: "www.pascanshipping.co.za"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
