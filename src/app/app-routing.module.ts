import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartTableComponent } from './chart-table/chart-table.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  { path: 'line-chart', component: LineChartComponent},
  {path: 'column-chart', component: ChartTableComponent},
  {path: 'progress-bar', component: ProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LineChartComponent, ChartTableComponent, ProgressBarComponent];
