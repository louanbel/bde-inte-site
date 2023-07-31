import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent {
  constructor(private title: Title, config: NgbCarouselConfig) {
    config.interval = 5000;
    config.pauseOnHover = false;
  }
  ngOnInit() {
    this.title.setTitle('Accueil | IMTMERSION');
  }
}
