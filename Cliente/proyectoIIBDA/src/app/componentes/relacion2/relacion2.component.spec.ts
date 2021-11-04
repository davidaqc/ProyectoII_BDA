import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relacion2Component } from './relacion2.component';

describe('Relacion2Component', () => {
  let component: Relacion2Component;
  let fixture: ComponentFixture<Relacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relacion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Relacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
