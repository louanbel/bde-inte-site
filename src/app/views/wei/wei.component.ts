import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wei',
  templateUrl: './wei.component.html',
  styleUrls: ['./wei.component.scss', './wei2.component.scss'],
})
export class WeiComponent {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('WEI | IMTMERSION');
  }
}
