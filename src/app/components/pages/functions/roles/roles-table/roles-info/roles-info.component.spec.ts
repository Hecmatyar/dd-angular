import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesInfoComponent } from './roles-info.component';

describe('RolesInfoComponent', () => {
  let component: RolesInfoComponent;
  let fixture: ComponentFixture<RolesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
