import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() img: string = ''; // url of the image
  @Input() id: number = -1;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // this.isDialogOpen = !this.isDialogOpen;
    this.dialog.open(EventDialogComponent, {
      data: {
        id: this.id,
      },
    });
  }
}
