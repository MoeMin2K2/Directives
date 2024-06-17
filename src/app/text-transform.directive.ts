import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextTransform]',
  standalone: true
})
export class TextTransformDirective {

  @Input() appTextTransform!: 'uppercase' | 'lowercase';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log("appTestTraansforms: ", this.appTextTransform);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['appTextTransform']) {
  //     this.transformText();
  //   }
  // }

  ngOnInit(): void {
    console.log("appTestTraansforms: ", this.appTextTransform);
    this.transformText();
  }


  private transformText() {
    const text = this.el.nativeElement.innerText;
    console.log("Text: ", text);
    const transformedText = this.appTextTransform === 'uppercase' ? text.toUpperCase() : text.toLowerCase();
    console.log("transformedText: ",  transformedText);
    console.log("el: ",this.el.nativeElement);
    this.renderer.setProperty(this.el.nativeElement, 'innerText', transformedText);  
  }
}
