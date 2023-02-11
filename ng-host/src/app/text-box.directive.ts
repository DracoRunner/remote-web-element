import { loadRemoteModule } from '@angular-architects/module-federation';
import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'text-box',
  standalone: true,
})
export class TextBoxDirective {
  constructor(private el: ViewContainerRef) {
    this.load();
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './text-box',
    });
    const ref = this.el.createComponent(m.TextBoxComponent);
    const htmlEle = this.el.element.nativeElement as HTMLElement;
    const inst = ref.instance as any;
    Object.entries(htmlEle.attributes).forEach((attr: any) => {
      console.log(attr[1].name, attr[1].value);
      inst[attr[1].name] = attr[1].value;
    });
  }
}
