import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncampmentRosterComponent } from './encampment-roster.component';

describe('EncampmentRosterComponent', () => {
  let component: EncampmentRosterComponent;
  let fixture: ComponentFixture<EncampmentRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncampmentRosterComponent]
    });
    fixture = TestBed.createComponent(EncampmentRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
