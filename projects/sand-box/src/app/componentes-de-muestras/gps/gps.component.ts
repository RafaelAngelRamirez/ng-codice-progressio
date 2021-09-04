import { Component, OnInit } from '@angular/core';
import { GpsService } from 'projects/gps/src/public-api';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css'],
})
export class GpsComponent implements OnInit {
  constructor(private gpsService: GpsService) {}

  coordenadas: GeolocationPosition;
  error: string;
  ngOnInit(): void {
    console.log('Estamos aca');
    this.obtenerPosicion();
  }

  obtenerPosicion() {
    this.gpsService
      .ubicacionActual()
      .then((r) => {
        console.log({ r });

        this.coordenadas = r;
      })
      .catch((err) => (this.error = err));
  }
}
