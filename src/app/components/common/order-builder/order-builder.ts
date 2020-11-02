import {ChangeDetectorRef} from "@angular/core";

export abstract class OrderBuilder {
  selectedCards: string[];

  protected constructor(protected detectionRef: ChangeDetectorRef) {
    this.selectedCards = [];
  }

  get totalCards(): number {
    return this.selectedCards.length;
  }

  abstract get totalCurrent(): number;

  abstract get totalPaidUs(): number;

  toggleCard(id: string): void {
    if (this.isCardSelected(id)) {
      this.selectedCards = this.selectedCards.filter(cardId => cardId !== id);
    } else {
      this.selectedCards.push(id);
    }
    this.detectionRef.detectChanges();
  }

  isCardSelected(id: string): boolean {
    return this.selectedCards.includes(id);
  }
}
