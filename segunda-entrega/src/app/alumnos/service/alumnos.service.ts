import { Injectable } from '@angular/core';
import {Alumno} from "../models/alumnos";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos: Alumno []=[
    { id:0, nombre:'Juan', apellido:'Gomez', fechaNacimiento: new Date('2000-08-1'), dni:100},
    { id:1, nombre:'Juana',  apellido:'Perez', fechaNacimiento: new Date('2000-08-1'), dni:200}
  ];

  private alumnosSubject: BehaviorSubject<Alumno[]>;
  constructor() {
    this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos)
  }
  obtenerAlumnos(): Observable<Alumno[]>{
    return this.alumnosSubject.asObservable();
  }
  obtenerAlumnoId(id: number){
    return this.alumnos[id]
  }
  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    this.alumnosSubject.next(this.alumnos);
  }
  eliminarAlumno(id: number){
  let indice = this.alumnos.findIndex((c: Alumno) => c.id === id);
  if(indice > -1){
    this.alumnos.splice(indice, 1)
  }
  this.alumnosSubject.next(this.alumnos)
  }

  editarAlumno(alumno : Alumno){
    let indice = this.alumnos.findIndex((c: Alumno)=> c.id === alumno.id)
    if(indice > -1){
      this.alumnos[indice] = alumno;
    }
    this.alumnosSubject.next(this.alumnos)
  }

}
