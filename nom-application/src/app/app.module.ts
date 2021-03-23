/* Modules : */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Composants : */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './composants/app.component';
import { NomComponent } from './composants/nom/nom.component';
import { NouveauComponent } from './composants/nouveau/nouveau.component';
import { ItisComponent } from './composants/itis/itis.component';
import { ScssComponent } from './composants/scss/scss.component';
import { BouclesComponent } from './composants/boucles/boucles.component';



@NgModule({
  declarations: [
    AppComponent,
    NomComponent,
    NouveauComponent,
    ItisComponent,
    ScssComponent,
    BouclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
