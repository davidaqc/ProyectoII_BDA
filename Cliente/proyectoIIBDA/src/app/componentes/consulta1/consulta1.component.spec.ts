import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta1Component } from './consulta1.component';

describe('Consulta1Component', () => {
  let component: Consulta1Component;
  let fixture: ComponentFixture<Consulta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
