import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produits: Produit[] = [
    {name: 'Cerise', img: './assets/cerise.jpg',price: 5,stock: 10 },
    {name: 'Citron', img: './assets/citron.jpg',price: 4,stock: 4 },
    {name: 'Fraise', img: './assets/fraise.jpg',price: 3,stock: 10 },
    {name: 'Poire', img: './assets/poire.jpg',price: 2,stock: 4 },
  ];
  constructor() { }
  readProduit(i: number) {
    return this.produits[i];
  }
  stockTotal() {
    return this.produits.reduce((cumul, produit) => cumul + produit.stock , 0);
  }
  addProduct(produit: Produit): void {
    this.produits.push(produit);
  }
  deleteProduct(i: number){
    console.log(i);
    this.produits.splice(i, 1);
  }
  updateProduct(i: number, produit: Produit) {
    console.log(i);
    console.log(produit);
  }
}
