import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlarminfoComponent } from './alarminfo/alarminfo.component';
import { WeatherComponent } from './weather/weather.component';
import { EventcalendarComponent } from './eventcalendar/eventcalendar.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarminfoComponent,
    WeatherComponent,
    EventcalendarComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
