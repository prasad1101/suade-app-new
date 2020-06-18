import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportTypeComponent } from './components/report-type/report-type.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ConditionComponent } from './components/condition/condition.component';
import { MetricComponent } from './components/metric/metric.component';
import { AggrigatorComponent } from './components/aggrigator/aggrigator.component';
import { SourceComponent } from './components/source/source.component'
@NgModule({
  declarations: [
    AppComponent,
    ReportTypeComponent,
    HomeComponent,
    DocumentationComponent,
    ConditionComponent,
    MetricComponent,
    AggrigatorComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
