import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportTypeComponent } from './components/report-type/report-type.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AggrigatorComponent } from './components/aggrigator/aggrigator.component';
import { MetricComponent } from './components/metric/metric.component';
import { ConditionComponent } from './components/condition/condition.component';
import { SourceComponent } from './components/source/source.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'report-types', component: ReportTypeComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'aggrigator', component: AggrigatorComponent },
  { path: 'metric', component: MetricComponent },
  { path: 'condition', component: ConditionComponent },
  { path: 'source', component: SourceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
