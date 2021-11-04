import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarRelacionesComponent } from './nabvar-relaciones.component';

describe('NabvarRelacionesComponent', () => {
  let component: NabvarRelacionesComponent;
  let fixture: ComponentFixture<NabvarRelacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarRelacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarRelacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
