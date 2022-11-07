import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../../models/alumnos';
import { AlumnosService } from '../../service/alumnos.service';
import {Observable, Subscription} from 'rxjs'
import { ActivatedRoute } from '@angular/router';
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
  
  
  constructor(
    private alumnoService: AlumnosService,
    
  ) { 

    this.alumnoSubscription = this.alumnoService.obtenerAlumnos().subscribe((a) => this.alumnos = a )

    this.formularioAltaAlumno = new FormGroup({
      dni: new FormControl,
      nombre: new FormControl,
      apellido: new FormControl,
      fechaNacimiento: new FormControl
     })  
  }

  altaAlumno(){
    let idAlumno:number = Math.max.apply(null, this.alumnos.map(o => o.id));
  
    let c : Alumno = {
      id: idAlumno+1,
      dni: this. formularioAltaAlumno.value.dni,
      nombre: this. formularioAltaAlumno.value.nombre,
      apellido: this. formularioAltaAlumno.value.apellido,
      fechaNacimiento: this. formularioAltaAlumno.value.fechaNacimiento
    }
    this.alumno = c
    console.log(this.alumno);
    
    this.alumnoService.agregarAlumno(c);
  }
  
  ngOnInit(): void {
   console.log(this.alumno);
   
  }
  
  
}
