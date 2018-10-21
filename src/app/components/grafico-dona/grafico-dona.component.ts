import { Component, OnInit, Input } from '@angular/core';
import { Graficas1Component } from 'src/app/pages/graficas1/graficas1.component';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

 @Input('ChartLabels') doughnutChartLabels:string[] = [];
 @Input('ChartData') doughnutChartData:number[] = [];
 @Input('ChartType') doughnutChartType:string = '';

  
  constructor() { }

  ngOnInit() {
    
  }

}
