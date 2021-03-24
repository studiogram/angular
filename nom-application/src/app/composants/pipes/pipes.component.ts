import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _animaux : AnimauxService, private router: Router) { 
    this.animauxDetails = this._animaux.animauxDetails;
  }

  ngOnInit(): void {
    
  }
  afterAction() {
    console.log('ici, on pourrait réaliser d\'autres actions avant de changer de composants');
    this.router.navigate(['itis']);
  }

}
