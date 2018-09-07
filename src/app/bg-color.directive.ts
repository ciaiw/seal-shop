import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'button[appBgColor]'
})
export class BgColorDirective {

@Input('bgColor') color: string;

  constructor(private element: ElementRef) { }

  ngOnChanges(){
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.border = "0px";
  }
}
