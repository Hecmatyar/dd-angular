import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AdminCardDataFull} from "../../../../../api/dto/AdminCardDataFull.g";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";
import {bulkOrderListPath, partnersOrderListPath, userOrderListPath} from "../../../../../core/path";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {CardsActions} from "../../../../../store/actions/cards.actions";

@Component({
  selector: 'app-card-row-template',
  templateUrl: './card-row-template.component.html',
  styleUrls: ['./card-row-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardRowTemplateComponent implements OnInit {
  @Input() data: AdminCardDataFull;

  @ViewChild('modalContent') modalContent: TemplateRef<HTMLElement>;
  defaultDate: Date;
  innerTopCommission: number;

  constructor(
    private router: Router,
    private modalService: NzModalService,
    private store: Store<IAppState>) {
    this.defaultDate = new Date();
  }

  ngOnInit(): void {
    this.innerTopCommission = this.data.detail.topCommissionSell;
  }

  async orderUserNavigate(value: number): Promise<void> {
    await this.orderNavigate(userOrderListPath, value);
  }

  async orderBulkNavigate(value: number): Promise<void> {
    await this.orderNavigate(bulkOrderListPath, value);
  }

  async orderPartnersNavigate(value: number): Promise<void> {
    await this.orderNavigate(partnersOrderListPath, value);
  }

  async orderNavigate(path: string, orderNumber: number): Promise<void> {
    await this.router.navigate([path], {
      queryParams: {number: orderNumber}
    });
  }

  showConfirm(): void {
    this.innerTopCommission = this.data.detail.topCommissionSell;
    this.modalService.confirm({
      nzTitle: 'Are you sure?',
      nzContent: this.modalContent,
      nzOkText: 'Accept',
      nzOnOk: async (): Promise<void> => this.updateTop()
    });
  }

  updateTop(): void {
    this.store.dispatch(CardsActions.setTop.started({cardId: this.data.id, topCommission: this.innerTopCommission}));
  }

  onChangeComment(comment: string): void {
    this.store.dispatch(CardsActions.setComment.started({cardId: this.data.id, request: {text: comment}}));
  }
}
