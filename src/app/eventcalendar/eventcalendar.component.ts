import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import SampleEventResponse from '../../assets/sampleeventsresponse.json'

@Component({
  selector: 'app-eventcalendar',
  templateUrl: './eventcalendar.component.html',
  styleUrls: ['./eventcalendar.component.css']
})
export class EventcalendarComponent implements OnInit {

  eventData = SampleEventResponse;
  currentEventData = SampleEventResponse.events[2];

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(date: string): string {
    let obj = moment(date)
    return obj.format('DD.MM.YY - HH:mm') + ' Uhr';
  }

}
