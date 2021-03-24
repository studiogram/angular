import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/interfaces/animal';
import { AnimauxService } from 'src/app/services/animaux.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {
  id: string;
  animal: Animal;
  constructor(private _animaux: AnimauxService, private router: ActivatedRoute) { 
    // console.log(this._animaux.animauxDetails);
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.id = this.router.snapshot.params['id'];
    this.animal = this._animaux.animauxDetails[this.id];
  }

}
