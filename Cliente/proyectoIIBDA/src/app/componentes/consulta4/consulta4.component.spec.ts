import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta4Component } from './consulta4.component';

describe('Consulta4Component', () => {
  let component: Consulta4Component;
  let fixture: ComponentFixture<Consulta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
