import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

const routes: Routes = [
  {path: 'ajouter', component: ProductAddComponent},
  {path: 'produits', component: ProductListComponent},
  {path: 'produits/:numero', component: ProductUpdateComponent},
  {path: '', redirectTo: 'produits', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
