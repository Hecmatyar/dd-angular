import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRowTemplateComponent } from './card-row-template.component';

describe('CardRowTemplateComponent', () => {
  let component: CardRowTemplateComponent;
  let fixture: ComponentFixture<CardRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
