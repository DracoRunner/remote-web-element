import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextBoxModule } from './app/text-box/text-box.module';

platformBrowserDynamic()
  .bootstrapModule(TextBoxModule)
  .catch((err) => console.error(err));
