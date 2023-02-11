import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { TextBoxComponent } from './app/text-box/text-box.component';

(async () => {
  const app = await createApplication({
    providers: [],
  });
  const textBoxEl = createCustomElement(TextBoxComponent, {
    injector: app.injector,
  });
  customElements.define('text-box', textBoxEl);
})();
