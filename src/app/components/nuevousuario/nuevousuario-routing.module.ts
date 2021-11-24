import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevousuarioComponent } from './nuevousuario.component';

const routes: Routes = [
  
{path:'',component: NuevousuarioComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class NuevousuarioRoutingModule { }
