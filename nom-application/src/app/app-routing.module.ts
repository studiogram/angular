import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './composants/error/error.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { ItisComponent } from './composants/itis/itis.component';
import { NouveauComponent } from './composants/nouveau/nouveau.component';
import { ParametreComponent } from './composants/parametre/parametre.component';
import { ParentComponent } from './composants/parent/parent.component';
import { PipesComponent } from './composants/pipes/pipes.component';

const routes: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'pipes/:id', component: ParametreComponent },
  {path: 'form', component: FormulaireComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'itis', component: ItisComponent},
  {path: 'toto', redirectTo: '/pipes', pathMatch: 'full'},
  {path: '', component: NouveauComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
