import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relacion1Component } from './relacion1.component';

describe('Relacion1Component', () => {
  let component: Relacion1Component;
  let fixture: ComponentFixture<Relacion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Relacion1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Relacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
