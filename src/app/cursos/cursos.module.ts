import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { AddCourseComponent } from './components/add-course/agregar-curso.component';
import { CardCursosComponent } from './components/card-cursos/card-cursos.component';
import {DetailCoursesComponent} from './components/detail-courses/detalle-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';


@NgModule({
  declarations: [
    AddCourseComponent,
    CardCursosComponent,
    DetailCoursesComponent,
    EditarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
