import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cartHost]'
})
export class LoadcartDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
