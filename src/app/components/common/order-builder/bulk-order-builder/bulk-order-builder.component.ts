import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AdminBulkCardInfoDto} from "../../../../api/dto/AdminBulkCardInfoDto.g";
import {OrderBuilder} from "../order-builder";

@Component({
  selector: 'app-order-builder',
  templateUrl: './bulk-order-builder.component.html',
  styleUrls: ['./bulk-order-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkOrderBuilderComponent extends OrderBuilder implements OnChanges {
  @Input() cards: AdminBulkCardInfoDto[];

  constructor(protected detectionRef: ChangeDetectorRef) {
    super(detectionRef);
  }

  get validSelectedCards(): AdminBulkCardInfoDto[] {
    return this.cards.filter(card => this.selectedCards.includes(card.cardInfo.id));
  }

  get totalCurrent(): number {
    return this.validSelectedCards.reduce((sum, current) => (sum + current.cardInfo.amount), 0);
  }

  get totalPaidUs(): number {
    return this.validSelectedCards.reduce((sum, current) => (sum + current.willPaidUs), 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cards && changes.cards.currentValue) {
      this.selectedCards = changes.cards.currentValue.map(card => card.cardInfo.id);
    }
  }
}
