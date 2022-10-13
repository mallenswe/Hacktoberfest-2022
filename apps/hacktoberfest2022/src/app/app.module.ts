import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileRowComponent } from './components/profile-row/profile-row.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ProfileDetailsComponent,
    ProfileRowComponent,
    AddressComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
