import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { NavbarComponent } from './app/header/navbar.component';
import { TextBoxComponent } from './app/text-box/text-box.component';

(async () => {
  const app = await createApplication({
    providers: [],
  });
  const elements: any[] = [
    [TextBoxComponent, 'text-box'],
    [NavbarComponent, 'nav-bar']
  ];

  elements.forEach(([component, name]) => {
    const htmlElement = createCustomElement(
      component, { injector: app.injector });
    customElements.define(name, htmlElement);
  });
})();
