import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Sesion} from "../../../login/models/sesion";
import {SesionService} from "../../services/sesion.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  sesion$!: Observable<Sesion>
  constructor(
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerDatosSesion();
  }
}
