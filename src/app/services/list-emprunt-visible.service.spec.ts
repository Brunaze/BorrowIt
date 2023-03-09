import { TestBed } from '@angular/core/testing';

import { ListEmpruntVisibleService } from './list-emprunt-visible.service';

describe('ListEmpruntVisibleService', () => {
  let service: ListEmpruntVisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEmpruntVisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
