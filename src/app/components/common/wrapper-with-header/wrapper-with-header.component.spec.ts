import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperWithHeaderComponent } from './wrapper-with-header.component';

describe('WrapperWithHeaderComponent', () => {
  let component: WrapperWithHeaderComponent;
  let fixture: ComponentFixture<WrapperWithHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperWithHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperWithHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
