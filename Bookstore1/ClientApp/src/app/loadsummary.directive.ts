import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[summaryHost]'
})
export class LoadsummaryDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
