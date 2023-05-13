import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadTituloComponent } from './actividad-titulo.component';

describe('ActividadTituloComponent', () => {
  let component: ActividadTituloComponent;
  let fixture: ComponentFixture<ActividadTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
