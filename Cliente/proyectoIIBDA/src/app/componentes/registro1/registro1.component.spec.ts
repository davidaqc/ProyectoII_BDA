import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro1Component } from './registro1.component';

describe('Registro1Component', () => {
  let component: Registro1Component;
  let fixture: ComponentFixture<Registro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registro1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
