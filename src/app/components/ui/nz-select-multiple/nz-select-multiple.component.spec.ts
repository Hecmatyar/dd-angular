import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzSelectMultipleComponent } from './nz-select-multiple.component';

describe('NzSelectMultipleComponent', () => {
  let component: NzSelectMultipleComponent;
  let fixture: ComponentFixture<NzSelectMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzSelectMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzSelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
