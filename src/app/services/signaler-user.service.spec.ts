import { TestBed } from '@angular/core/testing';

import { SignalerUserService } from './signaler-user.service';

describe('SignalerUserService', () => {
  let service: SignalerUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalerUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
