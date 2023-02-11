import { loadRemoteModule } from '@angular-architects/module-federation';
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'nav-bar',
  standalone:true
})
export class NavbarDirective {

  constructor(private el: ViewContainerRef) {
    this.load();
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './nav-bar',
    });
    const ref = this.el.createComponent(m.NavbarComponent);
    const htmlEle = this.el.element.nativeElement as HTMLElement;
    const inst = ref.instance as any;
    Object.entries(htmlEle.attributes).forEach((attr: any) => {
      console.log(attr[1].name, attr[1].value);
      if(attr[1].name === 'items'){
        console.log(typeof attr[1].value)
        inst[attr[1].name] = JSON.parse(attr[1].value);
      }else{
        inst[attr[1].name] = attr[1].value;
      }

    });
  }

}
