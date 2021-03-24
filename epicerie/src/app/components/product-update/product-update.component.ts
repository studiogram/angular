import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  index: number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.router.snapshot.params['numero'];
  }

}
