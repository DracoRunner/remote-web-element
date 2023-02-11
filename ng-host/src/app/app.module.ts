import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDirective } from './navbar.directive';
import { TextBoxDirective } from './text-box.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TextBoxDirective, NavbarDirective],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
