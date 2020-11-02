import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCreateUserContainerComponent } from './transactions-create-user-container.component';

describe('TransactionsCreateUserContainerComponent', () => {
  let component: TransactionsCreateUserContainerComponent;
  let fixture: ComponentFixture<TransactionsCreateUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsCreateUserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsCreateUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
