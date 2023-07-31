import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rentree',
  templateUrl: './rentree.component.html',
  styleUrls: ['./rentree.component.scss'],
})
export class RentreeComponent {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Rentrée | IMTMERSION');
  }
}
