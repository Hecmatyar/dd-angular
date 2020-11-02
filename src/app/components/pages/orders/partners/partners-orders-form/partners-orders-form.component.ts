import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild} from '@angular/core';
import {BaseForm} from "../../../../../core/base/base-form";
import {Select} from "../../../../../core/interfaces/select";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../../store/state/app.state";
import {NotificationService} from "../../../../../core/services/notification.service";
import {Router} from "@angular/router";
import {partnersOrderListPath} from "../../../../../core/path";
import {ImportPartnerCardsRequest} from "../../../../../api/dto/ImportPartnerCardsRequest.g";
import {PartnerImportedCard} from "../../../../../api/dto/PartnerImportedCard.g";
import {PartnersOrderBuilderComponent} from "../../../../common/order-builder/partners-order-builder/partners-order-builder.component";
import {PartnersActions} from "../../../../../store/actions/partners.actions";
import {VerifyPartnerCardRequest} from "../../../../../api/dto/VerifyPartnerCardRequest.g";
import {ImportPartnerCard} from "../../../../../api/dto/ImportPartnerCard.g";

@Component({
  selector: 'app-partners-orders-form',
  templateUrl: './partners-orders-form.component.html',
  styleUrls: ['./partners-orders-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersOrdersFormComponent extends BaseForm {
  @Input() paymentItems: Select[];
  @Input() cards: PartnerImportedCard[];

  @ViewChild('orderBuilder') orderBuilder: PartnersOrderBuilderComponent;
  private vendorId: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private notificationService: NotificationService,
    private router: Router,
    private detectRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.initForm();

    this.form.get("vendorId").valueChanges.subscribe(value => {
      this.detectRef.detectChanges();
      if (value && value !== this.vendorId) {
        this.vendorId = value;
        this.store.dispatch(PartnersActions.getPaymentMethods.started(value));
      }
      if (value && value !== this.vendorId && this.cards && this.cards.length) {
        this.store.dispatch(PartnersActions.verifyBatch.started(this.getCardsToVerify(value)));
      }
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      "vendorId": ["", [Validators.required, Validators.pattern(".{3,}")]],
      "paymentMethodId": ["", [Validators.required, Validators.pattern(".{3,}")]],
    });
  }

  applyForm(): void {
    this.markForm(this.form);
    this.detectRef.detectChanges();
    if (this.form.invalid || !this.isBulkValid()) {
      this.notificationService.showErrorMessage("The form is not valid");

      return;
    }
    const cards = this.getValidCards(this.orderBuilder.validSelectedCards);

    this.confirmOrder({...this.form.value, cards: cards});
  }

  isBulkValid(): boolean {
    return !!this.orderBuilder.validSelectedCards.length;
  }

  confirmOrder(form: ImportPartnerCardsRequest): void {
    this.store.dispatch(PartnersActions.import.started(form));
  }

  async revertOrder(): Promise<void> {
    await this.router.navigate([partnersOrderListPath]);
  }

  onUploadFile(file: File): void {
    this.store.dispatch(PartnersActions.verifyFromFile.started({vendorId: this.form.get("vendorId").value, csv: file}));
  }

  onVerify(form: VerifyPartnerCardRequest): void {
    this.store.dispatch(PartnersActions.verify.started({...form, vendorId: this.form.get("vendorId").value}));
  }

  getCardsToVerify(vendorId: string): VerifyPartnerCardRequest[] {
    return this.cards.map(card => (
      {
        vendorId: vendorId,
        brand: card.brand.name,
        number: card.number,
        pinCode: card.pinCode,
        expiration: card.expiration,
        value: card.amount
      })
    );
  }

  getValidCards(cards: PartnerImportedCard[]): ImportPartnerCard[] {
    return cards.map(card => ({
      brandId: card.brand.id,
      number: card.number,
      pinCode: card.pinCode,
      expiration: new Date(card.expiration),
      value: card.amount
    }));
  }
}
