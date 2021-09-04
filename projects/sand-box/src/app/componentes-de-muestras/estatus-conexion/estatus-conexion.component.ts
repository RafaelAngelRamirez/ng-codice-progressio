import { Component, OnInit } from '@angular/core';
import { EstatusConexionService } from 'projects/estatus-conexion/src/lib/estatus-conexion.service';

@Component({
  selector: 'app-estatus-conexion',
  templateUrl: './estatus-conexion.component.html',
  styleUrls: ['./estatus-conexion.component.css'],
})
export class EstatusConexionComponent implements OnInit {
  constructor(private estatus: EstatusConexionService) {
    this.estatus.online.subscribe((estado) => (this.conectado = estado));
  }

  conectado: boolean = false;

  ngOnInit(): void {}
}
