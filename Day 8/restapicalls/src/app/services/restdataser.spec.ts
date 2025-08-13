import { TestBed } from '@angular/core/testing';

import { Restdataser } from './restdataser';

describe('Restdataser', () => {
  let service: Restdataser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Restdataser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
