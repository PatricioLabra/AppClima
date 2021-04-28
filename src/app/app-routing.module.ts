import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from '../app/componentes/principal/principal.component'
import {ActualizarComponent} from '../app/componentes/actualizar/actualizar.component'

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'actualizar',component:ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
