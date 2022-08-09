import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
  @Input() appMyIf: boolean;

  constructor(private templateRef: TemplateRef<any>, private ciewContainer: ViewContainerRef) { }

  ngOnInit(){
    if(this.appMyIf){
      this.ciewContainer.createEmbeddedView(this.templateRef);
    } else{
      this.ciewContainer.clear()
    }
  }

}