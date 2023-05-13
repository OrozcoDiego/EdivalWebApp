import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana1Component } from './semana1.component';

describe('Semana1Component', () => {
  let component: Semana1Component;
  let fixture: ComponentFixture<Semana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semana1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
