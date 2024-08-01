import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { tokenKey } from 'app/constant/local-storage';
import { JwtToken } from 'app/models/token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storage!: Storage;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId) && window?.localStorage) {
      this.storage = window.localStorage;
    }
  }

  async setCredentialTokens(tokens: JwtToken | null) {
    if (this.storage) {
      if (tokens) {
        this.storage.setItem(tokenKey.accessToken, tokens.accessToken);
        this.storage.setItem(tokenKey.refreshToken, tokens.refreshToken);
      } else {
        this.storage.removeItem(tokenKey.accessToken);
        this.storage.removeItem(tokenKey.refreshToken);
      }
    }
  }

  getCredentialTokens() {
    if (this.storage) {
      const accessToken = this.storage.getItem(tokenKey.accessToken);
      const refreshToken = this.storage.getItem(tokenKey.refreshToken);
      if (!!accessToken && !!refreshToken) {
        return { accessToken, refreshToken };
      }
    }
    return null;
  }

  removeTokens() {
    if (this.storage) {
      this.storage.removeItem(tokenKey.accessToken);
      this.storage.removeItem(tokenKey.refreshToken);
    }
  }
}
