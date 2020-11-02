import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appPrice]'
})
export class PriceDirective implements OnChanges {
  @Input('key') key: string;
  @Input('appPrice') value: number | string;

  nextValue: string;

  constructor(private el: ElementRef) {

  }

  ngOnChanges(): void {
    if (!this.value) return;

    this.nextValue = Math.abs((this.value as number)).toFixed(2);

    if (this.key === 'balance') {
      if (this.value < 0) this.el.nativeElement.classList.add('negative');
      if (this.value > 0) this.el.nativeElement.classList.add('positive');
    }

    this.el.nativeElement.innerHTML = this.value > 0 ? `+ ${this.nextValue} $` : `- ${this.nextValue} $`;
  }

}
