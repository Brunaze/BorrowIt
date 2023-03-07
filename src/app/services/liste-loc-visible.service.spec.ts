import { TestBed } from '@angular/core/testing';

import { ListeLocVisibleService } from './liste-loc-visible.service';

describe('ListeLocVisibleService', () => {
  let service: ListeLocVisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeLocVisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
