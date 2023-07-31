import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bde-inte-site';

  constructor(private router: Router) {}
  ngOnInit() {
    this.setUpAnalytics();
  }

  setUpAnalytics() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'G-VN5L47DFFT', {
          page_path: event.urlAfterRedirects,
        });
      });
  }
}
