import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProduitsService } from './services/produits.service';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ErrorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
