import {Subscription} from "rxjs";
import {OnDestroy} from "@angular/core";

export class BaseSubscriber implements OnDestroy {
  protected subscriptions: Subscription[];

  constructor() {
    this.subscriptions = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
