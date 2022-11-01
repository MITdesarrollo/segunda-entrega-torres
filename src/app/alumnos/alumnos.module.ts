import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import {SharedModule} from "../shared/shared.module";
import {PipesModule} from "../pipes/pipes.module";
import {AlumnosService} from "./service/alumnos.service";


@NgModule({
  declarations: [
    EditarAlumnoComponent,
    FormularioComponent,
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    PipesModule
  ],
  providers: [
    AlumnosService
  ],
  exports: [
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
