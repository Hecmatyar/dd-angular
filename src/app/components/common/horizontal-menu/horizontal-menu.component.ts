import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IHorizontalMenuItem} from "../../../core/interfaces/gorizontal-menu-item";
import {BaseContainer} from "../../../core/base/base-container";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalMenuComponent extends BaseContainer implements OnInit {
  @Input() menuItems: IHorizontalMenuItem[];

  constructor(protected store: Store<IAppState>) {
    super(store);
    this.menuItems = [];
  }

  ngOnInit(): void {
    this.menuItems.forEach(item => {
      if (item.credential) {
        [item.visible] = this.getCredentials(item.credential);
      }
    });
  }
}
