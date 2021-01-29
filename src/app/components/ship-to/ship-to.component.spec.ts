import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipToComponent } from './ship-to.component';

describe('ShipToComponent', () => {
  let component: ShipToComponent;
  let fixture: ComponentFixture<ShipToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
