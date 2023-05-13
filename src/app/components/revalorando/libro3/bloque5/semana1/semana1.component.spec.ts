import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libro3Bloque5Semana1Component } from './semana1.component';

describe('Semana1Component', () => {
  let component: Libro3Bloque5Semana1Component;
  let fixture: ComponentFixture<Libro3Bloque5Semana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libro3Bloque5Semana1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Libro3Bloque5Semana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
