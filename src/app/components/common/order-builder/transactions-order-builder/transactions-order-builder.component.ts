import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AdminDebtCard} from "../../../../api/dto/AdminDebtCard.g";
import {OrderBuilder} from "../order-builder";

@Component({
  selector: 'app-transactions-order-builder',
  templateUrl: './transactions-order-builder.component.html',
  styleUrls: ['./transactions-order-builder.component.scss']
})
export class TransactionsOrderBuilderComponent extends OrderBuilder implements OnChanges {
  @Input() cards: AdminDebtCard[];
  @Input() isLoading: boolean;

  constructor(protected detectionRef: ChangeDetectorRef) {
    super(detectionRef);
  }

  get validSelectedCards(): AdminDebtCard[] {
    return this.cards.filter(card => this.selectedCards.includes(card.id));
  }

  get totalCurrent(): number {
    return this.validSelectedCards.reduce((sum, current) => (sum + current.amount), 0);
  }

  get totalPaidUs(): number {
    return this.validSelectedCards.reduce((sum, current) => (sum + current.buyPrice), 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cards && changes.cards.currentValue) {
      this.selectedCards = changes.cards.currentValue.map(card => card.cardInfo.id);
    }
  }
}
