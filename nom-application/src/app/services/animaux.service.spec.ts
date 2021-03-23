import { TestBed } from '@angular/core/testing';

import { AnimauxService } from './animaux.service';

describe('AnimauxService', () => {
  let service: AnimauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
