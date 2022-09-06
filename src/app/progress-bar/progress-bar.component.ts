import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public barChartLegend = true;
  public barChartPlugins = [];

  public names: string = '';

  public valuesString: string = '';
  
  public values = -1;
  public dataBase: number[] = [];
  public labelBase: string[] = [];

  updateChartHabaHaba() {
    this.values = Number(this.valuesString);
    this.dataBase.push(this.values);
    this.labelBase.push(this.names);
    console.log(this.dataBase);
    console.log(this.labelBase);
    this.names = '';
    this.valuesString = '';
  }

}
