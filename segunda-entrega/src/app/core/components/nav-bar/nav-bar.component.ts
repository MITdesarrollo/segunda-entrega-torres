import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Sesion} from "../../../login/models/sesion";
import {SesionService} from "../../services/sesion.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  sesion$!: Observable<Sesion>
  sesionSubscription!: Subscription
  sesion!: Sesion
  constructor(
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerDatosSesion();
    this.sesionSubscription = this.sesion$.subscribe((sesion: Sesion)=> this.sesion = sesion)
  }
}
