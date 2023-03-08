import { TestBed } from '@angular/core/testing';

import { RecupCbService } from './recup-cb.service';

describe('RecupCbService', () => {
  let service: RecupCbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupCbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
