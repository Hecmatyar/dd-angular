import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsExportComponent } from './cards-export.component';

describe('CardsExportComponent', () => {
  let component: CardsExportComponent;
  let fixture: ComponentFixture<CardsExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
