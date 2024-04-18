import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MordheimComponent } from './mordheim.component';

describe('MordheimComponent', () => {
  let component: MordheimComponent;
  let fixture: ComponentFixture<MordheimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MordheimComponent]
    });
    fixture = TestBed.createComponent(MordheimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
