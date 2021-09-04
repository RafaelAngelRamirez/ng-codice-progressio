import { Injectable } from '@angular/core';
import { Navigation } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GpsService {
  constructor() {}

  posicionActual = new Observable<GeolocationPosition>((observer) => {
    let watchId: number;
    console.log(watchId);

    if (!this.soportado()) {
      watchId = navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => {
          observer.next(position);
        },
        (error: GeolocationPositionError) => {
          observer.error(error);
        }
      );
    } else observer.error('Navegador no soportado');

    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      },
    };
  });

  ubicacionActual() {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      if (!this.soportado()) return reject('Navegador no soportado');

      navigator.geolocation.getCurrentPosition(
        (ok) => resolve(ok),
        (error) => reject(error)
      );
    });
  }

  private soportado() {
    return 'geolocation' in navigator;
  }
}
