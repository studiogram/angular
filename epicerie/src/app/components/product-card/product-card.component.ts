import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() i: number;
  @Input() produit: Produit;
  @Output() quantity = new EventEmitter<number>();
  constructor(private _produitsService: ProduitsService) { }

  ngOnInit(): void {
  }
  delete() {
    this._produitsService.deleteProduct(this.i);
    this.quantity.emit(this._produitsService.stockTotal());
  }
}
