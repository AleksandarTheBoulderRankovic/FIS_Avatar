import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appDirBtn]'
})
export class DirBtnDirective {

  element: ElementRef;
  
  constructor(element: ElementRef) { 
    this.element = element;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = '#80ddff';
    this.element.nativeElement.style.textShadow = '0 1px 1px #007099';
    this.element.nativeElement.style.fontWeight = 'bold';
    this.element.nativeElement.style.backgroundImage = 'url("https://i.imgur.com/EWYD5qu.png")';
    this.element.nativeElement.style.backgroundSize = '100% 100%';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style.fontWeight = '';
    this.element.nativeElement.style.backgroundImage = '';
  }

}
