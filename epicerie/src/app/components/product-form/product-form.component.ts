import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  message: string;
  constructor(private _produitsService: ProduitsService, ) { }

  ngOnInit(): void {
  }
  submitProduct(productForm: NgForm) {
    console.log(productForm.value);
    this._produitsService.addProduct(productForm.value);
    this.message = 'Nouveau produit crée!';
    productForm.resetForm();
  }
}
