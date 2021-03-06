import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormTemplateComponent } from './base-form-template.component';

describe('BaseFormTemplateComponent', () => {
  let component: BaseFormTemplateComponent;
  let fixture: ComponentFixture<BaseFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
