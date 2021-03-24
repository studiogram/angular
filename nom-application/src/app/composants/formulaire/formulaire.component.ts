import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(newAnimal) {
    console.log(newAnimal.value);
    if(newAnimal.value.stock < 5) {
      console.log('stock trop petit');
    } else {
      console.log('stock OK! :)');
    }
  }
}
