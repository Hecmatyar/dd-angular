import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesEditContainerComponent } from './roles-edit-container.component';

describe('RolesEditContainerComponent', () => {
  let component: RolesEditContainerComponent;
  let fixture: ComponentFixture<RolesEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
