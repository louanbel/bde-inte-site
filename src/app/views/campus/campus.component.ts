import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.scss']
})
export class CampusComponent {
  constructor(private title: Title) {}
  ngOnInit() {
    this.title.setTitle('Campus | IMTMERSION');
  }

}
