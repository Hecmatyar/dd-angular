import {Directive, ElementRef, Output, EventEmitter, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Input() targetList: string[];
  @Output() public appClickOutside = new EventEmitter();

  constructor(private _elementRef: ElementRef) {
    this.targetList = [];
  }

  @HostListener('document:click', ['$event.target'])

  public onClick(targetElement: Element): void {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement) ||
      this.targetList.some(item => targetElement.hasAttribute(item));
    if (!clickedInside) {
      this.appClickOutside.emit(null);
    }
  }
}
