import { TestBed } from '@angular/core/testing';

import { AvisLocationService } from './avis-location.service';

describe('AvisLocationService', () => {
  let service: AvisLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
