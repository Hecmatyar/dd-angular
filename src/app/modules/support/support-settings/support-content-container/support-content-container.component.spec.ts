import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportContentContainerComponent } from './support-content-container.component';

describe('SupportContentContainerComponent', () => {
  let component: SupportContentContainerComponent;
  let fixture: ComponentFixture<SupportContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
