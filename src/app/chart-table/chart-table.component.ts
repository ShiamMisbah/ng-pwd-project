import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.scss']
})
export class ChartTableComponent {
  title = 'ng2-charts-demo';
  @ViewChild(BaseChartDirective) anything: BaseChartDirective | undefined;
  public barChartLegend = true;
  public barChartPlugins = [];
  public names: string = '';
  public valuesString: string = '';
  public values = -1;
  public dataBase: number[] = [];
  public labelBase: string[] = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labelBase,
    datasets: [{ data: this.dataBase, label: 'Series A' }],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {}

  updateChartHabaHaba() {
    this.values = Number(this.valuesString);
    this.dataBase.push(this.values);
    this.labelBase.push(this.names);
    console.log(this.dataBase);
    console.log(this.labelBase);
  }

  generateChartHabaHaba(){
    this.anything?.update();
  }

}
