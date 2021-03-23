import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrls: ['./scss.component.scss']
})
export class ScssComponent implements OnInit {
  color1: string = 'purple';
  color2: string = 'black';
  valid: boolean = false;
  constructor() { }

  ngOnInit(): void {
    //(this.valid == true) ? console.log('oui') : console.log('non');

    // if(this.valid == true) {
    //   console.log('oui');
    // } else {
    //   console.log('non');
    // }

  }

}
