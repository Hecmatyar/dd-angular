import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appGraphicCount]'
})
export class GraphicCounDirective implements OnChanges {
  @Input('appGraphicCount') count: number;
  @Input('maxCount') maxCount: number;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (!this.maxCount) this.el.nativeElement.innerHTML = this.count;

    const percentWidth = 85 / this.maxCount * this.count;
    const countStringWidth = this.count.toString().length * 7.5 + 7.5;
    const countStringPercentWidth = 85 / this.maxCount * countStringWidth;

    this.el.nativeElement.innerHTML = percentWidth > countStringPercentWidth
      ? `<div class="graphic-count"">${this.count}</div>`
      : `<div class="graphic-count""></div>${this.count}`;
    this.el.nativeElement.querySelector('div').style.width = percentWidth + '%';
  }
}
