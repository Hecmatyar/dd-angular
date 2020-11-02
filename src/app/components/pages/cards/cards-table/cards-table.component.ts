import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {BaseTable} from "../../../../core/base/base-table";
import {ICardsState, initialCardsState} from "../../../../store/state/cards.state";
import {SellCardStatus} from "../../../../api/dto/SellCardStatus.g";
import {SellCardType} from "../../../../api/dto/SellCardType.g";
import {AdminCardDataFull} from "../../../../api/dto/AdminCardDataFull.g";
import {UpdatedCard} from "../../../../core/interfaces/cards/update-card";
import {IAppState} from "../../../../store/state/app.state";
import {CardsActions} from "../../../../store/actions/cards.actions";
import {brandListPath} from "../../../../core/path";
import {AdminUpdateCardRequest} from "../../../../api/dto/AdminUpdateCardRequest.g";
import {selectCardsFilterState} from "../../../../store/selectors/cards.selector";
import {SearchCardRequest} from "../../../../api/dto/SearchCardRequest.g";

@Component({
  selector: 'app-cards-table',
  templateUrl: './cards-table.component.html',
  styleUrls: ['./cards-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsTableComponent extends BaseTable {
  @Input() state: ICardsState;
  @Input() detailCredential: boolean;
  @Input() statusCredential: boolean;

  sellCardsStatus: typeof SellCardStatus;
  sellCardType: typeof SellCardType;

  constructor(
    protected store: Store<IAppState>,
    private router: Router) {
    super(store);
    this.sellCardsStatus = SellCardStatus;
    this.sellCardType = SellCardType;
    this.state = initialCardsState;
    this.selector = selectCardsFilterState;
  }

  get leftPaddingDetail(): string {
    return this.detailCredential ? "50px" : "0";
  }

  dispatcher(filter: SearchCardRequest): void {
    this.store.dispatch(CardsActions.getList.started(filter));
  }

  updateStatus(newStatus: string, id: string): void {
    this.store.dispatch(CardsActions.setStatus.started({cardId: id, status: SellCardStatus[newStatus]}));
  }

  async brandNavigate(value: string): Promise<void> {
    await this.router.navigate([brandListPath], {
      queryParams: {brandName: value}
    });
  }

  updateRow(value: UpdatedCard, item: AdminCardDataFull): void {
    const params = {...item, ...value} as AdminUpdateCardRequest;
    this.store.dispatch(CardsActions.setInfo.started(params));
  }
}
