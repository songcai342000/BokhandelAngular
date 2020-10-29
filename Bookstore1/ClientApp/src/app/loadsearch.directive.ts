import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[searchHost]'
})
export class LoadsearchDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
