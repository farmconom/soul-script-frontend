import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  path = '';

  constructor(location: Location) {
    this.path = location.path();
  }

  get isShowSideMenu() {
    if (this.path === '/404-not-found' || this.path === '/landing' || this.path.includes('auth/')) {
      return false;
    }
    return true;
  }
}
