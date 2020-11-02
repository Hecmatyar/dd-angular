import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzSelectComponent } from './nz-select.component';

describe('NzSelectComponent', () => {
  let component: NzSelectComponent;
  let fixture: ComponentFixture<NzSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
