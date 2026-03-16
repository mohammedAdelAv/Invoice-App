import { TestBed } from '@angular/core/testing';

import { AuthModules } from './auth.module';

describe('AuthModules', () => {
  let service: AuthModules;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthModules);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
