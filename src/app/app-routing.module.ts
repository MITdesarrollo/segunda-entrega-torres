import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {PaginaNoEncontradaComponent} from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";
import {LoginComponent} from "./login/components/login/login.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'courses', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  {path:'students', loadChildren: () => import('./alumnos/alumnos.module').then((m => m.AlumnosModule))},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }