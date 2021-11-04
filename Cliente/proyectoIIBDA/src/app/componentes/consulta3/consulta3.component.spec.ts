import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta3Component } from './consulta3.component';

describe('Consulta3Component', () => {
  let component: Consulta3Component;
  let fixture: ComponentFixture<Consulta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
