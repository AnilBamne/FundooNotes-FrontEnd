import { TestBed } from '@angular/core/testing';

import { AuthguarsService } from './authguars.service';

describe('AuthguarsService', () => {
  let service: AuthguarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
