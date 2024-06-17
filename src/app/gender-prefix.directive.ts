import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGenderPrefix]',
  standalone: true
})
export class GenderPrefixDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appGenderPrefix(gender: string) {
    this.viewContainer.clear();
    console.log("Gender: ", gender);
    if (gender === 'male') {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: 'Mr.'
      });
    } else if (gender === 'female') {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: 'Ms.'
      });
    }
  }
}
