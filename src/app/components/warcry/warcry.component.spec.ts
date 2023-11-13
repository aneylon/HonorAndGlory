import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarcryComponent } from './warcry.component';

describe('WarcryComponent', () => {
  let component: WarcryComponent;
  let fixture: ComponentFixture<WarcryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarcryComponent]
    });
    fixture = TestBed.createComponent(WarcryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
