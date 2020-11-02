import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {OrderBuilder} from "../order-builder";
import {PartnerImportedCard} from "../../../../api/dto/PartnerImportedCard.g";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VerifyPartnerCardRequest} from "../../../../api/dto/VerifyPartnerCardRequest.g";

@Component({
  selector: 'app-partners-order-builder',
  templateUrl: './partners-order-builder.component.html',
  styleUrls: ['./partners-order-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersOrderBuilderComponent extends OrderBuilder implements OnInit, OnChanges {
  @Input() cards: PartnerImportedCard[];
  @Input() vendorId: string;

  @Output() verify = new EventEmitter<VerifyPartnerCardRequest>();

  form: FormGroup;

  constructor(
    protected detectionRef: ChangeDetectorRef,
    private fb: FormBuilder) {
    super(detectionRef);
  }

  get validCards(): PartnerImportedCard[] {
    return this.cards.filter(item => item.isValid);
  }

  get totalCurrent(): number {
    return this.validSelectedCards.reduce((sum, current) => (sum + current.amount), 0);
  }

  get totalPaidUs(): number {
    return this.validSelectedCards.reduce((sum, current) => (sum + current.payOut), 0);
  }

  get validSelectedCards(): PartnerImportedCard[] {
    return this.validCards.filter(card => this.selectedCards.includes(card.number));
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      "brand": ["", [Validators.required]],
      "number": ["", [Validators.required]],
      "pinCode": ["", [Validators.required]],
      "expiration": ["", [Validators.required]],
      "value": ["", [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cards && changes.cards.currentValue) {
      this.selectedCards = changes.cards.currentValue.filter(card => card.isValid).map(card => card.number);
    }
  }

  isCardExcluded(card: PartnerImportedCard): boolean {
    return !this.isCardSelected(card.number) || !card.isValid;
  }

  onVerify(): void {
    this.markForm();
    console.log(this.form);

    if (this.form.valid) {
      this.verify.emit(this.form.value);
    }
  }

  markForm(): void {
    for (const inner in this.form.controls) {
      if (this.form.get(inner)) {
        this.form.get(inner).markAsDirty();
        this.form.get(inner).markAsTouched();
        this.form.get(inner).updateValueAndValidity();
      }
    }
  }
}
