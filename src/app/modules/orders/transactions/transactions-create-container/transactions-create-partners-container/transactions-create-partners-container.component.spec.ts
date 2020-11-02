import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCreatePartnersContainerComponent } from './transactions-create-partners-container.component';

describe('TransactionsCreatePartnersContainerComponent', () => {
  let component: TransactionsCreatePartnersContainerComponent;
  let fixture: ComponentFixture<TransactionsCreatePartnersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsCreatePartnersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsCreatePartnersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
