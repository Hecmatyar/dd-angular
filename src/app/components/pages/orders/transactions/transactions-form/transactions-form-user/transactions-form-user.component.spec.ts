import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFormUserComponent } from './transactions-form-user.component';

describe('TransactionsFormUserComponent', () => {
  let component: TransactionsFormUserComponent;
  let fixture: ComponentFixture<TransactionsFormUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsFormUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
