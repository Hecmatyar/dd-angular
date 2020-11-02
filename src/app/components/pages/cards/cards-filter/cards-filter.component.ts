import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SearchCardRequest} from "../../../../api/dto/SearchCardRequest.g";
import {BaseFilter} from "../../../../core/base/base-filter";
import {selectCardsFilterState} from "../../../../store/selectors/cards.selector";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {CardsActions} from "../../../../store/actions/cards.actions";
import {cardListPath} from "../../../../core/path";
import {Select} from "../../../../core/interfaces/select";
import {SellCardType} from "../../../../api/dto/SellCardType.g";
import {SellCardStatus} from "../../../../api/dto/SellCardStatus.g";

@Component({
  selector: 'app-cards-filter',
  templateUrl: './cards-filter.component.html',
  styleUrls: ['./cards-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsFilterComponent extends BaseFilter implements OnInit {
  cardTypeItems: Select[];
  cardStatusItems: Select[];

  constructor(
    protected fb: FormBuilder,
    protected store: Store<IAppState>,
    protected activatedRouter: ActivatedRoute,
    protected router: Router) {
    super(fb, store, activatedRouter, router);
    this.selector = selectCardsFilterState;
    this.currentUrl = cardListPath;

    this.initialFilter = {
      cardFilter: null,
      brandId: null,
      vendorId: null,
      buyerId: null,
      sellCardStatuses: null,
      sellCardType: null,
      dateFrom: null,
      dateTo: null,
      orderNumber: null,
      cardNumber: null,
      value: null,
      transactionNumber: null,
    };
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.cardTypeItems = BaseFilter.getSelectableItems<typeof SellCardType>(SellCardType);
    this.cardStatusItems = BaseFilter.getSelectableItems<typeof SellCardStatus>(SellCardStatus);
  }

  dispatchFilter(filter: SearchCardRequest): void {
    this.store.dispatch(CardsActions.getList.started(filter));
  }

  initForm(params: SearchCardRequest): void {
    super.initForm(params);
  }

  updateFormData(data: SearchCardRequest): SearchCardRequest {
    super.updateFormData(data);
    const statuses = data["sellCardStatuses"];
    if (!(statuses instanceof Array) && !!statuses) {
      data["sellCardStatuses"] = [statuses];
    }

    return data;
  }
}
