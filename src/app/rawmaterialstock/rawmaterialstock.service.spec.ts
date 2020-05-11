import { TestBed } from '@angular/core/testing';

import { RawMaterialStockService } from './rawmaterialstock.service';

describe('RawmaterialstockService', () => {
  let service: RawMaterialStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawMaterialStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
