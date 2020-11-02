import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-problem-group',
  templateUrl: './problem-group.component.html',
  styleUrls: ['./problem-group.component.scss']
})
export class ProblemGroupComponent implements OnInit {
  @Input() items: string[];
  @Output() onChange = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
    if (!this.items.length) this.items.push("");
  }

  onProblemAdd(): void {
    this.items.push("");
    this.onChange.emit(this.items);
  }

  onProblemRemove(i): void {
    this.items.splice(i, 1);
    this.onChange.emit(this.items);
  }
  changeValue(e, i): void {
    this.items[i] = e.target.value;
    this.onChange.emit(this.items);
  }
}
