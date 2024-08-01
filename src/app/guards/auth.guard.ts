import { Router } from '@angular/router';
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { isEmpty } from 'lodash';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  async canActivate() {
    const tokens = this.authService.getCredentialTokens();
    if (isEmpty(tokens)) {
      this.userService.logout(true);
      this.router.navigateByUrl('/auth');
      return false;
    }
    const user = await firstValueFrom(this.userService.user$);
    if (isEmpty(user)) {
      await this.userService.setUserInfo();
    }

    return true;
  }
}
