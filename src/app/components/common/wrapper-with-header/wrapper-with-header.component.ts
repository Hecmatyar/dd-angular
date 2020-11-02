import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper-with-header',
  templateUrl: './wrapper-with-header.component.html',
  styleUrls: ['./wrapper-with-header.component.scss']
})
export class WrapperWithHeaderComponent {
  @Input() header: string;
};
