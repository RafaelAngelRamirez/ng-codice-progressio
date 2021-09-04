import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidacionesComponent } from './input-validaciones.component';

describe('InputValidacionesComponent', () => {
  let component: InputValidacionesComponent;
  let fixture: ComponentFixture<InputValidacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputValidacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
