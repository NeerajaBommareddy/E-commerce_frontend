import { TestBed } from '@angular/core/testing';

import { OrderItemserviceService } from './order-itemservice.service';

describe('OrderItemserviceService', () => {
  let service: OrderItemserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderItemserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
