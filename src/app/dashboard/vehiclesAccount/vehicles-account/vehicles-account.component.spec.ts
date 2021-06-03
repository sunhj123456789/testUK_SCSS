import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesAccountComponent } from './vehicles-account.component';

describe('VehiclesAccountComponent', () => {
  let component: VehiclesAccountComponent;
  let fixture: ComponentFixture<VehiclesAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
