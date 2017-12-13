import { Directive, ElementRef, HostListener, Input } from '@angular/core'

let counter = 0;
@Directive({
  selector: '[appCssOnClick]'
})
export class CssOnClickDirective {
  @Input() cssClass: string;
  @HostListener('click') onClick() {
    if (!counter) {
        this.elRef.nativeElement.classList = this.elRef.nativeElement.classList + ' ' + this.cssClass;
        counter++;
    }
  }

  constructor(private elRef: ElementRef) { }

}
