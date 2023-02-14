import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MsModule } from './app/ms.module';


platformBrowserDynamic()
  .bootstrapModule(MsModule)
  .catch((err) => console.error(err));
