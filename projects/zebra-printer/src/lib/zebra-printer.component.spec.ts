import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebraPrinterComponent } from './zebra-printer.component';

describe('ZebraPrinterComponent', () => {
  let component: ZebraPrinterComponent;
  let fixture: ComponentFixture<ZebraPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebraPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebraPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
