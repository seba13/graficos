import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoVolumenDiaComponent } from './grafico-volumen-dia.component';

describe('GraficoVolumenDiaComponent', () => {
  let component: GraficoVolumenDiaComponent;
  let fixture: ComponentFixture<GraficoVolumenDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoVolumenDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoVolumenDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
