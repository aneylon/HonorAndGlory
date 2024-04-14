import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativeRosterComponent } from './narrative-roster.component';

describe('NarrativeRosterComponent', () => {
  let component: NarrativeRosterComponent;
  let fixture: ComponentFixture<NarrativeRosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarrativeRosterComponent]
    });
    fixture = TestBed.createComponent(NarrativeRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
