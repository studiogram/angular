import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.scss']
})
export class NouveauComponent implements OnInit {
  title: string = 'Mon titre';
  quantity: number = 1;
  price: number= 10;
  priceEuro: string;
  valid: boolean = false;
  up: boolean = false;
  constructor() {
    if(this.quantity > 3) this.valid = true;
    this.priceEuro = this.price + '€';
  }
  ngOnInit(): void {

  }
  setTax() {
    return this.price * .2
  }
  setPriceEuro() {
    return this.price + '€';
  }
  more() {
    this.quantity++;
    console.log(this.quantity)
    if(this.quantity == 10) this.price --;
  }
  newPrice() {
    this.price++;
  }
 }
