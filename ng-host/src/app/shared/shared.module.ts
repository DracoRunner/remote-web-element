import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule, Injector, createNgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {
  constructor(private injector: Injector) {
    this.load();
  }
  async load(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './ms-module',
    });

    createNgModule(m.MsModule, this.injector);
  }
}
