import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private router: Router) {}

  onRedirect(path: string) {
    this.router.navigateByUrl(path);
  }
}
