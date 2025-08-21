import { TestBed } from '@angular/core/testing';

import { Whoisthisuser } from './whoisthisuser';

describe('Whoisthisuser', () => {
  let service: Whoisthisuser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Whoisthisuser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
