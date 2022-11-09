import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../../models/alumnos';
import { AlumnosService } from '../../service/alumnos.service';
import {Observable, Subscription} from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/login/models/sesion';
@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {
  formularioAltaAlumno!: FormGroup
  alumno!: Alumno;
  alumnos!: Alumno[];
  alumnoSubscription!: Subscription
  alumno$!: Observable<Alumno[]>

  sesion!: Sesion;
  sesion$!: any;
  sesionSubcription!: Subscription
  
  usuario!: any;
  usuario$!: Observable<Alumno>
  usuarioSubcription!: Subscription

  constructor(
    private alumnoService: AlumnosService,
    private sesionService :SesionService,
    
  ) { 
     this.alumno$ = this.alumnoService.obtenerAlumnos();
     this.alumnoSubscription = this.alumno$.subscribe((alumnos: Alumno[]) => this.alumnos = alumnos )
   

    this.formularioAltaAlumno = new FormGroup({
      dni: new FormControl,
      nombre: new FormControl,
      apellido: new FormControl,
      fechaNacimiento: new FormControl
     })  

     this.sesion$= this.sesionService.obtenerDatosSesion();
     this.sesionSubcription = this.sesion$.subscribe((sesion: Sesion) => this.sesion = sesion)
  }

  altaAlumno(){
    let idAlumno:number = Math.max.apply(null, this.alumnos.map(o => o.id));
    let idUsuario:number = Number(this.sesion.usuarioActivo?.id)
   
    
    let c : Alumno = {
      id: idAlumno+1,
      dni: this. formularioAltaAlumno.value.dni,
      nombre: this. formularioAltaAlumno.value.nombre,
      apellido: this. formularioAltaAlumno.value.apellido,
      fechaNacimiento: this. formularioAltaAlumno.value.fechaNacimiento
    }
    
    this.alumno = {...c, idUsuario}
    
    this.alumnoService.agregarAlumno(c);
    console.log(this.alumno);
   
  }
  
  ngOnInit(): void {
   
  }
  
 
}
