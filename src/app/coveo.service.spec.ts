import { TestBed } from '@angular/core/testing';

import { CoveoService } from './coveo.service';

describe('CoveoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoveoService = TestBed.get(CoveoService);
    expect(service).toBeTruthy();
  });
});
