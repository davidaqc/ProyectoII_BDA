import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta2Component } from './consulta2.component';

describe('Consulta2Component', () => {
  let component: Consulta2Component;
  let fixture: ComponentFixture<Consulta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
