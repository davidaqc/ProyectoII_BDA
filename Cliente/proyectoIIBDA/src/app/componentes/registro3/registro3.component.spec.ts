import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro3Component } from './registro3.component';

describe('Registro3Component', () => {
  let component: Registro3Component;
  let fixture: ComponentFixture<Registro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registro3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
