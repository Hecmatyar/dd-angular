import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessBuilderComponent } from './access-builder.component';

describe('AccessBuilderComponent', () => {
  let component: AccessBuilderComponent;
  let fixture: ComponentFixture<AccessBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
