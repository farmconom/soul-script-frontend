// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { isEmpty } from 'lodash';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  async canActivate() {
    const tokens = this.authService.getCredentialTokens();
    const user = await firstValueFrom(this.userService.user$);
    if (!!tokens && isEmpty(user)) {
      await this.userService.setUserInfo();
      this.router.navigateByUrl('/');
    }
    return true;
  }
}
