import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFormPartnersComponent } from './transactions-form-partners.component';

describe('TransactionsFormPartnersComponent', () => {
  let component: TransactionsFormPartnersComponent;
  let fixture: ComponentFixture<TransactionsFormPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsFormPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFormPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
