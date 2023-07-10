import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'bde-inte-site';
  constructor(config: NgbCarouselConfig) {
    config.interval = 9999999999999;
    config.pauseOnHover = false;
  }
}
