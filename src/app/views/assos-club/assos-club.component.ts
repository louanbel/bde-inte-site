import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-assos-club',
  templateUrl: './assos-club.component.html',
  styleUrls: ['./assos-club.component.scss'],
})
export class AssosClubComponent {
  constructor(private title: Title) {}
  ngOnInit() {
    this.title.setTitle('Assos & Club | IMTMERSION');
  }
}
