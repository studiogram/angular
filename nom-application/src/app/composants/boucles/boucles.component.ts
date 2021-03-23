import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucles',
  templateUrl: './boucles.component.html',
  styleUrls: ['./boucles.component.scss']
})
export class BouclesComponent implements OnInit {
  animaux: string[] = [
    'koala', 
    'salamandre', 
    'perroquet'
  ];
  etudiants: {nom: string, note: number} = {
    nom: "Toto",
    note: 20
  };
  animauxDetails: any = [
    {name : 'koala', quantity: 5}, 
    {name : 'salamandre', quantity: 3}, 
    {name : 'perroquet', quantity: 8}
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.animaux);
    // this.animaux.forEach(animal => {
    //   console.log(animal);
    // });
    // for(let animal of this.animaux) {
    //   console.log(animal);
    // }
    for(let animal in this.animaux) {
      console.log(animal);
    }

    // console.log(this.etudiants);
    // for(let key in this.etudiants) {
    //   console.log(this.etudiants[key]);
    // }


  }

}
