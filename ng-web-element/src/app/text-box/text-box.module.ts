import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { TextBoxComponent } from './text-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from '../header/navbar.component';

@NgModule({
  declarations: [TextBoxComponent, NavbarComponent],
  imports: [CommonModule, BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TextBoxModule {
  constructor(private injector: Injector) {
    const textBoxElement = createCustomElement(TextBoxComponent, {
      injector: this.injector,
    });
    customElements.define('text-box', textBoxElement);
    const navBarElement = createCustomElement(NavbarComponent, {
      injector: this.injector,
    });
    customElements.define('nav-bar', navBarElement);
  }

  ngDoBootstrap() {}
}
