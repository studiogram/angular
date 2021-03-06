import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
  animauxDetails: Animal[] = [
    {name : 'koala', quantity: 5}, 
    {name : 'salamandre', quantity: 3}, 
    {name : 'perroquet', quantity: 8}
  ];
  constructor() { }
  readAnimal(id: number) {
    return this.animauxDetails[id];
  }
}

// C : Create 
// R : Read 
// U : Update 
// D : Delete 
