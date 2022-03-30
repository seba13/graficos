import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVolumenEtiquetaComponent } from './grafico-volumen-etiqueta.component';

describe('GraficoVolumenEtiquetaComponent', () => {
  let component: GraficoVolumenEtiquetaComponent;
  let fixture: ComponentFixture<GraficoVolumenEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoVolumenEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoVolumenEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
