import {Component, OnDestroy, OnInit} from '@angular/core';
import {Curso} from "../../models/curso";
import {Observable, Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {Sesion} from "../../../login/models/sesion";
import {CursoService} from "../../services/curso.service";
import {SesionService} from "../../../core/services/sesion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.scss']
})
export class CardsCursosComponent implements OnInit , OnDestroy{
  filtro: string = '';
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>
  cursosSubscription!: Subscription;

  dataSource!: MatTableDataSource<Curso>
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta',];

  sesion$!: Observable<Sesion>

  constructor(
    private cursosService: CursoService,
    private sesionService: SesionService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.cursosSubscription = this.cursos$.subscribe(cursos => this.cursos = cursos)
    this.sesion$ = this.sesionService.obtenerDatosSesion();
  }

  ngOnDestroy(): void {
    this.cursosSubscription.unsubscribe();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['/courses/edit-course', curso])
  }
  eliminarCurso(id: number) {
    console.log(id);

    this.cursosService.eliminarCurso(id)
  }



  /* metodos filtrado tablas */
  /* filtrarCurso(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
 */
  /* columna en especifico , filterPredicate lleva dos parametros*/
  /* this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
    return curso.nombre
      .toLocaleLowerCase()
      .includes(filtro.toLocaleLowerCase());
  };
  this.dataSource.filter = valorObtenido.trim().toLowerCase();
}
filtrarComision(event: Event) {
  const valorObtenido = (event.target as HTMLInputElement).value;
  this.dataSource.filterPredicate = function (curso: Curso, filtro: string) {
    return curso.comision
      .toLocaleLowerCase()
      .includes(filtro.toLocaleLowerCase());
  };
  this.dataSource.filter = valorObtenido.trim().toLowerCase();
}*/
}
