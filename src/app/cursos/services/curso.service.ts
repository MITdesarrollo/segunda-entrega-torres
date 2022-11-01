import { Injectable } from '@angular/core';
import {Curso} from "../models/curso";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
      id:1,
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Keven',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      img:'/assets/images/1.png'
    },
    {
      id:2,
      nombre: 'React JS',
      comision: '32320',
      profesor: 'Fernando',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 3, 30),
      inscripcionAbierta: true,
      img:'/assets/images/2.png'
    },
    {
      id:3,
      nombre: 'JavaScript',
      comision: '33310',
      profesor: 'Arturo',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 3, 28),
      inscripcionAbierta: false,
      img:'/assets/images/3.png'
    },
    {
      id:4,
      nombre: 'Python',
      comision: '34310',
      profesor: 'Lautaro',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 6, 30),
      inscripcionAbierta: false,
      img:'/assets/images/4.png'
    },
  ];

  private cursoSubject$: BehaviorSubject<Curso[]>

  constructor() {
    this.cursoSubject$ = new BehaviorSubject(this.cursos)
  }

  /* observable */
  obtenerCursos(): Observable<Curso[]>{
    return this.cursoSubject$.asObservable();
  }

  obtenerCurso(id: number): Observable<Curso>{
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso)=> curso.id === id)[0])
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursoSubject$.next(this.cursos);
  }
  editarCurso(curso: Curso ){
    let indice =  this.cursos.findIndex((c: Curso)=> c.id === curso.id);
    if(indice > -1){
      this.cursos[indice] = curso;
    }
    this.cursoSubject$.next(this.cursos);
  }
  eliminarCurso(id: number){
    let indice = this.cursos.findIndex((c: Curso) => c.id === id);

    if(indice > -1){
      this.cursos.splice(indice, 1);
    }
    this.cursoSubject$.next(this.cursos);}
}
