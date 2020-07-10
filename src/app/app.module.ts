import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreachartComponent } from './areachart/areachart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { LogchartComponent } from './logchart/logchart.component';
import { PointchartComponent } from './pointchart/pointchart.component';
import { ScriptchartComponent } from './scriptchart/scriptchart.component';
import { ScalechartComponent } from './scalechart/scalechart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimechartComponent } from './timechart/timechart.component';
import { ToolchartComponent } from './toolchart/toolchart.component';

@NgModule({
  declarations: [
    AppComponent,
    AreachartComponent,
    BarchartComponent,
    BubblechartComponent,
    LogchartComponent,
    PointchartComponent,
    ScriptchartComponent,
    ScalechartComponent,
    SidebarComponent,
    TimechartComponent,
    ToolchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
