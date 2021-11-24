import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

  { path: '', loadChildren: () => import('./components/main/main.module').then(m => m.MainModule) },

{
  path: '', component: MainComponent,

  children: [
    { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
    { path: 'nuevousuario', loadChildren: () => import('./components/nuevousuario/nuevousuario.module').then(m => m.NuevousuarioModule)},
  ],
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
