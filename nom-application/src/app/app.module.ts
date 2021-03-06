/* Modules : */
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { PipesComponent } from './composants/pipes/pipes.component';

import { AnimauxService } from './services/animaux.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ErrorComponent } from './composants/error/error.component';
import { ParametreComponent } from './composants/parametre/parametre.component';
import { InputComponent } from './composants/input/input.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { ParentComponent } from './composants/parent/parent.component';
import { EnfantComponent } from './composants/enfant/enfant.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    NomComponent,
    NouveauComponent,
    ItisComponent,
    ScssComponent,
    BouclesComponent,
    PipesComponent,
    ErrorComponent,
    ParametreComponent,
    InputComponent,
    FormulaireComponent,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AnimauxService,
    {provide: LOCALE_ID, useValue: "fr-FR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
