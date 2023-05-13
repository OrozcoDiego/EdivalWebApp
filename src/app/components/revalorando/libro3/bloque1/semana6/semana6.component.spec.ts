import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana6Component } from './semana6.component';

describe('Semana6Component', () => {
  let component: Semana6Component;
  let fixture: ComponentFixture<Semana6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semana6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semana6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
