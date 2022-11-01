import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardCursosComponent} from "./components/card-cursos/card-cursos.component";
import {AddCourseComponent} from "./components/add-course/agregar-curso.component";
import {EditarCursosComponent} from "./components/editar-cursos/editar-cursos.component";

const routes: Routes = [
  {path: '',
  children: [
    {path: '', component: CardCursosComponent},
    {path: 'add-course', component: AddCourseComponent},
    {path: 'edit-course', component: EditarCursosComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
