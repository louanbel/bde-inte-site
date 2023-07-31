import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
})
export class IntegrationComponent {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Intégration | IMTMERSION');
  }
}
