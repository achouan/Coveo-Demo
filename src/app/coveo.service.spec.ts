import {TestBed} from '@angular/core/testing';

import {CoveoService} from './coveo.service';
import {HttpClientModule} from "@angular/common/http";

describe('CoveoService', () => {
  imports: [
    HttpClientModule,
  ]
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [CoveoService]
  }).compileComponents());

  it('should be created', () => {
    const service: CoveoService = TestBed.get(CoveoService);
    expect(service).toBeTruthy();
  });
});
