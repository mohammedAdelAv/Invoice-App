import { TestBed } from '@angular/core/testing';

import { AuthRoutingModule } from './auth-routing.module';

describe('AuthRoutingModule', () => {
  let service: AuthRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRoutingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
