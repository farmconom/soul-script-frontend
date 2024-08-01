import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Logger } from './logger.service';
import { User } from 'app/models/user.interface';
import { AuthService } from './auth.service';
import { JwtToken } from 'app/models/token.interface';

const log = new Logger('UserService');

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userInitializingSubject = new BehaviorSubject<boolean>(true);
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(
    private router: Router,
    // private userApiService: UserApiService,
    private authService: AuthService
  ) {}

  get userInitializing$() {
    return this.userInitializingSubject.asObservable();
  }

  get user$() {
    return this.userSubject.asObservable();
  }

  async login(tokens: JwtToken | null) {
    await this.authService.setCredentialTokens(tokens);
    this.setUserInfo();
  }
  async logout(nonRedirect?: boolean) {
    try {
      await this.authService.setCredentialTokens(null);
      this.userSubject.next(null);
    } catch (error) {
      log.error(error);
    } finally {
      if (!nonRedirect) {
        this.router.navigateByUrl('/auth');
      }
    }
  }

  async setUserInfo() {
    try {
      this.userInitializingSubject.next(true);
      const userInfo = null;
      // const userInfo = await this.userApiService.getUserInfo();
      this.userSubject.next(userInfo);
    } catch (error) {
      this.logout();
      throw error;
    } finally {
      this.userInitializingSubject.next(false);
    }
  }
}
