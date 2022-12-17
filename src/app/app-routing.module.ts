import { ModifierAdherentComponent } from './pages/modifier-adherent/modifier-adherent.component';
import { AddAdherentComponent } from './pages/add-adherent/add-adherent.component';
import { ListAdherentComponent } from './pages/list-adherent/list-adherent.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'list',component:ListAdherentComponent},
  {path:'ajouter',component:AddAdherentComponent},
  {path:'modifier',component:ModifierAdherentComponent},
  { path:'', redirectTo:'login',pathMatch:'full'},
 { path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
