import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVolumenHoraComponent } from './grafico-volumen-hora.component';

describe('GraficoVolumenHoraComponent', () => {
  let component: GraficoVolumenHoraComponent;
  let fixture: ComponentFixture<GraficoVolumenHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoVolumenHoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoVolumenHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
