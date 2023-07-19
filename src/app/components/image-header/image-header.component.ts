import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent {
  @Input() title: string = '';
  @Input() img: string = '';
}
