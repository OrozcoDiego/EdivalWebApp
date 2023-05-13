import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana7Component } from './semana7.component';

describe('Semana7Component', () => {
  let component: Semana7Component;
  let fixture: ComponentFixture<Semana7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semana7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semana7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
