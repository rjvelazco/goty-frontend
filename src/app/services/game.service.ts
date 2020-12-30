import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor(
    private http: HttpClient
  ) { }
  
  getNominados(): Observable<Game[]> {

    if (this.juegos.length > 0) {
      console.log('Desde cache.');
      return of(this.juegos)
    } else {
      console.log('Desde Internet')
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(
          tap(
            juegos => this.juegos = juegos
          )
        )
    }

  }

  votarJuego(id: string) {
    // Las peticiones POST generalmente esperan un BODY, pero como nuestro servicio
    // no espera ningun BODY enviamos un arreglo vacio.
    return this.http.post(`${environment.url}/api/goty/${id}`, {})
      .pipe(
        catchError(err => {
          // console.log(err.error)
          return of(err.error);
        })
      )
  }
}
