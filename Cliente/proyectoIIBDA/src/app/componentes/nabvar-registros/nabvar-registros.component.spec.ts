import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarRegistrosComponent } from './nabvar-registros.component';

describe('NabvarRegistrosComponent', () => {
  let component: NabvarRegistrosComponent;
  let fixture: ComponentFixture<NabvarRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
