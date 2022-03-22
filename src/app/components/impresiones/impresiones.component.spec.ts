import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresionesComponent } from './impresiones.component';

describe('ImpresionesComponent', () => {
  let component: ImpresionesComponent;
  let fixture: ComponentFixture<ImpresionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpresionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
