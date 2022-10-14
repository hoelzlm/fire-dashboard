import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  time = new Date();
  rxTime = new Date();

  constructor() {
  }

  ngOnInit(): void {
   let intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
