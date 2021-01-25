import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDashLoader]'
})
export class DashLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
