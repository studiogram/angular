import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';
import { AnimauxService } from 'src/app/services/animaux.service';

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

  animalDetails: Animal =  {
    name: 'cobra',
    quantity: 12
  }
  animauxDetails: Animal[];

  constructor(private _animaux: AnimauxService) { }

  ngOnInit(): void {
    this.animauxDetails = this._animaux.animauxDetails;

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
