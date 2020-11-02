import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCreateBulkContainerComponent } from './transactions-create-bulk-container.component';

describe('TransactionsCreateBulkContainerComponent', () => {
  let component: TransactionsCreateBulkContainerComponent;
  let fixture: ComponentFixture<TransactionsCreateBulkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsCreateBulkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsCreateBulkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
