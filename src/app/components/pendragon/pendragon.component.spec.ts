import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendragonComponent } from './pendragon.component';

describe('PendragonComponent', () => {
  let component: PendragonComponent;
  let fixture: ComponentFixture<PendragonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendragonComponent]
    });
    fixture = TestBed.createComponent(PendragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
