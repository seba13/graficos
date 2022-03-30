import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVolumenSentimientoComponent } from './grafico-volumen-sentimiento.component';

describe('GraficoVolumenSentimientoComponent', () => {
  let component: GraficoVolumenSentimientoComponent;
  let fixture: ComponentFixture<GraficoVolumenSentimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoVolumenSentimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoVolumenSentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
