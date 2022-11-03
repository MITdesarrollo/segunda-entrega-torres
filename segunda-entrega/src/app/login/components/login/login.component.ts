import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SesionService} from "../../../core/services/sesion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup

  constructor(
    private sesioService: SesionService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      
      usuario: new FormControl(),
      contrasena: new FormControl(),
      admin: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  login(){

    

    console.log(this.formulario.value);
    this.sesioService.login(this.formulario.value.usuario, this.formulario.value.contrasena, this.formulario.value.admin, this.formulario.value.id);
    this.router.navigate(['home']);
  }

}
