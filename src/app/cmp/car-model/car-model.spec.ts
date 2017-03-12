import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelSelectComponent } from './car-model';

describe('CarModelComponent', () => {
  let component: CarModelSelectComponent;
  let fixture: ComponentFixture<CarModelSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarModelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
