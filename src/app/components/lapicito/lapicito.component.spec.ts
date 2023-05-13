import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapicitoComponent } from './lapicito.component';

describe('LapicitoComponent', () => {
  let component: LapicitoComponent;
  let fixture: ComponentFixture<LapicitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapicitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapicitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
