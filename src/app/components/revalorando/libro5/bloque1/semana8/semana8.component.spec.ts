import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana8Component } from './semana8.component';

describe('Semana8Component', () => {
  let component: Semana8Component;
  let fixture: ComponentFixture<Semana8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semana8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semana8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
