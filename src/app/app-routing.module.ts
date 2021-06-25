import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path:'/',
    component: PorPaisComponent,
    pathMatch: 'full' //path indica la ruta, component el componente y pathMatch:full   },
  },
  {
    path:'region',
    component: PorRegionComponent
  },
  {
    path:'capital',
    component: PorCapitalComponent
  },
  {
    path:'pais/:id', // Componente de ruta dinamica, va a cambiar dependiendo del pais que busquemos.
    component: VerPaisComponent
  },
  {
    path:'**', //los dos asteriscos significan que cualquier path que se ingrese que no corresponda, va a ser redireccionado al home
    redirectTo:''
  }
]


@NgModule({
  imports:[
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]})

export class AppRoutingModule {

}
