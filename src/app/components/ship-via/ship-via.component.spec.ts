import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipViaComponent } from './ship-via.component';

describe('ShipViaComponent', () => {
  let component: ShipViaComponent;
  let fixture: ComponentFixture<ShipViaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipViaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
