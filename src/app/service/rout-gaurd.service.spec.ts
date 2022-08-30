import { TestBed } from '@angular/core/testing';

import { RoutGaurdService } from './rout-gaurd.service';

describe('RoutGaurdService', () => {
  let service: RoutGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
