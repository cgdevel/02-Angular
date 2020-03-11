import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(
    element: ElementRef
  ) {
      element.nativeElement.style.backgroundColor = 'red';
  }

}
