import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundPagePage } from './pages/not-found-page/not-found-page.page';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthComponent } from './pages/auth/auth.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ComponentsModule } from './components/components.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPagePage,
    AuthComponent,
    FeaturesComponent,
    LandingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatButtonModule, ComponentsModule],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
