import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-timechart',
  templateUrl: './timechart.component.html',
  styleUrls: ['./timechart.component.css']
})
export class TimechartComponent implements OnInit {

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
