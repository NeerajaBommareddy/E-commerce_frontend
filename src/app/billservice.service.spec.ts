import { TestBed } from '@angular/core/testing';

import { BillserviceService } from './billservice.service';

describe('BillserviceService', () => {
  let service: BillserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
