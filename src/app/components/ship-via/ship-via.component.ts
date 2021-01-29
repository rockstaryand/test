import { Component, OnInit } from '@angular/core';

interface shipViaData {
  carrier: String;
  specialInstuctions: String;
  totalPallets: Number;
  totalWeight: Number;
  class:Number;
}

@Component({
  selector: 'app-ship-via',
  templateUrl: './ship-via.component.html',
  styleUrls: ['./ship-via.component.css']
})
export class ShipViaComponent implements OnInit {

  shipVia: shipViaData[] = [
    {
      carrier:"Vusi",
      specialInstuctions: "Please beware of fragile items ",
      totalPallets: 9,
      totalWeight: 16,
      class: 8995
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
