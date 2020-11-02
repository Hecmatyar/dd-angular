import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFilterTemplateComponent } from './base-filter-template.component';

describe('BaseFilterTemplateComponent', () => {
  let component: BaseFilterTemplateComponent;
  let fixture: ComponentFixture<BaseFilterTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFilterTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFilterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
