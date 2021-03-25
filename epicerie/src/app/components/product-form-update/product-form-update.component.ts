import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrls: ['./product-form-update.component.scss']
})
export class ProductFormUpdateComponent implements OnInit {
  message: string;
  @Input() produit: Produit;
  @Input() i: number;
  constructor(private _produitsService: ProduitsService) {}
  ngOnInit(): void {}
  updateProduct() {
    this.message = 'Le produit a bien été mis à jours!';
  }
}
