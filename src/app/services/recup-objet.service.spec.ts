import { TestBed } from '@angular/core/testing';

import { RecupObjetService } from './recup-objet.service';

describe('RecupObjetService', () => {
  let service: RecupObjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupObjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
