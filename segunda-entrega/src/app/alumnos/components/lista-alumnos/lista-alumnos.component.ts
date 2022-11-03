import {Component, OnInit} from '@angular/core';
import {Alumno} from "../../models/alumnos";
import {map, Observable, Subscription} from "rxjs";
import {AlumnosService} from "../../service/alumnos.service";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {
  alumno!: Alumno;
  alumnos!: Alumno[];
  alumnosSubcription!: Subscription
  alumnos$!: Observable<Alumno[]>
  
  columnasAlumnos: string[] = ['id','dni','nombre/apellido','fecha-nacimiento','editar/borrar'];

  dataSource: MatTableDataSource<Alumno>

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
  ) {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.alumnosSubcription = this.alumnos$.subscribe((alumnos : Alumno[])=> this.alumnos = alumnos)

    this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
  };
  
  ngOnInit(): void {
  
}

eliminarAlumno(id: number){
  this.alumnoService.eliminarAlumno(id);
  this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
}
 editarAlumno(id: number){
  this.router.navigate(['students/form'])
 }

}
