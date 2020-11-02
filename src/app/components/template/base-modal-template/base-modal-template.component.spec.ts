import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalTemplateComponent } from './base-modal-template.component';

describe('BaseModalTemplateComponent', () => {
  let component: BaseModalTemplateComponent;
  let fixture: ComponentFixture<BaseModalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseModalTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseModalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
