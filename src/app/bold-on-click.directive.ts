import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldOnClick]',
  standalone: true
})
export class BoldOnClickDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid black');
  }

  @HostListener('dblclick') onDoubleClick() {
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
  }

}
