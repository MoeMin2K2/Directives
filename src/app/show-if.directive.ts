import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIf]',
  standalone: true
})
export class ShowIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appShowIf(condition: boolean) {
    if (condition) {
      console.log("condition: ", condition);
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      console.log("condition: ", condition);
      this.viewContainer.clear();
    }
  }

}
