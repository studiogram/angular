import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  i: number;
  produit: Produit;
  constructor(private router: ActivatedRoute, private _produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.i = this.router.snapshot.params['numero'];
    this.produit = this._produitsService.readProduit(this.i);
    console.log(this.produit);
  }

}
