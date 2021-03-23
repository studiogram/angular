import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';
import { AnimauxService } from 'src/app/services/animaux.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  lastUpdate: Date = new Date();
  total: number = 1.2666456;
  animauxDetails: Animal[];
  constructor(private _animaux : AnimauxService) { 
    this.animauxDetails = this._animaux.animauxDetails;
  }

  ngOnInit(): void {
    
  }

}
