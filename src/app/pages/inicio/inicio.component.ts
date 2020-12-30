import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public juegos: any[];

  constructor(
    private db: AngularFirestore
  ) { 
    this.db.collection('goty').valueChanges()
      .pipe(
        map((resp: Game[]) => {

          /* 
          return resp.map(juego => {
            return {
              name: juego.name,
              value: juego.votos
            }
          });
          */
          
         return resp.map(({ name, votos }) => ({ name, value: votos }));
         
        })
      )
      .subscribe(games => {
        this.juegos = games;
      })
  }

  ngOnInit(): void {
  }

}
