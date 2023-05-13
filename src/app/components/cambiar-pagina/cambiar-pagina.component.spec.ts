import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPaginaComponent } from './cambiar-pagina.component';

describe('CambiarPaginaComponent', () => {
  let component: CambiarPaginaComponent;
  let fixture: ComponentFixture<CambiarPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
