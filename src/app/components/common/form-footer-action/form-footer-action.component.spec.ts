import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFooterActionComponent } from './form-footer-action.component';

describe('FormFooterActionComponent', () => {
  let component: FormFooterActionComponent;
  let fixture: ComponentFixture<FormFooterActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFooterActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFooterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
