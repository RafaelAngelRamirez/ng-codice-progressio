import { TestBed } from '@angular/core/testing';

import { ZebraPrinterService } from './zebra-printer.service';

describe('ZebraPrinterService', () => {
  let service: ZebraPrinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZebraPrinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
