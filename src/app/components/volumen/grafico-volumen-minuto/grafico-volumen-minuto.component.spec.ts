import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVolumenMinutoComponent } from './grafico-volumen-minuto.component';

describe('GraficoVolumenMinutoComponent', () => {
  let component: GraficoVolumenMinutoComponent;
  let fixture: ComponentFixture<GraficoVolumenMinutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoVolumenMinutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoVolumenMinutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
