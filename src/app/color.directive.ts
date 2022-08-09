import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @Input() appColor = '';

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const elem = this.element.nativeElement as HTMLElement;
    console.log(elem);
    console.log(this.appColor);

    elem.style.fontSize = '25px';
    elem.style.fontWeight = 'bold';
    elem.style.color = this.appColor;
    elem.style.backgroundColor = 'cyan';
  }
}
