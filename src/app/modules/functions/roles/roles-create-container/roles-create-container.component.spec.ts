import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesCreateContainerComponent } from './roles-create-container.component';

describe('RolesCreateContainerComponent', () => {
  let component: RolesCreateContainerComponent;
  let fixture: ComponentFixture<RolesCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
