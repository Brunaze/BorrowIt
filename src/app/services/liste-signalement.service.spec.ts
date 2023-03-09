import { TestBed } from '@angular/core/testing';

import { ListeSignalementService } from './liste-signalement.service';

describe('ListeSignalementService', () => {
  let service: ListeSignalementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeSignalementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
