import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta5Component } from './consulta5.component';

describe('Consulta5Component', () => {
  let component: Consulta5Component;
  let fixture: ComponentFixture<Consulta5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consulta5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
