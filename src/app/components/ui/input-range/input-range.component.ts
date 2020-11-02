import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {BaseFormControl} from "../base-form-control";

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputRangeComponent extends BaseFormControl implements OnInit {
  @Input() max: number;
  @Input() step: number;

  @Output() changeRange = new EventEmitter<{fromValue: number, toValue: number}>();

  rangeValue: number[];

  constructor() {
    super();
  }

  onChange(value: number[]): void {
    this.changeRange.emit({fromValue: value[0], toValue: value[1]});
  }

  ngOnInit(): void {
    this.rangeValue = [0, this.max];
  }
}
