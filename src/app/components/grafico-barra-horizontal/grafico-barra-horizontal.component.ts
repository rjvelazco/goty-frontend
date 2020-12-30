import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     "name": "Game 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Game 2",
  //     "value": 30
  //   },
  //   {
  //     "name": "Game 3",
  //     "value": 10
  //   },
  //   {
  //     "name": "Game 4",
  //     "value": 50
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Games';
  colorScheme = 'nightLights';

  // intervalo;
  constructor() {}

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(): void{
    // clearInterval(this.intervalo);
  }

}
