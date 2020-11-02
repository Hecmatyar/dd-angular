import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks-footer',
  templateUrl: './tasks-footer.component.html',
  styleUrls: ['./tasks-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
