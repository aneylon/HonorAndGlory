import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceStationZeroComponent } from './space-station-zero.component';

describe('SpaceStationZeroComponent', () => {
  let component: SpaceStationZeroComponent;
  let fixture: ComponentFixture<SpaceStationZeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceStationZeroComponent]
    });
    fixture = TestBed.createComponent(SpaceStationZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
