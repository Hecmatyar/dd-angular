import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOrderBuilderComponent } from './transactions-order-builder.component';

describe('TransactionsOrderBuilderComponent', () => {
  let component: TransactionsOrderBuilderComponent;
  let fixture: ComponentFixture<TransactionsOrderBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsOrderBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOrderBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
