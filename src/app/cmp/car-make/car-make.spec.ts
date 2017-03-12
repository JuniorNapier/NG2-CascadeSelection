import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMakeSelectComponent } from './car-make';

describe('CarMakeComponent', () => {
  let component: CarMakeSelectComponent;
  let fixture: ComponentFixture<CarMakeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMakeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMakeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
