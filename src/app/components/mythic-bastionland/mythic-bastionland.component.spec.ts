import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythicBastionlandComponent } from './mythic-bastionland.component';

describe('MythicBastionlandComponent', () => {
  let component: MythicBastionlandComponent;
  let fixture: ComponentFixture<MythicBastionlandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MythicBastionlandComponent]
    });
    fixture = TestBed.createComponent(MythicBastionlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
