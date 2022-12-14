import { TestBed } from '@angular/core/testing';

import { CtsserviceService } from './ctsservice.service';

describe('CtsserviceService', () => {
  let service: CtsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
