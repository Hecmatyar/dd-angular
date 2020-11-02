import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentLoading} from "../../../../core/interfaces/content-loading";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {PartnerImportedCard} from "../../../../api/dto/PartnerImportedCard.g";
import {selectCardsPartnersState, selectPaymentTypesPartnersState} from "../../../../store/selectors/partners.selector";
import {Select} from "../../../../core/interfaces/select";
import {PartnersActions} from "../../../../store/actions/partners.actions";

@Component({
  selector: 'app-partners-orders-create-container',
  templateUrl: './partners-orders-create-container.component.html',
  styleUrls: ['./partners-orders-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersOrdersCreateContainerComponent implements OnInit {
  public partnersPayment$: Observable<Select[]>;
  public partnersCards$: Observable<ContentLoading<PartnerImportedCard[]>>;

  constructor(private store: Store<IAppState>) {
    this.partnersPayment$ = this.store.select(selectPaymentTypesPartnersState);
    this.partnersCards$ = this.store.select(selectCardsPartnersState);
  }

  ngOnInit(): void {
    this.store.dispatch(PartnersActions.verifyBatch.done({params: null, result: []}));
  }
}
