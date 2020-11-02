import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFormBulkComponent } from './transactions-form-bulk.component';

describe('TransactionsFormBulkComponent', () => {
  let component: TransactionsFormBulkComponent;
  let fixture: ComponentFixture<TransactionsFormBulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsFormBulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFormBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
