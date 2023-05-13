import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Libro1Bloque1Semana1Component } from './components/revalorando/libro1/bloque1/semana1/semana1.component';
import { Libro1Bloque1Semana2Component } from './components/revalorando/libro1/bloque1/semana2/semana2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent,  pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'actividad?libro=1&bloque=1&semana=1', component: Libro1Bloque1Semana1Component},
  { path: 'actividad', component: Libro1Bloque1Semana2Component }
  //{ path: '**', redirectTo: '/heroes', pathMatch: 'full' } rdirige todas las urls invalidas
  //actividad?libro=1&bloque=1&semana=1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
