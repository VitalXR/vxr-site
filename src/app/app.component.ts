import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-site';
  router: Router;
  current_component: String;

  constructor(router: Router) {
    this.router = router;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        this.current_component = e.url;
      });
  }
}
