import { Component, OnInit } from '@angular/core';
import SampleWeatherResponse from '../../assets/sampleweatherresponse.json';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData = SampleWeatherResponse;

  constructor() { }

  ngOnInit(): void {
  }
}
