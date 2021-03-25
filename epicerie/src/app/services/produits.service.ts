import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produits: Produit[] = [
    {name: 'Cerise', img: '/assets/cerise.jpg',price: 5,stock: 10 },
    {name: 'Citron', img: '/assets/citron.jpg',price: 4,stock: 4 },
    {name: 'Fraise', img: '/assets/fraise.jpg',price: 3,stock: 10 },
    {name: 'Poire', img: '/assets/poire.jpg',price: 2,stock: 4 },
  ];
  constructor() { }
  stockTotal() {
    return this.produits.reduce((cumul, produit) => cumul + produit.stock , 0);
  }
  addProduct(produit: Produit): void {
    this.produits.push(produit);
  }
  deleteProduct(){
    console.log('supprimer produit');
  }
}
