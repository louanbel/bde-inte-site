import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DayEvents } from 'src/app/types/common';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss'],
})
export class EventDialogComponent {
  dayEvents!: DayEvents;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
    console.log(data.id);
    this.http
      .get<DayEvents>('assets/json/day' + data.id + '-' + navigator.language.split('-')[0] + '.json')
      .subscribe((content: DayEvents) => {
        this.dayEvents = content;
      });
  }
}
